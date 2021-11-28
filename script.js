const main= document.querySelector('main');

function createWord(){
    let word= 'SALUT';

    for(let i = 0; i <= 5; i++){
        var interval=setInterval(function(){
        const letters= document.createElement('p');
        letters.innerHTML= word[i++]
        main.appendChild(letters)
        setTimeout(() => {
            clearInterval(interval)
        }, 5000);
    },1000)
    if (letters === word){
        clearInterval(letters)
    }
}

}
setTimeout(createWord, 10);






