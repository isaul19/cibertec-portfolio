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
  if (!isValidEmail(txtEmail.value)) return alert.error("El correo no es valido");

  const txtTelefono = document.getElementById("celular");
  if (isEmpty(txtTelefono.value)) return alert.error("El telefono es requerido");

  const txtMensaje = document.getElementById("mensaje");
  if (isEmpty(txtMensaje.value)) return alert.error("El mensaje es requerido");

  alert.success("En unos segundos sera' redirigido");
  setTimeout(() => {
    clearForm();
    document.getElementById("form").submit();
  }, 2000);
}

function isEmpty(value) {
  return value.trim().length === 0;
}

function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
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
