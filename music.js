const albums = document.querySelectorAll(".maincontainer");


albums.forEach(album => {

    const audio = album.querySelector(".preview");

    // Skip cards that don't have audio
    if (!audio) return;

    let fadeIn;
    let fadeOut;


    album.addEventListener("mouseenter", () => {

        // Stop previous fades
        clearInterval(fadeIn);
        clearInterval(fadeOut);


        audio.currentTime = 0;
        audio.volume = 0;


        audio.play().catch(() => {
            // prevents console errors if browser interrupts playback
        });


        fadeIn = setInterval(() => {

            if (audio.volume < 0.5) {

                audio.volume = Math.min(
                    audio.volume + 0.05,
                    0.5
                );

            } else {

                clearInterval(fadeIn);

            }

        }, 100);

    });



    album.addEventListener("mouseleave", () => {

        clearInterval(fadeIn);
        clearInterval(fadeOut);


        fadeOut = setInterval(() => {


            if (audio.volume > 0.05) {

                audio.volume = Math.max(
                    audio.volume - 0.05,
                    0
                );


            } else {

                audio.volume = 0;
                audio.pause();
                audio.currentTime = 0;

                clearInterval(fadeOut);

            }


        }, 50);

    });

});