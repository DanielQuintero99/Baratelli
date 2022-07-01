import { createStore , combineReducers } from "redux";
import resultReducer from "./reducers/resultados.reducer";

const RootReducer=combineReducers({
    resultados:resultReducer
})

export default createStore(RootReducer);