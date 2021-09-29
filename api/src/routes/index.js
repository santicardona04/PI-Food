var express = require('express');
const { Router } = require('express');
const axios = require('axios');
const{Recipe,TypeDiet} = require('../db')
const router = Router();
const recipes = require('./recipes');
const types = require('./types');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {getTypes} = require('../controllers/diets')
const api_key = '59decad62f064e9baec31b2f82e72077'
router.use('/recipes', recipes)
router.use('/types', types)
const {getDBInfo,getAllRecipes} =require('../controllers/getRecipes')
// router.get('/recipes', async (req,res) => {
//     const name = req.query.name
//     const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&titleMatch=${name}&&addRecipeInformation=true&number=100`)
//     const infoNoMatch = await getAllRecipes()
//     console.log(infoNoMatch);
    
//     if(name){
//     if(info.data.results.length===0){res.status(200).send('name not found')}
//     const apiInfo = await info.data.results.map(e =>{
//         return {
//             id: e.id, 
//             name: e.title,
//             img: e.image,
//             typeDiet: e.diets.map((d)=> {return{name:d}}), // un array con los tipos de dieta de esa receta
//             spoonacularScore : e.spoonacularScore,   // puntuacion
//             dishTypes: e.dishTypes.map((d)=> {return{name:d}}), // tipo de plato
//             summary: e.summary,            // un resumen del plato
//             healthScore: e.healthScore,    // que tan saludable es
//             analyzedInstructions: e.analyzedInstructions// el paso a paso de como se hace 
//            }
           
//     })
//      console.log(apiInfo)
//    return res.send(apiInfo)
// }else {
//     res.status(200).json(infoNoMatch)
//  }
// })



















router.post('/recipes', async (req,res,next) => {
    let {
        title,
        summary,
        spoonacularScore,
        healthScore,
        analyzedInstructions,
        createdInDb,
        typeDiet
    } = req.body;
    if(!title || !summary) {
        return res.status(400).send('Please, insert a title and a summary to continue!');
    }
    console.log(title);
try{let createRecipe = await Recipe.create({
       // id,     
        title,
        summary,
        spoonacularScore ,
        healthScore,
        analyzedInstructions,
       // typeDiet,
        createdInDb
})
let dietTypeDb = await TypeDiet.findAll({ where:{ name:typeDiet } })
    createRecipe.addTypeDiet(dietTypeDb)
    res.status(200).send('receta creada')   

}catch(e){
    next(e)
}
});


/*
router.get('/bdedatos',async (req,res) =>{
const infoRBd= await getDBInfo()
const type = await TypeDiet.findAll()             esto es para chequear que se me haya cargado bien la info 
console.log(type);                                              en la base de datos
try {res.status(200).send(infoRBd)}
catch(e){res.send(e)}
})
*/





module.exports = router;
