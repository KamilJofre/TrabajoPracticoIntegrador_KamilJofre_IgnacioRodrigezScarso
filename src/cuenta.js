function validarFormCuenta() {
    const formulario = document.getElementById("form-cuenta");
    let flagEnvio = true;

    // --- Usuario ---
    const inputUser = formulario["usuario"];
    const msgUser = document.getElementById("msgUsuario");
    msgUser.textContent = "";

    const expNombre = /^[a-zA-Z\s]{5,20}$/; //Expresion Regular solo letras en nombre
    if (inputUser.value === "" || !expNombre.test(inputUser.value)) {
        flagEnvio = false;
        inputUser.style.borderColor = "red";
        msgUser.textContent =
            "Ingrese un nombre de usuario entre 5 y 20 caracteres";
    } else {
        inputUser.style.borderColor = "";
    }

    /* Mail */
    const inputEmail = formulario["email"];
    const msgEmail = document.getElementById("msgEmail");
    msgEmail.textContent = "";

    const expReg = /^(\w+[\w.-]*)@(\w+[\w.-]*)\.\w{2,}$/;
    if (inputEmail.value === "" || !expReg.test(inputEmail.value)) {
        flagEnvio = false;
        inputEmail.style.borderColor = "red";
        msgEmail.textContent = "Ingrese un correo valido";
    } else {
        inputEmail.style.borderColor = "";
    }

    /* Contrasenia */
    const inputPass = formulario["pass"];
    const msgPass = document.getElementById("msgPass");
    msgPass.textContent = "";

    if (inputPass.value === "" || inputPass.value.length < 8) {
        flagEnvio = false;
        inputPass.style.borderColor = "red";
        msgPass.textContent = "La contraseña debe tener al menos 8 caracteres";
    } else {
        inputPass.style.borderColor = "";
    }

    /* Confirmar Contrasenia */
    const inputConfirm = formulario["confirmar"];
    const msgConfirm = document.getElementById("msgConfirmar");
    msgConfirm.textContent = "";

    if (inputConfirm.value === "" || inputConfirm.value !== inputPass.value) {
        flagEnvio = false;
        inputConfirm.style.borderColor = "red";
        msgConfirm.textContent = "Las contraseñas no coinciden";
    } else {
        inputConfirm.style.borderColor = "";
    }

    if (flagEnvio) {
        generarCardUsuario(inputUser.value, inputEmail.value);
        formulario.reset();
    }

    return false;

    /* Card Usuario */
    function generarCardUsuario(usuario, email) {
        const card = document.createElement("div");
        card.classList.add("card-usuario");
        card.innerHTML =
            "<h3>Cuenta creada</h3>" +
            "<p>Usuario: " + usuario + "</p>" +
            "<p>Email: " + email + "</p>";

        document.querySelector(".contenedor-form").appendChild(card);
    }
}
