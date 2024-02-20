// menu.js
// import myImage from "./images/underSea.jpg";

// Sample menu data
const menuData = [
  { name: "Grilled Salmon", price: "$25" },
  { name: "Lobster Bisque", price: "$18" },
  { name: "Seafood Paella", price: "$30" },
  // Add more items as needed
];

// Function to create and append menu items
function createMenuPage() {
  // Get the menu container
  const content = document.getElementById("content");

  // Create and append menu items
  menuData.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<h2>${item.name}</h2><p>${item.price}</p>`;
    content.appendChild(menuItem);
  });
}

// Export the createMenu function as a default export
export default createMenuPage;
