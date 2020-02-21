class Counter extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
    }

    sayHello() {
        console.log('Yo')
    }

    handleClick() {
        let newState = {
            value: this.state.value + 1
        }

        this.setState(newState)

        console.log('clicked me')
    }

    render() {
        console.log('rendering')

        return (
            <div>
                <span>{this.state.value}</span>
                <button onClick={() => this.handleClick()}>count</button>
            </div>
            
        )
    }
}