//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo === "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }

    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = nomeAmigo;
    lista.appendChild(item);

    document.getElementById("amigo").value = ""; 
}

function sortearAmigo() {
    let lista = document.getElementById("listaAmigos");
    let amigos = lista.getElementsByTagName("li");

    if (amigos.length === 0) {
        alert("A lista está vazia!");
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado].textContent;

    document.getElementById("resultado").innerHTML = "<li>O sorteado foi: " + amigoSorteado + "</li>";
}