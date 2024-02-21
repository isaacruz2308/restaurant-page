import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactForm from "./contact";
import createNavbar from "./navbar";

function clearContent() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function setupTabSwitching() {
  const homeButton = document.getElementById("home");
  const menuButton = document.getElementById("menu");
  const contactButton = document.getElementById("contact");

  homeButton.addEventListener("click", () => {
    clearContent();
    createHomePage();
  });

  menuButton.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  contactButton.addEventListener("click", () => {
    clearContent();
    createContactForm();
  });
}

function initializeWebsite() {
  createNavbar();
  createHomePage();
  setupTabSwitching();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);
