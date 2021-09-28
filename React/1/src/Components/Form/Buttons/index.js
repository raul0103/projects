import React from 'react'

function Button({ props, textBtn }) {
    return (
        <div className="btn-large">
            <button {...props}>{textBtn}</button>
        </div>
    )
}

export default Button;
