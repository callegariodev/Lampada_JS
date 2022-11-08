const TurnON = document.getElementById("Ligar");
const TurnOff = document.getElementById("Desligar");
const lamp = document.getElementById("Lampada");

function verificalamp() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampON() {
  if (!verificalamp()) {
    lamp.src = "./img/ligada.png";
  } else window.alert("Lampada Quebrda");
}

function lampoff() {
  if (!verificalamp()) {
    lamp.src = "./img/desligada.png";
  } else window.alert("Lampada Quebrada, reinicie a página!");
}

function lampbroaken() {
  lamp.src = "./img/quebrada.png";
}

TurnON.addEventListener("click", lampON);
TurnOff.addEventListener("click", lampoff);
if (!verificalamp()) {
  lamp.addEventListener("mouseover", lampON);
}
if (!verificalamp()) {
  lamp.addEventListener("mouseleave", lampoff);
}
lamp.addEventListener("dblclick", lampbroaken);
