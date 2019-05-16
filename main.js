require('dotenv').config()

// http://api.brewerydb.com/v2/brewery/nHLlnK/locations/?key=37ee639f0d9e9ead471687f7a5f3371f
// http://api.brewerydb.com/v2/brewery/random?key=37ee639f0d9e9ead471687f7a5f3371f

//Build an app that allow a user to find breweries near them.
const randomBrew = "https://sandbox-api.brewerydb.com/v2/brewery/random?key=37ee639f0d9e9ead471687f7a5f3371f";
function get() {
    fetch(randomBrew);

}
//Remember the Geolocation API you learned in 101!

//Allow users to heart their favorite places.