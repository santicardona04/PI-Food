// import React from "react";

// import { useDispatch } from "react-redux";
// import {getRecipesByName} from '../actions/index'

// export default async function SearchBar ({search , setSearch}) {
//     const dispatch = useDispatch() 
    
//     function handleSubmit (e){
//         e.preventDefault(e)
//         dispatch(getRecipesByName())
//        return setSearch('')
        
//      } 
//      function handleInputName (e){
//        return setSearch(e.target.value)
//      }

//      return (
//     <div>
//         <form onSubmit={(e) => {handleSubmit(e)}}>
//         <h2>search your recipe</h2>
//         <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}}></input>
        
//         </form>
//     </div>

//      )

// }

