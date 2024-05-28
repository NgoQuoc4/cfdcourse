import React, { forwardRef } from 'react'

const Input = ({ label, required, error, renderInput, ...rest }, ref) => {
    return (
        // required
        <div className="form-group">
            {/* if isrequired show */}
            <label className="label">{label}{required && <span>*</span>}</label>
            {
                renderInput?.({ ...rest, error }) || <input {...rest} ref={ref} type="text" className={`form__input ${error ? "formerror" : ""}`} />
            }
            {/* id iserror show  */}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default forwardRef(Input) 