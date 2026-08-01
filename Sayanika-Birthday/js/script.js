// ===============================
// LOADING SCREEN
// ===============================

setTimeout(function () {

    document.getElementById("loader").style.display = "none";

    document.getElementById("main").style.display = "block";

}, 4000);


// ===============================
// BEGIN THE JOURNEY BUTTON
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");

const hero = document.querySelector(".hero");

const journey = document.getElementById("journey");

const letterContinueBtn = document.getElementById("letterContinueBtn");
const finalScene = document.getElementById("finalScene");


surpriseBtn.addEventListener("click", function () {

    // Fade the birthday card away
    hero.style.transition = "opacity 1.2s ease";

    hero.style.opacity = "0";


    // Wait for the fade animation
    setTimeout(function () {

        // Hide birthday card
        hero.style.display = "none";

        // Show Scene 2
        journey.style.display = "flex";

        // Start Scene 2 invisible
        journey.style.opacity = "0";

        journey.style.transition = "opacity 1.5s ease";


        // Small delay before appearing
        setTimeout(function () {

            journey.style.opacity = "1";

        }, 100);

    }, 1200);

});
// ===============================
// SCENE 2 → SCENE 3
// ===============================

const continueBtn = document.getElementById("continueBtn");
const specialScene = document.getElementById("specialScene");

continueBtn.addEventListener("click", function () {

    // Fade Scene 2 away
    journey.style.transition = "opacity 1s ease";
    journey.style.opacity = "0";

    setTimeout(function () {

        // Hide Scene 2
        journey.style.display = "none";

        // Prepare Scene 3
        specialScene.style.display = "flex";
        specialScene.style.opacity = "0";
        specialScene.style.transition = "opacity 1.5s ease";

        // Fade Scene 3 in
        setTimeout(function () {

            specialScene.style.opacity = "1";

        }, 100);

    }, 1000);

});
// ===============================
// SCENE 3 → SCENE 4
// ===============================

const nextSceneBtn = document.getElementById("nextSceneBtn");
const photoScene = document.getElementById("photoScene");

nextSceneBtn.addEventListener("click", function () {

    // Fade Scene 3 away
    specialScene.style.transition = "opacity 1s ease";
    specialScene.style.opacity = "0";

    setTimeout(function () {

        // Hide Scene 3
        specialScene.style.display = "none";

        // Prepare Scene 4
        photoScene.style.display = "flex";
        photoScene.style.opacity = "0";
        photoScene.style.transition = "opacity 1.5s ease";

        // Fade Scene 4 in
        setTimeout(function () {

            photoScene.style.opacity = "1";

        }, 100);

    }, 1000);

});
// ==========================================
// SCENE 4 → SCENE 5
// ==========================================

const memoriesBtn = document.getElementById("memoriesBtn");
const memoriesScene = document.getElementById("memoriesScene");

memoriesBtn.addEventListener("click", function () {

    // Fade Scene 4 away
    photoScene.style.transition = "opacity 1s ease";
    photoScene.style.opacity = "0";

    setTimeout(function () {

        // Hide Scene 4
        photoScene.style.display = "none";

        // Show Scene 5
        memoriesScene.style.display = "flex";
        memoriesScene.style.opacity = "0";
        memoriesScene.style.transition = "opacity 1.5s ease";

        setTimeout(function () {

            memoriesScene.style.opacity = "1";

        }, 100);

    }, 1000);

});


// ==========================================
// MEMORIES GALLERY
// ==========================================

const galleryPhoto = document.getElementById("galleryPhoto");
const photoCounter = document.getElementById("photoCounter");

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const thumbnails = document.querySelectorAll(".thumbnail");


// All 10 photos

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg"
];


let currentPhoto = 0;


// ==========================================
// CHANGE PHOTO
// ==========================================

function showPhoto(index) {

    galleryPhoto.style.opacity = "0";
    galleryPhoto.style.transform = "scale(0.95)";

    setTimeout(function () {

        currentPhoto = index;

        galleryPhoto.src = photos[currentPhoto];

        photoCounter.textContent =
            String(currentPhoto + 1).padStart(2, "0") + " / 10";


        // Remove active border from all thumbnails

        thumbnails.forEach(function (thumbnail) {

            thumbnail.classList.remove("active");

        });


        // Add active border to current thumbnail

        thumbnails[currentPhoto].classList.add("active");


        galleryPhoto.style.opacity = "1";
        galleryPhoto.style.transform = "scale(1)";

    }, 300);

}


// ==========================================
// NEXT PHOTO
// ==========================================

nextPhoto.addEventListener("click", function () {

    let next = currentPhoto + 1;

    if (next >= photos.length) {
        next = 0;
    }

    showPhoto(next);

});


// ==========================================
// PREVIOUS PHOTO
// ==========================================

prevPhoto.addEventListener("click", function () {

    let previous = currentPhoto - 1;

    if (previous < 0) {
        previous = photos.length - 1;
    }

    showPhoto(previous);

});


// ==========================================
// CLICK THUMBNAILS
// ==========================================

thumbnails.forEach(function (thumbnail) {

    thumbnail.addEventListener("click", function () {

        const index = Number(this.dataset.index);

        showPhoto(index);

    });

});
// ==========================================
// SCENE 5 → SCENE 6 : LETTER
// ==========================================

const galleryContinueBtn =
    document.getElementById("galleryContinueBtn");

const letterScene =
    document.getElementById("letterScene");

const envelope =
    document.getElementById("envelope");

const letterPaper =
    document.getElementById("letterPaper");

const envelopeInstruction =
    document.querySelector(".envelope-instruction");


// ==========================================
// OPEN CHAPTER 04
// ==========================================

galleryContinueBtn.addEventListener("click", function () {

    // Fade memories gallery away
    memoriesScene.style.transition = "opacity 1s ease";
    memoriesScene.style.opacity = "0";

    setTimeout(function () {

        memoriesScene.style.display = "none";

        // Show letter scene
        letterScene.style.display = "flex";
        letterScene.style.opacity = "0";
        letterScene.style.transition = "opacity 1.5s ease";

        // Make sure we're at the top
        letterScene.scrollTop = 0;

        window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;

        setTimeout(function () {

            letterScene.style.opacity = "1";

        }, 100);

    }, 1000);

});


// ==========================================
// OPEN THE ENVELOPE
// ==========================================

let envelopeOpened = false;

envelope.addEventListener("click", function () {

    // Prevent opening more than once
    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    // Open envelope flap
    envelope.classList.add("open");

    // Hide "tap envelope" message
    envelopeInstruction.style.transition = "opacity .5s ease";
    envelopeInstruction.style.opacity = "0";


    // Wait for envelope animation
    setTimeout(function () {

        // Hide envelope
        envelope.style.transition = "opacity .7s ease";
        envelope.style.opacity = "0";

    }, 1300);


    // Reveal actual letter
setTimeout(function () {

    envelope.style.display = "none";
    envelopeInstruction.style.display = "none";

    letterPaper.style.display = "block";
letterPaper.classList.add("show");
document.getElementById("letterContinueBtn").style.display = "block";

setTimeout(() => {
    letterPaper.scrollIntoView({
        behavior: "instant",
        block: "start"
    });
}, 50);

}, 2000);

});
// Continue from Letter to Final Scene


letterContinueBtn.addEventListener("click", function () {

    letterScene.style.opacity = "0";

    setTimeout(function () {

        letterScene.style.display = "none";

        finalScene.style.display = "flex";

        setTimeout(function () {
            finalScene.style.opacity = "1";
        }, 100);

    }, 1000);

});