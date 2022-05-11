import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { EasterEgg1, EasterEgg2, CleanEasterEggs } from "../easterEggs";
import '../main.css';
import './mal.css';
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";

export function Mal (){
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
            <div className="topFade">
            </div>
            <section className="ambitions">
                <h2>Ambitioner</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum saepe possimus debitis culpa eos asperiores rerum porro! Iusto molestiae repudiandae quisquam nulla, labore, laudantium quos, ab laborum unde recusandae neque? Voluptate voluptatem quisquam numquam quod blanditiis quis similique amet, porro reiciendis nemo doloribus quo unde saepe dolor dolore officiis vitae.</p>
            </section>
            <section className="goals">
                <h2>Mål</h2>
                <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </section>
            
            <section className="getThere">
                <h2>Vägen dit</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia qui iure voluptatum sapiente non voluptas facilis suscipit ipsum eum veritatis quas enim et, deleniti magni sed optio unde perferendis saepe? Ipsam commodi distinctio impedit rem nemo, saepe itaque vero quisquam praesentium quibusdam, odio similique modi in. Accusamus voluptatum, sit id molestias corrupti quam modi fugiat culpa at dolorum eligendi velit voluptatem dolores rem illo dicta impedit, alias quae libero nisi eum consequatur, sed aliquam. Magni magnam expedita sed sit, unde similique ipsum optio porro tempore fugiat cumque, quia itaque, blanditiis quod! Fugiat laboriosam sed et voluptas magnam dolorem nam nemo unde sunt repellat quibusdam ullam nesciunt maiores culpa dolores eum ea quaerat, necessitatibus laborum dolore ipsum eveniet? Recusandae ex quia atque? Necessitatibus neque saepe corrupti quidem ipsa dolores exercitationem explicabo pariatur iusto, voluptas doloremque commodi est fugit deserunt dicta odit recusandae ut facere! Architecto dicta aspernatur repellat repudiandae quo aperiam autem laborum illo voluptatum temporibus doloremque sit ab aliquam nemo, eligendi iusto facilis aut quibusdam unde, ea et corrupti optio. Odit facere veritatis sit, natus possimus, et maxime ullam repudiandae illum error sunt facilis beatae vel numquam, fuga esse unde nesciunt nihil aliquid vitae architecto enim excepturi voluptatem. Accusantium?</p>
            </section>
            <footer className="footer">
                <p>Copyright Robin Svensson 2022</p>
            </footer>
        </div>
    )
}