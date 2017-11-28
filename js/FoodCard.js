FoodCard = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "foodCard");

  this.name = "Turkey Leg";
  this.food = Math.floor(Math.random() * 12);
  this.rules = "Add " + this.food + " food to your mana pool.";
  /*this.prestige = Math.floor(Math.random() * 5);
  this.appetite = Math.floor(Math.random() * 7);*/

  this.inputEnabled = true;
  this.events.onInputUp.add(FoodCard.click, this);

  this.remaining = 10;
  
  this.foodText = game.make.text(6, 3, this.food, {fontSize: "12px"});
  this.addChild(this.foodText);

  this.nameText = game.make.text(14, 74, this.name, {fontSize: "10px"});
  this.addChild(this.nameText);

  var ruleStyle = { 
    fontSize: "10px",
    wordWrap: true,
    wordWrapWidth: 70
  }
  this.ruleText = game.make.text(14, 88, this.rules, ruleStyle);
  this.ruleText.lineSpacing = -8;
  this.addChild(this.ruleText);

};

FoodCard.prototype = Object.create(Phaser.Sprite.prototype);
FoodCard.prototype.constructor = FoodCard;

FoodCard.prototype.update = function() {
  
}

FoodCard.click = function (target) {

}


