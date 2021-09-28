import React from 'react'

function CheckBox({ props, label, error }) {
    return (
        <div className="text-field">
            <div className='custom-check-box'>
                <input {...props} className='check-box' type="checkbox"></input>
                <label>{label}</label>
            </div>
            <span className="error">{error && error !== '' && error}</span>
        </div>
    )
}

export default CheckBox;
