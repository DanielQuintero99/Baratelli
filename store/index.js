import { createStore , combineReducers } from "redux";
import resultReducer from "./reducers/resultados.reducer";
import userReducer from "./reducers/usuario.reducer";

const RootReducer=combineReducers({
    resultados:resultReducer,
    user:userReducer
})

export default createStore(RootReducer);