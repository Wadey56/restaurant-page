import senshi from "./images/senshi.png"

let aboutHeader = document.createElement("h2");
aboutHeader.id = "about-header";
aboutHeader.textContent = "About";

let aboutWrapper = document.createElement("div");
aboutWrapper.id = "about-wrapper";

let senshiImage = document.createElement("img");
senshiImage.id = "senshi-image";
senshiImage.src = senshi;
senshiImage.alt = "Chef Senshi";

aboutWrapper.appendChild(senshiImage);

let aboutContent = document.createElement("div");
aboutContent.id = "about-content";

aboutWrapper.appendChild(aboutContent);

let aboutDescription = document.createElement("p");
aboutDescription.classList = "about-description";
aboutDescription.textContent = "Delicious in Diner was founded by our very own Chef Senshi. He has been serving up delicious meals to adventurers since 2014. His passion for both cooking and the dungeon has inspired the great menu of alternative ingredient meals and BYOI services. All our ingredients are sourced from local adventurers and the menu is pre-approved by his trusty party of mixed characters to appeal to the wider community."

aboutContent.appendChild(aboutDescription);

let aboutSubHeaders = ["Location", "Hours", "Contact"];
let aboutItems = [["123 Stomach Rumbling", "<br/>Mouth Drooling", "<br/>Nose Twitching", "<br/>E4T N0W"], "We're now open 24/7, all day, every day!", "Please send inquires via letter to Chef Senshi."];

for (let i = 0; i < 3; i++) {
    let aboutSubHeader = document.createElement("h3");
    aboutSubHeader.classList = "about-subheader";
    aboutSubHeader.textContent = aboutSubHeaders[i];

    let aboutItem = document.createElement("p");
    aboutItem.classList = "about-item";
    aboutItem.innerHTML = aboutItems[i];

    aboutContent.appendChild(aboutSubHeader);
    aboutContent.appendChild(aboutItem);
}

let content = document.getElementById("content");

function loadAboutContent() {
    content.appendChild(aboutHeader);
    content.appendChild(aboutWrapper);
}

export { loadAboutContent }