let amigos = []; //Lista dos amigos.
let BarraDeTexto = document.querySelector('#amigo');

//função para adicionar os amigos em um lista
function adicionarAmigos(){
    if (BarraDeTexto.value === '' ) {
        alert("Escreva os nomes de seus amigos(a)"); //Se o valor da BarraDeTexto for igual á string vazia elerte está mensagem.
        return;
    } if (amigos.includes(BarraDeTexto.value)) {  //filtrando se o nome já está na lista
        alert("Este nome já está na lista");
        return;
    } if (amigos.push(BarraDeTexto.value)) { //Adiciona o nome do amigo
        console.log(amigos);
        BarraDeTexto.value = ""; //Limpando a barra de texto
        listaDeAmigos();
    }
    
}

//função que adiciona o nome dos amigos no HTML
function listaDeAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    if (!lista) {
        console.error("Elemento da lista não encontrado");
        return;
    }
    
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Cria um novo <li>
        li.textContent = amigos[i]; // Adiciona o nome ao <li>
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    // Obtém a referência do elemento onde será mostrado o resultado
    let resultadoElemento = document.getElementById("resultado");

    // Verifica se a lista de amigos está vazia
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório baseado no tamanho da lista
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na tela
    resultadoElemento.innerHTML = `Seu amigo secreto é:<li>${amigoSorteado}</li>`;
}