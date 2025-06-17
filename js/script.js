document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmation = document.getElementById("confirmation");

  if (nom && email && message) {
    confirmation.textContent = "Merci pour votre message !";
    confirmation.style.color = "green";
    this.reset();
  } else {
    confirmation.textContent = "Veuillez remplir tous les champs.";
    confirmation.style.color = "red";
  }
});
