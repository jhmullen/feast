var game = new Phaser.Game(1024, 700, Phaser.AUTO, document.getElementById('game'));
game.state.add('Game',Game);
game.state.start('Game');