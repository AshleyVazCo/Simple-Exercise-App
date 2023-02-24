// need to create a repetition (like a counter) component and the import it here
export default function repetitionExercise ({exercise, setMenuScreen}) {
    let {name} = exercise
    let counter = 0

    return <div>
      <p>{name}</p>
      <button onClick={()=>counter(counter+1)}>Rep Count</button>
      <button>Reset</button>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  
  }