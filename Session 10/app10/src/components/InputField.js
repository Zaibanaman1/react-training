import React from 'react'

function InputField({type,children,id,value,handleChange}) {
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input id={id} type={type} value={value} onChange={handleChange} ></input>
        </>
    )
}

export default InputField
