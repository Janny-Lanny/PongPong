let raquetada;
let Mponto;
let trilha;

function preload (){
  trilha = loadSound ("Trilhasonora.wav");
  Mponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("Raquetada.wav");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop ();
}

function draw() {
  background(50);
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisaoBorda ();
  mostraMRaquete ();
  movimentaMRaquete (); 
  mostraMRaqueteOponente ();
  movimentaRaqueteOp ();
  colisaoRaqueteBiblioteca (xMinhaRaquete - 1,yMinhaRaquete);
  colisaoRaqueteBiblioteca (xRaqueteOponente + 1,yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
}