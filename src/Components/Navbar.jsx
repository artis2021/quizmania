import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 3px #00000028;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    color: #06bf06;
    font-size: 32px;
    font-weight: bolder;
  }

  .links{
    display: flex;
    gap: 2px;
    
    a{
        text-decoration: none;
        font-size: 18px;
        padding: 5px 10px;
        color: black;
        border-radius: 4px;
        transition: all 0.2s ease;
        &:hover{
            background-color: black;
            color: white;
        }
    }
  }
`

function Navbar(){
    return (
        <StyledNav>
            <div className="logo">
                QuizMania
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/categories">All Categories</Link>
                <Link to="/form?category=any">Random Questions</Link>
            </div>
        </StyledNav>
    )
}

export default Navbar