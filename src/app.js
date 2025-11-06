
  const btn = document.getElementById("toggle-btn");
  const content = document.getElementById("floating-content");

  btn.addEventListener("click", () => {
    // alternar visibilidad
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });