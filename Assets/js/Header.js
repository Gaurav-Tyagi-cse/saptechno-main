

document.addEventListener("DOMContentLoaded", () => {
    fetch("Header.html")
        .then(response => {
            console.log("Fetch response status:", response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});




document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let newTop = Math.max(0, 50 - scrollY); // Adjusts top based on scroll

        header.style.top = newTop + "px";
    });
});



// progress


const progres = document.querySelector("#progres"); // Fixed the ID
console.log(progres);
window.addEventListener("scroll", () => {


    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = document.documentElement.scrollTop;
    let width = (scrollPosition / scrollHeight) * 100;

    if (progres) {
        progres.style.width = `${width}%`;
    } else {
        console.error("Element with ID 'progres' not found.");
    }


});


