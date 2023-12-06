import { createContext, useReducer } from "react";
import ExpenceReducer from "./ExpenceReducer";

const ExpenceContext = createContext()

export const ExpenceProvider = ({ children }) => {

    const initialstate = {
        expenditures: [
       
    ],
        edit: { expenditure: {}, isEdit: false }
    }

    const [state, dispatch] = useReducer(ExpenceReducer, initialstate)


    return (
        <ExpenceContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ExpenceContext.Provider>
    )
}

export default ExpenceContext