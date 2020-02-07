// state = object
const initialState = {
    balance: 0
}

function deepCopy(x) {
    return JSON.parse(JSON.stringify(x))
}

// Reducer --> must be pure function --> same output always
const todoReducer = (state, action) => {
    // console.log("Inside reducer")
    // console.log("State", state)
    // console.log("Action", action)
    console.log('Here is the action:', action)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

    let newState
    // make copy of state so state isn't mutated accidentally
    // we are trying to keep todoReducer a "pure" function
    // newState = deepCopy(state)
    // let newState = Object.assign({}, state) --> method
    // let newState = {...state} --> spread object 
    if (state === undefined) {
        newState = deepCopy(initialState)
    } else {
        newState = deepCopy(state)
    }

    // add $1
    if (action.type === 'ADD_1') {
        newState.balance = newState.balance + 1
    }

    // remove $1
    else if (action.type === 'REMOVE_1') {
        newState.balance = newState.balance - 1
    }

    else if (action.type === 'ADD') {
        newState.balance = newState.balance + action.amount
    }

    //for all other actions
    return newState
}

// Create Store --> one big variable --> dispatch action to change value 
const store = Redux.createStore(todoReducer)

function addOneToBalance() {
  store.dispatch({
      type: 'ADD_1'
  })
}

function removeOneFromBalance() {
    store.dispatch({
        type: 'REMOVE_1'
    })
}

function addMore() {
    let amount = window.prompt('How much?')
    amount = parseInt(amount, 10)
    if (typeof amount === 'number' && amount >= 0) {
        store.dispatch({
            type: 'ADD',
            amount: amount
        })
    }
}

function render(state) {
    let rootEl = document.getElementById('root')

    let html =
        `<h1>Balance: ${state.balance}</h1>
        <button onclick="addOneToBalance()">Add One</button>
        <button onclick="removeOneFromBalance()">Remove One</button>
        <button onclick="addMore()">Add Custom</button>
        `
    rootEl.innerHTML = html
}

// Subscribe --> listen to state changes
store.subscribe(() => {
    // console.log("Subscribe", store.getState())
    render(store.getState())
})

render(store.getState())