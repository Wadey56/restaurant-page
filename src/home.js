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

// review branching 
// create branch for this module
// build template in js form