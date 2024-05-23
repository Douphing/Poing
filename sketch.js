let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  if(xBolinha + raio > width || xBolinha  - raio < 0)
    {
      velocidadeXBolinha *= -1;
    }
  
  if(yBolinha + raio > height || yBolinha - raio < 0)
    {
      velocidadeYBolinha *= -1;
    }
}