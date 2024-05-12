import { toast } from "react-toastify";
import { Navigation } from "../components/Navigation";
import { isEmpty, isValidEmail } from "../utils/validate.js";

export const ContactPage = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const txtNombre = document.getElementById("nombre");
    if (isEmpty(txtNombre.value)) return toast.error("El nombre es requerido");

    const txtEmail = document.getElementById("correo");
    if (isEmpty(txtEmail.value)) return toast.error("El correo es requerido");
    if (!isValidEmail(txtEmail.value)) return toast.error("El correo no es válido");

    const txtTelefono = document.getElementById("celular");
    if (isEmpty(txtTelefono.value)) return toast.error("El teléfono es requerido");

    const txtMensaje = document.getElementById("mensaje");
    if (isEmpty(txtMensaje.value)) return toast.error("El mensaje es requerido");

    toast.success("En unos segundos será redirigido.");
    setTimeout(() => {
      document.getElementById("form").submit();
      clearForm();
    }, 3000);
  };

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

  return (
    <>
      <Navigation />
      <main className="container container--mt">
        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>Contacta</span>
                    <span>Me</span>
                  </div>
                  <div className="app-contact">Información de contacto : +51 929894981</div>
                </div>
                <div className="screen-body-item">
                  <form
                    className="app-form"
                    action="https://formsubmit.co/porrasemiliosaul@gmail.com"
                    method="POST"
                    id="form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        id="correo"
                        name="correo"
                        placeholder="Correo"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        id="celular"
                        name="celular"
                        placeholder="Teléfono"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        id="mensaje"
                        name="mensaje"
                        placeholder="Mensaje"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button type="reset" className="app-form-button">
                        Cancelar
                      </button>
                      <button type="submit" id="btn-enviar" className="app-form-button">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
