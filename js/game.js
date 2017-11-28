var Game = {};

Game.init = function(){
  game.stage.disableVisibilityChange = true;
};

Game.preload = function() {
  game.load.image('board', 'assets/wood.jpg');
  game.load.image('deck', 'assets/cardback.png');
  game.load.image('foodback', 'assets/cardback2.png');
  game.load.image('guestback', 'assets/cardback3.png');
  game.load.image('food', 'assets/food.jpg');
  game.load.image('guest', 'assets/guest.jpg');
  game.load.image('sprite','assets/sprites/sprite.png');
};

Game.create = function(){
  // Globals
  Game.playerMap = {};

  var SCALE = .4
  
  // Board Setup
  var board = game.add.image(0, 0, 'board');
  board.inputEnabled = true; 
  board.events.onInputUp.add(Game.getCoordinates, this);

  var thisDeck = game.add.image(50, 570, 'deck');
  thisDeck.scale.setTo(SCALE, SCALE);

  var thatDeck = game.add.image(900, 50, 'deck');
  thatDeck.scale.setTo(SCALE, SCALE);

  var foodDeck = game.add.image(200, 375, 'foodback');
  foodDeck.scale.setTo(SCALE, SCALE);

  var guestDeck = game.add.image(200, 225, 'guestback');
  guestDeck.scale.setTo(SCALE, SCALE);

  var SPACE = 100;
  for (var i = 0; i < 5; i++) {
    var food = game.add.image(200 + SPACE + SPACE*i, 375, 'food');
    food.scale.setTo(SCALE, SCALE);
    var guest = game.add.image(200 + SPACE + SPACE*i, 225, 'guest');
    guest.scale.setTo(SCALE, SCALE);
  }

  // Network Diagnostics
  var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  testKey.onDown.add(Client.sendTest, this);

  Client.askNewPlayer();
};

Game.getCoordinates = function(layer,pointer){
  Client.sendClick(pointer.worldX,pointer.worldY);
};

Game.addNewPlayer = function(id,x,y){
 //Game.playerMap[id] = game.add.sprite(x,y,'sprite');
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