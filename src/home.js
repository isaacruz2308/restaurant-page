import myImage from "./images/underSea.jpg";

function createHomePage() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";

  const image = new Image(300, 150);
  image.src = myImage;
  image.alt = "Underwater restaurant";

  const description = document.createElement("p");
  description.textContent =
    "We are a restaurant located under the sea just like Spongebobs pineapple. We offer a wide variety of seafood and other dishes.";

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
}

export default createHomePage;
// Path: src/menu.js
