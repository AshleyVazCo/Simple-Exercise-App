import React from "react"
export default class RepetitionExercise extends React.Component {
    render() {

        return (
            <>
            <div>
            <h1>{this.props.exerciseTwo}</h1>
           <button>{this.props.repButton}</button>
           <button>{this.props.repReset}</button>
            </div>
            </>
        )
    }
}