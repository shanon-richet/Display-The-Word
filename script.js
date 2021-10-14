const main= document.querySelector('main');
function createS(){
    const S= document.createElement('p');
    S.innerHTML= "SALUT".slice(0,1);
    main.appendChild(S);
}
function createA(){
    const A= document.createElement('p');
    A.innerHTML= "SALUT".slice(1,2);
    main.appendChild(A);
}
function createL(){
    const L= document.createElement('p');
    L.innerHTML= "SALUT".slice(2,3);
    main.appendChild(L);
}
function createU(){
    const U= document.createElement('p');
    U.innerHTML= "SALUT".slice(3,4);
    main.appendChild(U);
}
function createT(){
    const T= document.createElement('p');
    T.innerHTML= "SALUT".slice(4,5);
    main.appendChild(T);
}

setTimeout(createS, 1000)
setTimeout(createA, 2000)
setTimeout(createL, 3000)
setTimeout(createU, 4000)
setTimeout(createT, 5000)
