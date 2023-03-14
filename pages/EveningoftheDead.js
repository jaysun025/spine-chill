//SELECTORS
let gameBoard = document.getElementById('game');
let ctx = gameBoard.getContext('2d');
let = startBtn = document.getElementById('start');
const restartGameButton = document.getElementById('restart')

// Zomboy
let zomboImg = new Image();
zomboImg.src = '/Creations/Zomboy.png';
let zomboThreeImg = new Image();
zomboThreeImg.src = '/Creations/Zomboy2.png'

//Zomgirl
let zomboTwoImg = new Image();
zomboTwoImg.src = '/Creations/Zomgirl.png';
let zomboFourImg = new Image();
zomboFourImg.src = '/Creations/Zomgirl2.png'

//Survivor
let survivorImg = new Image();
survivorImg.src = '/Creations/Umbrella.png';

// Zombie eating
let audio = document.createElement('audio');
audio.src ='/Creations/Zomoku.mp3'

// Timer
let minute = 0;
let second = 0;




// //EVENT CALLERS
gameBoard.setAttribute('width', getComputedStyle(game)['width'])
gameBoard.setAttribute('height', getComputedStyle(game)['height'])




// FUNCTIONS

// Timer
function pad ( val ) { return val > 9 ? val : "0" + val; }
let sec = 0;
start.onclick = function() {
    setInterval( function(){
        if(survivor.alive) {
            document.getElementById("seconds").innerText=pad(++sec%60)
            document.getElementById("minutes").innerText=pad(parseInt(sec/60,10))
        } 
    }, 1000);
}
 

// Restart the Game
restartGameButton.addEventListener('click', restartGame);

function restartGame() {
  restart() 
  sec = 0
  min = 0
}


// Empty build for characters
function Crawler(x, y, img, width, height) {
    this.x = x
    this.y = y
    this.img = img
    this.width = width
    this.height = height
    console.log('constructin')
    this.alive = true
    this.render = function () {
        ctx.drawImage(this.img, this.x, this.y)
    }
}

//Characters that fill screen

let survivor = new Crawler(600, 570, survivorImg, 40, 50);
let zomboy = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboImg, 40, 50);
let zomboyOne = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboTwoImg, 40, 50);
let zomboyTwo = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboImg, 40, 50);
let zomboyThree = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboTwoImg, 40, 50);
let zomboyFour = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboImg, 40, 50);
let zomboyFive = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboTwoImg, 40, 50);
let zomboySix = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboFourImg, 40, 50);
let zomboySeven = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboImg, 40, 50);
let zomboyEight = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboTwoImg, 40, 50);
let zomboyNine = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboThreeImg, 40, 50);
let zomboyTen = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboTwoImg, 40, 50);
let zomboyEleven = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboThreeImg, 40, 50);
let zomboyTwelve = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboFourImg, 40, 50);
let zomboyThirteen = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboThreeImg, 40, 50);
let zomboyFourteen = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboFourImg, 40, 50);
let zomboyFifteen = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboThreeImg, 40, 50);
let zomboySixteen = new Crawler(Math.floor(Math.random() * 1000 + 1), -1, zomboTwoImg, 40, 50);

// Zombies appear at random along x axies
function randomX() {
    return Math.floor(Math.random() * 1680 + 1);
}

