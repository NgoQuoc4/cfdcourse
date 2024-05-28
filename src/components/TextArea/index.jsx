
const TextArea = ({ error, ...rest }) => {
    return <textarea {...rest} className={`form__input ${error ? "formerror" : ""}`} />

}

export default TextArea