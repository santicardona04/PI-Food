// es este archivo voy a obtener todas las recetas, tanto de la API como de la DB
const axios= require('axios');
const{Recipe,TypeDiet} = require('../db')

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=59decad62f064e9baec31b2f82e72077&number=100&addRecipeInformation=true')
    //console.log(apiUrl);
     const apiInfo = await apiUrl.data.results.map(e =>{
         return {
             id: e.id, 
             name: e.title,
             img: e.image,
             typeDiet: e.diets.map((d)=> {return{name:d}}), // un array con los tipos de dieta de esa receta
             spoonacularScore : e.spoonacularScore,   // puntuacion
             dishTypes: e.dishTypes.map((d)=> {return{name:d}}), // tipo de plato
             summary: e.summary,            // un resumen del plato
             healthScore: e.healthScore,    // que tan saludable es
             analyzedInstructions: e.analyzedInstructions// el paso a paso de como se hace 
            }
            
     })
   //   console.log(apiInfo)
    return apiInfo
}


const getDBInfo = async () => {
    return await Recipe.findAll({
        include : {
            model : TypeDiet,
            attributes : ['name'],
            through: {
                attributes:[]
            }
        }
    })
}

const getAllRecipes = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDBInfo()
    const allRecipes = apiInfo.concat(dbInfo)
    return allRecipes

}


// 
module.exports= {
    getAllRecipes,
    getDBInfo,
    getApiInfo
    
}