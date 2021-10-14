import React from 'react'
import styles from "./item.module.css"


function Item({filteredstories,handledelete}) {
    // console.log(stories)
    // var date = new Date(stories.createdat)
    // console.log(date.toLocaleDateString())
    return (
        <>
        <table>
          {filteredstories.map((item)=>{  
                   return  <tr><li  key={item.Object_id}> <td> <span> {item.title}</span></td>
                  <td> <span>{item.author}</span> </td><td><span>{item.createdat}</span></td><td><button onClick={()=>{handledelete(item)}} >delete</button></td></li> </tr>                
                })}
                
                </table>
          
        </ >
    )
}

export default Item
