import { Navigation } from "../components/Navigation";

export const ProjectsPage = () => {
  return (
    <>
      <Navigation />
      <main className="container container--mt">
        <section className="projects">
          <div className="wrapper projects__wrapper">
            <div className="projects__grid">
              <h2 className="projects__headline header-xl">Projects</h2>
              <br />

              <div className="projects__item">
                <picture className="projects__picture">
                  <img
                    className="projects__image"
                    src="/media/images/projects/thumbnail-project-1-large.webp"
                    alt="screenshot of design portfolio website"
                    width="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Design Portfolio</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    Ver Proyecto
                  </a>
                  <a href="" className="underline">
                    Ver Codigo
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <img
                    className="projects__image"
                    src="/media/images/projects/thumbnail-project-2-large.webp"
                    alt="screenshot of learning platform website with different courses"
                    width="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">E-Learning Landing Page</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    Ver Proyecto
                  </a>
                  <a href="" className="underline">
                    Ver Codigo
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <img
                    className="projects__image"
                    src="/media/images/projects/thumbnail-project-3-large.webp"
                    alt="screenshot of To Do App showing a list of active and complete tasks"
                    width="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Todo Web App</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    Ver Proyecto
                  </a>
                  <a href="" className="underline">
                    Ver Codigo
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <img
                    className="projects__image"
                    src="/media/images/projects/thumbnail-project-4-large.webp"
                    alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
                    width="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Entertainment Web App</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    Ver Proyecto
                  </a>
                  <a href="" className="underline">
                    Ver Codigo
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <img
                    className="projects__image"
                    src="/media/images/projects/thumbnail-project-5-large.webp"
                    alt="screenshot of 4-player memory game with circular tiles that have symbols"
                    width="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Memory Game</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    Ver Proyecto
                  </a>
                  <a href="" className="underline">
                    Ver Codigo
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <img
                    className="projects__image"
                    src="/media/images/projects/thumbnail-project-6-large.webp"
                    alt="grid of thumbnails of famous works of art"
                    width="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Art Gallery Showcase</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    Ver Proyecto
                  </a>
                  <a href="" className="underline">
                    Ver Codigo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
