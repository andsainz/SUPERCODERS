let coders = ["Cyntia", "Diego A", "Fernando", "Geovanny", "Gisela", "Jaime", "Jassed", "Jes", "Jimmy", "Jorge", "Pedro", "Raúl", "Rubén", "Sophia", "Thuanny", "Virginia", "Adriana", "Luis", "Ainhoa", "Andrea", "Diego B", "Emily", "Víctor", "Wanda", "Bryan"]
let randomName = coders[Math.floor(Math.random()* coders.length)]
//localStorage.setItem("randomName", randomName)

let botonElem = document.getElementById('change--name')
let namesElem = document.getElementById('random--name')


function random(min, max){
    return Math.floor(Math.random() * coders.length);
}

function cambiarNombre(){
    let randomName = random(0, coders.length)
    namesElem.innerText = coders[randomName]
}

cambiarNombre();

botonElem.addEventListener('click', cambiarNombre);