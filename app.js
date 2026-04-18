// Main program is here

import { getIpData } from "./api.js";
import { updateMap } from "./map.js";
import { updateUIDisplay } from "./ui.js";

const form = document.getElementById("ip-form");
const ipInput = document.getElementById("ip-input");

async function loadDashboard(searchValue = "") {
    try {
        const data = await getIpData(searchValue);

        updateUIDisplay(data);
        updateMap(data.lat, data.lng);
    } catch (error) {
        alert(error.message);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    loadDashboard(ipInput.value);
});

loadDashboard();
