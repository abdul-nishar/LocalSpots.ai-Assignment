export default function DefaultBtn2({ children, className, ...props }) {
  return (
    <button className={`text-button ${className ? className : ""}`} {...props}>
      {children}
    </button>
  );
}
