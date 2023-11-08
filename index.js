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