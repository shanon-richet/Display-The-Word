const main= document.querySelector('main');

function createWord(){
    let word= 'SALUT';

    for(let i = 0; i <= 5; i++){
        var interval=setInterval(function(){
        const letters= document.createElement('p');
        letters.innerHTML= word[i++]
        main.appendChild(letters)
        interval = setInterval(createWord, 4000)
    },1000)
    if (letters === word.slice(0,5)){
        clearInterval(letters)
    }
    if (letters.length === 5){
        clearInterval()
    }
}
}
setTimeout(createWord, 10);









