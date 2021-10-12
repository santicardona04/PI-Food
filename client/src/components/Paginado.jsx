import React from "react";
import styles from './Paginado.module.css'

export default function Paginado ({recipesPerPage ,  allRecipes , paginado}) {
const pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++){
   pageNumbers.push(i+1)
}
return (
          
    <nav  >
        <ul className={styles.ul} >
            {
                pageNumbers && pageNumbers.map(n => (
                    <li key={n}  >
                    <a className={styles.container} onClick= {() => paginado(n)} >{n}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
            
)
}