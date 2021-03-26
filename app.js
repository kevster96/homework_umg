const contenido = document.getElementById("contenido");
const datosPersonales = document.getElementById("contenido2");
const datosColegio = document.getElementById("contenido3");
const datosUni = document.getElementById("contenido4");
const datosHobbie = document.getElementById("contenido5");

function mostrarPersonales() {
  contenido.style.display = "none";
  datosPersonales.style.display = "flex";
  datosColegio.style.display = "none";
  datosUni.style.display = "none";
  datosHobbie.style.display = "none";
}

function mostrarColegio() {
  contenido.style.display = "none";
  datosPersonales.style.display = "none";
  datosColegio.style.display = "flex";
  datosUni.style.display = "none";
  datosHobbie.style.display = "none";
}

function mostrarUniversidad() {
  contenido.style.display = "none";
  datosPersonales.style.display = "none";
  datosColegio.style.display = "none";
  datosUni.style.display = "flex";
  datosHobbie.style.display = "none";
}

function mostrarHobbies() {
  contenido.style.display = "none";
  datosPersonales.style.display = "none";
  datosColegio.style.display = "none";
  datosUni.style.display = "none";
  datosHobbie.style.display = "flex";
}
