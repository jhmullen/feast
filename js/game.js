var Game = {};

Game.init = function(){
  game.stage.disableVisibilityChange = true;
  game.stage.smoothed = true;
};

Game.preload = function() {
  game.load.script("FoodCard.js", "js/FoodCard.js");
  game.load.script("GuestCard.js", "js/GuestCard.js");
  game.load.script("Deck.js", "js/Deck.js");

  game.load.image("board", "assets/wood.jpg");
  game.load.image("deck", "assets/cardback.png");
  game.load.image("foodCard", "assets/food.png");
  game.load.image("guestCard", "assets/guest.png");
};

Game.create = function(){
  // Globals
  Game.playerMap = {};
  Game.coord = {x: 175, y: 525};
  
  // Board Setup
  var board = game.add.image(0, 0, "board");

  var deck = new Deck(game, 50, 570);
  game.add.existing(deck);

  game.input.addMoveCallback(Game.p, this);

  // Network Diagnostics
  var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  testKey.onDown.add(Client.sendTest, this);

  Client.askNewPlayer();
};

Game.p = function(pointer) {

}

Game.spawnFoodCard = function() {
  var foodCard = new FoodCard(game, Game.coord.x, Game.coord.y);
  Game.coord.x += 180;
  game.add.existing(foodCard);
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