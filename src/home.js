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

let servingSectionHeaders = ["Boss Battle Breakfast", "Level-up Lunch", "Daring Dinner Duels"];
let servingSectionStats = ["+12 Saving Throws", "+5 Stanima", "+10 Dexterity"];
let servingSectionDescriptions = ["Are you in need of hit points for your next fight? Of course you are! Here at our diner we have everything you would need to slay not only your hunger but that pesky boss you just cant seem to defeat recently...", "Here at our diner we know real energy is created from eating delicious lunches and not from collecting floating orbs of XP; so come visit Delicious in Diner to rest up and level-up for that weary journey ahead.", "Devour to your heart's desire; whether you want to play it safe and try our low level relished meals such as the Golum Field Fresh Veggie Lunch or dare your guts with our high level spiced platters like our Dwarf-Style Stir Fry-whatever your seasoning skillset, we won't judge!"];

for (let i = 0; i < 3; i++) {
    let servingWrapper = document.createElement("div");
    servingWrapper.classList.add("serving-wrapper");

    let servingHeader = document.createElement("h2");
    servingHeader.classList.add("serving-header");
    servingHeader.textContent = servingSectionHeaders[i];

    let servingStats = document.createElement("em");
    servingStats.classList.add("serving-stats");
    servingStats.textContent = servingSectionStats[i];

    let servingDescription = document.createElement("p");
    servingDescription.classList.add("serving-description");
    servingDescription.textContent = servingSectionDescriptions[i];

    servingWrapper.appendChild(servingHeader);
    servingWrapper.appendChild(servingStats);
    servingWrapper.appendChild(servingDescription);
    servingSection.appendChild(servingWrapper);
}

let content = document.getElementById("content");
function loadHomeContent() {
    content.appendChild(heroTag);
    content.appendChild(foodSpread);
    content.appendChild(servingSection);
}

export { loadHomeContent };