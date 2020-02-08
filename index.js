  
const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action when -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "ADDFIVE" action when +5 button is pressed
const addFiveButton = document.getElementById('addFive');
addFiveButton.addEventListener('click', e => dispatch({ type: "ADDFIVE" }));

// Dispatch the "SUBTRACTFIVE" action when -5 button is pressed
const subFiveButton = document.getElementById('subFive');
subFiveButton.addEventListener('click', e => dispatch({ type: "SUBFIVE" }));

// Reset counter with "RESET" action when reset button is pressed
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', e => myPrompt())

function myPrompt() {
    console.log('prompting')
    let amount = window.prompt('How much?')
    amount = parseInt(amount, 10)
    dispatch({
        type: 'RESET',
        amount: amount
    })
}

// Change color with "COLOR" action when color select is pressed
const colorDropdown = document.getElementById('colors')
colorDropdown.addEventListener('change', e => {dispatch({ type: "CHANGECOLOR", color: colorDropdown.value })})
