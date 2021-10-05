import React from "react";
import {getRecipesById} from '../actions/index'
import { useParams } from "react-router";
import { useDispatch  , useSelector} from "react-redux";
import { useEffect } from "react";

export default function Detail (){
  const   {id} = useParams()
  const dispatch = useDispatch() 
  useEffect (() => {dispatch(getRecipesById(id))} ,[]) 
 const detailsstate = useSelector((state) => state.details)
  // detailsstate[0].title
  console.log(detailsstate);
  return (
      <div>
       
     { 
       detailsstate.length > 0 ? 
       <div> 
           <h1> {detailsstate[0].title} </h1>
           
       </div> : 
       
       <div> <h4> no se encontro ninguna receta </h4> </div>

    }
        </div>
    )
}