GuestCard = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "guestCard");

  this.inputEnabled = true;
  this.events.onInputUp.add(click, this);
  
};

GuestCard.prototype = Object.create(Phaser.Sprite.prototype);
GuestCard.prototype.constructor = GuestCard;

GuestCard.prototype.update = function() {
  
}
