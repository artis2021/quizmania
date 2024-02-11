import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Question from './Question'
import Navbar from './Navbar'
import Timer from './Timer'

const StyledQuiz = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    button{
        text-decoration: none;
        background-color: #21c121;
        padding: 10px 20px;
        border-radius: 20px;
        color: white;
        transition: 0ms.2s ease all;
        margin-top: 30px;
        border:none;
        outline: none;
        box-shadow: 0 5px 7px #21c121b6;
    }

    .score{
        padding: 40px 60px;
        font-size: 28px;
        background-color: white;
        box-shadow: 0 12px 18px #0000002a;
        border-radius: 20px;
        span{
            font-size: 36px;
            color: white;
            padding: 0 20px;
            border-radius: 5px;
            background-color: #2deb2d;
        }
    }


    
`


function StartQuiz() {
    const [queryParams] = useSearchParams()
    const category = queryParams.get("category")
    const difficulty = queryParams.get("difficulty")
    const type = queryParams.get("type")
    const amount = queryParams.get("amount")
    const [questions, setQuestions] = useState([])

    const [result, setResult] = useState(-1);

    const array = []
    for(let i = 0; i<amount; i++){
        array.push(0)
    }
    const score = useRef(array);

    useEffect(() => {
        // https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple
        let URL = `https://opentdb.com/api.php?amount=${amount}`
        if (type && type !== "any") URL += `&type=${type}`
        if (category && category !== "any") URL += `&category=${category}`
        if (difficulty && difficulty !== "any") URL += `&difficulty=${difficulty}`

        async function getData() {
            try {
                const response = await fetch(URL, {
                    method: "GET"
                })
                const data = await response.json()
                console.log(data.results)
                setQuestions(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [type, category, difficulty, amount])

    const handleClick = () => {
        let ans = 0;
        for(let i=0; i<amount; i++) ans += score.current[i];
        setResult(ans)
    }

    return (
        <StyledQuiz>
            {result === -1 ?
                <>
                    <Timer handleClick = {handleClick} amount = {amount}  />
                    {questions.map((question, ind) => {
                        return <Question data={question} idx={ind} score={score} key={ind}/>
                    })}
                    <button onClick={handleClick}>Submit Quiz</button>
                </>  : <>
                    <div className="score">
                        Your score is <span>{result}</span>
                    </div>
                </>
}
    </StyledQuiz>
    )
}

export default StartQuiz