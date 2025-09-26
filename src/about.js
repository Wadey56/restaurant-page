import senshi from "./images/senshi.png"

let aboutHeader = document.createElement("h2");
aboutHeader.id = "about-header";
aboutHeader.textContent = "About";

let aboutWrapper = document.createElement("div");
aboutHeader.id = "about-wrapper";

let senshiImage = document.createElement("img");
senshiImage.id = "senshi-image";
senshiImage.src = senshi;
senshiImage.alt = "Chef Senshi";

aboutWrapper.appendChild(senshiImage);

let aboutContent = document.createElement("div");
aboutContent.id = "about-content";



let content = document.getElementById("content");

function loadAboutContent() {
    content.appendChild(aboutHeader);
    content.appendChild(aboutWrapper);
}

export { loadAboutContent }