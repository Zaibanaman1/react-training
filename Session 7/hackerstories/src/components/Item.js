import React from 'react'
import styles from "./item.module.css"


function Item({stories}) {
    return (
        <>
                {stories.map((item)=>{  
                   return  <li  key={item.Object_id}><span> {item.title}</span>
                   <span>{item.author}</span></li>                
                })}
                

          
        </ >
    )
}

export default Item
