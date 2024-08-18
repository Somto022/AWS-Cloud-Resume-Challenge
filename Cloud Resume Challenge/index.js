const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://b8odl3ikdk.execute-api.us-east-1.amazonaws.com/table");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();