// This code will run after the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the target section's ID from the link's href attribute
            const targetSectionId = link.getAttribute("href");

            // Scroll to the target section smoothly
            document.querySelector(targetSectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add a hover effect to service list items
    const serviceItems = document.querySelectorAll("ul li");
    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            item.style.backgroundColor = "#eee";
        });

        item.addEventListener("mouseleave", function() {
            item.style.backgroundColor = "transparent";
        });
    });
});