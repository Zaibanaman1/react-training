import React from 'react'
import './list.css'




function List() {
    const [items,setItems] = React.useState([ {
        "item": "Dal",
        "type": "veg"
      },
      {
        "item": "Fish",
        "type": "non-veg"
      },
      {
        "item": "Meat",
        "type": "non-veg"
      },
      {
        "item": "Rice",
        "type": "veg"
      },
      {
        "item": "Gobi",
        "type": "veg"
      },
      {
        "item": "Pan cakes",
        "type": "veg"
      },
      {
        "item": "Biryani",
        "type": "non-veg"
      },
      {
        "item": "Veg biryani",
        "type": "veg"
      },
      {
          "item": "Crab",
          "type": "non-veg"
        }])

    function Sort(){
            var itm = items.sort((a,b) => {
                if (a.item < b.item) {
                    return -1;
                  }
                  if (a.item > b.item) {
                    return 1;
                  }
                  
            });
          setItems([...itm]);
          console.log([...itm])
          }    

    return (
        <div className="list">
            <table>
                <th>veg</th>
                <th>non-veg</th>
              <tr><td>{ <ul>
            {items.map(function(i) {
              
                if(i.type==="veg"){
            return <li key={i.item}>{i.item}</li>
            }
        })}
            </ul> } 
                </td>
                <td>
                { <ul>
            {items.map(function(i) {
                
                if(i.type==="non-veg"){
            return <li key={i.item}>{i.item}</li>
            }
        })}
            </ul> } 
               
                </td></tr>
            </table>
         <button onClick={Sort}>sort</button>
        </div>
    )
}

export default List
