import React from "react";


export default function Paginado ({recipesPerPage ,  allRecipes , paginado}) {
const pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++){
   pageNumbers.push(i+1)
}
return (
          
    <nav>
        <ul className='paginado'>
            {
                pageNumbers && pageNumbers.map(n => (
                    <li key={n}>
                    <a onClick= {() => paginado(n)}>{n}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
            
)
}