// Zombies move down the game board at different speeds
function zomboyMove(zomboy){
    if (zomboy !== null) {
        zomboy.y +=2;
        if (zomboy.y > gameBoard.height) {
            zomboy.y = 0-zomboy.height;
            zomboy.x = randomX();
        }
    }if (zomboyOne !== null) {
        zomboyOne.y +=.02;
    } if (zomboyTwo !== null) {
        zomboyTwo.y +=.01;
    } if (zomboyThree !== null) {
        zomboyThree.y +=.03;
    } if (zomboyFour !== null) {
        zomboyFour.y +=.02;
    } if (zomboyFive !== null) {
        zomboyFive.y +=.03;
    } if (zomboySix !== null) {
        zomboySix.y +=.03;
    } if (zomboySeven !== null) {
        zomboySeven.y +=.02;
    } if (zomboyEight !== null) {
        zomboyEight.y +=.01;
    } if (zomboyNine !== null) {
        zomboyNine.y +=.01;
    } if (zomboyTen !== null) {
        zomboyTen.y +=.02;
    } if (zomboyEleven !== null) {
        zomboyEleven.y +=.03;
    } if (zomboyTwelve !== null) {
        zomboyTwelve.y +=.02;
    } if (zomboyThirteen !== null) {
        zomboyThirteen.y +=.01;
    } if (zomboyFourteen !== null) {
        zomboyFourteen.y +=.02;
    } if (zomboyFifteen !== null) {
        zomboyFifteen.y +=.01;
    } if (zomboySixteen !== null) {
        zomboySixteen.y +=.01;
    } 
}

// Zombies and survivor appear on screen and move
let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (survivor.alive) {
        survivor.render();
        deadSurvivor();
    } else {
        stop();
    }
    zomboy.render();
    zomboyOne.render();
    zomboyTwo.render();
    zomboyThree.render();
    zomboyFour.render();
    zomboyFive.render();
    zomboySix.render();
    zomboySeven.render();
    zomboyEight.render();
    zomboyNine.render();
    zomboyTen.render();
    zomboyEleven.render();
    zomboyTwelve.render();
    zomboyThirteen.render();
    zomboyFourteen.render();
    zomboyFifteen.render();
    zomboySixteen.render();
   

    zomboyMove(zomboy);
    zomboyMove(zomboyOne); 
    zomboyMove(zomboyTwo); 
    zomboyMove(zomboyThree); 
    zomboyMove(zomboyFour); 
    zomboyMove(zomboyFive); 
    zomboyMove(zomboySix); 
    zomboyMove(zomboySeven); 
    zomboyMove(zomboyEight); 
    zomboyMove(zomboyNine); 
    zomboyMove(zomboyTen); 
    zomboyMove(zomboyEleven); 
    zomboyMove(zomboyTwelve); 
    zomboyMove(zomboyThirteen); 
    zomboyMove(zomboyFourteen); 
    zomboyMove(zomboyFifteen);
    zomboyMove(zomboySixteen);
       
}

