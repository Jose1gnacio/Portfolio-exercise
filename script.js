document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMessage = "";

    if (!name) {
      errorMessage += "Por favor ingresa tu nombre.\n";
    }
    if (!email || !emailPattern.test(email)) {
      errorMessage += "Por favor ingresa un email válido.\n";
    }
    if (!message) {
      errorMessage += "Por favor ingresa un mensaje.\n";
    }

    if (errorMessage) {
      alert(errorMessage);
    } else {
      alert("Gracias, " + name + ". Tu mensaje ha sido enviado.");
    }
  });

document.getElementById("toggleTheme").addEventListener("click", function () {
  const body = document.body;
  const isDarkMode = body.classList.toggle("dark-mode");

  if (isDarkMode) {
    body.classList.remove("light-mode");
    this.textContent = "Modo claro";
  } else {
    body.classList.add("light-mode");
    this.textContent = "Modo oscuro";
  }
});
