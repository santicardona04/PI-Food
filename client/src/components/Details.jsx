import React from "react";
import {getRecipesById} from '../actions/index'
import { useParams } from "react-router";
import { useDispatch  , useSelector} from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detail (props){
  const   {id} = useParams()
  const dispatch = useDispatch() 
  useEffect (() => {dispatch(getRecipesById(id))} ,[]) 
 const detailsstate = useSelector((state) => state.details)
 console.log('estos son los detalles',detailsstate);
  // detailsstate[0].title
//   console.log(detailsstate);
  return (
      <div>
       
     { 
       detailsstate.length > 0 ? 
       <div> 
           <Link to='/home'><button>Back to main Page </button> </Link>
           <h1> {detailsstate[0].title} </h1>
           <img src={detailsstate[0].img}/>
           <h3>Type Diet: {detailsstate[0].typeDiets.map(t => t.name)}</h3>
           <h4>Dish Type: {detailsstate[0].dishTypes.map(d => d.name)}</h4>
           <h5>summary: {detailsstate[0].summary}</h5>
           <h5>healthScore: {detailsstate[0].healthScore}</h5>
           <h5>puntutation: {detailsstate[0].spoonacularScore}</h5>
       </div> : 
       
       <div> <h4> no se encontro ninguna receta </h4> </div>

    }
        </div>
    )
}