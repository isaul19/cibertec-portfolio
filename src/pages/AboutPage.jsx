import { Navigation } from "../components/Navigation";
import { Orbit } from "../components/Orbit";

export const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main className="presentation-section container container--mt">
        <div className="about-me">
          <h2 className="about-me__title rainbow">Sobre mí</h2>
          <p className="about-me__description">
            El primer contacto que tuve con la informática comenzó en abril de 2022 cuando empecé a
            ver publicidad de servicios de páginas web. Me dio curiosidad y comencé a investigar
            sobre cómo crear páginas web. Así fue como encontré un video en YouTube donde hice mi
            primer Hola Mundo en HTML. Después de unos meses de estudio, conseguí trabajo.
            Actualmente llevo 1 año y 3 meses trabajando en una empresa de consultoría en
            tecnologías de la información como desarrollador web
          </p>
          <ul className="about-me__skills">
            <p className="rainbow">Mis Skills:</p>
            <li className="about-me__skill">Conocimientos en DevOps</li>
            <li className="about-me__skill">Conocimientos en Python</li>
            <li className="about-me__skill">Experiencia con Express y MySQL</li>
            <li className="about-me__skill">Experiencia en AWS</li>
            <li className="about-me__skill">Fuerte dominio de React</li>
          </ul>
        </div>
        <div className="orbit-container">
          <Orbit className="presentation-section__orbit" />
        </div>
      </main>
    </>
  );
};
