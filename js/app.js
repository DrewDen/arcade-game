// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    
   this.x = x;
   this.y = y;
   this.speed = speed;
   this.step = 101;
   this.boundary = this.step * 5;
   this.resetBug = -100;
   this.sprite = 'images/enemy-bug.png';
   
};

// Updates the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

/* ------ This if statement will ensure that the bug will move off screen ------ */
        if(this.x < this.boundary){
        this.x += this.speed *dt;
    }
    else {
        this.x = this.resetBug;
    }
   
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.step = 101;
    this.jump = 83;
    this.startX = 200;
    this.startY = 300;
    this.x = this.startX;
    this.y = this.startY;
    this.sprite = 'images/char-boy.png';
   
 /* ------ This function will reset your player to there starting point in the game when they have reached the water  ------ */
        this.update = function(){
        
         
            if(this.y < 0) {
                allEnemies;
                /* alert("YOU HAVE MADE IT ACROSS.  WELL DONE. CLOSE THIS WINDOW TO RESTART THE GAME!") */
                
                /* this.reset(); */
            }
                
                
        
             
                
            
        
 /* ------ This for loop will reset your player back to there starting point of the game when they collide into a bug ------ */
            for(let Enemy of allEnemies) {
            if(this.y - this.jump/2 < Enemy.y && this.y + this.jump/2 > Enemy.y  &&  this.x - this.jump/2 < Enemy.x && this.x + this.jump/2 > Enemy.x)
             {
               this.reset();
               
            }
          
		}
		

	};
	
 /* ------ Function draws your charactor to the screen ------ */
        this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    };

 /* ------ Function gives your charactor movement ------ */
        this.handleInput = function(direction) {
        if (direction == 'left' && this.x > 0) {
            this.x -=this.step;
        }
        if (direction == 'right' && this.x < 400) {
            this.x += this.step;
        }
        if (direction == 'up' && this.y > 0){
            this.y -= this.jump;
        }
        if (direction =='down' && this.y < 350){
            this.y += this.jump;
        }
    };
    

 /* ------ Function to reset your charactor back to there starting point ------ */
    this.reset = function() {
    this.x = this.startX;
    this.y = this.startY;
    

 };

       
 
   
};

const player = new Player();
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemyOne = new Enemy(-101, 60, 60 * Math.floor(Math.random() * 10 + 1));
const enemyTwo = new Enemy(-101,140, 60 * Math.floor(Math.random() * 10 + 1));
const enemyThree = new Enemy(-101,220, 60 * Math.floor(Math.random() * 10 + 1));
const allEnemies = [enemyOne, enemyTwo,enemyThree,];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
