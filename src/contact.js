// contact.js

// Function to create and append contact form
function createContactForm() {
  // Get the contact container
  const content = document.getElementById("content");

  // Create and append headline
  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  // Create and append contact form
  const contactForm = document.createElement("form");
  contactForm.innerHTML = `
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message"></textarea><br>
        <input type="submit" value="Submit">
    `;
  content.appendChild(contactForm);
}

// Export the createContactForm function as a default export
export default createContactForm;
