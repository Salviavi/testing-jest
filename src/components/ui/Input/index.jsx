
const Input = (props) => {
    const {value, onChange, placeholder, type} = props;

    return (
        <div>
            {type === "textarea" ? (
                <textarea value={value}
                onChange={onChange}
                placeholder={placeholder} />) : (
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                )
            }
        </div>
    )
}

export default Input;