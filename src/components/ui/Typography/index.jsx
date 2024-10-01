
const Typography = (props) => {
    const {children, type = "h1"} = props;
    const Element = type;
    return (
        <Element>{children}</Element>
    );
}

export default Typography;