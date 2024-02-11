import styled from "styled-components"
import parse from 'html-react-parser';

const StyledQus = styled.div`
    width: 500px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 5px #0000002b;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1{
        font-size: 24px;
    }
    
    select{
        padding: 10px 15px;
        width: 250px;
        border-radius: 5px;
        outline:none;
        border: none;
        background-color: #affcaf;
        font-size: 18px;
    }
    

`

function Question({data, idx, score}){
    const shuffle = (arr) => {
        const n = arr.length;
        for(let i=0; i<n; i++){
            const idx = Math.floor(Math.random()*n);
            const temp = arr[idx];
            arr[idx] = arr[i]
            arr[i] = temp;
        }
        return arr;
    }
    const options = shuffle([...data.incorrect_answers, data.correct_answer])
    
    const handleChange = (evt) => {
        const value = evt.target.value
        if(value === data.correct_answer) score.current[idx] = 1;
    }

    return(
       <StyledQus>
            <h1>Q{idx + 1}. {parse(data.question)}</h1>
            <select id="ques" onChange={handleChange}>
                <option value="none">Choose correct option</option>
                {
                    options.map((op, idx) => {
                        return <option value={op} key={idx}>{parse(op)}</option>
                    })
                }
            </select>

       </StyledQus>
    )
}

export default Question