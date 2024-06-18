//Variaveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2 ;

//Velocidade Da Bolinha

let velocidadexBolinha = 10;
let velocidadeyBolinha = 10;

//Variaveis Da Raquete

let xRaquete = 1;
let yRaquete = 150;
let raquetecomprimento =12
let raquetealtura = 90

//Variaveis Do Oponente
xRaqueteOponente = 587;
yRaqueteOponente = 150;
let velocidadeYOponente;

//colidiu

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;

function preload() {
    ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  mostrarbolinha();
  movimentabolinha();
  bordabolinha();
  mostraraquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraraquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  marcaPonto();
}

function mostrarbolinha(){
   circle(xBolinha,yBolinha,diametro);
  
 };

function movimentabolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
  
}


function bordabolinha(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraraquete(x,y){
  rect(x,y,raquetecomprimento,raquetealtura);
}


function movimentaMinhaRaquete() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raquetecomprimento
     && yBolinha - raio < yRaquete + raquetealtura && 
     yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    
  }
}

function verificaColisaoRaquete(x,y){
  colidiu =
  collideRectCircle(x,y,raquetecomprimento, raquetealtura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadexBolinha *= -1;
    
  }

}

   function movimentaRaqueteOponente(){
    if (keyIsDown(UP_ARROW)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaqueteOponente += 10;
    }

}



function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0, 100, 100));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(0, 100, 100));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
    if (xBolinha > 589){
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 11){
        pontosDoOponente += 1;
      ponto.play();
    }
}


