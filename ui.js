// UI rendering is here

const ipDisplay = document.getElementById("ip-display");
const locationDisplay = document.getElementById("location-display");
const timezoneDisplay = document.getElementById("timezone-display");
const ispDisplay = document.getElementById("isp-display");

export function updateUIDisplay(dataObj) {
    if (!dataObj) return;

    ipDisplay.textContent = dataObj.ip;
    locationDisplay.textContent = dataObj.location;
    timezoneDisplay.textContent = `UTC ${dataObj.timezone}`;
    ispDisplay.textContent = dataObj.isp;
}
