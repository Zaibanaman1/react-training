import React from 'react'
import styles from './Search.module.css'

function Search({onSearch}) {

    return (
        <div className={styles.container}>
           <label> Search for Stories: <input onChange={onSearch}/></label>
       
        </div>
    )
}

export default Search
