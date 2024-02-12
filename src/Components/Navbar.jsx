import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => (theme === "light" ? "#ffffff" : "black") };
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
    align-items: center;
    
    a{
        text-decoration: none;
        font-size: 18px;
        padding: 5px 10px;
        color: ${({theme}) => {
                return theme === "light" ? "black" : "white"
            }};
        border-radius: 4px;
        transition: all 0.2s ease;
        &:hover{
            background-color: ${({theme}) => {
                return theme === "light" ? "black" : "white"
            }};
            color: ${({theme}) => {
                return theme === "light" ? "white" : "black"
            }};
        }
    }
    .btn{
        width: 40px;
        height: 20px;
        background-color: ${({theme}) => {
                return theme === "light" ? "black" : "white"
            }};
        border-radius: 20px;
        padding: 1px;
        .ball{
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color: ${({theme}) => {
                return theme === "light" ? "white" : "black"
            }};
            transition: 0.2s ease all;
            /* &:hover{
                transform: translateX(21px);
            } */
            transform: ${({theme}) => {
                return theme === "light" ? "translateX(0px)" : "translateX(21px)"
            }};

        }

    }
  }
`



function Navbar(){
    const {theme, setTheme} = useContext(ThemeContext)

    const handleClick = () => {
        if(theme === "light") setTheme("dark")
        else setTheme("light")
    }

    return (
        <StyledNav theme={theme}>
            <div className="logo">
                QuizMania
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/categories">All Categories</Link>
                <Link to="/form?category=any">Random Questions</Link>
                <div className='btn'>
                    <div className='ball' onClick={handleClick}></div>
                </div>
            </div>
        </StyledNav>
    )
}

export default Navbar