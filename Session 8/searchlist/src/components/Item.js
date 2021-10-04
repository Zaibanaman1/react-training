import React from 'react'
import styles from "./item.module.css"


function Item({stories}) {
    // console.log(stories)
    // var date = new Date(stories.createdat)
    // console.log(date.toLocaleDateString())
    return (
        <>
                {stories.map((item)=>{  
                   return  <li  key={item.Object_id}><span> {item.title}</span>
                   <span>{item.author}</span> <span>{item.createdat}</span></li>                
                })}
                

          
        </ >
    )
}

export default Item
