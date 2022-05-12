import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Routes, Route} from "react-router-dom";
import { Home } from "./home/home.jsx";
import {Cv} from "./cv/cv.jsx";
import {Portfolio} from "./portfolio/portfolio.jsx";
import {Mal} from "./mal/mal.jsx";
import {FunFacts} from "./funfacts/funfacts.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/home" element={<Home/>}> </Route> */}
      <Route path="/cv" element={<Cv/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/mal" element={<Mal/>}></Route>
      <Route path="/funfacts" element={<FunFacts/>}></Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
