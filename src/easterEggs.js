

//Click easteregg
export const EasterEgg1 = () => {
    
    console.log('Start Easteregg 1');
    document.querySelector('.header').addEventListener('click', handleClick)
}
function handleClick(e){
    if(e.clientY > 60 && e.clientY < 100 && e.clientX >  70 && e.clientX <  100){
        if(document.querySelector('.header').style.backgroundImage === "" || document.querySelector('.header').style.backgroundImage === "linear-gradient(black, rgb(54, 54, 54))"){
            document.querySelector('.header').style.background = "linear-gradient(red, rgb(54, 54, 54))";
        }else{
            document.querySelector('.header').style.background = "linear-gradient(black, rgb(54, 54, 54))";
        }
    }
}

//Keybord Easteregg
let pressedKeys = [];
const keyWord = 'hej';
export const EasterEgg2 = () => {
    console.log('Start Easteregg 2');
    document.addEventListener('keypress', handleKeyPress)
}
function handleKeyPress(e){
    
    console.log(e.key);
    if(pressedKeys.length >= keyWord.length){
        for(let i = 0; i < keyWord.length; i++){
            pressedKeys[i] = pressedKeys[i+1];
        }
        pressedKeys.pop();
    }
    pressedKeys.push(e.key);
    console.log(pressedKeys.join(''));
    if(pressedKeys.join('') === keyWord){
        alert('     Hej på dig med! :D');
    }
}

export const CleanEasterEggs = () => {
    console.log('Cleaning up from easterEggs');
    document.removeEventListener('keypress', handleKeyPress);
    document.removeEventListener('click', handleClick);
}
