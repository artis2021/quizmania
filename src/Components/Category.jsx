import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCategory = styled.div`
    background-color: white;
    padding: 20px 30px;
    box-shadow: 0px 4px 5px #109b0390;
    border-radius: 5px;
    width: 400px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;

    h1{
        color: #474747;
        font-weight: 500;
    }

    h2{
        color: #5a5a5a;
    }

    h3{
        color: #5a5a5a;
    }

    a{
        padding: 10px 20px;
        background-color: #0fad01;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        margin: 0 auto;
    }
`

function Category({category}) {
    const [total, setTotal] = useState({})

    useEffect(() => {
        console.log("Mount")
        async function getData(){
            const url = `https://opentdb.com/api_count.php?category=${category.id}`
            try{
                const response = await fetch(url, {
                    method: "GET"
                })
                const data = await response.json()
                setTotal(data.category_question_count)
                
            }
            catch(error){
                console.log(error)
            }
        }
        getData()
    }, [category.id])
  return (
    <StyledCategory>
        <h1>{category.name}</h1>
        <h2>category_id: {category.id}</h2>
        <h3>Easy: {total.total_easy_question_count}</h3>
        <h3>Medium: {total.total_medium_question_count}</h3>
        <h3>Hard: {total.total_hard_question_count}</h3>
        <Link to={`/form?category=${category.id}`}>Attempt Quiz</Link>
    </StyledCategory>
  )
}

export default Category