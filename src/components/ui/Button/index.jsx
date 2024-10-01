
const Button = (props) => {
    const clickHandler = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
    <button {...props} onClick={clickHandler}>
        {props.children}
        </button>
    );
};

export default Button;