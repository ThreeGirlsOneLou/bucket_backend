# WanderList Back End

Our group created an app, WanderList, based on the idea of a "bucket list".  A bucket list is a list of life experiences that a person wants to pursue.  We took this and narrowed the scope, making an app that focuses on a location that user wants to visit.  A registered user searches a location on an embedded Google map and the Flickr API will return a photo tagged with that location name and Wikipedia will return it's wiki entry.  The user can then add it to their wanderlist.  After visiting that location, the user can mark it as 'visited', or even remove it from their list entirely.

Heroku Deployment
https://cryptic-brushlands-42769.herokuapp.com

## Routes

.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

.resources('locations')
.get('/user_locations', 'locations#indexUserLocations')
