document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Gracias, " + name + ". Tu mensaje ha sido enviado.");
      // Aquí puedes agregar más lógica, como enviar el formulario a un servidor.
    } else {
      alert("Por favor completa todos los campos.");
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
