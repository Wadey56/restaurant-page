import foodSpreadImage from "./images/food-spread.png";

let heroTag = document.createElement("div");
heroTag.id = "hero-tag";

let resturantName = document.createElement("h1");
resturantName.id = "resturant-name";
resturantName.textContent = "Delicious in Diner";

let resturantTag = document.createElement("p");
resturantTag.classList.add("resturant-tag");
resturantTag.textContent = "Quest for Flavor, No Sword Required.";

let resturantTag2 = document.createElement("p");
resturantTag2.classList.add("resturant-tag");
resturantTag2.textContent = "Feeding monster appetites at all levels.";

heroTag.appendChild(resturantName);
heroTag.appendChild(resturantTag);
heroTag.appendChild(resturantTag2);

let foodSpread = document.createElement("img");
foodSpread.id = "food-spread";
foodSpread.src = foodSpreadImage;
foodSpread.alt = "Food Spread";

let servingSection = document.createElement("div");
servingSection.classList.add("serving-section");

for (let i = 0; i < 3; i++) {
    let servingWrapper = document.createElement("div");
    servingWrapper.classList.add("serving-wrapper");
    let servingHeader = document.createElement("h2");
    servingHeader.classList.add("serving-header");
    let servingStats = document.createElement("em");
    servingStats.classList.add("serving-stats");
    let servingDescription = document.createElement("p");
    servingDescription.classList.add("serving-description");
    servingWrapper.appendChild(servingHeader);
    servingWrapper.appendChild(servingStats);
    servingWrapper.appendChild(servingDescription);
    servingSection.appendChild(servingWrapper);
}

let content = document.getElementById("content");
function loadContent() {
    content.appendChild(heroTag);
    content.appendChild(foodSpread);
    content.appendChild(servingSection);
}

export { loadContent };