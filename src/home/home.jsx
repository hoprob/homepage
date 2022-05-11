import React from "react";
import { useEffect } from "react";
import './home.css';
import '../main.css';
import profilePicture from '../image/robin.jpg';
import {EasterEgg1, EasterEgg2, CleanEasterEggs} from '../easterEggs.js';
import {Link} from 'react-router-dom'
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";

export function Home(){
    useEffect(() =>{
        console.log('In Effect');
        EasterEgg1();
        EasterEgg2();
        return () => {
            CleanEasterEggs();
        }
    },[]);
    return (
        <div className="grid">
            <Header/>
            <Menu/>      
            <aside>
                <img className="profilePicture" src={profilePicture} alt="Picture of Robin"/>
            </aside>
            <section className="aboutMe">
                <h2>Hallå där!</h2>
                <br/>
                <p>Mitt namn är Robin Svensson och jag håller just nu på att studera till systemutvecklare med inriktning mot .NET!</p>
                <br/>
                <p>På denna sidan kan du ta del av mitt CV, lite projekt vi gjort under utbildningen och annat bra vetande om mig!</p>
                <br/>
                <p>Jag bor strax utanför Varberg i en villa tillsammans med min sambo och vår som som fyller 3 i år. Jag själv fyller detsamma gångrat med 10 i Augusti!</p>
                <br/>
                <p>Min fritid spenderar jag gärna på diverse projekt i hemmmet tillsammans med min familj. Jag gillar också att spendera tid in mitt bryggeri och framförallt då brygga öl, men också allt runtommkring ölbryggningen.</p>
                <br/>
                <p>Ett exempel på saker som man <strong>måste</strong> göra vid ölbryggning är såklart att bygga ett program för att styra jäskammare, detta via en raspberryPi, reläkort, tempgivare och en enhet i jäskärlet som kommunicerar med BLE.
                </p>
                <br/>
                <p><strong>OTROLIGT KUL!</strong>
                </p>
                <br/>
            </section>                 
            <footer className="footer">
                <p>Copyright Robin Svensson 2022</p>
            </footer>
    </div>
    )
}
