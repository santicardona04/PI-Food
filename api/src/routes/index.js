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


// router.get('/types', async (req,res) => {
//     const typefromApi = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=2d0fafd47b274178b7100d9793925962&number=100&addRecipeInformation=true')
//     const type = typefromApi.data.results.map(e => e.diets)
//     // console.log(type);
//     const typeEach = type.map(e => {
//         for(let i=0 ; i<e.length;i++) return e[i]
//         // console.log(typeEach);
//     })
//     typeEach.filter(e => e !== undefined)
//     console.log(typeEach);
//         typeEach.forEach(e => {
//             TypeDiet.findOrCreate({
//                 where: {name:e}
//             })
//         })
//          const allTheTypes = await TypeDiet.findAll();
//         res.send(allTheTypes.map(e => e.name))
// })

// router.post('/recipes', async (req,res) => {
//     let {
//         name,
//         summary,
//         spoonacularScore,
//         healthScore,
//         analyzedInstructions,
//        // typeDiet,
//         createdInDb
//     } = req.body
// let createRecipe = Recipe.bullkreate({
//         name,
//         summary,
//         spoonacularScore,
//         healthScore,
//         analyzedInstructions,
//         createdInDb
// })
// // let dietTypeDb = await TypeDiet.findAll({
// //     where:{name:typeDiet}
// // })
// // createRecipe.addTypeDiet(dietTypeDb)
//  res.send('receta creada')


// })

module.exports = router;
