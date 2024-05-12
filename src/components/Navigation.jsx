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

  const currentPath = window.location.pathname;

  return (
    <header className="wc-navigation container">
      <nav className="nav">
        <a className="logo h6" href="/">
          iSaul19
        </a>
        <ul className="items">
          {routes.map(({ text, href }) => (
            <li className="item" key={href}>
              <a className={`link h6 ${href === currentPath ? "active" : ""}`} href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
