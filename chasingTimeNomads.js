var config = {
	type: Phaser.AUTO,
	width: 800,
	height:600,
	backgroundColor: '#398ccd',
	scene: {
		preload: preload,
        create: create,
        update: update
	}
};
var game = new Phaser.Game(config);

function preload() {
  // Aquí se cargan los recursos del juego, como imágenes, sonidos, etc.
	this.load.image('redSquare', 'https://dummyimage.com/32x32/ff0000/ffffff.png');
}

function create() {
  // Aquí se inicializan los objetos del juego, como jugadores, enemigos, etc.
	// Crea el objeto Sprite con la imagen 'redSquare'
	var player = this.add.sprite(0, 0, 'redSquare');
	// Establece el origen del sprite en el centro
	player.setOrigin(0.5, 0.5);


	var cursors = this.input.keyboard.createCursorKeys();
  
  // Asigna la función de actualización a la escena
  this.input.on('pointerdown', function(pointer) {
    console.log('clicked at:', pointer.x, pointer.y);
  });
  
  // Asigna una velocidad de movimiento horizontal
  var speed = 20;
  
  // Actualiza la posición del jugador en cada fotograma
  this.update = function() {
    if (cursors.left.isDown) {
      player.x -= speed * this.time.deltaTime / 1000;
    }
    else if (cursors.right.isDown) {
      player.x += speed * this.time.deltaTime / 1000;
    }
  };
  



}

function update() {
  // Aquí se actualiza la lógica del juego, como la posición de los objetos, colisiones, etc.
}