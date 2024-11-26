export default function DefaultBtn1({ children, className, ...props }) {
  return (
    <button className={`button ${className ? className : ""}`} {...props}>
      {children}
    </button>
  );
}
