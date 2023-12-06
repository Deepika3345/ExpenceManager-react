const ExpenceReducer = (state, action) => {
    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                expenditures: state.expenditures.filter(item => item.id !== action.payload)
            }

        case "SAVE":
            return {
                ...state,
                expenditures: [action.payload, ...state.expenditures]
            }

        case "EDIT":
            return {
                ...state,
                edit: { expenditure: action.payload, isEdit: true }
            }

        case "UPDATE":
            return {
                ...state,
                expenditures: state.expenditures.map(item => item.id === action.payload.id ? action.payload : item),
                edit: { expenditure: {}, isEdit: false }
            }

        default:
            return state
    }
}

export default ExpenceReducer