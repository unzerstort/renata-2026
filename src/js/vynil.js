document.addEventListener("DOMContentLoaded", function() {
    let state = 0;

    const powerBtn = document.querySelector(".power");
    const record = document.querySelector(".record");
    const stick = document.querySelector(".stick");
    const mySong = document.querySelector(".mysong");
    const slider = document.querySelector(".slider");

    if (powerBtn) {
        powerBtn.addEventListener("click", function() {
            record.classList.toggle('on');
            stick.classList.toggle('play');

            if (state === 0) {
                setTimeout(function() {
                    mySong.play();
                }, 1000);
                state = 1;
            } else {
                mySong.pause();
                state = 0;
            }
        });
    }

    if (slider) {
        slider.addEventListener("input", function(e) {
            mySong.volume = e.target.value;
        });
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'r') {
        const player = document.getElementById("player");

        if (player.style.display !== 'block') {
            player.style.display = 'block';
        } else {
            player.style.display = 'none';
        }
    }
});
