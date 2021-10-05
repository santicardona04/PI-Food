import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes , filterRecipesByTypeDiet , orderByName , orderByPuntuation,getRecipesByName} from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";
// import  SearchBar  from "../components/SearchBar";

export default function Home () {
const dispatch = useDispatch();
const allRecipes = useSelector((state) => state.recipes )  // es lo mismo que hacer  mapStateToProps
// console.log(allRecipes);
// PAGINADO SOLO PARA HOME 
                                                      
const[search,setSearch] =useState('')                  // este es para el searchBar                                    
const[orden,setOrden] =useState('')                                             // |             
const[order,setOrder] =useState('')                                             // |             
const[currentPage,setCurrentPage] =useState(1)                                  // |             
const[recipesPerPage,setrecipesPerPage]=useState(9)                             // |
const indexLastRecipe = currentPage * recipesPerPage                            // | --> esto es para el paginado
const indexFirstRecipe = indexLastRecipe - recipesPerPage                       // |
const currentRecipes = allRecipes.slice(indexFirstRecipe,indexLastRecipe)       // |
                                                                              

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(() => {
    dispatch(getRecipes())   // hook del matchDispatchToProps()
},[dispatch]);

function handleOnClick(e){
e.preventDefault();
dispatch(getRecipes)
}

function handleFilterTypeDiet (e) {
    dispatch(filterRecipesByTypeDiet(e.target.value))
}
function handleSort (e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`ordenado ${e.target.value}`)

}
function handlePuntuation (e) {
    e.preventDefault();
    dispatch(orderByPuntuation(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
}

function handleSubmit (e){
        e.preventDefault(e)
        dispatch(getRecipesByName(search))
         setSearch('')
            
         } 
function handleInputName (e){
         setSearch(e.target.value)
         }


return (
    <div>
        <Link to = '/recipe'> Create Recipe </Link>

        <button onClick = {e => handleOnClick(e)}> Refresh Recipes</button>

            <div>
                <select onChange={e => handleSort(e)}>
                    <option value="asc">ascendent(A-Z)</option>
                    <option value="des">descendent(Z-A)</option>
                </select>
                
                <select  onChange={e => handlePuntuation(e)}>
                    <option value="mayormenor">mayor a menor por puntuacion</option>
                    <option value="menormayor">menor a mayor por puntuacion</option>
                </select>
 
                <select onChange={e => handleFilterTypeDiet(e)}>
                    <option value="All">All recipes</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian (x el momento no hay)</option>
                    <option value="lacto-vegetarian">Lacto-Vegetarian (x el momento no hay)</option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                </select>
            
     <div>
     <form onSubmit={(e) => {handleSubmit(e)}}> {/* este es para hacer enter y que funcione */}
     <h2>search your recipe</h2>
     <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}}></input>
     <button  type='submit'>search</button>
     </form>
     </div>
            


            { 
            
            currentRecipes?.map( e => {
                console.log(e)

                return (
                    <div> 
                    <Link to={'/recipes/' + e.id}>
                    <Card title={e.title} img={e.img} 
                    // typeDiet ={e.typeDiet} 
                    typeDiets={e.typeDiets} 
                    key={e.id}/>
                    </Link>
                    </div>
                    
                    )
                    
                    
                })  
                
            }    
            
            {/* <input type='text' value='value' placeholder='buscar receta' name=''>seasrchbar</input>          */}
            </div>
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginado= {paginado}/>
    </div>
)
}