const superCoders = [ "Cyntia", "Diego A", "Fernando", "Geovanny", "Gisela", "Jaime", "Jassed", "Jes", "Jimmy", "Jorge", "Pedro", "Raúl", "Rubén", "Sophia", "Thuanny", "Virginia", "Adriana", "Luis", "Ainhoa", "Andrea", "Diego B", "Emily", "Víctor", "Wanda", "Bryan"];
let changeName = document.querySelector("#tryAgain--btn");
changeName.addEventListener("click", function(){
    let numEntero = Math.floor(Math.random() * superCoders.length)
    let coderName = superCoders[numEntero]
    superCoders.splice(numEntero,1)
    document.querySelector("#random--name").textContent = coderName;
});

let buttonReset = document.querySelector("#reset--btn");
let selectedCoder = document.querySelector("#random--name");
buttonReset.addEventListener("click", function(){
    selectedCoder.innerText = "";
    
})

function anotherCoder(){
    let newName = document.querySelector("#newName").value 
    superCoders.push(newName);
    document.querySelector("#newName").value = "";
    showNames()
};


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
showNames()





