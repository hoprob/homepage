let press;
let click;

//Click easteregg
export const EasterEgg1 = () => {
    document.querySelector('.header').addEventListener('click', click => {
        if(click.clientY > 60 && click.clientY < 90 && click.clientX >  70 && click.clientX <  100){
            if(document.querySelector('.header').style.backgroundImage === "" || document.querySelector('.header').style.backgroundImage === "linear-gradient(black, rgb(54, 54, 54))"){
                document.querySelector('.header').style.background = "linear-gradient(red, rgb(54, 54, 54))";
            }else{
                document.querySelector('.header').style.background = "linear-gradient(black, rgb(54, 54, 54))";
            }
        }
    })
}

//Keybord Easteregg
export const EasterEgg2 = () => {
    let pressedKeys = [];
    const keyWord = 'hej';
    document.addEventListener('keypress', press =>{
    console.log(press.key)
    if(pressedKeys.length >= keyWord.length){
        for(let i = 0; i < keyWord.length; i++){
            pressedKeys[i] = pressedKeys[i+1];
        }
        pressedKeys.pop();
    }
    pressedKeys.push(press.key);
    console.log(pressedKeys.join(''))
    if(pressedKeys.join('') === keyWord){
        alert('     Hej på dig med! :D');
    }
})
}

export const CleanEasterEggs = () => {
    document.removeEventListener('keypress', press);
    document.removeEventListener('click', click);
}
