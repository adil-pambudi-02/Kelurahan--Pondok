/* ===================================
   DESA PONDOK V5 PREMIUM
   MAIN JS
=================================== */

/* ===================================
   LOADER
=================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/* ===================================
   MOBILE MENU
=================================== */

const menuToggle =
document.getElementById("menuToggle");

const menu =
document.querySelector(".menu");

if(menuToggle && menu){

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


/* ===================================
   CLOSE MENU SAAT KLIK LINK
=================================== */

const navLinks =
document.querySelectorAll(".menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(menu){

            menu.classList.remove("active");

        }

    });

});


/* ===================================
   BACK TO TOP
=================================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }else{

            topBtn.style.display = "none";

        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(navbar){

        if(window.scrollY > 50){

            navbar.style.background = "#ffffff";

            navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";

        }else{

            navbar.style.boxShadow =
            "0 3px 15px rgba(0,0,0,.08)";

        }

    }

});




/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const increment =
        target / 100;

        const update = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

if(counters.length > 0){

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                runCounter();

                observer.disconnect();

            }

        });

    });

    observer.observe(counters[0]);

}


/* ===================================
   ACTIVE MENU
=================================== */

const currentPage =
window.location.pathname.split("/").pop();

document.querySelectorAll(".menu a")
.forEach(link => {

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});


/* ===================================
   SMOOTH SCROLL
=================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ===================================
   AOS INIT
=================================== */

if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,
        once:true

    });

}
