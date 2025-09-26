let aboutHeader = document.createElement("h2");
aboutHeader.id = "about-header";
aboutHeader.textContent = "About";

let aboutWrapper = document.createElement("div");
aboutHeader.id = "about-wrapper";

let content = document.getElementById("content");

function loadAboutContent() {
    content.appendChild(aboutHeader);
    content.appendChild(aboutWrapper);
}

export { loadAboutContent }