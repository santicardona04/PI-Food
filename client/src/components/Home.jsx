import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes , filterRecipesByTypeDiet} from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";


export default function Home () {
const dispatch = useDispatch();
const allRecipes = useSelector((state) => state.recipes )  // es lo mismo que hacer  mapStateToProps
// console.log(allRecipes);
// PAGINADO SOLO PARA HOME                                                       __ 
const[currentPage,setCurrentPage] =useState(1)                                  // |             
const[recipesPerPage,setrecipesPerPage]=useState(9)                             // |
const indexLastRecipe = currentPage * recipesPerPage                            // | --> estom es para el paginado
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

return (
    <div>
        <Link to = '/recipe'> Create Recipe </Link>

        <button onClick = {e => handleOnClick(e)}> Refresh Recipes</button>

            <div>
                <select>
                    <option value="asc">ascendent</option>
                    <option value="des">descendent</option>
                </select>
                
                <select>
                    <option value="spoonacularScore">puntuation</option>
                </select>

                <select onChange={e => handleFilterTypeDiet(e)}>
                    <option value="All">All recipes</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                    <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Pescatarian">Pescatarian</option>
                    <option value="Paleolithic">Paleolithic</option>
                    <option value="Primal">Primal</option>
                    <option value="Whole 30">Whole 30</option>
                </select>
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginado= {paginado}/>
            { 
            
            currentRecipes?.map( e => {
                console.log(e)
                return (
                    <div> 
                    <Link to={'/home/' + e.id}>
                    <Card title={e.title} img={e.img} typeDiet ={e.typeDiet} key={e.id}/>
                    </Link>
                    </div>
                    
                    )


            })  
            
        }             
            </div>
    </div>
)
}