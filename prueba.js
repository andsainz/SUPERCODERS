let coders = ["Cyntia", "Diego A", "Fernando", "Geovanny", "Gisela", "Jaime", "Jassed", "Jes", "Jimmy", "Jorge", "Pedro", "Raúl", "Rubén", "Sophia", "Thuanny", "Virginia", "Adriana", "Luis", "Ainhoa", "Andrea", "Diego B", "Emily", "Víctor", "Wanda", "Bryan"]
let botonElem = document.getElementById('change--name')
let namesElem = document.getElementById('random--name')


function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarNombre(){
    let randomIndex = random(0, coders.length)
    namesElem.innerText = coders[randomIndex]
}

cambiarNombre();

botonElem.addEventListener('click', cambiarNombre);

let botonReset = document.getElementById('reset');

function resetearCampo() {
    namesElem.innerText = "";
}

botonReset.addEventListener('click', function() {
    resetearCampo();
});