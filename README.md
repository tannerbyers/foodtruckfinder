foodtruckfinder

This app will be to find local food trucks in jax. 

Data Needed: 
Food truck Name
Food Truck Location (Lng, Lat)
Food Truck Picture
Food truck days Available 
Food Truck Hours for each day
Menu Link


Test Data: 
FoodTrucks : [
    SweetoBurrito : {
        Name: "Sweeto Burrito"
        Location: {{30.237247, -81.519488}
        Pic: "google.com"
        Days: [ M, W, F ]
        Hours: "10 AM - 1 PM"
    },
    Chinchillas : {
        Name: "Chinchillas"
        Location: {{30.237247, -81.519488}
        Pic: "google.com"
        Days: [ M, W, F ]
        Hours: "10 AM - 1 PM"
    },
    MamasFoodtruck : {
        Name: "Mamas Food Truck"
        Location: {{30.237247, -81.519488}
        Pic: "google.com"
        Days: [ M, W, F ]
        Hours: "10 AM - 1 PM"
    }
]

TODO:

X - Make the food truck list selectable and have a dropdown with the above data. 
X - Add markers on the map for food truck
X - Add Hover for Markers and Selected FoodTruck Table 
X - Add Info window for markers 
O - 
O - Add Styling to make website pretty
O - Add a news feed for local food truck tweets or insta post
O - Figure out a way to get all the schedules in one format easily 


So far this app is created with React, Reactstrap, Google-map-react library.