const {TypeDiet} = require('../db');

let dietsID = 1

let diets = [{name: 'Gluten Free'},{name: 'Ketogenic'},{name: 'Vegetarian'},{name: 'Lacto-Vegetarian'},
	{name: 'Ovo-Vegetarian'},{name: 'Vegan'},{name: 'Pescatarian'},{name: 'Paleolithic'},{name: 'Primal'},
	{name: 'Whole 30'}];

// const getTypes = async (req, res, next) => {
//     try {
//         const response = await TypeDiet.findAll();
//         if(response.length > 0) {
//             return res.json(response);
//         } else {
//             try {
//             const dietas = await TypeDiet.bulkCreate(diets);
//             return res.json(dietas);
//             } catch {err => next(err)}
//         } 
//     } catch {err => next(err)}
// }


module.exports = { 
    diets  
};