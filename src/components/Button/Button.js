import './Button.scss';

const Button = (props) => {
  return ( 
    <button
      type={props.type}
      style={props.style}
      className={`${props.classes} cmn-btn`}
      onClick={props.click}
    >
      {props.text}
    </button>
  );
}

export default Button;