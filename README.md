# Earthquake Analysis

## Dataset

Info:
- 10 years of earthquake data through out the globe (2013-2023)


Columns:

time : Datetime
        Time when the event occurred. Times are reported in milliseconds since the epoch ( 1970-01-01T00:00:00.000Z), and do not include leap seconds. In certain output formats, the date is formatted for readability.

latitude : float64
        Decimal degrees latitude. Negative values for southern latitudes.

longitude : float64
        Decimal degrees longitude. Negative values for western longitudes.

depth : float64
        Depth of the event in kilometers. The depth where the earthquake begins to rupture. This depth may be relative to the WGS84 geoid, mean sea-level, or the average elevation of the seismic stations which provided arrival-time data for the earthquake location.

mag : float64
        The magnitude for the event. Earthquake magnitude is a measure of the size of the earthquake source and is determined from the seismic moment tensor components of the earthquake.

magType : object
        The method or algorithm used to calculate the preferred magnitude for the event.

gap : float64
        The largest azimuthal gap between azimuthally adjacent stations (in degrees). In general, the smaller this number, the more reliable is the calculated horizontal position of the earthquake.

dmin : float64
        Horizontal distance from the epicenter to the nearest station (in degrees). 1 degree is approximately 111.2 kilometers. In general, the smaller this number, the more reliable is the calculated depth of the earthquake.

rms : float64
        The root-mean-square (RMS) travel time residual, in sec, using all weights. This parameter provides a measure of the fit of the observed arrival times to the predicted arrival times for this location. Smaller numbers reflect a better fit of the data. The value is dependent on the accuracy of the velocity model used to compute the earthquake location, the quality weights assigned to the arrival time data, and the procedure used to locate the earthquake.

net : object
        Identifies the network considered to be the preferred source of information for this event.

id : object
        A unique identifier for the event. This is the current preferred id for the event, and may change over time.

updated : Datetime
        Time when the event was most recently updated. Times are reported in milliseconds since the epoch ( 1970-01-01T00:00:00.000Z). In certain output formats, the date is formatted for readability.

place : object
        Textual description of named geographic region near to the event. This may be a city name, or a FIPS code for the state, or a comma-separated combination of the two, or a blank string if not available.

type : object
        Type of seismic event.

horizontalError : float64
        Uncertainty of reported location of the event in kilometers.

depthError : float64
        Uncertainty of reported depth of the event in kilometers.

magError : float64
        Uncertainty of reported magnitude of the event.

magNst : float64
        The total number of seismic stations used to calculate the magnitude for this earthquake. This is not the number of stations reporting this event which is given by the 'nst' field.

status : object
        Indicates whether the event has been reviewed by a human.

locationSource : object
        The network that originally authored the reported location of this event.

magSource : object
        Network that originally authored the reported magnitude for this event.