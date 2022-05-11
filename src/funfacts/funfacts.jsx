import {React, useEffect} from "react";
import { EasterEgg1, EasterEgg2, CleanEasterEggs } from "../easterEggs";
import {Link} from 'react-router-dom';
import '../main.css';
import './funfacts.css'
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";

export function FunFacts () {
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
            <section className="funfacts">
                <h2>FunFacts om mig på latin:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit provident doloribus. Ab repellat voluptatibus atque eveniet impedit quo aspernatur commodi alias saepe libero ducimus, doloribus corporis in eum rem eaque tempora deserunt? Et commodi dicta alias sunt voluptate mollitia aspernatur libero aperiam! Laborum harum sequi vitae officia ullam culpa doloribus facilis error beatae dicta reiciendis eveniet totam est natus, maxime ipsa voluptas iure recusandae aut voluptatem blanditiis omnis unde consequuntur adipisci? Quasi fugit provident voluptatum rem enim expedita unde. Eaque quam illum cum, similique doloremque ab nesciunt perspiciatis id nulla recusandae voluptatem accusamus quo temporibus quas ipsam quaerat quod, voluptatibus, placeat a? Dicta similique beatae reprehenderit hic consequatur temporibus vero delectus odio animi cumque labore, mollitia dolore voluptas quae veritatis quaerat commodi rerum ducimus. Recusandae explicabo ducimus vitae minima, quisquam cupiditate, quibusdam, sed sit quod et provident aspernatur voluptate ipsa. Atque repudiandae aliquid at dicta fugit architecto consequatur veritatis nisi tempore numquam quisquam illum officiis vero, laborum aspernatur dolorum labore excepturi? Fuga doloremque cumque fugiat totam rem debitis, dignissimos vero. Fugiat cumque quas sed repellendus aut numquam facilis, tempora veritatis similique rem dolor voluptatibus sequi error molestiae soluta architecto molestias laudantium aperiam porro ea ex impedit nihil minus delectus. Quia reiciendis sapiente magnam, hic doloribus asperiores vitae quas totam cum, repellat eligendi autem quod nesciunt illum est dolores atque! Delectus et pariatur neque totam velit ipsa laborum rem iusto modi! Ea vitae sint, fugit molestias doloremque omnis magnam quis? Exercitationem laborum nulla suscipit voluptatum beatae fugiat? Beatae consequatur soluta quod a nostrum, nam est eum iure quasi consequuntur quibusdam. Tempora aliquam dignissimos modi ab, enim eligendi ea quo delectus itaque odit laborum commodi quis molestiae? Sunt consectetur illo doloremque cum mollitia perspiciatis, nobis deleniti dolores labore hic quisquam, inventore, eum deserunt possimus autem? Qui tenetur repellat dolorum deleniti natus molestias, dolore ipsa, sint, eveniet atque consectetur impedit quas debitis minima dolor assumenda nam voluptas neque fugiat vel eaque expedita alias. Recusandae aperiam consequuntur labore aspernatur adipisci doloribus quis. Eligendi tenetur culpa magnam veritatis animi aliquid odio ipsa nihil repudiandae excepturi doloribus at voluptatibus nam quas reprehenderit dignissimos, repellat consequuntur! Quod iusto totam a similique voluptates tenetur harum id deleniti accusantium repudiandae laboriosam earum atque libero consequuntur perspiciatis suscipit, architecto quam. Quis, quaerat. Maxime eum et ea commodi blanditiis deserunt nostrum beatae laudantium debitis odio accusamus eligendi delectus nulla mollitia ab voluptatem provident libero aperiam, cumque esse obcaecati qui! Iusto tenetur rerum vero eaque numquam similique adipisci perspiciatis reiciendis amet architecto, corporis, omnis quae vitae, nobis repellendus hic repellat veritatis cumque quaerat dolor! Explicabo, quibusdam ipsa. Quisquam assumenda natus, deserunt provident ducimus atque sunt maiores ad mollitia similique sed exercitationem repellat ullam facilis nemo quidem perspiciatis repudiandae aliquam. Ducimus doloribus architecto beatae dolorum asperiores, possimus assumenda ullam quae tempore soluta, dolores mollitia sint cupiditate quibusdam et veniam in temporibus! Corporis ipsa eaque temporibus animi numquam consequuntur aspernatur, dolore doloribus vel provident labore sint, modi minus repellendus iure quisquam hic, quaerat eius facilis id cum. Beatae et quam voluptas placeat quia.</p>
            </section>
            <footer className="footer">
                <p>Copyright Robin Svensson 2022</p>
            </footer>
        </div>
    )

}