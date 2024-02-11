import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledForm = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        background-color: white;
        border-radius: 5px ;
        box-shadow: 0 5px 5px #00000034;
        padding: 50px;
        gap: 10px;
        flex-direction: column;

        label, input, select{
            font-size: 20px;
            
        }
        input, select{
            padding: 10px;
            color: gray;
            outline: none;
            border: 1px solid gray;
            border-radius: 5px;
        }

        a{
            text-decoration: none;
            margin: 0 auto ;
            font-size: 20px;
            background-color: #3bc93b;
            padding: 10px 20px;
            border-radius: 5px;
            color: white;
            transition: 0.2s ease all;
            margin-top: 20px;
            &:active{
                transform: scale(0.9);
            }
        }

    }
    
`

function QuizForm() {
    const [queryParams, setQueryParams] = useSearchParams()
    // queryParams.forEach((param) => console.log(param))
    // console.log(queryParams.has("a"))
    // queryParams.delete("a")
    // console.log(queryParams.has("a"))
    const category = queryParams.get("category")
    // function setParams(){
    //     queryParams.append("type", "cat")
    //     setQueryParams(queryParams)
    // }
    // https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple
    // https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean
    // Form
    // number of questions
    // difficulty level
    // type

    const [amount, setAmount] = useState(10)
    const [difficulty, setDifficulty] = useState("any")
    const [type, setType] = useState("any")

  return (
    <StyledForm>
        <form >
            <label htmlFor="questions">Number of questions</label>
            <input type="number" id='questions' value={amount} onChange={(evt) => {
                setAmount(evt.target.value)
            }}/>
            <label htmlFor="difficulty">Difficulty level</label>
            <select id="difficulty" value={difficulty} onChange={(evt) => {
                setDifficulty(evt.target.value)
            }}>
                <option value="any">Any Type</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium </option>
                <option value="hard">Hard</option>
            </select>

            <label htmlFor="type">Type</label>
            <select id="type" value={type} onChange={(evt) => {
                setType(evt.target.value)
            }}>
                <option value="any">Any Type</option>
                <option value="boolean">True/False</option>
                <option value="multiple">Multiple</option>
            </select>

            <Link to={`/start?category=${category}&amount=${amount}&difficulty=${difficulty}&type=${type}`}>Start Quiz...</Link>

        </form>
    </StyledForm>
  )
}

export default QuizForm