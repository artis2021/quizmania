import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './Components/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Categories from './Components/Categories';
import Lifecycle from './Components/Lifecycle';
import QuizForm from './Components/QuizForm';
import StartQuiz from './Components/StartQuiz';
import UseRef from './Components/UseRef';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/categories",
    element: <Categories/>
  },
  {
    path: "/lifecycle",
    element: <Lifecycle />
  },
  {
    path: "/form",
    element: <QuizForm />
  },
  {
    path: "/start",
    element: <StartQuiz />
  },
  {
    path: "ref",
    element: <UseRef />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider  router = {router} />
);

