// Navigation logic is here

let map;
let marker;

const customIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [23, 56],
});

export const updateMap = (lat, lng) => {
    // Logic about these parts can be reached via Leaflet Documentation

    if (!map) {
        map = L.map("map").setView([lat, lng], 13);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
    }
    map.setView([lat, lng], 13);

    if (marker) {
        marker.setLatLng([lat, lng]);
    } else {
        marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    }
};
