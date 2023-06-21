import math
from pathlib import Path

import pandas as pd
from flask import Flask, jsonify, render_template

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
app = Flask(__name__)


# https://stackoverflow.com/questions/36369734/how-to-map-latitude-and-longitude-to-a-3d-sphere
def lat_lng_to_3d(lat, lng, radius=30):
    # Convert latitude and longitude on the surface of a sphere into 3D coordinates
    phi = (90 - lat) * (math.pi / 180)
    theta = (lng + 180) * (math.pi / 180)

    x = -(radius * math.sin(phi) * math.cos(theta))
    y = radius * math.cos(phi)
    z = radius * math.sin(phi) * math.sin(theta)

    return str(x) + " " + str(y) + " " + str(z)
