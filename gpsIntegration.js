// gpsIntegration.js

var gpsData = {
    latitude: null,
    longitude: null
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            gpsData.latitude = position.coords.latitude;
            gpsData.longitude = position.coords.longitude;

            // Send data to Unity
            SendGPSDataToUnity(gpsData.latitude, gpsData.longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function SendGPSDataToUnity(latitude, longitude) {
    if (typeof unityInstance !== 'undefined') {
        unityInstance.SendMessage('GPSManager', 'UpdateGPS', latitude + ',' + longitude);
    } else {
        console.log("Unity instance is not defined.");
    }
}
