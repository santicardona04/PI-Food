const axios = require('axios');
const { Router } = require('express');
const router = Router();
const {TypeDiet} = require('../db');
const {diets} = require('../controllers/diets')
router.get('/', async (req,res) => {
    // const typefromApi = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=2d0fafd47b274178b7100d9793925962&number=100&addRecipeInformation=true')
    // const type = typefromApi.data.results.map(e => e.diets)
    // // console.log(type);
    // const typeEach = type.map(e => {
    //     for(let i=0 ; i<e.length;i++) return e[i]
    //     // console.log(typeEach);
    // })
    // typeEach.filter(e => e !== undefined)
    // console.log(typeEach);
    //     typeEach.forEach(e => {
    //         TypeDiet.findOrCreate({
    //             where: {name:e}
    //         })
    //     })
    console.log(diets);
        diets.forEach(e => {
            TypeDiet.findOrCreate({
                where: {name:e.name}
            })
        })

         const allTheTypes = await TypeDiet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;