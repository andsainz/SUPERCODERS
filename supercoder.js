const superCoders = [ "Cyntia", "Diego A", "Fernando", "Geovanny", "Gisela", "Jaime", "Jassed", "Jes", "Jimmy", "Jorge", "Pedro", "Raúl", "Rubén", "Sophia", "Thuanny", "Virginia", "Adriana", "Luis", "Ainhoa", "Andrea", "Diego B", "Emily", "Víctor", "Wanda", "Bryan"];

function changeName() {
    let index = Math.floor(Math.random() * superCoders.length)
    let coderName = superCoders[index]
    superCoders.splice(index, 1) //no vuelve a aparecer el coder seleccionado

    document.getElementById("random--name").textContent = coderName;
    if(superCoders.length<=0){
        alert("último coder") //alerta último coder
    } else{alert(`${coderName}, te tocó`)}//aviso del nombre del coder seleccionado
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
    li.innerHTML = `<span>${superCoders[i]}</span><img src="images/draw.png" onclick="editName(${i})"> <img src="images/close.png" onclick="removeName(${i})">`;
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





