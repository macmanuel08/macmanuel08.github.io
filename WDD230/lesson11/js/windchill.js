let t = parseFloat(document.querySelector("#temperature").textContent);
let s = parseFloat(document.querySelector('#windspeed').textContent);

let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
let roundWC = Math.round(wc);

if (s > 3 && t <= 50) {
    document.querySelector("#windchill").textContent = roundWC + '\xB0F';
} else {
    document.querySelector("#windchill").textContent = "N/A";
}