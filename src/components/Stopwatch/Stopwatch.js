// used with permission from instructor video
import { useCallback, useEffect, useState } from "react"

let currentTimer = 0

export default function StopWatch() {
    let {running, setRunning} = useState(false)
    let {timer, setTimer} = useState(0)
    let updateTimer = useCallback(() => {
        if(running) {
            setTimer((timer) => timer+10)
        }
        // eslint-disable-next-line
    },[running])
    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
        // eslint-disable-next-line
    }, [running])
    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(currentTimer)
        // eslint-disable-next-line
    },[running])
    // eslint-disable-next-line
    let reset = useCallback(() => {
        setTimer(0)
    })
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60 )).toString().padStart(2, "0")
    let mills = (timer % 1000).toString().padStart(3, "0")
    return <div>
        <p>{mins}:{secs}.{mills}</p>
        <button onClick={startStop}>
            {running ? "Pause" : "Start"}
            </button>
        <button onClick={() => {
            setTimer(0)
        }} >Reset</button>
    </div>
}
