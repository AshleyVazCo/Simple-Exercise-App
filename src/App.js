import './App.css'
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"

function App() {
  let exerciseData = [
    {
      exerciseName: "Exercises",
      exerciseItems: [
        {
        exerciseZero: "Biking",
        exerciseOne: "Running",
        exerciseTwo: "Push-ups",
        exerciseThree: "Crunches"
        }
      ],
      exerciseButtonsRep: [
        {
          repButton: "Rep Count",
          repReset: "Reset",
        }
      ],
      exerciseButtonDu: [
        {
          duButton: "Start",
          duReset: "Reset",
        }
      ]
    }
  ]

  return (
    <div className="App">
      <h1>Exercises</h1>
      <button>{this.props.exerciseZero}Biking</button>
      <button>{this.props.exerciseOne}Running</button>
      <button>{this.props.exerciseTwo}Push-ups</button>
      <button>{this.props.exerciseThree}Crunches</button>
    <RepetitionExercise data={exerciseData}></RepetitionExercise>
    <DurationExercise data={exerciseData}></DurationExercise>
    </div>
  )
}

export default App
