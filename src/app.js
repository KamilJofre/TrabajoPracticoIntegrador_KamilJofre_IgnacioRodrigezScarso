/* JS de Inex */
/* Carrusel */
document.addEventListener("DOMContentLoaded", function () {

  const imagenes = [
    "../../public/img/wallpaper1.png",
    "../../public/img/wallpaper2.jpg",
    "../../public/img/wallpaper3.jpeg"
  ];

  let indice = 0;

  const imgCarrusel = document.getElementById("imagen-carrusel");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  function mostrarImagen() {
    imgCarrusel.style.opacity = 0;
    setTimeout(() => {
      imgCarrusel.src = imagenes[indice];
      imgCarrusel.style.opacity = 1;
    }, 600);
  }

  btnNext.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
  });

  btnPrev.addEventListener("click", () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
  });

  setInterval(() => {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
  }, 8000);

});



/* Formulario Contacto */

function validarForm() {
  const formulario = document.getElementById("form-contacto");
  let flagEnvio = true;

  const inputNombre = formulario["nombre"];
  const msgNombre = document.getElementById("msgNombre");
  msgNombre.textContent = "";

  if (inputNombre.value === "" || inputNombre.value.length < 3 || inputNombre.value.length > 20) {
    flagEnvio = false;
    msgNombre.textContent = "Por favor, Ingrese su nombre";
  }

  const inputApellido = formulario["apellido"];
  const msgApellido = document.getElementById("msgApellido");
  msgApellido.textContent = "";

  if (inputApellido.value === "" || inputApellido.value.length < 3 || inputApellido.value.length > 20) {
    flagEnvio = false;
    msgApellido.textContent = "Por favor, Ingrese su apellido";
  }

  const inputTel = formulario["telefono"];
  const msgTel = document.getElementById("msgTel");
  msgTel.textContent = "";

  const expTel = /^[0-9]{7,15}$/;
  if (inputTel.value === "" || !expTel.test(inputTel.value)) {
    flagEnvio = false;
    msgTel.textContent = "Ingrese un teléfono válido";
  }

  const inputMail = formulario["email"];
  const msgMail = document.getElementById("msgMail");
  msgMail.textContent = "";

  const expMail = /^(\w+[\w.-]*)@(\w+[\w.-]*)\.\w{2,}$/;
  if (inputMail.value === "" || !expMail.test(inputMail.value)) {
    flagEnvio = false;
    msgMail.textContent = "Ingrese un correo válido";
  }

  const inputConsulta = formulario["comentario"];
  const msgConsulta = document.getElementById("msgConsulta");
  msgConsulta.textContent = "";

  if (inputConsulta.value === "" || inputConsulta.value.length < 10) {
    flagEnvio = false;
    msgConsulta.textContent = "La consulta debe tener al menos 10 caracteres";
  }

  if (flagEnvio) {
    generarConfirmacion(inputNombre.value, inputApellido.value, inputMail.value);
  }

  function generarConfirmacion(nombre, apellido, email) {
    const carta = document.createElement("div");
    carta.style.backgroundColor = "#c19a6b";
    carta.style.color = "#ffffffff";
    carta.style.padding = "15px";
    carta.style.marginTop = "10px";
    carta.style.textAlign = "center";
    carta.style.borderRadius = "5px";
    carta.style.fontStyle = "italic";
    carta.innerHTML =
      "Consulta enviada correctamente. Gracias " +
      nombre +
      " " +
      apellido +
      ". Pronto recibirás una respuesta a " +
      email +
      ".";
    document.querySelector(".contacto").appendChild(carta);
  }

  return false;
}









/* JS de Compras */

const btnFiltros = document.getElementById("btnToggleFiltros");
const filtros = document.getElementById("filtros");


const marcas = document.getElementById("marcas");
const puentes = document.getElementById("puente");


/* filtros general */
btnFiltros.addEventListener("click", ()=>{
  if(filtros.style.display=="none" || filtros.style.display==""){
    filtros.style.display="block";
  } else{
    filtros.style.display="none";
  }
})


/* Subcategorias */
  const subcategoriasDiv = document.getElementById("subcategorias");
  const checkGuitarra = document.querySelector('.filtro-categoria[value="guitarra"]');
   // Mostrar subcategorías solo si está marcada Guitarra
  checkGuitarra.addEventListener("change", () => {
    if (checkGuitarra.checked) {
      subcategoriasDiv.classList.remove("hidden");
    } else {
      subcategoriasDiv.classList.add("hidden");
      document.querySelectorAll(".filtro-subcategoria").forEach(chk => chk.checked = false);
    }
  });

  // Si se marca cualquier otra categoría, ocultar las subcategorías
  otrosChecks.forEach(chk => {
    chk.addEventListener("change", () => {
      if (chk.checked) {
        checkGuitarra.checked = false;
        subcategoriasDiv.classList.add("hidden");
        document.querySelectorAll(".filtro-subcategoria").forEach(chk => chk.checked = false);
      }
    });
  });





