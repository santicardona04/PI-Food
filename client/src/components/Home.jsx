import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../actions";
import Card from "./Card";



export default function Home () {
const dispatch = useDispatch();
const allRecipes = useSelector((state) => state.recipes )  // es lo mismo que hacer  mapStateToProps
console.log(allRecipes);

useEffect(() => {
    dispatch(getRecipes())   // hook del matchDispatchToProps()
},[dispatch]);

function handleOnClick(e){
e.preventDefault();
dispatch(getRecipes)
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
                    <option value="All">All recipes</option>
                    <option value="diet">Gluten Free</option>
                    <option value="diet">Ketogenic</option>
                    <option value="diet">Vegetarian</option>
                    <option value="diet">Lacto-Vegetarian</option>
                    <option value="diet">Ovo-Vegetarian</option>
                    <option value="diet">Vegan</option>
                    <option value="diet">Pescatarian</option>
                    <option value="diet">Paleolithic</option>
                    <option value="diet">Primal</option>
                    <option value="diet">Whole 30</option>
                </select>
            { 
            
            allRecipes?.map( e => {
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