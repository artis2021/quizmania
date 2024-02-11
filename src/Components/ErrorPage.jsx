import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const StyledError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: 10px;
    img{
        width: 400px;
    }
    a{
        text-decoration: none;
        font-size: 30px;
        padding: 10px 20px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 5px 7px #0000002c;

    }
`

function ErrorPage(){
    return (
        <StyledError >
            
            <img src="https://img.lovepik.com/element/40021/7866.png_1200.png" alt="error" />
            <h1>Error 404! Not Found</h1>
            <Link to="/">Home</Link>
        </StyledError >
    )
}

export default ErrorPage