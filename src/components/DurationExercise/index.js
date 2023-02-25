import Stopwatch from ".Stopwatch"

export default function durationExercise({exercise, setMenuScreen}) {
    let {name} = exercise
     
    return <div>
      <p>{name}</p>
      <Stopwatch/>
      <button onClick={setMenuScreen}>Back to Menu</button>
      </div>
  }
