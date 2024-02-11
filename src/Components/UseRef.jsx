import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
//   const [state, setState] = useState(0)

//   useEffect(() => {
//     console.log("Mounted")
    
//     return () => {
//         console.log("Unmounted")
//     }
//   }, [state])

  const score = useRef(0)
  
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const currentId = setInterval(() => {
        if(seconds === 59){
            setMinutes(minutes + 1)
            setSeconds(0)
        }else{
            setSeconds(seconds + 1)
        }
      }, 1000)

      return () => {
        clearInterval(currentId)
      }
  })


  return (
    <div>
        {
            score.current
        }
        <button onClick={() => {
            // setState(state + 1)
            score.current = score.current + 2
            console.log(score)
        }}>Click me</button>
        <h1>{minutes} : {seconds}</h1>
    </div>
  )
}

export default UseRef