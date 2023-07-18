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




