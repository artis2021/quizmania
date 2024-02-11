import './App.css';
import {Link} from "react-router-dom"
import Navbar from './Components/Navbar';
import styled from "styled-components"

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content{
    width: 100%;
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    h1{
      font-weight: 500;
      span{
        color: #01ad01;
        background-color: white;
        padding: 5px 10px;
        border: 2px solid #01ad01;
        border-radius: 5px;
      }
    }

    a{
      text-decoration: none;
      outline: none;
      color: black;
      font-size: 18px;
      background-color: #01ad01;
      padding: 10px 20px;
      color: white;
      border-radius: 5px;
      transition: 0.2s ease all;

      &:hover{
        background-color: green;
      }

      &:active{
        transform: scale(0.9);
      }
    }

  }
`

function App() {
  return (
    <StyledApp >
      <Navbar />
      <div className="content">
        <h1>
          Welcome to <span>QuizMania</span>
        </h1>
        <Link to="/categories">Explore Categories</Link>
      </div>
    </StyledApp>
  );
}

export default App;
