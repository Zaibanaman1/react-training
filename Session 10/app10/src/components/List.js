import React from 'react'

function List({stories,Component}) {
    return (
        <>
           {<Component stories={stories} />}
        </>
    )
}

export default List
