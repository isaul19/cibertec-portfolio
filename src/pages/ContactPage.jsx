import { useState } from "react";
import { toast } from "react-toastify";

import { Navigation } from "../components/Navigation";
import { isEmpty, isValidEmail } from "../utils/validate.js";

const initialState = {
  nombre: "",
  correo: "",
  celular: "",
  mensaje: "",
};

export const ContactPage = () => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickSend = (e) => {
    e.preventDefault();

    if (isEmpty(form.nombre)) return toast.error("El nombre es requerido");

    if (isEmpty(form.correo)) return toast.error("El correo es requerido");
    if (!isValidEmail(form.correo)) return toast.error("El correo no es válido");

    if (isEmpty(form.celular)) return toast.error("El teléfono es requerido");

    if (isEmpty(form.mensaje)) return toast.error("El mensaje es requerido");

    toast.success("En unos segundos será redirigido.");
    setTimeout(() => {
      document.getElementById("form").submit();
      clearForm();
    }, 3000);
  };

  function clearForm() {
    setForm({
      nombre: "",
      correo: "",
      celular: "",
      mensaje: "",
    });
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
                  >
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        value={form.nombre}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        id="correo"
                        name="correo"
                        placeholder="Correo"
                        value={form.correo}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        id="celular"
                        name="celular"
                        placeholder="Teléfono"
                        value={form.celular}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        id="mensaje"
                        name="mensaje"
                        placeholder="Mensaje"
                        value={form.mensaje}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button type="reset" className="app-form-button">
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        id="btn-enviar"
                        className="app-form-button"
                        onClick={onClickSend}
                      >
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
