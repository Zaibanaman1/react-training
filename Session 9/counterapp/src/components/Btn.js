import React from 'react'
import styles from './Btn.module.css'

function Btn({operation,id,click}) {
    return (
        <>
         <button  onClick={click} id={styles[id]} value={operation} >{operation}</button>   
        </>
    )
}

export default Btn
