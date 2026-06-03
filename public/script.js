const dados = {
  "filmes": [
    {
      "id": 1,
      "nome": "Jurassic Park",
      "ano": 1993,
      "genero": "Ficção Científica / Aventura",
      "classificacao": "12 anos",
      "duracao": "127 min",
      "destaque": true,
      "data_sessao": "2026-07-04",
      "horario": "20:00",
      "descricao": "Quando um projeto de clones de dinossauros sai do controle, o caos se instala e o mundo não será mais o mesmo.",
      "imagem_principal": "img/cartaz1.jpg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/cena_jurassicpark.jpg" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/cena_2jurassicpark.jpg" }
      ]
    },
    {
      "id": 2,
      "nome": "Interestelar",
      "ano": 2014,
      "genero": "Ficção Científica / Drama",
      "classificacao": "10 anos",
      "duracao": "169 min",
      "destaque": true,
      "data_sessao": "2026-07-18",
      "horario": "20:00",
      "descricao": "Um ex-piloto parte em uma missão espacial pela sobrevivência da humanidade, buscando um novo lar para a espécie.",
      "imagem_principal": "img/cartaz2.jpeg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/inter.webp" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/intersetella3.jpg" }
      ]
    },
    {
      "id": 3,
      "nome": "Pulp Fiction",
      "ano": 1994,
      "genero": "Crime / Drama",
      "classificacao": "18 anos",
      "duracao": "154 min",
      "destaque": false,
      "data_sessao": "2026-08-01",
      "horario": "20:00",
      "descricao": "O dia de dois capangas se complica em situações absurdas e violentas no submundo de Los Angeles.",
      "imagem_principal": "img/cartaz3.jpg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/la-scene-de-danse-dans-le-film-pulp-fiction.jpg" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/pulp.jpeg" }
      ]
    },
    {
      "id": 4,
      "nome": "O Sexto Sentido",
      "ano": 1999,
      "genero": "Terror / Drama",
      "classificacao": "12 anos",
      "duracao": "107 min",
      "destaque": false,
      "data_sessao": "2026-08-15",
      "horario": "20:00",
      "descricao": "Um psicólogo infantil tenta ajudar um menino que tem um segredo perturbador: ver e conversar com pessoas mortas.",
      "imagem_principal": "img/cartaz4.jpeg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/the-sixth-sense-1.webp" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/6sentido.jpeg" }
      ]
    },
    {
      "id": 5,
      "nome": "Forrest Gump",
      "ano": 1994,
      "genero": "Drama / Romance",
      "classificacao": "12 anos",
      "duracao": "142 min",
      "destaque": false,
      "data_sessao": "2026-08-29",
      "horario": "20:00",
      "descricao": "A vida extraordinária de um homem simples que, pelo destino, participa de um grande evento histórico nos EUA.",
      "imagem_principal": "img/c.jpg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/thumb_44A8C9A3-EE73-43CB-A7A8-2A0F8F051E6D.jpg" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/forrest.jpg" }
      ]
    },
    {
      "id": 6,
      "nome": "Cidade de Deus",
      "ano": 2002,
      "genero": "Crime / Drama",
      "classificacao": "16 anos",
      "duracao": "130 min",
      "destaque": false,
      "data_sessao": "2026-09-12",
      "horario": "20:00",
      "descricao": "O crescimento do crime na favela Cidade de Deus, no Rio de Janeiro, narrada por um jovem fotógrafo enquanto tenta escapar da violência.",
      "imagem_principal": "img/cartaz6.webp",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/cidade2.jpg" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/cidade.webp" }
      ]
    },
    {
      "id": 7,
      "nome": "Matrix",
      "ano": 1999,
      "genero": "Ficção Científica / Ação",
      "classificacao": "14 anos",
      "duracao": "136 min",
      "destaque": true,
      "data_sessao": "2026-09-26",
      "horario": "20:00",
      "descricao": "Um programador descobre qué vivemos em uma realidade simulada controlada por máquinas quando é recrutado para lutar pela libertação da humanidade.",
      "imagem_principal": "img/cartaz7.jpeg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/Matrix.jpg" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/matrix-morpheus-capa.jpg" }
      ]
    },
    {
      "id": 8,
      "nome": "O Auto da Compadecida",
      "ano": 2000,
      "genero": "Comédia / Drama",
      "classificacao": "Livre",
      "duracao": "104 min",
      "destaque": false,
      "data_sessao": "2026-10-10",
      "horario": "20:00",
      "descricao": "Dois nordestinos se envolvem em confusões no sertão brasileiro, até que vão a julgamento por Nossa Senhora após a morte.",
      "imagem_principal": "img/O_auto_da_compadecida.jpg",
      "fotos": [
        { "id": 1, "titulo": "Cena 1", "imagem": "img/fotos/autocomp.jpg" },
        { "id": 2, "titulo": "Cena 2", "imagem": "img/fotos/o-auto-da-compadecida-2-1714670622564_v2_1x1.jpg" }
      ]
    }
  ]
};

