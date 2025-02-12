document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = toggleBtn.querySelector("i");
    const dropDownMenu = document.querySelector(".dropdown-menu");
    const moon = document.getElementById("moon");
    const heroText = document.getElementById("hero-text");
    
    let lastScrollTop = 0;
    
    // Optimize scroll event using requestAnimationFrame
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        header.classList.toggle("hide", scrollTop > lastScrollTop);
        lastScrollTop = scrollTop;

        // Parallax effect
        if (moon && heroText) {
            moon.style.transform = `translateY(${scrollTop * -0.2}px)`;
            heroText.style.transform = `translateY(${scrollTop * 0.2}px)`;
        }
    };
    
    window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
    
    // Toggle menu
    toggleBtn.addEventListener("click", () => {
        dropDownMenu.classList.toggle("active");
        toggleBtnIcon.className = dropDownMenu.classList.contains("active") ? "fas fa-times" : "fas fa-bars";
    });
    
    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!toggleBtn.contains(event.target) && !dropDownMenu.contains(event.target)) {
            dropDownMenu.classList.remove("active");
            toggleBtnIcon.className = "fas fa-bars";
        }
    });
});