/* =====================================================
   PAGE SYSTEM — EXACTLY 5 PAGES
===================================================== */

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5")
];

let currentPage = 0;

function showPage(number) {

    pages.forEach((page, index) => {

        if (!page) return;

        page.classList.toggle(
            "active",
            index === number
        );

    });


    /* Remove old page-state classes */

    document.body.classList.remove(
        "page1-active",
        "page2-active",
        "page3-active",
        "page4-active",
        "page5-active"
    );


    /* Add current page class */

    document.body.classList.add(
        `page${number + 1}-active`
    );


    currentPage = number;
}


/* =====================================================
   WAIT
===================================================== */

function wait(ms) {

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );

}


/* =====================================================
   FALLING DECORATIONS
===================================================== */

const fallingContainer =
    document.getElementById(
        "fallingDecorations"
    );


const decorationTypes = [
    "✦",
    "✧",
    "◇",
    "♡",
    "💫",
    "🎉",
    "🎊",
    "✨",
    "🎈",
    "💖"
];


function createFallingDecoration() {

    if (!fallingContainer) return;


    const item =
        document.createElement(
            "span"
        );


    item.className =
        "falling";


    item.textContent =
        decorationTypes[
            Math.floor(
                Math.random() *
                decorationTypes.length
            )
        ];


    item.style.left =
        Math.random() * 100 + "vw";


    item.style.fontSize =
        (12 + Math.random() * 16) +
        "px";


    item.style.animationDuration =
        (4 + Math.random() * 4) +
        "s";


    fallingContainer.appendChild(
        item
    );


    setTimeout(() => {

        item.remove();

    }, 9000);

}


/*
   Start several immediately
*/

for (
    let i = 0;
    i < 6;
    i++
) {

    setTimeout(
        createFallingDecoration,
        i * 220
    );

}


/*
   Keep falling
*/

setInterval(
    createFallingDecoration,
    500
);


/* =====================================================
   READY BUTTON
===================================================== */

const readyButton =
    document.getElementById(
        "readyButton"
    );


setTimeout(() => {

    if (readyButton) {

        readyButton.classList.add(
            "show"
        );

    }

}, 1200);


if (readyButton) {

    readyButton.addEventListener(
        "click",
        async () => {

            readyButton.disabled =
                true;

            await startCountdown();

        }
    );

}


/* =====================================================
   COUNTDOWN
===================================================== */

const countdownNumber =
    document.getElementById(
        "countdownNumber"
    );


async function startCountdown() {

    showPage(1);


    const numbers = [
        "3",
        "2",
        "1"
    ];


    for (
        const number of numbers
    ) {

        countdownNumber.textContent =
            number;


        countdownNumber.classList.remove(
            "count-pop"
        );


        void countdownNumber.offsetWidth;


        countdownNumber.classList.add(
            "count-pop"
        );


        await wait(1000);

    }


    await birthdayReveal();

}


/* =====================================================
   TYPEWRITER
===================================================== */

function typeText(
    element,
    text,
    speed
) {

    return new Promise(resolve => {

        let index = 0;

        element.textContent = "";


        const interval =
            setInterval(() => {

                element.textContent +=
                    text[index];

                index++;


                if (
                    index >=
                    text.length
                ) {

                    clearInterval(
                        interval
                    );

                    resolve();

                }

            }, speed);

    });

}


/* =====================================================
   BIRTHDAY REVEAL
===================================================== */

