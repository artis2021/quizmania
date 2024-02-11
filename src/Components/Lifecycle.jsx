import React, { useEffect, useState } from 'react'

function Lifecycle() {
    // state
    const [count, setCount] = useState(0)
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log("Mounted")

        return () => {
            console.log("Unmounted")
        }
    }, [count])

  // View: The interface that will be shown to the user

  return (
    <div>
        <h1>{count}</h1>
        <h2>{y}</h2>
        <button onClick={() => {
            setY(y + 2)
            // setCount(count + 1)
        }}>Increase</button>
    </div>
  )
}

export default Lifecycle