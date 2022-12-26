import "./styles.css";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="digite sua pesquisa"
    />
  );
};
