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
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/home">Startsida</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to='/cv'>CV</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/mal">Mål</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to="/funfacts">Fun facts</NavLink></li>
                </ul>            
            </nav>  
        </>
    )
}