document.addEventListener("DOMContentLoaded", function() {
    // Custom JavaScript if needed
    console.log("Landing page loaded successfully.");
});
$(document).ready(function(){
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
// Countdown Timer
function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    let countdownDisplay = document.getElementById("countdown");

    let interval = setInterval(() => {
        days = Math.floor(timer / (24 * 60 * 60));
        hours = Math.floor((timer % (24 * 60 * 60)) / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (--timer < 0) {
            clearInterval(interval);
            countdownDisplay.innerHTML = "Expired";
        }
    }, 1000);
}

// Set countdown for 7 days
startCountdown(7 * 24 * 60 * 60);
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".category-tabs .nav-link");
    const products = document.querySelectorAll(".product-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            let filter = this.getAttribute("data-filter");

            products.forEach(product => {
                if (filter === "all" || product.getAttribute("data-category") === filter) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.querySelector(".subscribe-bar button");

    subscribeBtn.addEventListener("click", function () {
        alert("Thank you for subscribing!");
    });
});
