// This is the main exercise for this week. 
// Need to create a stopwatch component and the import it here
// Need to do: Laps should be shown at the bottom of the component and should be displayed using map using an array of lap times stored as an array. Laps can be stored on the component and do not need to be stored on the parent component.

export default function runningExercise ({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      {/* <Stopwatch/> */}
      <button>Start</button>
      <button>Reset</button>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  
  }