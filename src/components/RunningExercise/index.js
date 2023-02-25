// This is the main exercise for this week. 
// Need to create a stopwatch component and the import it here
// Need to do: Laps should be shown at the bottom of the component and should be displayed using map using an array of lap times stored as an array. Laps can be stored on the component and do not need to be stored on the parent component.
import StopWatch from "../StopWatch/StopWatch"
export default function runningExercise ({exercise, setMenuScreen}) {
    let {name} = exercise
    const lapTimes = ["00:30.05", "01:05.00", "00:45.10", "01:10.10"]
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <p>{lapTimes.map(StopWatch)}</p>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  
  }