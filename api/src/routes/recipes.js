const { Router } = require('express');
const router = Router();
const axios = require('axios');
const {getAllRecipes, getQueryApiInfo} = require('../controllers/getRecipes')
const{Recipe,TypeDiet} = require('../db')
const api_key = '22c14afa09054692aca0e95100023b9f'


router.get('/', async (req,res) => {
  const name = req.query.name
  const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&titleMatch=${name}&&addRecipeInformation=true&number=100`)
  const infoNoMatch = await getAllRecipes()
  console.log(infoNoMatch);
  
  if(name){
  if(info.data.results.length===0){res.status(200).send('name not found')}
  const apiInfo = await info.data.results.map(e =>{
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
   console.log(apiInfo)
 return res.send(apiInfo)
}else {
  res.status(200).json(infoNoMatch)
}
})

router.get('/:id',async (req,res) =>{
    const {id} = req.params
    const allRecipes = await getAllRecipes()
   // console.log(allRecipes.map(e => e.id===parseInt(id)));
    let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos

    if (validate) {
      try {
        let dbId = await Recipe.findByPk(id, { include: TypeDiet });
        res.status(200).json([dbId]);
      } catch (err) {
        console.log(err);
      }
    }
//     
else {
    try {
      if (id) {
        let recipeId = await allRecipes.filter((el) => el.id === parseInt(id)
        );
       // console.log(recipeId);
        recipeId.length
          ? res.status(200).send(recipeId)
          : res.status(400).send("Not fuound");
      }
    } catch (err) {
      res.json({ message: err });
    }
  }
});

// MODELO ANTERIOR
// router.get('/', async (req,res) => {
//   const name = req.query.name
//   let dietTotal = await getAllRecipes();
//   console.log(dietTotal.data.result.map(e => e.name));
//  if(name){
//      let dietName = await dietTotal.filter(e => e.name.includes(name)) // uso includes , en vez de === porque sino va a buscar exactamente lo que dice, en cambioo con includes es mas global
//      dietName.length ?  res.status(200).send(dietName) : res.status(404).send('no existe')

//  }else {
//     res.status(200).json(dietTotal)
//  }
 
 
// })

module.exports= router;
