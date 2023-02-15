let xMinhaRaquete = 5
let yMinhaRaquete = 150
let comprimentoRaquete = 7
let alturaRaquete = 100

function mostraMRaquete (){
  rect (xMinhaRaquete, yMinhaRaquete, comprimentoRaquete, alturaRaquete)
}

function movimentaMRaquete () {
  if (keyIsDown(UP_ARROW)){
    yMinhaRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += 5;
  }
} 

function verificaColisaoMRaquete (){
  if (xBolinha - raio < xMinhaRaquete + comprimentoRaquete && yBolinha - raio < yMinhaRaquete + alturaRaquete && yBolinha + raio > yMinhaRaquete){
    velocidadeXBolinha *= -1;
  }
}