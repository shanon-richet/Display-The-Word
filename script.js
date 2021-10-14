const main= document.querySelector('main');

function createWord(){
    let word= 'Salut'
    for(let i= 0; i<5 ; i++){
    const letters= document.createElement('p');
    letters.innerHTML= word[0+i];
    main.appendChild(letters);
    }
}

setTimeout(createWord, 1000)

