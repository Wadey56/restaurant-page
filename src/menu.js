let menuHeader = document.createElement("h2");
menuHeader.id = "menu-header";
menuHeader.textContent = "Menu";

let menuSection = document.createElement("div");
menuSection.id = "menu-section";

let menuSubheaders = ["Brekafast", "Lunch", "Dinner"];
let menuItems = [
    "Porridge from Grain just Lying Around",
    "Mandrake and Basilisk Omelet",
    "Living Armor Dwarf-Style Stir-Fry and Soup",
    "Golem Field Fresh Veggie Lunch",
    "Roast Basilisk",
    "Scorpion and Walking Mushroom Hotpot",]
let itemDescriptions = [
    "A lightly browned texture of barley in a simmering broth and crunchy flavor, topped off with an enticing garnish of waterweed sprinkled with fish eggs and mimic meat.",
    "Thick and fluffy basilisk egg wrapping a versatile mandrake root and tender bacon chunks.",
    "A living armor meal, stir-fry-and-soup combo of mushrooms-like flavours, crunchy medicinal leaves, and flavour-full broth.",
    "A quick vegetable-filled soup in a bacon-flavored broth, a substantial but light meal that wont weigh you down.",
    "Rotisserie-style Baskilisk, providing a golden crispy skin, juicy meat, and seasoned with a healthy dose of healing herbs.", 
    "The individual parts are questionable — Tantalising slime noodles, juicy scorpion meat, aromatic sentient mushrooms — the most delicious soup you've ever seen."
]
let itemComments = [
    "- a flavorful experience to behold.",
    "- starting with a strong morning.",
    "- A combo to fill the stomach of any adventurer.",
    "- Get all your veggies in one, plus bacon!",
    "- Serves a whole party, but we've seen some finish it alone.",
    "- An OG from our very own Senshi, you'll finish the last drop."
]
let itemIngredients = [
    "Barley, Water, Salt, Mimic meat, Waterweed, Fish eggs",
    "Mandrake root, basilisk bacon, basilisk egg, salt and pepper (totaste)",
    "Antidotal herb, medicinal herb, Living Armor, special sauce, salt and pepper",
    "Cabbage, carrots, potatoes, onions, thick-sliced basilisk bacon, salt and pepper (to taste), water, turnips, carrot greens (to taste), olive oil (to taste)",
    "Basilisk (1, tail and innards removed), mana herb (to taste), salt and pepper (to taste), antidotal herb, strong medicinal herb, ultra medicinal herb, anti-paralysis herb, anti-petrify herb",
    "Huge scorpion, walking mushroom, seaweed, invertatoes, dried slime, salt and pepper (to taste), water, turnips, carrot greens (to taste), olive oil (to taste)"
]
let itemPrices = [
    "£6.95",
    "£8.95",
    "£8.95",
    "£8.95",
    "£12.95",
    "£12.95"
]

for (let i = 0; i < 3; i++) {
    let menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    let menuSubheader = document.createElement("h3");
    menuSubheader.classList.add("menu-subheader");
    menuSubheader.textContent = menuSubheaders[i];
    menuWrapper.appendChild(menuSubheader);

    for (let j = 0 + (i * 2); j < 2 + (i * 2); j++) {

        let menuItemWrapper = document.createElement("div");
        menuItemWrapper.classList.add("menu-item-wrapper");

        let menuItemPriceWrapper = document.createElement("div");
        menuItemPriceWrapper.classList.add("menu-item-price-wrapper");

        let menuItem = document.createElement("h4");
        menuItem.classList.add("menu-item");
        menuItem.textContent = menuItems[j];

        let itemPrice = document.createElement("p");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = itemPrices[j];

        let itemDescription = document.createElement("p");
        itemDescription.classList.add("item-description");
        itemDescription.textContent = itemDescriptions[j];

        let itemComment = document.createElement("i");
        itemComment.classList.add("item-comment");
        itemComment.textContent = itemComments[j];

        let itemIngredientsList = document.createElement("p");
        itemIngredientsList.classList.add("item-ingredients");
        itemIngredientsList.textContent = itemIngredients[j];

        menuItemPriceWrapper.appendChild(menuItem);
        menuItemPriceWrapper.appendChild(itemPrice);
        
        menuItemWrapper.appendChild(menuItemPriceWrapper);
        menuItemWrapper.appendChild(itemDescription);
        menuItemWrapper.appendChild(itemComment);
        menuItemWrapper.appendChild(itemIngredientsList);

        menuWrapper.appendChild(menuItemWrapper);
    }
    
    menuSection.appendChild(menuWrapper);
}

let content = document.getElementById("content");
function loadMenuContent() {
    content.appendChild(menuHeader);
    content.appendChild(menuSection);
}

export { loadMenuContent };