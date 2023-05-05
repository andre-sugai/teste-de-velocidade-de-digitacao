'use strict';

const texto = document.querySelector('#texto');
const entrada = document.querySelector('#entrada');
const reiniciar = document.querySelector('#reiniciar');
const resultado = document.querySelector('#resultado');
const historico = document.querySelector('#historico');
const alternarTemaBtn = document.querySelector('#alternarTema');

const textos = [
  "Você só fracassa quando desiste." ,
"Não se preocupe em ser melhor que os outros. Concentre-se em ser melhor do que você era ontem." ,
"A verdadeira coragem é ir atrás de seus sonhos mesmo quando todos dizem que é impossível." ,
"Supere seus medos ou eles vão te superar." ,
"Lembre-se: tudo o que você enfrenta, se você enfrentar com coragem, sempre acaba lhe tornando mais forte." ,
"A dor que você sente hoje é a força que você sentirá amanhã." ,
"A vida é cheia de altos e baixos. Aprenda a aproveitar os altos e a superar os baixos." ,
"A vida é um constante desafio, mas com determinação e persistência, você sempre pode superá-los." ,
"Não importa quantas vezes você caia, o importante é sempre se levantar." ,
"Acredite em si mesmo e em sua capacidade de superar qualquer obstáculo." ,
"O fracasso não é o fim. É apenas uma oportunidade para começar de novo com mais experiência." ,
"Não deixe suas lutas definirem você. Use-as como uma plataforma para se elevar." ,
"Não há atalhos para qualquer lugar que valha a pena ir. Superação exige trabalho duro e dedicação." ,
"Mantenha a calma e supere tudo." ,
"A verdadeira superação começa quando você acredita em si mesmo." ,
"Não deixe o medo de falhar impedir você de tentar." ,
"A única maneira de chegar ao topo é começar de baixo e trabalhar duro." ,
"Aprenda com seus erros e use-os como uma oportunidade para crescer e melhorar." ,
"Nada é impossível se você está disposto a trabalhar duro e acreditar em si mesmo." ,
"A superação é a arte de se levantar, não importa quantas vezes você caia." ,
"O sucesso é o resultado de superar obstáculos e aprender com as falhas." ,
"O maior inimigo da superação é o medo. Enfrente seus medos e você será capaz de superá-los." ,
"A jornada da superação começa com um passo." ,
"A superação exige paciência, persistência e determinação." ,
"Não deixe suas cicatrizes definirem você. Elas são apenas uma prova de que você superou algo difícil." ,
"Superação é sobre se levantar quando você é derrubado." ,
"Não importa o quão difícil seja a estrada, nunca desista. A recompensa no final vale a pena." ,
"Seja corajoso o suficiente para ir atrás de seus sonhos e superar qualquer obstáculo que possa surgir." ,
"Não importa o quão lento você vá, desde que não pare." ,
"O fracasso é apenas uma oportunidade para começar de novo com mais inteligência." ,
"A superação começa com uma mudança de mentalidade." ,
];

function novoTexto() {
  const index = Math.floor(Math.random() * textos.length);
  texto.textContent = textos[index];
  entrada.focus();
}

function atualizarTeste() {
  iniciar();
  if(entrada.value === texto.textContent) {
    // console.log('verificar');
    verificar();
  }
}

function verificar() {
  const tempoFinal = new Date().getTime();
  const tempoInicial = parseInt(localStorage.getItem('tempoInicial'));
  const tempoGasto = (tempoFinal - tempoInicial) / 1000;

  resultado.textContent = `Parabéns! Você levou ${tempoGasto.toFixed(2)} segundos!`;

  adicionarAoHistorico(texto.textContent, tempoGasto);

  localStorage.setItem('testeEmAndamento', false);
  entrada.value = '';
  novoTexto();
}

function iniciar() {
  const statusDoTeste = JSON.parse(localStorage.getItem('testeEmAndamento')); // true => vem em string

  if(!statusDoTeste) {
    localStorage.setItem('tempoInicial', new Date().getTime());
    localStorage.setItem('testeEmAndamento', true);
  }
}

function adicionarAoHistorico(textoDigitado, tempoGasto) {
  const itemHistorico = document.createElement('p');

  itemHistorico.textContent = `Texto '${textoDigitado}' - Tempo: '${tempoGasto.toFixed(2)}' segundos.`

  historico.appendChild(itemHistorico);
}

function reiniciarTeste() {
  entrada.value = '';
  resultado.textContent = '';
  novoTexto();
  localStorage.setItem('testeEmAndamento', false);
  historico.innerHTML = '';
}

function alternarTema() {
  const body = document.body;

  body.classList.toggle('claro');
  body.classList.toggle('escuro');
}

entrada.addEventListener('keyup', atualizarTeste);
reiniciar.addEventListener('click', reiniciarTeste);

alternarTemaBtn.addEventListener('click', alternarTema);

novoTexto();