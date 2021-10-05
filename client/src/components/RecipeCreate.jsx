import React, {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import {getTypeDiets , postRecipes} from '../actions/index';
import { useDispatch, useSelector } from "react-redux";

export default function CreateRecipe() {
    const dispatch = useDispatch()
    let listDiets = useSelector((state) => state.typediets )
    console.log('esto es diet',listDiets);
    
    const [input,setInput] = useState({
        title :'',
        summary:'',
        spoonacularScore:'',
        healthScore:'',
        analyzedInstructions:'',
        typeDiets:[]
    })
    // console.log(input);
    useEffect(() => {
        dispatch(getTypeDiets())
        },[dispatch])
 function handleChange(e){
        setInput({
            ...input,
    [e.target.name] : e.target.value
})
}
function handleSelect(e){
    setInput({
        ...input,
        typeDiets:[...input.typeDiets, e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    dispatch(postRecipes(input))
    alert('recipe created!')
    setInput({
        title :'',
        summary:'',
        spoonacularScore:'',
        healthScore:'',
        analyzedInstructions:'',
        typeDiets:[]
    })
}


    return (
        <div>
            <Link to ='/home'><button>Back to the main page</button></Link>
            <h1>Create you recipe</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label>name:</label>
                    <input
                    type='text'
                    name='title'
                    value={input.title}
                    onChange={(e) => {handleChange(e)}}
                    />
                </div>
                <div>
                    <label>summary:</label>
                    <input
                    type='text'
                    name='summary'
                    value={input.summary}
                    onChange={(e) => {handleChange(e)}} 
                    />
                </div>
                <div>
                    <label>puntuation:</label>
                    <input
                    type='text'
                    name='spoonacularScore'
                    value={input.spoonacularScore}
                    onChange={(e) => {handleChange(e)}} 
                    />
                </div>
                <div>
                    <label>healthScore:</label>
                    <input
                    type='text'
                    name='healthScore'
                    value={input.healthScore}
                    onChange={(e) => {handleChange(e)}} 
                    />
                </div>
                <div>
                    <label>step by step:</label>
                    <input
                    type='text'
                    name='analyzedInstructions'
                    value={input.analyzedInstructions}
                    onChange={(e) => {handleChange(e)}} 
                    />
                </div>
                <select onChange={(e) => handleSelect(e)} >
                    {listDiets?.map((t) => {
                    
                    return <option value={t}> {t} </option>
                    
                    })}
                    
                </select >
                <button type='submit' > Create Recipe</button>
            </form>
        </div>
    )

}