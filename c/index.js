function suma(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").innerHTML=(n1+n2);     
}

function resta(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").innerHTML=(n1-n2);     
}

function multiplicacion(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").innerHTML=(n1*n2);     
}

function division(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").innerHTML=(n1/n2);     
}

// function fondo() {
//     body.style.background="#0099FF";
    
// }
// let boton=document.querySelector(".click");
// boton.addEventListener("click", function () {
// fondo();
// });

// let boton=document.querySelector(".botonClick");
// boton.addEventListener("Click", function(){
//     console.log("Clic");
//     boton.classList.toggle("click2");
// })


// let boton=document.querySelector(".botonClick");
// boton.addEventListener("click",function(){
//     console.log("Clic");
// //     boton.classList.toggle(".click2");
// // });
// let boton=document.querySelector(".botonClick");
// function fondo() {
// boton.style.background="yellow";
// }
// boton.addEventListener("mouseout", function(){
//     console.log("Clic");
// })
// window.addEventListener("keydown", () =>{
//     console.log("pulso una tecla");
//     console.log(string.fromCharCode(e.keyCode));
// })

// window.addEventListener("keypress", () =>{
//     console.log("presiono una tecla");
// })

// window.addEventListener("keyup", () =>{
//     console.log(" una tecla");
// })
function agg() {
    let text = document.getElementById("text");
    document.getElementById("area").innerHTML =(text+=text);
    
}
