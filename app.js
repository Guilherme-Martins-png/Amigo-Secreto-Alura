let amigos = []; //Lista dos amigos.
let BarraDeTexto = document.querySelector('#amigo');


function adicionarAmigos(){
    if (BarraDeTexto.value == '' ) {
        alert("Escreva os nomes de seus amigos(a)"); //Se o valor da BarraDeTexto for igual á string vazia elerte está mensagem.
        return;
    } if (amigos.includes(BarraDeTexto.value)) { 
        alert("Este nome já está na lista");
        return;
    } if (amigos.push(BarraDeTexto.value)) { //Adiciona o nome do amigo
        console.log(amigos);
        return;
    } 

}

