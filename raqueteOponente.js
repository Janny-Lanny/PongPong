let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

function mostraMRaqueteOponente (){
  rect (xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete)
}

function movimentaRaqueteOp (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}