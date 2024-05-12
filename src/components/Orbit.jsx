export const Orbit = ({ className }) => {
  return (
    <>
      <div id="circle" className={`wc-orbit ${className}`}>
        <div id="icons-container">
          <div className="icon next">
            <img src="/media/icons/about/next.svg" alt="Next.js" />
          </div>
          <div className="icon astro">
            <img src="/media/icons/about/astro.svg" alt="Astro" />
          </div>
          <div className="icon typescript">
            <img src="/media/icons/about/typescript.png" alt="typescript" />
          </div>
          <div className="icon react">
            <img src="/media/icons/about/react.png" alt="React" />
          </div>
          <div className="icon node">
            <img src="/media/icons/about/node.png" alt="Node.js" />
          </div>
          <div className="icon aws">
            <img src="/media/icons/about/aws.svg" alt="AWS" />
          </div>
        </div>
        <div className="center"></div>
      </div>
    </>
  );
};
