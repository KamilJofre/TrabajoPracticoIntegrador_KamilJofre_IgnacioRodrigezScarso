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


// === SUBCATEGORÍAS ===
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



