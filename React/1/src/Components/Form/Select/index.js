import React, { useState } from 'react'

function Select({ props, label, values }) {

    const [val, setVal] = useState(label)
    const [hidden, setHidden] = useState(true)

    function addSelect(e) {
        setHidden(!hidden)
        setVal(e.target.textContent)
    }

    return (
        <div className="custom-select" onClick={(e) => addSelect(e)}>
            <div className="label">{label}</div>
            <div className={hidden ? "value" : "value open"} onClick={() => setHidden(!hidden)}>{val}</div>
            <ul hidden={hidden}>
                {values.map(e => <li key={e} className={e === val ? 'active' : ''}>{e}</li>)}
            </ul>
            <select {...props} hidden>
                <option>{val}</option>
            </select>
        </div>
    )
}

export default Select;
