/* ===================================
   DESA PONDOK V5 PREMIUM
   HERO SLIDER
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slides =
    document.querySelectorAll(".slide");

    const dots =
    document.querySelectorAll(".dot");

    const nextBtn =
    document.getElementById("nextSlide");

    const prevBtn =
    document.getElementById("prevSlide");

    let current = 0;

    /* ==========================
       TAMPILKAN SLIDE
    ========================== */

    function showSlide(index){

        slides.forEach((slide) => {

            slide.classList.remove("active");

        });

        dots.forEach((dot) => {

            dot.classList.remove("active");

        });

        slides[index].classList.add("active");

        if(dots.length > 0){

            dots[index].classList.add("active");

        }

    }

    /* ==========================
       NEXT
    ========================== */

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    }

    /* ==========================
       PREVIOUS
    ========================== */

    function prevSlide(){

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        showSlide(current);

    }

    /* ==========================
       AUTO SLIDE
    ========================== */

    let autoSlide =
    setInterval(nextSlide, 5000);

    /* ==========================
       NEXT BUTTON
    ========================== */

    if(nextBtn){

        nextBtn.addEventListener("click", () => {

            nextSlide();

            resetAuto();

        });

    }

    /* ==========================
       PREV BUTTON
    ========================== */

    if(prevBtn){

        prevBtn.addEventListener("click", () => {

            prevSlide();

            resetAuto();

        });

    }

    /* ==========================
       DOT INDICATOR
    ========================== */

    dots.forEach((dot,index) => {

        dot.addEventListener("click", () => {

            current = index;

            showSlide(current);

            resetAuto();

        });

    });

    /* ==========================
       RESET TIMER
    ========================== */

    function resetAuto(){

        clearInterval(autoSlide);

        autoSlide =
        setInterval(nextSlide,5000);

    }

    /* ==========================
       INIT
    ========================== */

    if(slides.length > 0){

        showSlide(current);

    }

});