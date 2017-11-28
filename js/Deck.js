Deck = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "deck");

  var SCALE = .4

  this.inputEnabled = true;
  this.events.onInputUp.add(click, this);

  this.scale.setTo(SCALE);
  this.remaining = 10;
  
  this.textBox = game.make.text(this.width/SCALE/2, this.height/SCALE, this.remaining + " remaining");
  this.textBox.anchor.setTo(.5, 0);

  this.addChild(this.textBox);

};

Deck.prototype = Object.create(Phaser.Sprite.prototype);
Deck.prototype.constructor = Deck;

Deck.prototype.update = function() {
  this.textBox.setText(this.remaining + " remaining");
};

function click(target) {
  if (this.remaining > 0) {
    this.remaining--;
    Game.spawnFoodCard(); 
  }
};