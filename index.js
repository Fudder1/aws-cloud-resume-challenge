//View counter API
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch ("https://xb4shx7ofhzea7pihjews75at40gtmwb.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = "Page Views: " + data;
}
updateCounter();