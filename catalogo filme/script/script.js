const filmes = [{
        titulo: "Mortal Kombat",
        imagem: "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
        descricao: "Um torneio de artes marciais entre os melhores lutadores do mundo."
    },
    {
        titulo: "Batman",
        imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        descricao: "o cavalheiro das trevas enfrenta o crime em Gotham City."
    },
    {
        titulo: "Vingadores: unidos",
        imagem: "https://image.tmdb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg",
        descricao: "Os Vingadores se reúnem para enfrentar uma nova ameaça."
    },
    {
        titulo: "Homem-Aranha: sem Volta para Casa",
        imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        descricao: "Peter Parker enfrenta as consequências de sua identidade secreta ser revelada."
    }
]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = "";
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                <img src="${filme.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${filme.titulo}</h3>
                    <p>${filme.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver Detalhes</button>
                </div>
                </div>
            </div>
       `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais detalhes sobre o filme ",
        icon: "info",
    })
}