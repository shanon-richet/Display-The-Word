const main= document.querySelector('main');

function createWord(){
    let word= 'SALUT';
        setTimeout(function(){
            const letters= document.createElement('p');
            letters.innerHTML= word[0]
            main.appendChild(letters)
            setTimeout(function(){
                const letters= document.createElement('p');
                letters.innerHTML= word[0+1]
                main.appendChild(letters)  
                setTimeout(function(){
                    const letters= document.createElement('p');
                    letters.innerHTML= word[0+2]
                    main.appendChild(letters) 
                    setTimeout(function(){
                        const letters= document.createElement('p');
                        letters.innerHTML= word[0+3]
                        main.appendChild(letters)  
                        setTimeout(function(){
                            const letters= document.createElement('p');
                            letters.innerHTML= word[0+4]
                            main.appendChild(letters)  
                        },2000)
                    },2000) 
                },2000)
            },2000)
        }, 2000)
}
setTimeout(createWord, 2000);


