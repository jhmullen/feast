Deck = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "deck");

  this.inputEnabled = true;
  this.events.onInputUp.add(Deck.click, this);

  this.remaining = 4;
  
  var style = {
    fontSize: "18px"
  };
  this.textBox = game.make.text(this.width/2, this.height, this.remaining + " remaining", style);
  this.textBox.anchor.setTo(.5, 0);

  this.addChild(this.textBox);

};

Deck.prototype = Object.create(Phaser.Sprite.prototype);
Deck.prototype.constructor = Deck;

Deck.prototype.update = function() {
  this.textBox.setText(this.remaining + " remaining");
};

Deck.click = function (target) {
  if (this.remaining > 0) {
    this.remaining--;
    Game.spawnFoodCard(); 
  }
}

