import React from 'react'
import styles from './side.module.css'

function Sidebar() {
    return (
        <div className={styles.container}>
            <aside>
                <ul>
                    <li>New Dehli</li>
                    <li>Mumbai</li>
                    <li>Bangalore</li>
                    <li>Chennai</li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
