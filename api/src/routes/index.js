var express = require('express');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 const axios = require('axios');
 const{Recipe,TypeDiet} = require('../db')
//const{Recipe} = require('../models/Recipe')
//const{TypeDiet} = require('../models/TypeDiet')
const router = Router();
//router.use(express.json());
const recipes = require('./recipes');
const types = require('./types');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {getTypes} = require('../controllers/diets')
router.use('/recipes', recipes)
router.use('/types', types)
const {getDBInfo} =require('../controllers/getRecipes')

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
