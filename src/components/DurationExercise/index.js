// need to create a stopwatch component and the import it here
export default function durationExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      {/* <Stopwatch/> */}
      <button onClick={setMenuScreen}>Back to Menu</button>
      </div>
  }
