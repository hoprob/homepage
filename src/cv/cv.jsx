import {React, useEffect, useState} from "react";
import { EasterEgg1, EasterEgg2, CleanEasterEggs } from "../easterEggs";
import './cv.css';
import '../main.css';
import educations from "./data/education.json"
import workExperience from "./data/workExperience.json"
import { Education } from "../components/Education";
import { WorkExp } from "../components/WorkExp";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";


export function Cv (){

    const [edu, setEdu] = useState([]);
    const [work, setWork] = useState([]);

    useEffect(() => {
        EasterEgg1();
        EasterEgg2();
        setEdu(educations);
        setWork(workExperience);

        return () => {
            CleanEasterEggs();
        }
    }, [])

    return (
        <div>
            <div className="grid" style={{gridTemplateRows:  'auto auto 1fr auto'}}>
                <Header/>
                <Menu/> 
                <div className="topFade" style={{background: "linear-gradient(#9aacba, #d8dee4b2)"}}>            
                </div>
                <section className="education">
                    <h4>Utbildningar</h4>
                    <div id="education-data">
                        {!edu ? <p>Oops, datan kunde ej laddas.. men utbildningar finns! Och det är bra utbildningar dessutom.. </p> : 
                        <>
                            {edu.map((e) => {
                                return <Education title={e.title} years={e.years} school={e.school} graduation={e.graduation} about={e.about}/>
                            })}  
                        </>
                    }
                    </div>        
                </section> 
                <div className="eduToWorkExp"></div>
                <section className="workExperience">
                    <h4>Arbetslivserfarenheter</h4>
                    <div id="workExperience-data">
                    {!work ? <p>Oops, datan kunde ej laddas.. men jag har bara bra erfarenheter, jag lovar!</p> : 
                        <>
                            {work.map((w) => {
                                return <WorkExp title={w.title} years={w.years} city={w.city} role={w.role} about={w.about} />
                            })}
                        </>
                    }
                        
                    </div>
                    
                </section>          
                <footer className="footer">
                    <p>Copyright Robin Svensson 2022</p>
                </footer>
            </div>
        </div>
    )
}