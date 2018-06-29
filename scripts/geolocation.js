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
    var lat = Math.round(position.coords.latitude);
    var lng = Math.round(position.coords.longitude);
    console.log(lat);
    console.log(lng);
    console.log("Latitude " + position.coords.latitude);
    console.log( "Longitude " + position.coords.longitude);

}


getLocation();