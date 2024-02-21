function createNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
    <button id="home">Home</button>
    <button id="menu">Menu</button>
    <button id="contact">Contact</button>
  `;
}

export default createNavbar;
