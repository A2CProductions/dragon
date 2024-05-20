var lives = 3; // Start with three lives
var score = 0; // Initialize score
var invulnerable = false; // Track if the dragon is currently invulnerable

document.addEventListener("keydown", function(event) {
    jump(event.code === "Space");
});

document.addEventListener("touchstart", function(event) {
    jump(true);
    event.preventDefault();
}, {passive: false});

function jump(condition) {
    if (condition && !invulnerable) {
        var dragon = document.getElementById('dragon');
        var currentBottom = parseInt(window.getComputedStyle(dragon).bottom, 10);
        if (currentBottom === 0) {
            dragon.style.bottom = "150px";
            setTimeout(function() {
                dragon.style.bottom = "0px";
            }, 600);
        }
    }
}

setInterval(function() {
    var dragon = document.getElementById('dragon');
    var block = document.getElementById('block');
    var dragonRect = dragon.getBoundingClientRect();
    var blockRect = block.getBoundingClientRect();

    if (!invulnerable && blockRect.left < dragonRect.right && blockRect.right > dragonRect.left &&
        blockRect.top < dragonRect.bottom && blockRect.bottom > dragonRect.top) {
        lives -= 1;
        invulnerable = true;
        setTimeout(function() {
            invulnerable = false;
        }, 2000);

        if (lives > 0) {
            alert('You lost a life! Lives remaining: ' + lives);
        } else {
            alert('Game Over!');
            block.style.animation = "none";
            block.style.display = "none";
        }
    } else if (blockRect.right < dragonRect.left && currentBottom === 0 && !invulnerable) {
        updateScore(); // Update score when the dragon successfully jumps over the block
    }
}, 100);

function updateScore() {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score; // Display updated score
}
