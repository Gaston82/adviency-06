interface ButtonProps {
  text: string;
  action?: () => void;
  type?: "button" | "reset" | "submit";
  className: string;
}

const Button = ({ text, action, type, className }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
