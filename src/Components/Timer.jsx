import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledTimer = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: white;
    box-shadow: 0 7px 18px #00000035;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
`

function Timer({handleClick, amount}) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const currentId = setInterval(() => {
            if(minutes == amount) {
                handleClick()
                console.log("hii")
            }

            if (seconds === 59) {
               
                setMinutes(minutes + 1)
                setSeconds(0)
            } else {
                setSeconds(seconds + 1)
            }
        }, 1000)

        return () => {
            clearInterval(currentId)
        }
    })
    return (
        <StyledTimer>
            {minutes}m : {seconds}s
        </StyledTimer>
    )
}

export default Timer