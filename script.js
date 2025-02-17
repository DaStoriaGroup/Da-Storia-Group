document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Menu Buttons
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Hide Menu on Scroll Down, Show on Scroll Up
    let lastScrollTop = 0;
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // Scroll down → Hide menu
            nav.style.opacity = "0";
            nav.style.pointerEvents = "none"; // Disable clicks when hidden
        } else {
            // Scroll up → Show menu
            nav.style.opacity = "1";
            nav.style.pointerEvents = "auto";
        }

        lastScrollTop = currentScroll;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant",
    });

    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 100);
});