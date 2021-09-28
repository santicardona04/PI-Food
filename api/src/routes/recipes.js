const { Router } = require('express');
const router = Router();
const {getAllRecipes} = require('../controllers/getRecipes')
const{Recipe,TypeDiet} = require('../db')
router.get('/', async (req,res) => {
    const name = req.query.name
    let dietTotal = await getAllRecipes();
    //console.log(dietTotal);
   if(name){
       let dietName = await dietTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase())) // uso includes , en vez de === porque sino va a buscar exactamente lo que dice, en cambioo con includes es mas global
       dietName.length ?  res.status(200).send(dietName) : res.status(404).send('no existe')

   }else {
      res.status(200).json(dietTotal)
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

module.exports= router;
