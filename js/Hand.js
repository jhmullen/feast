Hand = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "hand");

};

Hand.prototype = Object.create(Phaser.Sprite.prototype);
Hand.prototype.constructor = Hand;

Hand.prototype.update = function() {
  
}