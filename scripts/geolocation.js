console.log('We are linked');


function getLocation() {
    if (navigator.geolocation) {
        // //google maps api 
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }

}

function showPosition(position) {
    console.log("Latitude " + position.coords.latitude);
    console.log( "longitude " + position.coords.longitude);
}


getLocation();