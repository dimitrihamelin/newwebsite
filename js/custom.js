// ============================================================
// LOCARODIX — Premium UI custom.js
// ============================================================

// ============================================================
// Get current year for footer
// ============================================================
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var el = document.querySelector("#displayYear");
    if (el) el.innerHTML = currentYear;
}

getYear();


// ============================================================
// Client section owl carousel
// ============================================================
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 2 }
    }
});


// ============================================================
// Navbar sticky: transparent → glassmorphism on scroll
// ============================================================
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.header_section');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ============================================================
// Scroll-to-top button
// ============================================================
(function () {
    // Create the button dynamically if not already present
    var btn = document.getElementById('scrollTopBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'scrollTopBtn';
        btn.className = 'scroll-top-btn';
        btn.setAttribute('aria-label', 'Scroll to top');
        btn.innerHTML = '<i class="fa fa-arrow-up"></i>';
        document.body.appendChild(btn);
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();


// ============================================================
// Scroll reveal animations — IntersectionObserver
// ============================================================
(function () {
    var animatedEls = document.querySelectorAll('.fade-in, .slide-up');
    if (!animatedEls.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.15
    });

    animatedEls.forEach(function (el) {
        observer.observe(el);
    });
})();


// ============================================================
// Why section — inject numbered badges 01–04
// ============================================================
(function () {
    var whyBoxes = document.querySelectorAll('.why_section .box');
    var labels = ['01', '02', '03', '04'];
    whyBoxes.forEach(function (box, i) {
        var imgBox = box.querySelector('.img-box');
        if (imgBox && labels[i]) {
            imgBox.innerHTML = labels[i];
        }
    });
})();


// ============================================================
// Google Map (optional)
// ============================================================
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
