Card = function(game, x, y, ref) {
  Phaser.Sprite.call(this, game, x, y, "card");

  var SCALE = .2;

  this.inputEnabled = true;
  this.events.onInputUp.add(clickCard, this);

  this.scale.setTo(SCALE);
  this.remaining = 10;
  
  this.textBox = game.make.text(this.width/SCALE/2, this.height/SCALE, this.remaining + " remaining");
  this.textBox.anchor.setTo(.5, 0);

  this.addChild(this.textBox);
};

Card.prototype = Object.create(Phaser.Sprite.prototype);
Card.prototype.constructor = Card;

Card.prototype.update = function() {
  
}

function clickCard(target) {
  console.log(target)
}