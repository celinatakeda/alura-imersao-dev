var arrayJogadores = [];
var id = 1;

function inserirJogador() {
  let jogador = this.lerDados();

  var valida = validaCampo(jogador);
  console.log(valida);

  if (valida == true) {
    adicionarJogador(jogador);
  }

  document.getElementById("nome").value = "";
  document.getElementById("vitorias").value = "";
  document.getElementById("empates").value = "";
  document.getElementById("derrotas").value = "";
}

function adicionarJogador(jogador) {
  arrayJogadores.push(jogador);
  id++;
  exibeJogadoresNaTela(arrayJogadores);
}

function lerDados() {
  let jogador = {};

  jogador.id = id;
  jogador.nome = document.getElementById("nome").value;
  jogador.vitorias = parseInt(document.getElementById("vitorias").value);
  jogador.empates = parseInt(document.getElementById("empates").value);
  jogador.derrotas = parseInt(document.getElementById("derrotas").value);
  jogador.pontos = calcularPontos(jogador);

  return jogador;
}

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  console.log(pontos);
  return pontos;
}

function validaCampo(jogador) {
  msg = "";
  if (jogador.nome == "") {
    msg += "Informe o nome do jogador";
    alert(msg);
  }

  if (msg != "") {
    return false;
  }

  return true;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  console.log(elemento);
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = arrayJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(arrayJogadores);
}

function adicionarEmpate(i) {
  var jogador = arrayJogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(arrayJogadores);
}

function adicionarDerrota(i) {
  var jogador = arrayJogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(arrayJogadores);
}