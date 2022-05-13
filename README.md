# My homepage (Labb 2 Webbutveckling)
## Table of contents
* [Introduction](#Introduction)
* [Description](#Description)
* [Technology & Language](#Technology-&-Language)
* [Easter Eggs](#Easter-Eggs)
* [Reflektion VG-Uppgift](#Reflektion-VG-Uppgift)
## Introduction
This is a project for my education. The purpose is to develop a responsive and accessible presentation and resume of myself as a website!

## Description
The site contains 5 different pages that you can navigate between through a menu. It's one homepage that shows information and an image of me.<br/></br>
The second one is myresume(cv),the content of my resume is in json files witch is included in the project and imported when running. <br/><br/>
Then there's the portfolio page, I have 4 projects built in html and a modal that pops-up with more information through css when clicked. I also have a GET request to my 
profile on the github API to get all my public repositories with name, description and link.<br/></br>
The two last pages of the site, mål (goals) and funfacts, is just fill-upå for the project itself and contains only Lorem text. 
</br>
The page is responsive and tried out on several devices and browsers. It was at first a pure html, css and JS site but then re-built into a ReactJS app with React Router.

## Technology & Language
The website is built with ReactJS and navigates with React Router. There is a couple of files with pure JavaScript that's implemented in the components.
The JSX components is built with HTML from the beginning and translated ti JSX when imported to React.
The Components are styled with CSS.

## Easter Eggs
There is two eastereggs on the website wich runs on all pages. The first is an area in the top left corner, when clicked the header will change its background color.</br></br>
The second one is when a user press the combination of "hej" on the keyboard, a alert popup will show with a messege in response! 
## Reflektion VG-Uppgift
Till Labb2 så valde jag att forstätta på min hemsida jag byggde i Labb1 då jag blev nöjd med grunderna i denna. Jag lade tid redan i Labb1 på att tänka över tillgänglighet och semantik i min hemsida. 
</br></br>
Tillgängligheten på hemsidan har jag arbetat med på ett flertal olika sätt. Till exempel så har jag tänkt på hur kontrasterna blir där jag har text, alltså hur textens färg samspelar med bakgrunden.
Till detta har jag använt verktyg i min webbläsare som kollat av kontrasterna mot WCAG standardens AA-nivå med godkänt resultat!
Jag har också gjort det tydligt vilken sida på hemsidan man befinner sig på genom att ändra bakrundsfärg och textfärg på det menyvalet i menyn som man befinner sig på,
samt att ändra färg när man hovrar över ett val för att indikera vart man är påväg att trycka. 
Ett annat val som jag gjort med tanke på tillgänglighet är att jag har lagt till alternativa texter till bilder för att exempelvis en skärmläsare skall kunna läsa upp vad
bilden föreställer. Jag har också försökt använda en bra semantik som gör det lättare för skärmläsare att uppfatta innehållet på hemsidan.
Med tanke på tillgänglighet så har jag också arbetat med textstorlekar och innehållets placering med hänsyn till olika skärmars storlek, alltså en responsiv hemsida med tillgänglighet i åtanke.
</br></br>
Semantiken på hemsidan tycker jag var mtcket bra i Labb1 men blev inte lika bra i Labb2 till föjd av att jag migrerade hela projektet till React, vilket tvingade mig till 
att införa fler div-taggar och till viss del frångå tänket kring en klar html kod med bra semantik. 
Jag använder mig forfarande av taggar som bidar till en god semantik som header-tagg på min header/rubrik på hemsidan, nav-tagg på min meny och footer-tagg på min footer längst ner
på sidan. Jag har också arbetat med section-taggar för att dela upp innehållet på ett bra sätt mellan header och footer. Till min första-sida använde jag aside-taggen till min
profilbild för att visa på att den är sekundär till texten på samma sida som är det viktiga innehållet!
</br>
Som sammanfattning kring semantiken så har jag fortfarande kvar min grund och tanken jag hade på att ha en god semantik på hemsidan, men den har blivit inkapslad i olika div-taggar till följd av
att jag byggde om projektet till react och därav började arbeta med komponenter. När jag testade min React applikation på WAVE Accesibility Tool så fick jag ändå ett högt värde och godkänt i semantiken 
med tanke på tillgänglighet trots nya div taggar, tack vare den grundliga strukturen jag hade.
</br></br>
För att säkra kompabiliteten har jag testat hemsidan på Firefox, Chrome och Edge på min dator samt på Safari på min iPhone. Jag har också kollat upp de flesta av mina funktioner 
så att webbläsare stödjer dem i verktyget caniuse.com. Jag har ej hittat någon funktion som inte stödjs på de webbläsare som används och är uppdaterade idag.</br> Ska jag ta ett exempel
på en lite nyare funtion inom JavaScript så är det fetch funtionen, för att kunna hämta och skicka data från ett API som jag använder för att hämta mina githup repos. Denna funktion
stödjs ej av exempelvis Internet Exploder (vilket är en gammal webbläsare som jag knappt tror någon använder idag) samt äldre versioner av de flesat webbläsarna. Docjk stödjs det i de flesta av webbläsarna 
med uppdateringar från ca 2015-2017. Så min avvägning blir att fetch är en funtion som är säker att använda då de flesta bör ha uppdaterat sina webbläsare under de senaste 5 åren!
</br></br>
Ett problem som har med kompabilitet att göra som uppstod var att kunna navigera med react router när hemsidan var uppladdad på github-pages. Ett problem var att jag behövde 
utöka url:en i mina Routes att innehålla projektnamnet och inte bara sidnamnet, men det funkade änså inte att skriva en url i webbläsaren för att navigera direkt till en
undersida på webbsidan. Detta för att jag använda mig av BrowserRouter i React-appen som använder sig utav html5:s API teknik för historik, vilket github-pages inte stödjer. Jag fick
istället använda mig utav HashRouter som använder sig av en hashad del av URL:en för att hålla orning på sync och historik. När jag åtgärdat detta funkar navigeringen på webbplatsen
mycket bättre och så som jag önskade.
</br>
Ett annat problem som uppstod kring navigering när jag byggt websidan som en react-app var att för att öppna modal-popups i min protfolio använde jag mig av en a-tagg med 
en href till modal-elemtets id. Jag använde sedan pseudo-klassen :target för att kunna göra modalen synlig när man tryckt på a-taggen. Detta fungearde inte i react med grund 
i ReactRouter, id:t lades till i URL:en och kommunikationen mellan react och css :target funkade ej. Jag fick då bygga om detta med hjälp av useState istället, och göra om a-taggarna till knappar.
När man trycker på knappen ändras en modals useState till true, vilket i sin tur adderar en css klass till modalen som gör den synlig. Klickar man sedan på kryss i modalen
så ändrar useState till false, den extra klassen tas bort och modalen blir osynlig.
</br>
Alltså ett exempel på hur kompabiliteten mellan react och github-pages kunde lösas, samt kompabileteten mellan react och css.
</br></br>
Jag har jobbat med responsiviteten och anpassningen till olika enheter från början med css-grid och mediaquery. När en skärm är mindre än ett antal pixlar som gör jag om hur
sidan presenteras och innehållet med hjälp av att styra hur många kolumner och rader jag har i mitt css-grid. Jag styr också vart någonstans på sidan inehållet skall placeras
gebom css-grid. Det gör att jag enkelt kan placera om innehåll att antingen presenteras brevid varandra, uppepå varandra elelr i olika ordniungar baserat på skärmstorlek.
</br>
Jag har också jobbat med att ändra textstorlekar osv. för att kunna presentera innehållet på ett bra sätt.
</br></br>
I Labb2 så har jag också lagt till en så kallad hamburgebar för att göra menyn och navigereingen mer hanterbar på mindre skärmar, och framförallt smartphones där man använder
touch för att navigera. Jag gjorde så att hamburgebaren alltid är synlig på skärmen genom sticky positionen i css, detta för att jag tycker att det blir enkelt för en smartphone användare
att kunna navigera på min hemsida utan att behöva skrolla upp och ner för att kunna ta sig runt. 
</br></br>
Överlag är jag nöjd med min hemsida och tycker att den förbättrats sedan Labb1. Det är definitivt en sida som jag kommer att vilja bygga vidare på och utveckla react 
komponenterna till det bättre. Jag skulle också vilja göra några dförbättringar i designen som när jag hämtar in mina github-repos, där skulle jag vilja ha en tydligare
och snyggare presentation av repot och en tydligare indikation på att det är en länk. </br>
Det finns alltid förbättringspotential men med det tidsutrymmet som gavs för att skapa denna hemsida tycker jag att den blev mycket bra.



