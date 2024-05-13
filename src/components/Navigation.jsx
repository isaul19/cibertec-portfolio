import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const routes = [
    {
      href: "/",
      text: "Inicio",
    },
    {
      href: "/about",
      text: "Sobre mi",
    },
    {
      href: "/projects",
      text: "Proyectos",
    },
    {
      href: "/contact",
      text: "Contacto",
    },
  ];

  const { pathname: currentPath } = useLocation();

  return (
    <header className="wc-navigation container">
      <nav className="nav">
        <a className="logo h6" href="/">
          iSaul19
        </a>
        <ul className="items">
          {routes.map(({ text, href }) => (
            <li className="item" key={href}>
              <Link className={`link h6 ${href === currentPath ? "active" : ""}`} to={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
