let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio = dBolinha / 2;

let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

function mostraBolinha () {
  fill (0,249,249)
  circle (xBolinha,yBolinha,dBolinha)
}
function movimentaBolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda (){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}