// import { results } from "../../sources/data"
import { resultTypes } from "../types/result.types"

const {results}=resultTypes;

const initalState={
    results:[]
}

const resultReducer=(state=initalState,action)=>{
    switch (action.type) {
        case results:
            return results  
        case selected_Product:
            return{
                ...state,
                selected: state.find((product)=>product.id===action.id)
            } 
        default: 
        return state
            
    }
}
export default resultReducer 