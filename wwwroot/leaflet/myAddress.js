(function () {
    var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var tileAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
    window.myAddress = {
        showPopup: function (elementId, companyName, address, latitude, longitude, zoom) {
            var elem = document.getElementById(elementId);
            if (!elem) {
                throw new Error('No element with ID ' + elementId);
            }
            if (!elem.map) {
                elem.map = L.map(elementId);
                elem.map.setView([latitude, longitude], zoom);

                elem.map.addedMarkers = [];
                L.tileLayer(tileUrl, { attribution: tileAttribution }).addTo(elem.map);
            }
            var map = elem.map;
            L.marker([latitude, longitude]).addTo(map).bindPopup('<b>' + companyName + '</b><br>' + address).openPopup();
        }
    };
})();
