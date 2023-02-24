import './App.css'
import {useCallback, useState } from "react"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import RunningExercise from "./components/RunningExercise"

const menuScreen = "menu"
const exerciseScreen = "exercise"
const Duration_Exercise = "duration"
const Repetition_Exercise = "repetition"
const Running_Exercise = "running"

let exerciseList = [
  {type: Repetition_Exercise, name: "Push ups"},
  {type: Duration_Exercise, name: "Bicycling"},
  {type: Running_Exercise, name: "Running"}
]

function App() {
  let [currentScreen, setCurrentScreen] = useState({menuScreen})
  let [currentExercise, setCurrentExercise] = useState({})
  let screenComponent = undefined
  // eslint-disable-next-line
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(exerciseScreen)
  })

  if(currentScreen === menuScreen) {
    screenComponent = <div>
      <p>Exercise Menu</p>
      <ul>
        {exerciseList.map((exercise)=> {
          return <li key={exercise.name}>
            <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
            </li>
  })}
      </ul>
   </div>
  } else if(currentScreen === exerciseScreen) {
    switch(currentExercise.type) {
      case Repetition_Exercise:
        screenComponent = <RepetitionExercise
        exercise={currentExercise}
        setMenuScreen={()=>setCurrentScreen(menuScreen)}/>
      break;

      case Duration_Exercise:
        screenComponent = <DurationExercise 
        exercise={currentExercise}
        setMenuScreen={()=>setCurrentScreen(menuScreen)}/>
      break;

      case Running_Exercise:
        screenComponent = <RunningExercise 
        exercise={currentExercise}
        setMenuScreen={()=>setCurrentScreen(menuScreen)}/>
      break;
      default:
        screenComponent = undefined
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      <p>{screenComponent}</p>
      </header>
    </div>
  )
}

export default App
