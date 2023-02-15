let colidiu = false
let meusPontos = 0;
let pontosOponente = 0;

function colisaoRaqueteBiblioteca (x, y) {
  colidiu = collideRectCircle(x, y, comprimentoRaquete + 3, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function incluiPlacar (){
  textAlign (CENTER)
  textSize (30)
  
  fill (0,255,255)
  rect (180, 4, 40, 30)
  fill (0,128,128)
  text (meusPontos, 200, 30)
  fill (0,255,255)
  rect (380, 4, 40, 30)
  fill (0,128,128)   
  text (pontosOponente, 400, 30)
  
  
} 

function marcaPonto () {
  if (xBolinha >590){
    meusPontos += 1
    Mponto.play ();
  }
  if (xBolinha < 10){
    pontosOponente += 1
    Mponto.play ();
  }
}
