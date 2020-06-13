var playerCount
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-40,displayHeight-180);
  form = new Form();
  player = new Player();
  player.getCount();
  form.display();
}

function draw(){
}
