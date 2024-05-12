import { Button } from "../components/Button";
import { Navigation } from "../components/Navigation";
import { downloadPdf } from "../utils/download-pdf";

export const HomePage = () => {
  function handleDownloadCv() {
    console.log("DESCARGANDO PDF...");

    downloadPdf({
      filePath: "/documents/cv-test.pdf",
      downloadName: "cv-saul-porras.pdf",
    });
  }

  return (
    <>
      <Navigation />
      <main className="hero-section container container--mt">
        <div className="hero-section__image-box">
          <img src="/media/images/index/photo.jpeg" alt="saul-porras" />
        </div>
        <div className="hero-section__text-box">
          <p className="hero-section__name">SAUL PORRAS</p>
          <h1 className="hero-section__title">
            Soy un
            <span className="rainbow"> Frontend Developer</span>
            Apasionado
          </h1>
          <p className="hero-section__description">
            Me gusta la tecnología y disfruto construyendo interfaces que combinan creatividad y
            funcionalidad para brindar la mejor experiencia de usuario posible.
          </p>
          <div className="hero-section__button-container">
            <Button id="btn-download-cv" onClick={handleDownloadCv}>
              Descargar mi CV
            </Button>
          </div>
        </div>
        <div className="hero-section__info-box">
          <div className="hero-section__card">
            <div>
              <span className="h4">1,5K</span>
              <span className="card__text">Clientes Felices</span>
            </div>
            <div className="clients-images">
              <img src="/media/images/index/customer-1.jpg" alt="Customer photo" />
              <img src="/media/images/index/customer-2.jpg" alt="Customer photo" />
              <img src="/media/images/index/customer-3.jpg" alt="Customer photo" />
            </div>
          </div>
          <div className="hero-section__card">
            <div>
              <div className="hero-section__card-icon-container">
                <img
                  className="hero-section__card-icon"
                  src="/media/icons/index/shield.png"
                  alt="shield-icon"
                />
              </div>
              <div>
                <span className="h5">100%</span>
                <span className="card__text">Garantía</span>
              </div>
            </div>
            <div>
              <div className="hero-section__card-icon-container">
                <img
                  className="hero-section__card-icon"
                  src="/media/icons/index/start.png"
                  alt="start-icon"
                />
              </div>
              <div>
                <span className="h5">98%</span>
                <span className="card__text">Satisfechos</span>
              </div>
            </div>
          </div>
          <div className="hero-section__card">
            <div>
              <span className="h4">990+</span>
              <span className="card__text">Proyectos Terminados</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
