import "./styles.css";

export const Button = ({ text, click, disabled }) => (
  <button 
    disabled={disabled}
    className="button" 
    onClick={click}
  >
    {text}
  </button>
);
