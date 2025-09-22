let byoiHeader = document.createElement("h2");
byoiHeader.id = "byoi-header";
byoiHeader.textContent = "Bring Your Own Ingredients";

let byoiDescription = document.createElement("div");
byoiDescription.classList.add("byoi-description");
byoiDescription.textContent = "Delicious in Diner aims to cater to all adventurers, from those who are just starting out to those who are well on their way to becoming legends. As such, we understand that not everyone is able to spare the coin for a hearty meal. That's where our BYOI (Bring Your Own Ingredients) service comes in! With this option, you can bring your own ingredients and we will work out the best meal to make from it for a much smaller price. This service is available on request and prices typically range from 2-4 gold per serving.";

let menuHeader = document.createElement("h2");
menuHeader.id = "menu-header";
menuHeader.textContent = "Menu";

let menuDisclaimer = document.createElement("div");
menuDisclaimer.classList.add("menu-disclaimer");
menuDisclaimer.textContent = "Please be reminded that the menu is subject to change. Both prices and menu items are dependant on availability of ingredients selected by our adventuring suppliers at each respective level. If you have any dietary requirements, please let us know and we will do our best to accommodate.";

let menuSection = document.createElement("div");
menuSection.id = "menu-section";

let menuSubheaders = ["Breakfast", "Lunch", "Dinner"];
let menuItems = [
    "Porridge from Grain just Lying Around",
    "Mandrake and Basilisk Omelet",
    "Living Armor Dwarf-Style Stir-Fry and Soup",
    "Golem Field Fresh Veggie Lunch",
    "Roast Basilisk",
    "Scorpion and Walking Mushroom Hotpot",]
let itemDescriptions = [
    "Lightly browned and crunchy barley in a simmering broth, topped with waterweed, fish eggs and mimic meat.",
    "Thick and fluffy basilisk egg, wrapping a versatile mandrake root and tender bacon chunks.",
    "Stir-fry-and-soup combo with mushroom-like flavours, crunchy medicinal leaves, and flavour-full broth.",
    "A quick vegetable-filled soup in a bacon-flavored broth, a substantial but light meal that wont weigh you down.",
    "Rotisserie-style Baskilisk, a golden crispy skin, juicy meat, and seasoned with a healthy dose of healing herbs.", 
    "Tantalising slime noodles, juicy scorpion meat, aromatic sentient mushrooms."
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
    "Mandrake root, basilisk bacon, basilisk egg",
    "Antidotal herb, medicinal herb, Living Armor, special sauce",
    "Cabbage, carrots, potatoes, onions, basilisk bacon, water, turnips, carrot greens",
    "Basilisk, mana herb, antidotal herb, strong medicinal herb, ultra medicinal herb, anti-paralysis herb, anti-petrify herb",
    "Huge scorpion, walking mushroom, seaweed, invertatoes, dried slime, water, turnips, carrot greens"
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
    content.appendChild(byoiHeader);
    content.appendChild(byoiDescription);
    content.appendChild(menuHeader);
    content.appendChild(menuDisclaimer);
    content.appendChild(menuSection);
}

export { loadMenuContent };