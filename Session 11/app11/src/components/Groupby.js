import React from 'react'
import styles from './sort.module.css'

function Groupby({onSort,uniqueitems}) {
   
    return (
        <div>
            {uniqueitems.map((item)=>{
              return  <button value={item.createdat} onClick={onSort}>Groupby {item.createdat}</button>
            })}
            
        </div>
    )
}

export default Groupby
