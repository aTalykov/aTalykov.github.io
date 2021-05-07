function startGame() {
    // reference
    const canvas = document.getElementById("game");
    const modalEl = document.querySelector("#modalEl")
    modalEl.style.display = 'none';
    const scoreEl = document.querySelector("#scoreEl")
    canvas.width = 360;
    canvas.height = 640;
    let context = canvas.getContext("2d");

    // player model
    const player = {
        x: canvas.width / 2,
        y: 0,
        width: 5,
        height: 80,
        speed: 5
    }
    function movePlayer() {
        if (rightPressed === true && player.x < canvas.width - player.width) {
            player.x += player.speed
        }
        if (leftPressed === true && player.x >= player.width) {
            player.x -= player.speed
        }
    }
    function drawPlayer() {
        const playerSprite = new Image();
        playerSprite.src = "img/needle.png";
        context.drawImage(playerSprite, player.x, player.y, player.width, player.height);
        movePlayer();
    }

    // balloon model
    class Balloon {
        constructor(x, y, width, height, speed, color) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
            this.speed = speed
            this.color = color
            this.status = 1
        }

        moveballoon() {
            if (this.x > 0 && (this.x + this.width < canvas.width)) {
                this.x += (wind / 5)
            }
            this.y -= this.speed
        }

        drawBalloon() {
            const balloonSprite = new Image();
            balloonSprite.src = "img/balloon.png";
            context.filter = `hue-rotate(${this.color}deg)`;
            context.drawImage(balloonSprite, this.x, this.y, this.width, this.height);
            context.filter = "none";
            this.moveballoon();
        }
    }


    // score
    let score = 0;

    function drawScore() {
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("Score: " + score, 8, 20);
    }

    // timer
    let time = 60;
    function drawTime() {
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("Time (seconds): " + time, canvas.width - 150, 20);
    }
    let timer = setInterval(() => { time--; }, 1000)

    // wind (randomly generated from -2 to 2)
    const wind = (Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random() * 3);

    function drawWind() {
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText(`Wind:${wind} m/s`, 8, 120);
    }

    // controls
    let rightPressed = false;
    let leftPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }

    // balloon generation with randomised speed, size and spawn time

    const baseBalloonWidth = 30;
    const baseBallooHeight = 60;
    let baseBalloonSpeed = 2;
    let baseBalloonSpawningSpeed = 3000;
    let newBalloonSpawningSpedd = baseBalloonSpawningSpeed;

    const balloons = [];

    function spawnBalloons() {
        let scaleSize = (Math.floor(Math.random() * 100) / 100) + 1;
        let balloonSpeed = Math.floor(Math.random() * baseBalloonSpeed) + 1;
        let randomSpawnPosition = Math.floor(Math.random() * (canvas.width - (baseBalloonWidth * scaleSize)));
        let balloonColor = Math.floor(Math.random() * 360);
        let newBalloon = new Balloon(randomSpawnPosition, canvas.height, (baseBalloonWidth * scaleSize), (baseBallooHeight * scaleSize), balloonSpeed, balloonColor)
        balloons.push(newBalloon)
    }

    function balloonSpawner() {
        spawnBalloons();
        if (newBalloonSpawningSpedd != baseBalloonSpawningSpeed) {
            clearInterval;
            baseBalloonSpawningSpeed = newBalloonSpawningSpedd;
            spawner = setInterval(balloonSpawner, baseBalloonSpawningSpeed);
        }
    }

    let spawner = setInterval(balloonSpawner, baseBalloonSpawningSpeed);
    // game

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer();
        balloons.forEach(balloon => {
            if (balloon.status === 1) {
                balloon.drawBalloon()
                if (time > 0) {
                    if (balloon.y > (player.height - 50) && balloon.y < (player.height - 15)) {
                        if ((balloon.x + balloon.width) > player.x && balloon.x < (player.x + player.width)) {
                            balloon.status = 0;
                            score++;
                            if (score % 5 == 0) {
                                baseBalloonSpeed++
                                newBalloonSpawningSpedd = baseBalloonSpawningSpeed - 200
                            }
                        }
                    }
                } else {
                    clearInterval(spawner)
                    clearInterval(timer)
                    cancelAnimationFrame(draw);
                    alert('Score ' + score)
                }
            }
        })
        drawScore();
        drawTime();
        drawWind();
        requestAnimationFrame(draw);
    }
    draw()
}