//destaques do carrossel

const filmesDestaque = dados.filmes.filter(filme => filme.destaque === true);

const carouselInner = document.getElementById('carousel-inner-destaques');
const carouselIndicators = document.getElementById('carousel-indicators-destaques');

if(carouselInner && carouselIndicators){
filmesDestaque.forEach((filme, index) => {

    const indicator = document.createElement('button');
    indicator.setAttribute('type', 'button');
    indicator.setAttribute('data-bs-target', '#carrossel-destaques');
    indicator.setAttribute('data-bs-slide-to', index);
    if (index === 0) indicator.classList.add('active');
    carouselIndicators.appendChild(indicator);

    const slide = document.createElement('div');
    slide.classList.add('carousel-item');
    if (index === 0) slide.classList.add('active');

   slide.innerHTML = `
    <div class="slide-content">
        <img src="${filme.imagem_principal}" class="poster-central" alt="${filme.nome}">
        <div class="poster-texto">
            <h3>${filme.nome}</h3>
            <p>${filme.descricao}</p>
            <a href="detalhes.html?id=${filme.id}" class="btn btn-sm mt-3">Saiba mais</a>
        </div>
    </div>
`;
    carouselInner.appendChild(slide);
}); 
}

function formatarData(dataISO) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const partes = dataISO.split('-');
    const dia = partes[2];
    const mes = meses[parseInt(partes[1]) - 1];
    const ano = partes[0];
    return `${dia} de ${mes} de ${ano}`;
}

// todos os filmes:

// peega elemento da lista de filmes no HTML
const listaFilmes = document.getElementById('lista-filmes');

// cria um card para cada filme
if (listaFilmes){
dados.filmes.forEach(filme => {

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

    col.innerHTML = `
        <div class="card h-100">
            <img src="${filme.imagem_principal}" class="card-img-top" alt="${filme.nome}">
            <div class="card-body">
                <h3 class="card-title">${filme.nome}</h3>
                <p class="card-text">${filme.ano} &bull; ${filme.genero}</p>
                <p class="card-text">${formatarData(filme.data_sessao)} às ${filme.horario}h</p>
                <a href="detalhes.html?id=${filme.id}" class="btn btn-sm">Ver mais</a>
            </div>
        </div>
    `;

    listaFilmes.appendChild(col);
});
}


// detalhes.Html

// Pega o id do filme que está na URL (ex: detalhes.html?id=1)
const params = new URLSearchParams(window.location.search); // aqui lê os parâmetros da URL
const idFilme = parseInt(params.get('id')); 

// busca o filme no array que tem o mesmo id
const filme = dados.filmes.find(f => f.id === idFilme);

// executa se estiver na página de detalhe
if (filme && document.getElementById('detalhe-conteudo')) {

//seção 1: informações

const conteudo = document.getElementById('detalhe-conteudo'); // pega o elemento da seção 1

conteudo.innerHTML = `
<div class="col-12 col-md-4">
<img src="${filme.imagem_principal}" class="img-fluid rounded shadow" alt="${filme.nome}">
</div>

<div class="col-12 col-md-8" id="detalhe-texto">
<h1 id="detalhe-titulo">${filme.nome}</h1>

<p><strong>Ano:</strong> ${filme.ano}</p> 
<p><strong>Gênero:</strong> ${filme.genero}</p>
<p><strong>Classificação:</strong> ${filme.classificacao}</p> 
<p><strong>Duração:</strong> ${filme.duracao}</p> 
<p><strong>Sessão:</strong> ${formatarData(filme.data_sessao)} às ${filme.horario}h</p>


<br> 
<p id="detalhe-descricao">${filme.descricao}</p>
<br>
<a href="index.html" class="btn btn-detalhe mt-3"> ← Voltar</a>
</div>
`;

//seção 2: galeria de fotos

const galeria = document.getElementById('detalhe-galeria'); // pega o elemento da seção 2

// percorre cada foto do filme e cria um card pra cada uma
filme.fotos.forEach(foto => {
const col = document.createElement('div'); // cria uma div para a coluna
col.classList.add('col-12', 'col-sm-6', 'col-md-4'); // 1 foto por linha no mobile, 2 fotos no tablet, 3  no desktop

//tem bootstrap
col.innerHTML = `
<div class="card h-100">
<img src="${foto.imagem}" class="card-img-top foto-detalhe" alt="${foto.titulo}">
<div class="card-body">
<p class="card-text text-center">${foto.titulo}</p>
</div>
</div>
`;

galeria.appendChild(col); // adiciona o card na galeria
});
}
