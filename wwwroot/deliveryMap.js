(function () {
    var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var tileAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

    // Global export
    window.deliveryMap = {
        showOrUpdate: function (elementId, markers) {
            var elem = document.getElementById(elementId);
            if (!elem) {
                throw new Error('No element with ID ' + elementId);
            }

            // Initialize map if needed
            // if (!elem.map) {
            //     elem.map = L.map(elementId);
            //     elem.map.addedMarkers = [];
            //     L.tileLayer(tileUrl, { attribution: tileAttribution }).addTo(elem.map);
            // }

            // ---------------------------------------------------
            var mymap = L.map(elementId).setView([51.505, -0.09], 13);

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFydHZhbmhvZXkiLCJhIjoiY2thcjY2bnhmMDRjZjJzcWR4aWJsaHZvdiJ9.5Z306HFda2sb8x83WE5Vsw', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiYmFydHZhbmhvZXkiLCJhIjoiY2thcjY2bnhmMDRjZjJzcWR4aWJsaHZvdiJ9.5Z306HFda2sb8x83WE5Vsw'
            }).addTo(mymap);

            // ---------------------------------------------------


            // var map = elem.map;
            // if (map.addedMarkers.length !== markers.length) {
            //     // Markers have changed, so reset
            //     map.addedMarkers.forEach(marker => marker.removeFrom(map));
            //     map.addedMarkers = markers.map(m => {
            //         return L.marker([m.y, m.x]).bindPopup(m.description).addTo(map);
            //     });

            //     // Auto-fit the view
            //     var markersGroup = new L.featureGroup(map.addedMarkers);
            //     map.fitBounds(markersGroup.getBounds().pad(0.3));

            //     // Show applicable popups. Can't do this until after the view was auto-fitted.
            //     markers.forEach((marker, index) => {
            //         if (marker.showPopup) {
            //             map.addedMarkers[index].openPopup();
            //         }
            //     });
            // } else {
            //     // Same number of markers, so update positions/text without changing view bounds
            //     markers.forEach((marker, index) => {
            //         animateMarkerMove(
            //             map.addedMarkers[index].setPopupContent(marker.description),
            //             marker,
            //             4000);
            //     });
            // }
        }
    };

    // function animateMarkerMove(marker, coords, durationMs) {
    //     if (marker.existingAnimation) {
    //         cancelAnimationFrame(marker.existingAnimation.callbackHandle);
    //     }

    //     marker.existingAnimation = {
    //         startTime: new Date(),
    //         durationMs: durationMs,
    //         startCoords: { x: marker.getLatLng().lng, y: marker.getLatLng().lat },
    //         endCoords: coords,
    //         callbackHandle: window.requestAnimationFrame(() => animateMarkerMoveFrame(marker))
    //     };
    // }

    // function animateMarkerMoveFrame(marker) {
    //     var anim = marker.existingAnimation;
    //     var proportionCompleted = (new Date().valueOf() - anim.startTime.valueOf()) / anim.durationMs;
    //     var coordsNow = {
    //         x: anim.startCoords.x + (anim.endCoords.x - anim.startCoords.x) * proportionCompleted,
    //         y: anim.startCoords.y + (anim.endCoords.y - anim.startCoords.y) * proportionCompleted
    //     };

    //     marker.setLatLng([coordsNow.y, coordsNow.x]);

    //     if (proportionCompleted < 1) {
    //         marker.existingAnimation.callbackHandle = window.requestAnimationFrame(
    //             () => animateMarkerMoveFrame(marker));
    //     }
    // }
})();
