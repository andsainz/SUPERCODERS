const superCoders = [ "Cyntia", "Diego A", "Fernando", "Geovanny", "Gisela", "Jaime", "Jassed", "Jes", "Jimmy", "Jorge", "Pedro", "Raúl", "Rubén", "Sophia", "Thuanny", "Virginia", "Adriana", "Luis", "Ainhoa", "Andrea", "Diego B", "Emily", "Víctor", "Wanda", "Bryan"];

function changeName() {
    if (superCoders.length <= 0) {
        alert("El último Coder ya ha sido seleccionado."); // Alerta cuando es el último coder
        window.location.href = "coders-home.html"; // Volver a la pantalla de inicio
        return;
    }

    let index = Math.floor(Math.random() * superCoders.length);
    let coderName = superCoders[index];
    superCoders.splice(index, 1); // No volverá a aparecer el coder seleccionado

    document.getElementById("random--name").textContent = coderName;
    alert(`${coderName}, te tocó`); // Aviso del nombre del coder seleccionado
}

//agregar nombres
function anotherCoder(){
    let newName = document.querySelector("#newName").value 
    superCoders.push(newName);
    document.querySelector("#newName").value = "";
    showNames();
};

//mostrar lista
function showNames(){
    let list = document.querySelector("#namesList");
    list.innerHTML = "";
    for (let i = 0; i < superCoders.length; i++){
    let li = document.createElement("li");
    li.innerHTML = `<span>${superCoders[i]}</span><img id="editName--btn" src="images/draw.png" onclick="editName(${i})"> <img id="deleteName--btn" src="images/close.png" onclick="removeName(${i})">`;
    list.appendChild(li);
    }
};

function editName(index){
    let namePrompt = prompt("Edita el nombre del superCoder", superCoders[index]);
    superCoders[index] =  namePrompt    
    showNames();
}

function removeName(index) {
    if (confirm(`¿Quieres eliminar este ${superCoders[index]}?`)){
        superCoders.splice(index,1)
        showNames()
    }
}

function reset(){
    location.reload()
}

showNames()


function deleteAll() {
    superCoders.length = 0; 
    showNames(); 
}


document.getElementById("deleteAll--btn").addEventListener("click", deleteAll);



//Animación de heroes
let firstHero = document.getElementByClass("hero1-container");
let opacity = 0;

let fadeInFirstHero = setInterval(() => {
    if (opacity >= 1) {
        clearInterval(fadeInFirstHero);
    }
    firstHero.style.opacity = opacity;
    opacity += 0.01;
}, 5);


