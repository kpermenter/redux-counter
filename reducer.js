const initialState = {
    value: 0,
    color: "#000000"
}

const reducer = (state = initialState, action) => {
    let { type, value, color } = action;
    console.log(action)
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    }
    else if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }
    }
    else if (type === "ADDFIVE") {
        return {
            value: state.value + 5
        }
    }
    else if (type === "SUBFIVE") {
        return {
            value: state.value - 5
        }
    }
    else if (type === "RESET") {
        return {
            value: action.amount
        }
    }
    if (type === "CHANGEVALUE") {
        return {
            value: state.value + value,
            color: state.color
        }
    }
    else if (type === "CHANGECOLOR") {
        return {
            value: state.value,
            color: color
        }
    }
    return state
}
state = object
