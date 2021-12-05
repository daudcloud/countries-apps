import Div from "./style";

const Input = ({ value, onChange }) => {
  return (
    <Div>
      <i className="fas fa-search"></i>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for a country..."
      />
    </Div>
  );
};

export default Input;
