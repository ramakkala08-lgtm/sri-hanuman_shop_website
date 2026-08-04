/* ==========================================
   MOBILE MENU TOGGLE
========================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* ==========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================== */

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

/* ==========================================
   STICKY HEADER EFFECT
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    } else {
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   SIMPLE SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".card, .feature, .about-text, .about-image, .contact-info, .map"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==========================================
   SMOOTH SCROLL FOR NAV LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
    "Sri Hanuman Electrician & Sanitary Website Loaded Successfully!"
);