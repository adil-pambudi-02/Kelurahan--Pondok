/* ===================================
   COUNTER DESA PONDOK V5
=================================== */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const startCounter = () => {

        counters.forEach(counter => {

            const target =
            parseInt(counter.getAttribute("data-target"));

            let count = 0;

            const increment = target / 100;

            const updateCounter = () => {

                if (count < target) {

                    count += increment;

                    counter.innerText =
                    Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    };

    const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.disconnect();

            }

        });

    });

    observer.observe(counters[0]);

}