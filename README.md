# Project Task

To identify spatial correlation and to detect siesmic swarms (if spatial correlation is positive)
> Moran's I and LISA (Local Moran's I) both indicate a strong positive correlation


## Dataset Info:

- This data set is taken from USGS(U.S Geological Survey). The USGS provides reliable scientific information to describe and understand the Earth; minimize loss of life and property from natural disasters; manage water, biological, energy, and mineral resources; and enhance and protect our quality of life.
- 10 years of earthquake data through out the globe (2013-2023)
- Link to the website: https://earthquake.usgs.gov/earthquakes/feed/

![Earthquakes between 2013- 2023](https://github.com/parthshah231/earthquake_analysis/blob/master/README/earthquakes_2013_2023.png)



## Analysis:

- Based on data collected from Jan 2013 to Jun 2023, number of earthquakes we face yearly are roughly around 30,000. With 2018, recording the highest number of earthquakes close to 45,00 and 2013 being the lowest close to 20,000
- The distribution of magnitude of earthquakes is bimodal with magnitude 2.8 and 4.7
- In the past 10 years, Alaska alone has recorded more than 52,000 earthquakes, following Hawaii and Puerto Rico at around 20,000
- If we only look at the earthquakes with magnitude greater than 4 than most earthquakes recorded are for Indonesia i.e. 16,000, followed by Japan and Papua New Guinea at 8,000
- Overall while trying to check, if there was any local trend/relationship along the years vs number of earthquakes, there is no conclusive evidence (I guess that's a good thing)
- But, the regions getting hit with higher magnitudes of earthquakes (greater than 4) do seem to getting fewer and fewer of such earthquakes as the years progress (Again, another good sign!)
- There is no monthly trend (or an earthquake season) where any regions got the most number of earthquakes.
- While checking if there is a relationship between magnitude vs depth of the earthquakes there is a clear indication that earthquakes with magnitude lower than magnitude 3 don't originate lower than 300km from Earth's surface.

## Spatial autocorrelation:
- Spatial autocorrelation: measures and analyzes the degree of dependency among observations in a geographic space
- Moran's I: measure of spatial autocorrelation, values can range from -1 (indicating perfect dispersion or negative spatial autocorrelation) to +1 (perfect correlation or positive spatial autocorrelation). A value close to 0 indicates a random spatial pattern. Positive spatial autocorrelation occurs where similar values occur near one another. This might be high house prices in one neighborhood tending to be near other high house prices. Negative spatial autocorrelation, by contrast, occurs where dissimilar values occur near one another.
- Local Moran's I:  local measure of spatial autocorrelation, meaning it gives a value for each feature in the dataset, representing the level of spatial autocorrelation for that feature and its neighbors. The Local Moran's I identifies where clusters or spatial outliers are located and the type of cluster or spatial outlier (whether high-high, low-low, high-low, or low-high). The Local Moran's I (LISA) thus not only identifies significant spatial clusters or outliers but also classifies them into types.

- Measures for the year of 2023 (so far):   \
**Moran's I**: 0.7833756435758131           \
**Local Moran's I (LISA)**: 0.7833060843817466

- This indicates our data for the year of 2023 is positively correlated.

![Lisa quadrants](https://github.com/parthshah231/earthquake_analysis/blob/master/README/lisa_quadrants.png)

- The quadrants represent the following:    \
LH: Low values surrounded by high values    \
HH: High values surrounded by high values   \
LL: Low values surrounded by low values     \
HL: High values surrounded by low values    \
HH and LL are examples of positive spatial autocorrelation as you can see most of the values are clustered together in HH and LL quadrants.

![spatial autocorrelation](https://github.com/parthshah231/earthquake_analysis/blob/master/README/spatial_autocorrelation.png)

- The above image shows the local spatial autocorrelation of the earthquake magnitude.
- The red areas represent high values surrounded by high values (HH), and the blue areas represent low values surrounded by low values (LL).