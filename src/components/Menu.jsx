import React from "react";
import {Link, NavLink} from 'react-router-dom';
import { Header } from "./Header";
import '../main.css';

export function Menu(){

    return(
        <>
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
            <nav className="menu">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/homepage/home">Startsida</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to='/homepage/cv'>CV</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/homepage/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/homepage/mal">Mål</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/homepage/funfacts">Fun facts</NavLink></li>
                </ul>            
            </nav>  
        </>
    )
}