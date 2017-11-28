GuestCard = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "guestCard");

  var SCALE = .2;

  this.food = Math.floor(Math.random() * 12);
  this.prestige = Math.floor(Math.random() * 5);
  this.appetite = Math.floor(Math.random() * 7);

  this.inputEnabled = true;
  this.events.onInputUp.add(click, this);

  this.scale.setTo(SCALE);
  this.remaining = 10;
  
  this.textBox = game.make.text(this.width/SCALE/2, this.height/SCALE, this.remaining + " remaining");
  this.textBox.anchor.setTo(.5, 0);

  this.addChild(this.textBox);
};

GuestCard.prototype = Object.create(Phaser.Sprite.prototype);
GuestCard.prototype.constructor = GuestCard;

GuestCard.prototype.update = function() {
  
}

function click(target) {
  console.log(target);
}