import React from 'react'
import styles from './layout.module.css'

function Layout({Header,Sidebar,Footer,Main}) {
    return (
        <div className={styles.container} >
            {< Header/>}
          {<Main Sidebar={Sidebar} />}
            {<Footer/>}
        </div>
    )
}

export default Layout
