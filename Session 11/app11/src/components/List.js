import React from 'react'

function List({filteredstories,Component,handledelete}) {
    return (
        <>
           {<Component filteredstories={filteredstories} handledelete={handledelete} />}
        </>
    )
}

export default List
