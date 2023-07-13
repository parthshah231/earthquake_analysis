# Project Task

The purpose of this project is to analyze spatial correlations in global earthquake data. By identifying patterns in seismic activity and detecting seismic swarms, we aim to better understand the factors that influence earthquake frequency and magnitude. This analysis could potentially inform strategies for earthquake preparedness and response. 

## Dataset Info:

This data set is taken from USGS(U.S Geological Survey), USGS provides reliable scientific information/ data to describe and understand the Earth.
- 10 years of earthquake data through out the globe (2013-2023)
- Link to the website: https://earthquake.usgs.gov/earthquakes/feed/

![Earthquakes between 2013- 2023](https://github.com/parthshah231/earthquake_analysis/blob/master/README/earthquakes_2013_2023.png)



## Analysis:

- Based on data collected from Jan 2013 to Jun 2023, number of earthquakes we face yearly are roughly around 30,000. The year of 2018 recorded highest number of earthquakes which was close to 45,000 whereas the year of 2013 recorded the lowest number close to 20,000.
- The distribution of magnitude of earthquakes is bimodal with magnitudes 2.8 and 4.7
- In the past 10 years, Alaska alone has recorded more than 52,000 earthquakes, followed by Hawaii and Puerto Rico at around 20,000 each.
- If we only look at the earthquakes with magnitude greater than 4 than most earthquakes recorded are for Indonesia i.e. 16,000, followed by Japan and Papua New Guinea at 8,000 each.
- Overall while trying to check, if there was any local trend/relationship along the years vs number of earthquakes, there is no conclusive evidence (I guess that's a good thing)
- But, the regions getting hit with higher magnitudes of earthquakes (greater than 4) do seem to getting fewer and fewer number of such earthquakes as the years progress (Again, another good sign!)
- There is no monthly trend (or an earthquake season) where any regions got the most number of earthquakes.
- While checking if there is a relationship between magnitude vs depth of the earthquakes there is a clear indication that earthquakes with magnitude lower than magnitude 3 don't originate lower than 300km from Earth's surface (or maybe we are not able to detect those earthquakes with our current technology). 

![3d-earth](https://github.com/parthshah231/earthquake_analysis/blob/master/README/3d_earth.png)

- Above is a 3d model of earth to visualize the distribution of earthquakes globally. The model is built using the ThreeJS JavaScript library, which allows for the creation and display of animated 3D graphics in a web browser. The earthquake data used to populate this 3D model is fetched from a server using the Flask web framework.

## Spatial autocorrelation:
In this project, I have used two main statistical measures: Moran's I and Local Indicators of Spatial Association (LISA). These are methods for measuring spatial autocorrelation, which is the degree of dependency among observations in a geographic space.
- Moran's I: measure of spatial autocorrelation, values can range from -1 (indicating perfect dispersion or negative spatial autocorrelation) to +1 (perfect correlation or positive spatial autocorrelation). A value close to 0 indicates a random spatial pattern. Positive spatial autocorrelation occurs where similar values occur near one another. This might be high house prices in one neighborhood tending to be near other high house prices. Negative spatial autocorrelation, by contrast, occurs where dissimilar values occur near one another.
- Local Moran's I (LISA):  local measure of spatial autocorrelation, meaning it gives a value for each feature in the dataset, representing the level of spatial autocorrelation for that feature and its neighbors. It identifies where clusters or spatial outliers are located and the type of cluster or spatial outlier (whether high-high, low-low, high-low, or low-high). Hence, it not only identifies significant spatial clusters or outliers but also classifies them into types.

- Measures for the year of 2023 (so far):   \
**Moran's I**: 0.7833756435758131           \
**Local Moran's I (LISA)**: 0.7833060843817466

- This indicates our data for the year of 2023 is positively correlated.

![Lisa quadrants](https://github.com/parthshah231/earthquake_analysis/blob/master/README/lisa_quadrants.png)

The quadrants represent the following:    \

- LH: Low values surrounded by high values    \
- HH: High values surrounded by high values   \
- LL: Low values surrounded by low values     \
- HL: High values surrounded by low values    \

> HH and LL are examples of positive spatial autocorrelation as you can see most of the values are clustered together in HH and LL quadrants.

![spatial autocorrelation](https://github.com/parthshah231/earthquake_analysis/blob/master/README/spatial_autocorrelation.png)

- The above image shows the local spatial autocorrelation of the earthquake magnitude.
- The red areas represent high values surrounded by high values (HH), and the blue areas represent low values surrounded by low values (LL).

## Conclusions
- Spatial autocorrelation analysis revealed that earthquake magnitude is positively correlated for the year 2023, with a Moran's I of 0.783 and a LISA of 0.7833. This could imply that seismic activities tend to occur in clusters rather than being randomly distributed. 
- Furthermore, I observed that areas with high magnitude earthquakes tend to be clustered together (HH), as do areas with low magnitude earthquakes (LL). This finding suggests the presence of seismic "hotspots" and "coldspots" which could be of interest for further study.

## Further Implementation
- I am planning to add filters for the web page, where user can filter the year and month to see the spread of earthquakes across the globe for a specific period. 
- Make the 3d-globe more interactive as to each point or bar representing the earthquake should carry information such as magnitude of the earthquake, along with the location.
