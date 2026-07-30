// ==========================
// PASSWORD
// ==========================

const correctPassword = "20.02.2026";

function checkPassword() {

    const password = document.getElementById("password").value;

    if (password === correctPassword) {

        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main").style.display = "block";

        startHearts();
        startSparkles();
        startFireworks();

    } else {

        document.getElementById("error").innerHTML =
        "❌ Wrong password ☹️ Try again ❤️‍🩹";

    }

}

// Press Enter to Unlock

document.addEventListener("DOMContentLoaded", function(){

    const input = document.getElementById("password");

    if(input){

        input.addEventListener("keypress", function(e){

            if(e.key==="Enter"){
                checkPassword();
            }

        });

    }

});

// ==========================
// COUNTDOWN
// ==========================

const birthday = new Date("July 31, 2026 00:00:00").getTime();

const timer = setInterval(function(){

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
        "🎉 Happy Birthday Monica ❤️";

        return;

    }

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

},1000);

// ==========================
// HEARTS
// ==========================

function startHearts(){

    setInterval(function(){

        let heart = document.createElement("div");

        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=(20+Math.random()*25)+"px";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },6000);

    },300);

}

// ==========================
// SPARKLES
// ==========================

function startSparkles(){

    setInterval(function(){

        let sparkle=document.createElement("div");

        sparkle.className="sparkle";

        const emojis=["✨","💖","🌸","💎"];

        sparkle.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        sparkle.style.left=Math.random()*100+"vw";
        sparkle.style.top=Math.random()*100+"vh";

        document.body.appendChild(sparkle);

        setTimeout(function(){

            sparkle.remove();

        },3000);

    },500);

}

// ==========================
// FIREWORKS
// ==========================

function startFireworks(){

    setInterval(function(){

        for(let i=0;i<20;i++){

            let fire=document.createElement("div");

            fire.innerHTML="🎆";

            fire.style.position="fixed";
            fire.style.left=Math.random()*100+"vw";
            fire.style.top=Math.random()*100+"vh";
            fire.style.fontSize=(20+Math.random()*20)+"px";
            fire.style.pointerEvents="none";

            document.body.appendChild(fire);

            fire.animate([
                {transform:"scale(0)",opacity:1},
                {transform:"scale(2)",opacity:0}
            ],{
                duration:1500
            });

            setTimeout(function(){

                fire.remove();

            },1500);

        }

    },4000);

}

// ==========================
// SURPRISE BUTTON
// ==========================

function openGift(){

    document.getElementById("giftMessage").style.display="block";

    window.scrollTo({

        top:document.body.scrollHeight,
        behavior:"smooth"

    });

}
