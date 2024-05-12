export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="wc-button">
      {children}
    </button>
  );
};
