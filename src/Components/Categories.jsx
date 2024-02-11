import styled from 'styled-components'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import Category from './Category'

const StyledCategories = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    .content{
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }
    
`

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log("Mounted")
        async function getData(){
            const url = 'https://opentdb.com/api_category.php'
            try {
                const response = await fetch(url, {
                    method: "GET"
                })
                const data = await response.json()
                
                // set the categories with the data we got
                setCategories(data.trivia_categories)

                // https://opentdb.com/api_count.php?category=9
            } catch (error) {
                console.log(error)
            }
        }
        getData()

        return () => console.log("Unmounted")
    }, [])

    return (
        <StyledCategories>
            <Navbar />
            <div className="content">
                {
                    categories.map((category, idx) => {
                        return (
                            <Category category={category} key={idx}/>
                        )
                    })
                }
            </div>
        </StyledCategories>
    )
}

export default Categories