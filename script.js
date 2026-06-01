// =========================
// PAGE FLIP SYSTEM
// =========================

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".next-btn");

let currentPage = 0;

nextButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        if(currentPage < pages.length - 1){

            pages[currentPage].classList.remove("active");

            currentPage++;

            pages[currentPage].classList.add("active");

        }

    });

});

// =========================
// GALAXY STARS
// =========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const stars = [];

for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.5,
        speed: Math.random() * 0.2 + 0.05

    });

}

function animateStars(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "white";

    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.r,
            0,
            Math.PI * 2
        );

        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){

            star.y = -10;
            star.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(
        animateStars
    );

}

animateStars();

// =========================
// FALLING PETALS
// =========================

const petalContainer =
document.getElementById(
    "petal-container"
);

function createPetal(){

    const petal =
    document.createElement("div");

    petal.className = "petal";

    const flowers = [
        "🌸",
        "💜",
        "🌺"
    ];

    petal.innerHTML =
    flowers[
        Math.floor(
            Math.random() *
            flowers.length
        )
    ];

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.animationDuration =
    (5 + Math.random() * 8) + "s";

    petal.style.fontSize =
    (20 + Math.random() * 20) + "px";

    petalContainer.appendChild(
        petal
    );

    setTimeout(() => {

        petal.remove();

    },13000);

}

setInterval(
    createPetal,
    350
);

// =========================
// CURSOR SPARKLES
// =========================

document.addEventListener(
    "mousemove",
    (e)=>{

        const sparkle =
        document.createElement(
            "div"
        );

        sparkle.className =
        "sparkle";

        sparkle.style.left =
        e.clientX + "px";

        sparkle.style.top =
        e.clientY + "px";

        document.body.appendChild(
            sparkle
        );

        setTimeout(()=>{

            sparkle.remove();

        },800);

    }
);

// =========================
// NO BUTTON
// =========================

const noBtn =
document.getElementById(
    "noBtn"
);

let noCount = 0;

const funnyTexts = [

    "NO 😝",
    "Wait 🥺",
    "Think Again 🤭",
    "Really? 💜"

];

if(noBtn){

    noBtn.addEventListener(
        "mouseenter",
        ()=>{

            if(noCount < 3){

                noBtn.innerHTML =
                funnyTexts[
                    noCount
                ];

                const x =
                Math.random() *
                (
                    window.innerWidth
                    - 180
                );

                const y =
                Math.random() *
                (
                    window.innerHeight
                    - 100
                );

                noBtn.style.position =
                "fixed";

                noBtn.style.left =
                x + "px";

                noBtn.style.top =
                y + "px";

                noCount++;

            }else{

                noBtn.style.display =
                "none";

            }

        }
    );

}

// =========================
// YES BUTTON
// =========================

const yesBtn =
document.getElementById(
    "yesBtn"
);

const yesScreen =
document.getElementById(
    "yesScreen"
);

if(yesBtn){

    yesBtn.addEventListener(
        "click",
        ()=>{

            yesScreen.classList.add(
                "show"
            );

            const song =
            document.getElementById(
                "song"
            );

            if(song){

                song.play().catch(()=>{});

            }

            createCelebration();

        }
    );

}

// =========================
// CELEBRATION
// =========================

function createCelebration(){

    setInterval(()=>{

        const item =
        document.createElement(
            "div"
        );

        item.innerHTML =
        Math.random() > 0.5
        ? "🌸"
        : "✨";

        item.style.position =
        "fixed";

        item.style.left =
        Math.random()*100
        + "vw";

        item.style.top =
        "-50px";

        item.style.fontSize =
        (20 + Math.random()*25)
        + "px";

        item.style.pointerEvents =
        "none";

        item.style.animation =
        "fall 8s linear forwards";

        document.body.appendChild(
            item
        );

        setTimeout(()=>{

            item.remove();

        },8000);

    },250);

}