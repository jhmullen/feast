FoodCard = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "foodCard");

  var SCALE = .1;

  this.name = "Turkey Leg";
  this.food = Math.floor(Math.random() * 12);
  this.rules = "Add " + this.food + " food to your mana pool.  Play this ability as an interrupt";
  /*this.prestige = Math.floor(Math.random() * 5);
  this.appetite = Math.floor(Math.random() * 7);*/

  this.inputEnabled = true;
  this.events.onInputUp.add(FoodCard.click, this);

  this.scale.setTo(SCALE);
  this.remaining = 10;
  
  this.foodText = game.make.text(45, 20, this.food);
  this.foodText.scale.setTo(5);
  this.addChild(this.foodText);

  this.nameText = game.make.text(140, 780, this.name);
  this.nameText.scale.setTo(2);
  this.addChild(this.nameText);

  var ruleStyle = { 
    wordWrap: true,
    wordWrapWidth: 350
  }
  this.ruleText = game.make.text(140, 1000, this.rules, ruleStyle);
  this.ruleText.scale.setTo(2);
  this.addChild(this.ruleText);

};

FoodCard.prototype = Object.create(Phaser.Sprite.prototype);
FoodCard.prototype.constructor = FoodCard;

FoodCard.prototype.update = function() {
  
}

FoodCard.click = function (target) {

}


