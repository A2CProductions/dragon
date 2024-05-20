var lives = 3; // Start with three lives
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
        lives -= 1; // Decrement the life count
        invulnerable = true; // Make dragon invulnerable temporarily
        setTimeout(function() {
            invulnerable = false; // Reset invulnerability after 2 seconds
        }, 2000);

        if (lives > 0) {
            alert('You lost a life! Lives のこぎり: ' + lives);
        } else {
            alert('へたくそか!ゲームオーバーだぜ');
            block.style.animation = "none";
            block.style.display = "none";
        }
    }
}, 100);