// How PC moves around
let movementHandler= e => {
    switch(e.key) {
    case 'a':
    if(survivor.x > 0) {
        survivor.x -=50
    }
    break
    case 'd':
    if(survivor.x < game.width - (survivor.width * 2.5)) {
        survivor.x +=50
    }
    break   
    }
}

    // Requirments to kill survivor as well as end results
    let deadSurvivor = () => {
    if(zomboy.x + zomboy.width > survivor.x &&
        zomboy.x < survivor.x + survivor.width &&
        zomboy.y < survivor.y + survivor.height &&
        zomboy.y + zomboy.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    } if(zomboyOne.x + zomboyOne.width > survivor.x &&
        zomboyOne.x < survivor.x + survivor.width &&
        zomboyOne.y < survivor.y + survivor.height &&
        zomboyOne.y + zomboyOne.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    } if(zomboyTwo.x + zomboyTwo.width > survivor.x &&
        zomboyTwo.x < survivor.x + survivor.width &&
        zomboyTwo.y < survivor.y + survivor.height &&
        zomboyTwo.y + zomboyTwo.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyThree.x + zomboyThree.width > survivor.x &&
        zomboyThree.x < survivor.x + survivor.width &&
        zomboyThree.y < survivor.y + survivor.height &&
        zomboyThree.y + zomboyThree.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyFour.x + zomboyFour.width > survivor.x &&
        zomboyFour.x < survivor.x + survivor.width &&
        zomboyFour.y < survivor.y + survivor.height &&
        zomboyFour.y + zomboyFour.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyFive.x + zomboyFive.width > survivor.x &&
        zomboyFive.x < survivor.x + survivor.width &&
        zomboyFive.y < survivor.y + survivor.height &&
        zomboyFive.y + zomboyFive.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboySix.x + zomboySix.width > survivor.x &&
        zomboySix.x < survivor.x + survivor.width &&
        zomboySix.y < survivor.y + survivor.height &&
        zomboySix.y + zomboySix.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboySeven.x + zomboySeven.width > survivor.x &&
        zomboySeven.x < survivor.x + survivor.width &&
        zomboySeven.y < survivor.y + survivor.height &&
        zomboySeven.y + zomboySeven.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyEight.x + zomboyEight.width > survivor.x &&
        zomboyEight.x < survivor.x + survivor.width &&
        zomboyEight.y < survivor.y + survivor.height &&
        zomboyEight.y + zomboyEight.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyNine.x + zomboyNine.width > survivor.x &&
        zomboyNine.x < survivor.x + survivor.width &&
        zomboyNine.y < survivor.y + survivor.height &&
        zomboyNine.y + zomboyNine.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyTen.x + zomboyTen.width > survivor.x &&
        zomboyTen.x < survivor.x + survivor.width &&
        zomboyTen.y < survivor.y + survivor.height &&
        zomboyTen.y + zomboyTen.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyEleven.x + zomboyEleven.width > survivor.x &&
        zomboyEleven.x < survivor.x + survivor.width &&
        zomboyEleven.y < survivor.y + survivor.height &&
        zomboyEleven.y + zomboyEleven.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyTwelve.x + zomboyTwelve.width > survivor.x &&
        zomboyTwelve.x < survivor.x + survivor.width &&
        zomboyTwelve.y < survivor.y + survivor.height &&
        zomboyTwelve.y + zomboyTwelve.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyThirteen.x + zomboyThirteen.width > survivor.x &&
        zomboyThirteen.x < survivor.x + survivor.width &&
        zomboyThirteen.y < survivor.y + survivor.height &&
        zomboyThirteen.y + zomboyThirteen.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyFourteen.x + zomboyFourteen.width > survivor.x &&
        zomboyFourteen.x < survivor.x + survivor.width &&
        zomboyFourteen.y < survivor.y + survivor.height &&
        zomboyFourteen.y + zomboyFourteen.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboyFifteen.x + zomboyFifteen.width > survivor.x &&
        zomboyFifteen.x < survivor.x + survivor.width &&
        zomboyFifteen.y < survivor.y + survivor.height &&
        zomboyFifteen.y + zomboyFifteen.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }if(zomboySixteen.x + zomboySixteen.width > survivor.x &&
        zomboySixteen.x < survivor.x + survivor.width &&
        zomboySixteen.y < survivor.y + survivor.height &&
        zomboySixteen.y + zomboySixteen.height > survivor.y) {
            audio.play()
            survivor.alive = false;
            alert('GAME OVER')
    }
    }
    
    // How zombies reset at top of screen at different positions
function resetPosition(zomboy){
    zomboy.y = 0- zomboy.height;
    zomboy.x = randomX();
}

function restart() {
    resetPosition(zomboy)
    resetPosition(zomboyOne)
    resetPosition(zomboyTwo)
    resetPosition(zomboyThree)
    resetPosition(zomboyFour)
    resetPosition(zomboyFive)
    resetPosition(zomboySix)
    resetPosition(zomboySeven)
    resetPosition(zomboyEight)
    resetPosition(zomboyNine)
    resetPosition(zomboyTen)
    resetPosition(zomboyEleven)
    resetPosition(zomboyTwelve)
    resetPosition(zomboyThirteen)
    resetPosition(zomboyFourteen)
    resetPosition(zomboyFifteen)
    resetPosition(zomboySixteen)
    survivor.alive = true;
    gameInterval = setInterval (gameLoop, stop())     
}

// Button to start and restart. Setting gameloop. Listening for keypresses
let stop = () => clearInterval(gameInterval);
let gameInterval = setInterval(gameLoop, 60);
clearInterval(gameInterval, gameLoop);
document.addEventListener('keypress', movementHandler);
startBtn.addEventListener('click', restart)




    
 
        


