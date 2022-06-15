const Button = (props) => {
    const { label, onClick } = props;
  
    return (
      <button style={{ color: "red" }} onClick={onClick}>
        클릭
      </button>
    );
  };
  
  export default Button;