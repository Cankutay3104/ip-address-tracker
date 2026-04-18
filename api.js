// API fetching is here

const API_KEY = "at_VqzWj2gbVAZ21Ffjk8eeKGAmETt0r";
const BASE_URL = "https://geo.ipify.org/api/v2/country,city";

async function getIpData(searchValue = "") {
    const url = `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${searchValue}&domain=${searchValue}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 403) throw new Error("API key is invalid.");
            else if (response.status === 422) throw new Error("There is a problem with the IP/Domain format.");
        }

        const data = await response.json();
        const dataObj = {
            ip: data.ip,
            location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
            timezone: data.location.timezone,
            isp: data.isp,
            lat: data.location.lat,
            lng: data.location.lng,
        };
        return dataObj;
    } catch (error) {
        throw error;
    }
}

export { getIpData };
