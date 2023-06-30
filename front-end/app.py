import math
from pathlib import Path

import pandas as pd
from flask import Flask, jsonify, render_template

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def hello_world():
    return render_template("index.html")


# https://stackoverflow.com/questions/36369734/how-to-map-latitude-and-longitude-to-a-3d-sphere
def lat_lng_to_3d(lat, lng, radius=30):
    # Convert latitude and longitude on the surface of a sphere into 3D coordinates
    phi = (90 - lat) * (math.pi / 180)
    theta = (lng + 180) * (math.pi / 180)

    x = -(radius * math.sin(phi) * math.cos(theta))
    y = radius * math.cos(phi)
    z = radius * math.sin(phi) * math.sin(theta)

    return str(x) + " " + str(y) + " " + str(z)


def validate(points_dict):
    info_dict = {}

    for key, value in points_dict.items():
        # If key (lat, long) is NaN, replace it with a string
        if isinstance(key, float) and math.isnan(key):
            info_dict["NaN"] = value
        else:
            # Check if key is string
            if not isinstance(key, str):
                raise ValueError(f"Invalid key type: {type(key)}, expected string")

            # Check if value is a list with two elements
            if not isinstance(value, list) or len(value) != 2:
                raise ValueError(f"Invalid value: {value}, expected a list with two elements")

            place, mag = value

            # Handle specific conditions for place and magnitude
            if place == " " or pd.isna(place):
                place = "place not recorded"
            if mag in {0, math.nan}:
                mag = "magnitude not recorded"

            info_dict[str(key)] = [place, mag]

    return info_dict


@app.route("/coordinates")
# add time filter (year / month in the below case 2023) dynamically
def get_coordinates():
    df = pd.read_csv(DATA / "full_data_2013_2023.csv")

    df["time"] = pd.to_datetime(df["time"])
    df["year"] = df["time"].dt.year

    df = df[df["year"] == 2023]

    coordinates_dict = {
        (lat, lon): [place, mag]
        for lat, lon, place, mag in zip(df["latitude"], df["longitude"], df["place"], df["mag"])
    }

    points_dict = {lat_lng_to_3d(lat, lng): [name, mag] for (lat, lng), [name, mag] in coordinates_dict.items()}

    points_dict = validate(points_dict)

    return jsonify(points_dict)


if __name__ == "__main__":
    app.run(debug=True, port=5173)
