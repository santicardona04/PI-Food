export const initialState = {
    recipes: []
}

function rootReducer (state=initialState, action) {
    switch(action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }

        case 'FILTER_BY_TYPEDIET':
        const allRec = state.recipes
        
        const typeDietFilter = action.payload === 'All' ? allRec : allRec.filter(t => t.typeDiet.map(e =>  e.name ) === action.payload )    
        console.log();
        return{
                ...state ,
                recipes : typeDietFilter

            }
        default:
            return state;
    }
}

export default rootReducer;