const Jogos = [ {
    titulo: "Free Fire",
    imagem: "https://static.wikia.nocookie.net/garena-freefire/images/c/ca/GameModes.jpg/revision/latest?cb=20200502012142",
    descricao: "Free Fire é um jogo de battle royale para dispositivos móveis, onde os jogadores competem para ser o último sobrevivente em uma ilha cheia de perigos e desafios."
},
{
    titulo: "Fortnite",
    imagem: "https://static.wikia.nocookie.net/fortnite/images/b/bc/Fortnite_%28Update_v41.00%29_-_Cover_Art_-_Fortnite.jpg/revision/latest/scale-to-width-down/250?cb=20260606012447",
    descricao: "Fortnite é um jogo de battle royale desenvolvido pela Epic Games, onde os jogadores competem para ser o último sobrevivente em uma ilha cheia de perigos e desafios."
},
{
    titulo: "GTA V",
    imagem: "https://static.wikia.nocookie.net/gtawiki/images/2/2c/ASafehouseInTheHills-GTAO-Artwork.png/revision/latest/scale-to-width-down/350?cb=20260330025009",
    descricao: "Grand Theft Auto V é um jogo de ação e aventura em mundo aberto, onde os jogadores assumem o papel de três criminosos que realizam uma série de assaltos e missões em uma cidade fictícia inspirada em Los Angeles."
},
{
    titulo: "Minecraft",
    imagem: "https://static.wikia.nocookie.net/youtube/images/0/0d/Minecraft.jpeg/revision/latest?cb=20260606164058",
    descricao: "Minecraft é um jogo de construção e sobrevivência em mundo aberto, onde os jogadores podem explorar, construir e criar em um ambiente gerado proceduralmente."
},
{
    titulo: "Roblox",
    imagem: "https://static.wikia.nocookie.net/roblox/images/0/0c/Roblox_2025_Favicon.png/revision/latest?cb=20250510123126",
    descricao: "Roblox é uma plataforma de jogos online onde os usuários podem criar e jogar uma variedade de jogos criados por outros usuários, abrangendo diversos gêneros e estilos de jogo."
},
{
    titulo: "FIFA 23",
    imagem: "https://static.wikia.nocookie.net/usaw/images/0/00/2026_FIFA_World_Cup_emblem.svg.png/revision/latest?cb=202309150719367",
    descricao: "FIFA 23 é um jogo de futebol desenvolvido pela EA Sports, onde os jogadores podem controlar equipes e jogadores de futebol em partidas realistas, competindo em ligas, torneios e modos de jogo variados."
}

]

const listaJogos = document.getElementById("listaJogos");

function mostrarJogos(lista) {
    listaJogos.innerHTML = "";
    lista.forEach(jogo => {
        listaJogos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                <img src="${jogo.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${jogo.titulo}</h3>
                    <p>${jogo.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}')">Ver Detalhes</button>
                </div>
                </div>
            </div>
       `
    })
}

mostrarJogos(Jogos)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais detalhes sobre o jogo ",
        icon: "info",
    })
}
