import React from 'react'
import styles from './main.module.css'
import Sidebar from './Sidebar'

function Main({sidebar,content}) {
    console.log("in main")
    return (
        
        <div className={styles.container}>
          {<Sidebar/>}
          <article>
              <img src="https://www.thoughtco.com/thmb/l6mjGqVnMW8z53UcD86DE16ZG5c=/2576x2576/smart/filters:no_upscale()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg">
                
              </img>
          </article>
          <article className={styles.article2}><p>
              An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.
                  </p></article>
        </div>
    )
}

export default Main
