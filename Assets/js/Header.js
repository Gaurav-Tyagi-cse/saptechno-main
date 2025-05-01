// Combined functionality in a single DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    // First, fetch and load the header
    fetch("header.html")  // Using lowercase for better compatibility
        .then(response => {
            console.log("Fetch response status:", response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the header HTML
            document.getElementById('header').innerHTML = data;
            
            // Now that the header is loaded, we can initialize other header-related functionality
            initHeaderScroll();
            initProgressBar();
            
            // Set active state for current page links (if needed)
            setActiveNavLinks();
        })
        .catch(error => {
            console.error("Error loading header:", error);
            // Provide a fallback or error message for users
            document.getElementById('header').innerHTML = '<div class="alert alert-danger">Error loading header. Please refresh the page.</div>';
        });
});

// Header scroll functionality
function initHeaderScroll() {
    const header = document.getElementById("header");
    if (!header) {
        console.error("Header element not found");
        return;
    }

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let newTop = Math.max(0, 50 - scrollY); // Adjusts top based on scroll
        header.style.top = newTop + "px";
    });
}

// Progress bar functionality
function initProgressBar() {
    const progres = document.getElementById("progres");
    if (!progres) {
        console.error("Progress element not found");
        return;
    }

    window.addEventListener("scroll", () => {
        let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPosition = document.documentElement.scrollTop;
        let width = (scrollPosition / scrollHeight) * 100;
        progres.style.width = `${width}%`;
    });
}

// Set active navigation links based on current page
function setActiveNavLinks() {
    // Get current page path
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Find all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Set active class on matching links
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === "index.html" && href === "") || 
            (href && currentPage.includes(href))) {
            link.classList.add('active');
        }
    });
    
    // Check for dropdown items that should be active
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (href && currentPage.includes(href))) {
            item.classList.add('active');
            // Also activate parent dropdown
            const dropdown = item.closest('.dropdown');
            if (dropdown) {
                const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                if (dropdownToggle) {
                    dropdownToggle.classList.add('active');
                }
            }
        }
    });
}