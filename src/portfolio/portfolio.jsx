import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { EasterEgg1, EasterEgg2, CleanEasterEggs } from "../easterEggs";
import { GitHubRepo } from "../components/GithubRepo";
import '../main.css';
import './portfolio.css';
import NumGamePic from '../image/NumbersGame.png';
import GitHubLogo from '../image/GitHub-Mark-32px.png';
import Ebank_LoggedOut from "../image/ebank_loggedOut.png";
import Ebank_LoggedIn from "../image/ebank_loggedIn.png";
import SnakePic from "../image/snake.png";
import APIPic from "../image/API_get.png";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";

export function Portfolio (){
    useEffect(() => {
        EasterEgg1();
        EasterEgg2();

        return () => {
            CleanEasterEggs();
        }
    },[])

    return(
        <div className="grid">
            <Header/>
            <Menu/>     
            <section className="portfolio">
                <h2>Några av mina projekt:</h2>
                <ul>
                    <li> <a href="#numGame" className="btn numGame">NumbersGame</a></li>
                    <div id="numGame" className="modal">
                        <div className="modal-content">                   
                            <h3>NumbersGame</h3>
                            <p>Ett enkelt spel i console-format där det handlar om att gissa rätt nummer. Detta gjordes i vår första kurs på Campus!</p>
                            <img src={NumGamePic} alt="Picture of the NumbersGame in console"/>
                            <br/>
                            <a href="https://github.com/hoprob/NumbersGame.git" target="_blank"><img src={GitHubLogo} alt="Link to GitHub repo"/></a>
                            <div className="modal-close">
                                <a href="#" >&times;</a>
                            </div>
                        </div>
                    </div>
                    <li> <a href="#eBank" className="btn eBank">eBank</a></li>
                    <div id="eBank" className="modal">
                        <div className="modal-content">                   
                            <h3>eBank</h3>
                            <p>Denna applikation gjordes som slutprojekt i kursen "Utveckling med C#" på Campus.</p>
                            <p>Det är en bankapplikation i console-format!</p>
                            <img src={Ebank_LoggedOut} alt="Picture of the bank application when logged out"/>
                            <img src={Ebank_LoggedIn} alt="Picture of the bank application when logged in"/>
                            <br/>
                            <a href="https://github.com/hoprob/eBank.git" target="_blank"><img src={GitHubLogo} alt="Link to GitHub repo"/></a>
                            <div className="modal-close">
                                <a href="#" >&times;</a>
                            </div>
                        </div>
                    </div>
                    <li><a href="#snake" className="btn snake">Snake</a></li>
                    <div id="snake" className="modal">
                        <div className="modal-content">                   
                            <h3>Snake</h3>
                            <p>Detta är ett klassiskt Snake-spel som jag gjort på min fritid. Spelet är byggt i Console-format och har varit en bra övning för mig i mina studier!</p>
                            <img src={SnakePic} alt="Picture of the snkake console-game"/>
                            <br/>
                            <a href="https://github.com/hoprob/Snake.git" target="_blank"><img src={GitHubLogo} alt="Link to GitHub repo"/></a>
                            <div className="modal-close">
                                <a href="#" >&times;</a>
                            </div>
                        </div>
                    </div>
                    <li><a href="#rest-api" className="btn rest-api">REST-API</a></li>
                    <div id="rest-api" className="modal">
                        <div className="modal-content">                   
                            <h3>REST-API</h3>
                            <p>Ett API som sköter requests till en databas för tidrapporter.<br/> API:t är byggt med ASP.NET CORE WebbAPI och testat i verktygen Postman!</p>
                            <img src={APIPic} alt="Picture of the api from Postman"/>
                            <br/>
                            <a href="https://github.com/hoprob/AvanceradDOTNET_Projekt.git" target="_blank"><img src={GitHubLogo} alt="Link to GitHub repo"/></a>
                            <div className="modal-close">
                                <a href="#" >&times;</a>
                            </div>
                        </div>
                    </div>
                </ul>
                <div className="githubRepo">
                    <h2>Länkar till mitt github repo:</h2>
                    <GitHubRepo />
                </div>
            </section>
            <footer className="footer">
                <p>Copyright Robin Svensson 2022</p>
            </footer>
    </div>
    )
}