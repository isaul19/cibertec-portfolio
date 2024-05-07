import { isEmpty, isValidEmail } from "../utils/validate.js";

function main() {
  const btnEnviar = document.getElementById("btn-enviar");
  btnEnviar.addEventListener("click", handleSubmitForm);
}

main();

function handleSubmitForm() {
  const alert = document.getElementById("contact-alert");

  const txtNombre = document.getElementById("nombre");
  if (isEmpty(txtNombre.value)) return alert.error("El nombre es requerido");

  const txtEmail = document.getElementById("correo");
  if (isEmpty(txtEmail.value)) return alert.error("El correo es requerido");
  if (!isValidEmail(txtEmail.value)) return alert.error("El correo no es válido");

  const txtTelefono = document.getElementById("celular");
  if (isEmpty(txtTelefono.value)) return alert.error("El teléfono es requerido");

  const txtMensaje = document.getElementById("mensaje");
  if (isEmpty(txtMensaje.value)) return alert.error("El mensaje es requerido");

  alert.success("En unos segundos será redirigido.");
  setTimeout(() => {
    document.getElementById("form").submit();
    clearForm();
  }, 3000);
}

function clearForm() {
  const txtNombre = document.getElementById("nombre");
  txtNombre.value = "";

  const txtEmail = document.getElementById("correo");
  txtEmail.value = "";

  const txtTelefono = document.getElementById("celular");
  txtTelefono.value = "";

  const txtMensaje = document.getElementById("mensaje");
  txtMensaje.value = "";
}
