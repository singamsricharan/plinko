const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for (var k=0;k<=width;k+=80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var a=40;a<=width;a+=50){
    plinkos.push(new Plinko(a,75))
  }
  for (var s=15;s<=width-10;s+=50){
    plinkos.push(new Plinko(s,175))
  }
  for (var d=40;d<=width;d+=50){
    plinkos.push(new Plinko(d,275))
  }
  for (var f=15;f<=width;f+=50){
    plinkos.push(new Plinko(f,375))
  }
  ground=new Ground(240,790,480,20)
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for (var r=0;r<plinkos.length;r++){
    plinkos[r].display();
  }
  for(var c=0;c<particles.length;c++){
    particles[c].display();
  }
  for(var t=0;t<divisions.length;t++){
    divisions[t].display();
  }  
  ground.display();
  drawSprites();
}