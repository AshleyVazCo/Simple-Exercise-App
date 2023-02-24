import React from "react"

export default class DurationExercise extends React.Component {
    render() {
        return (
            <>
            <div>
                <h1>{this.props.exerciseOne}</h1>
                <button>{this.props.duButton}Start</button>
                <button>{this.props.duReset}Reset</button>
            </div>
            </>
        )
    }
}