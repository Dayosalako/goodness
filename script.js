document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;";
    document.querySelector("header").prepend(menuToggle);
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Smooth Scroll Effect
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll Fade-in Effect
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector(".slider");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        let index = 0;
    
        function moveSlide(step) {
            const totalSlides = document.querySelectorAll(".school-card").length;
            index = (index + step + totalSlides) % totalSlides;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    
        nextBtn.addEventListener("click", () => moveSlide(1));
        prevBtn.addEventListener("click", () => moveSlide(-1));
    
        // Auto-scroll every 5 seconds
        setInterval(() => moveSlide(1), 5000);
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector(".slider");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        
        let currentIndex = 0;
        const totalItems = document.querySelectorAll(".school-card").length;
    
        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    
        nextBtn.addEventListener("click", function () {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
                updateSlider();
            }
        });
    
        prevBtn.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
    });
    

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.classList.add("back-to-top");
    backToTop.innerHTML = "&#8679;";
    document.body.appendChild(backToTop);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Typing Effect
    const typingText = document.querySelector(".typing-text");
    if (typingText) {
        const words = ["Welcome to Goodness Schools!", "The Spirit of Excellence!", "Shaping Future Leaders!"];
        let wordIndex = 0, charIndex = 0;
        const typeEffect = () => {
            if (charIndex < words[wordIndex].length) {
                typingText.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    typingText.textContent = "";
                    charIndex = 0;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeEffect();
                }, 2000);
            }
        };
        typeEffect();
    }

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.classList.add("dark-mode-toggle");
    darkModeToggle.innerHTML = "🌙";
    document.body.appendChild(darkModeToggle);
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;

    // Function to show a slide
    const showSlide = (index) => {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    };

    // Show the first slide
    showSlide(currentSlide);

    // Auto-Slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Manual Navigation
    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
});
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".event-slide");
    const slider = document.querySelector(".slider");

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    let newTransformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + newTransformValue + ")";
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Smooth scrolling effect
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }

            // Close menu on mobile after click
            if (window.innerWidth < 768) {
                nav.classList.remove("active");
            }
        });
    });
});
