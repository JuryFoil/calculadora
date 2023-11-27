var pC= document.querySelector('#pantallaCalculadora');
document.querySelector('#limpiar').addEventListener('click', function(){
        pC.value = '';
})
document.querySelector('#borrar').addEventListener('click', function(){
        pC.value = pC.value.substring(0, (pC.value.length -1));
})
function addToScreen(value){
    const signos = ['*','+','-','/','.'];
    pC.value += value;
    if (pC.includes(value)){
        var valorAnterior = pC.value.length - 2;
        if (signos.includes(pC.value[valorAnterior])){
            pC.value = pC.value.substring(0, (pC.value.length - 2));
            pC.value = pC.value + value;
        }
    }
    switch (pC.value[0]){
        case '*':
            pC.value = '';
        case '/':
            pC.value = '';
        case '.':
            pC.value = '';
    }
}
function result(){
    pC.value = eval(pC.value);
}