async function birthdayReveal() {

    showPage(2);


    const card =
        document.getElementById(
            "birthdayCard"
        );


    const happy =
        document.getElementById(
            "happyText"
        );


    const birthday =
        document.getElementById(
            "birthdayText"
        );


    const name =
        document.getElementById(
            "nameText"
        );


    const nextButton =
        document.getElementById(
            "birthdayNext"
        );


    /* -----------------------------------------
       CARD ENTERS
    ----------------------------------------- */

    await wait(450);

    card.classList.add(
        "visible"
    );


    await wait(500);


    /* -----------------------------------------
       HAPPY
    ----------------------------------------- */

    await typeText(
        happy,
        "Happy",
        115
    );


    await wait(180);


    /* -----------------------------------------
       BIRTHDAY
    ----------------------------------------- */

    await typeText(
        birthday,
        "Birthday",
        100
    );


    await wait(180);


    /* -----------------------------------------
       VAIBHAVI
    ----------------------------------------- */

    await typeText(
        name,
        "Vaibhavi",
        105
    );


    /* -----------------------------------------
       SUSPENSE
    ----------------------------------------- */

    await wait(600);


    /* -----------------------------------------
       BIG POP + CELEBRATION
    ----------------------------------------- */

    createCelebration();


    card.classList.remove(
        "celebrate"
    );


    void card.offsetWidth;


    card.classList.add(
        "celebrate"
    );


    await wait(850);


    /* -----------------------------------------
       PHOTO 1
    ----------------------------------------- */

    const photo1 =
        document.querySelector(
            ".photo1"
        );


    const photo2 =
        document.querySelector(
            ".photo2"
        );


  const photo3 =
    document.querySelector(
        ".photo3"
    );

const photo4 =
    document.querySelector(
        ".photo4"
    );


    photo1.classList.add(
        "show"
    );


    await wait(250);


    photo2.classList.add(
        "show"
    );


    await wait(250);


    photo3.classList.add(
        "show"
    );

    await wait(250);

photo4.classList.add(
    "show"
);


    /* -----------------------------------------
       CONTINUE APPEARS
    ----------------------------------------- */

    await wait(850);


    nextButton.classList.add(
        "show"
    );

}


/* =====================================================
   CELEBRATION BURST
===================================================== */

function createCelebration() {

    const oldBurst =
        document.getElementById(
            "celebrationBurst"
        );


    if (oldBurst) {

        oldBurst.remove();

    }


    const burst =
        document.createElement(
            "div"
        );


    burst.id =
        "celebrationBurst";


    const pieces = [
        "🎉",
        "🎊",
        "✨",
        "🎆",
        "💫",
        "🎉",
        "✨",
        "🎊",
        "🎆",
        "💖",
        "✦",
        "💫",
        "🎉",
        "🎊",
        "✨",
        "🎆",
        "💫",
        "✦",
        "🎉",
        "🎊"
    ];


    pieces.forEach(
        (piece, index) => {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "burst";


            particle.textContent =
                piece;


            const angle =
                (
                    index /
                    pieces.length
                ) *
                Math.PI *
                2
                +
                Math.random() * .45;


            const distance =
                260 +
                Math.random() * 240;


            particle.style.setProperty(
                "--x",
                Math.cos(angle) *
                distance +
                "px"
            );


            particle.style.setProperty(
                "--y",
                Math.sin(angle) *
                distance +
                "px"
            );


            burst.appendChild(
                particle
            );

        }
    );


    const page3 =
        document.getElementById(
            "page3"
        );


    page3.appendChild(
        burst
    );


    setTimeout(() => {

        burst.remove();

    }, 1900);

}


/* =====================================================
   BIRTHDAY → POSITIVE
===================================================== */

const birthdayNext =
    document.getElementById(
        "birthdayNext"
    );


birthdayNext.addEventListener(
    "click",
    () => {

        showPage(3);

    }
);


/* =====================================================
   POSITIVE MESSAGE ROTATION
===================================================== */

const messages =
    document.querySelectorAll(
        ".message"
    );


const messageDots =
    document.querySelectorAll(
        ".message-dot"
    );


let messageIndex = 0;


function nextMessage() {

    if (!messages.length) return;


    messages[
        messageIndex
    ].classList.remove(
        "active"
    );


    messageDots[
        messageIndex
    ].classList.remove(
        "active"
    );


    messageIndex++;


    if (
        messageIndex >=
        messages.length
    ) {

        messageIndex = 0;

    }


    messages[
        messageIndex
    ].classList.add(
        "active"
    );


    messageDots[
        messageIndex
    ].classList.add(
        "active"
    );

}


setInterval(
    nextMessage,
    3500
);


/* =====================================================
   POSITIVE → FINAL
===================================================== */

const messageNext =
    document.getElementById(
        "messageNext"
    );


messageNext.addEventListener(
    "click",
    () => {

        showPage(4);

    }
);


/* =====================================================
   START ON PAGE 1
===================================================== */

showPage(0);