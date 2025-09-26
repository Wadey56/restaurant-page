import "./globalStyles.css";
import "./homeStyles.css";
import "./menuStyles.css";
import "./aboutStyles.css";
import { loadHomeContent } from "./home";
import { loadMenuContent } from "./menu";
import { loadAboutContent } from "./about";

loadHomeContent();

let homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHomeContent();
});

let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenuContent();
});

let aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadAboutContent();
});