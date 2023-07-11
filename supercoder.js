let botonElem = document.getElementById('change--name')
let citaElem = document.getElementById('random--name')

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarNombre(){
    let randomIndex = random(0, coders.length)
    citaElem.innerText = coders[randomIndex]
}

cambiarNombre();

botonElem.addEventListener('click', cambiarNombre);