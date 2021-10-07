import React from 'react'
import styles from './counter.module.css'

function Counter({Btn,value1,value2,count,handleclick}) {
    return (
        <>
        <div className={styles.container}>
            
            {<Btn click={handleclick} id="minus" operation={value1}/>}
            <div className={styles.field}>{count}</div>
            {<Btn click={handleclick} id='plus' operation={value2}/>}
        </div>
        </>
    )
}

export default Counter
