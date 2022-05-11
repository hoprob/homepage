import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./home/home.jsx";
import {Cv} from "./cv/cv.jsx";
import {Portfolio} from "./portfolio/portfolio.jsx";
import {Mal} from "./mal/mal.jsx";
import {FunFacts} from "./funfacts/funfacts.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/homepage" element={<Home/>}></Route>
      <Route path="/homepage/home" element={<Home/>}> </Route>
      <Route path="/homepage/cv" element={<Cv/>}></Route>
      <Route path="/homepage/portfolio" element={<Portfolio/>}></Route>
      <Route path="/homepage/mal" element={<Mal/>}></Route>
      <Route path="/homepage/funfacts" element={<FunFacts/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
