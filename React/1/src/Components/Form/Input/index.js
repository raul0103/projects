import React from 'react'

function Input({ props, label, error }) {
    return (
        <div className="text-field">
            {label && <div className="label">{label}</div>}
            <input {...props} />
            <span className="error">{error && error !== '' && error}</span>
        </div>
    )
}

export default Input;
