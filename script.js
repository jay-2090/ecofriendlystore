// toglle menu

function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
}

// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add animation when in view
function animateOnScroll() {
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        if (isInView(item) && !item.classList.contains('animated')) {
            item.classList.add('animated'); 
            console.log("Animated class added to:", item); // log
        }
    });
}

// Apply delays to each item
document.querySelectorAll('.product-item').forEach((item, index) => {
    item.classList.add('animate', `animate-delay-${index}`);
});


// Listen to both scroll and load events
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);


// Listen to scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check to apply animation if elements are already in view on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);

// JavaScript for Carbon Footprint Calculator
function calculateCarbon() {
    const usage = document.getElementById('usage').value;
    const lifespan = document.getElementById('lifespan').value;

    if (usage && lifespan) {
        const carbonFootprint = usage * lifespan * 0.8;
        document.getElementById('result').innerText = `Est. Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO2`;
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields';
    }
}

// Contact Form Submission

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:youremail@example.com?subject=Contact%20Form%20Message&body="
        + "Name: " + name + "%0D%0A"
        + "Email: " + email + "%0D%0A"
        + "Message: " + message;

    window.location.href = mailtoLink;
});