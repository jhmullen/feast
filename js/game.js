var Game = {};

Game.init = function(){
  game.stage.disableVisibilityChange = true;
};

Game.preload = function() {
  game.load.script("Card.js", "js/Card.js");
  game.load.script("Deck.js", "js/Deck.js");

  game.load.image("board", "assets/wood.jpg");
  game.load.image("deck", "assets/cardback.png");
  game.load.image("card", "assets/card.png");
};

Game.create = function(){
  // Globals
  Game.playerMap = {};
  
  // Board Setup
  var board = game.add.image(0, 0, "board");
  //board.inputEnabled = true; 
  //board.events.onInputUp.add(Game.getCoordinates, this);

  var deck = new Deck(game, 50, 570);
  game.add.existing(deck);

  // Network Diagnostics
  var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  testKey.onDown.add(Client.sendTest, this);

  Client.askNewPlayer();
};

Game.spawnCard = function() {
  var card = new Card(game, Math.random() * 1024, Math.random() * 768);
  game.add.existing(card);
}

Game.getCoordinates = function(layer,pointer) {
  Client.sendClick(pointer.worldX,pointer.worldY);
};

Game.addNewPlayer = function(id,x,y){
 //Game.playerMap[id] = game.add.sprite(x,y,"sprite");
};

Game.movePlayer = function(id,x,y){
  var player = Game.playerMap[id];
  var distance = Phaser.Math.distance(player.x,player.y,x,y);
  var tween = game.add.tween(player);
  var duration = distance*10;
  tween.to({x:x,y:y}, duration);
  tween.start();
};

Game.removePlayer = function(id){
  Game.playerMap[id].destroy();
  delete Game.playerMap[id];
};