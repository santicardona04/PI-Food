import axios from 'axios';
const GET_RECIPES = 'GET_RECIPES';


export function getRecipes(){
     return async function(dispatch){
         var json = await axios.get(`http://localhost:3001/recipes`);
         return dispatch({
             type : GET_RECIPES,
             payload: json.data
         })
     }
}

// export function getRecipes() {

//     return async function (dispatch) {
//         return axios.get(`http://localhost:3001/recipes`)
//             .then((response) => {
//                 dispatch([{
//                     type: GET_RECIPES,
//                     payload: response.data
//                 }])
//             })
//     }
// }