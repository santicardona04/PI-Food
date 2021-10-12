// import Details from "../components/Details";

export const initialState = {
    recipes: [],
    allRecipes : [],
    details : [],
    typediets :[]
}
console.log('esto es el estado type diets',initialState.typediets);

function rootReducer (state=initialState, action) {
    switch(action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload, 
                allRecipes: action.payload,
                
            }

        case 'FILTER_BY_TYPEDIET':
        const allRec = state.allRecipes
        // const allRec = state.recipes
        console.log(allRec);
        
        const typeDietFilter = action.payload === 'All' ? allRec : allRec.filter(t => t.typeDiets.find(e =>  e.name  === action.payload ) )   
        console.log(action.payload);
        
        return{
                ...state ,
                recipes : typeDietFilter

        }
    // }})
        case 'ORDER_BY_NAME' :
            let order = action.payload === 'asc' ? 
            state.recipes.sort(function(a,b) {
                
                if(a.title.toLowerCase() > b.title.toLowerCase()) {
                  
                    return 1
                }
                if( b.title.toLowerCase() > a.title.toLowerCase()){
                    return -1
                }
                return 0
            }) : 
            state.recipes.sort(function(a,b) {
                if(a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1
                }
                if( b.title.toLowerCase() > a.title.toLowerCase()){
                    return 1
                }
                return 0
            })
            return{
                ...state ,
                recipes : order

        }

        case 'ORDER_BY_PUNTUATION' : 
        let orderpunt = action.payload === 'menormayor' ? 
            state.recipes.sort(function(a,b) {
                if(a.spoonacularScore > b.spoonacularScore) {
                    return 1
                }
                if( b.spoonacularScore > a.spoonacularScore){
                    return -1
                }
                return 0
            }) : 
            state.recipes.sort(function(a,b) {
                if(a.spoonacularScore > b.spoonacularScore) {
                    return -1
                }
                if( b.spoonacularScore > a.spoonacularScore){
                    return 1
                }
                return 0
            })
            return{
                ...state ,
                recipes : orderpunt
        }

        case 'GET_BY_NAME':
            return {
                ...state,
                recipes: action.payload,
                      
            }

        case 'GET_BY_ID':
            return{
                ...state,
                details: action.payload
            }

        case 'POST_RECIPE':
                return{
                    ...state,
                }
        
        
        case 'GET_TYPE_DIETS':
            // console.log('action.payload',action.payload);
            return {
                ...state,
                typediets : action.payload
            }        
            
        default:
            return state;
    }
}

export default rootReducer;