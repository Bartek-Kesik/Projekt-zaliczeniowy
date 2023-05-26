let platform;
let ball;
let ballRadius = 20;
let platformWidth = 100;
let platformHeight = 10;
let platformSpeed = 5;

function setup() {
  createCanvas(400, 300);
  
  // Tworzenie platformy
  platform = {
    x: width / 2,
    y: height - platformHeight,
    width: platformWidth,
    height: platformHeight,
    velocity: 0,
    
    update: function() {
      this.x += this.velocity;
      this.x = constrain(this.x, 0, width - this.width);
    },
    
    display: function() {
       fill(color(random(0, 255), random(0, 255),random(0, 255)));
      rect(this.x, this.y, this.width, this.height);
    },
    
    moveLeft: function() {
      this.velocity = -platformSpeed;
    },
    
    moveRight: function() {
      this.velocity = platformSpeed;
    },
    
    stop: function() {
      this.velocity = 0;
    }
  };
  
  // Tworzenie piłki
  ball = {
    x: width / 2,
    y: height - 50,
    radius: ballRadius,
    velocity: createVector(3, -3),
    
    update: function() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      
      // Sprawdzanie, czy piłka dotyka ścian bocznych
      if (this.x + this.radius >= width || this.x - this.radius <= 0) {
        this.velocity.x *= -1;
      }
      
      // Sprawdzanie, czy piłka dotyka sufitu
      if (this.y - this.radius <= 0) {
        this.velocity.y *= -1;
      }
      
      // Sprawdzanie, czy piłka dotyka platformy
      if (
        this.y + this.radius >= platform.y &&
        this.x >= platform.x &&
        this.x <= platform.x + platform.width
      ) {
        this.velocity.y *= -1;
      }
    },
    
    display: function() {
       fill(color(random(0, 255), random(0, 255),random(0, 255)));
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
  };
}

function draw() {
   background(random(0, 255), random(0, 255),random(0, 255));
  
  // Aktualizowanie platformy
  platform.update();
  platform.display();
  
  // Aktualizowanie piłki
  ball.update();
  ball.display();
}

function keyPressed() {
  // Sterowanie platformą
  if (keyCode === LEFT_ARROW) {
    platform.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    platform.moveRight();
  }
}

function keyReleased() {
  // Zatrzymanie platformy po puszczeniu klawisza
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    platform.stop();
  }
}