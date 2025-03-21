// Cache DOM elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const contactForm = document.getElementById("contactForm");

// Create overlay element for mobile menu
let overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

// Toggle menu icon and sidebar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    overlay.classList.toggle('active');
}

// Close menu when overlay is clicked
overlay.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    document.body.classList.remove('menu-open');
    overlay.classList.remove('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
        overlay.classList.remove('active');
    });
});

// Optimize scroll handler with throttling
let ticking = false;
window.onscroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Update navbar links
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 550;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
                    });

                    sec.classList.add('show-animate');
                } 
            });

            // Update sticky header
            header.classList.toggle('sticky', window.scrollY > 100);

            // Don't close navbar on scroll anymore
            // This is now handled by the overlay and link clicks

            // Update footer animation
            footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
            
            ticking = false;
        });
        ticking = true;
    }
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Show loading state
    Swal.fire({
        title: 'Sending...',
        text: 'Please wait while we send your message',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // Send email using EmailJS
    emailjs.send(
        "service_q9ny6v8", // Your EmailJS service ID
        "template_qyj20tr", // Your EmailJS template ID
        {
            name: name, // From the form input
            email: email, // From the form input
            title: subject, // From the form input
            message: message, // From the form input
            time: new Date().toLocaleString(), // Current time
        },
        "3ZvixN4xsmYP09b3X" // Your EmailJS public key
    )
    .then(function(response) {
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            confirmButtonColor: '#00abf0'
        });
        
        // Reset form
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        // Show error message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again or contact me directly at mrsushilshresthaofficial@gmail.com',
            confirmButtonColor: '#00abf0'
        });
    });
});

// Optimize CV download handlers
const downloadCv = (event) => {
    event.preventDefault();
    if (confirm('Are You Download CV?')) {
        window.location.href = 'CV/CV.pdf';
    }
};

document.getElementById('downloadCv')?.addEventListener('click', downloadCv);
document.getElementById('downloadCv2')?.addEventListener('click', downloadCv);