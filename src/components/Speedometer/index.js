// Write your code here
import { Component } from "react"
import './index.css'

class Speedometer extends Component {
    state = { speed: 0 }
    onAccelerate = () => {
        const { speed } = this.state
        if (speed < 200) {
            this.setState((prevState) => ({ speed: prevState.speed + 10 }))
        }
    }
    onBreak = () => {
        const { speed } = this.state
        if (speed > 0) {
            this.setState((prevState) => ({ speed: prevState.speed - 10 }))
        }
    }
    render() {
        const { speed } = this.state
        return (
            <div className="bg-container">
                <h1 className="main-heading">SPEEDOMETER</h1>
                <img className="image" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" />
                <h1 className="mini-heading">Speed is {speed}mph</h1>
                <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
                <div className="button-container">
                    <button type="button" className"ac-button" onClick={onAccelerate}>Accelerate</button>
                    <button type="button" className"ab-button" onClick={onBreak}>Apply Brake</button>
                </div>
                
            </div>
        )
    }
}

export default Speedometer