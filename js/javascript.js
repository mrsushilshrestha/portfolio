// Cache DOM elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const contactForm = document.getElementById("contactForm");
const certificateSection = document.getElementById('certificate');
const imagesSection = document.getElementById('images');
const certificateLink = document.querySelector('.dropdown-content a[href="#certificate"]');
const educationLink = document.querySelector('.dropdown-parent > a[href="#education"]');
const imagesLink = document.querySelector('.dropdown-parent > a[href="#images"]');
const imageDropdownLinks = document.querySelectorAll('.dropdown-parent > .dropdown-content a[href^="#"]');

// Show section based on hash in URL
function checkUrlHash() {
    const hash = window.location.hash;
    
    // Reset all sections first
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        if (section.id !== 'certificate' && section.id !== 'images') {
            section.style.display = '';
        } else {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });
    
    // Handle specific sections
    if (hash === '#certificate') {
        showCertificateSection();
    } else if (hash === '#images' || hash === '#personal' || hash === '#work' || hash === '#events') {
        // Show images section
        showImagesSection(hash.substring(1)); // remove #
    }
}

// Function to show certificate section
// function showCertificateSection() {
//     if (!certificateSection) return;
    
//     // Hide all sections
//     sections.forEach(section => {
//         section.style.display = 'none';
//     });
    
//     // Show certificate section
//     certificateSection.classList.add('active');
//     certificateSection.style.display = 'block';
    
//     // Update active navigation
//     navLinks.forEach(link => link.classList.remove('active'));
//     document.querySelector('.dropdown-parent > a[href="#education"]')?.classList.add('active');
// }

// Function to show images section with specific tab
function showImagesSection(tabId = 'personal') {
    if (!imagesSection) return;
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show images section
    imagesSection.classList.add('active');
    imagesSection.style.display = 'block';
    
    // Activate correct tab if specified
    if (tabId === 'personal' || tabId === 'work' || tabId === 'events') {
        const tabs = document.querySelectorAll('.gallery-tabs .tab');
        const contents = document.querySelectorAll('.gallery-content');
        
        // Set active tab
        tabs.forEach(tab => {
            if (tab.getAttribute('data-target') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Show active content
        contents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }
    
    // Update active navigation
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('.dropdown-parent > a[href="#images"]')?.classList.add('active');
}

// Ensure sections are properly hidden/shown on page load
document.addEventListener('DOMContentLoaded', function() {
    // Hide certificate and images sections by default
    if (certificateSection) {
        certificateSection.style.display = 'none';
        certificateSection.classList.remove('active');
    }
    
    if (imagesSection) {
        imagesSection.style.display = 'none';
        imagesSection.classList.remove('active');
    }
    
    // Check URL hash on load
    checkUrlHash();
    
    // Set up event listeners for dropdown navigation
    
    // Education dropdown click
    if (educationLink) {
        educationLink.addEventListener('click', function(e) {
            if (window.innerWidth > 768) { // Only on desktop
                e.preventDefault();
                
                // Show education section
                const educationSection = document.getElementById('education');
                if (educationSection) {
                    // Show all main sections except certificate and images
                    sections.forEach(section => {
                        if (section.id !== 'certificate' && section.id !== 'images') {
                            section.style.display = '';
                        } else {
                            section.style.display = 'none';
                            section.classList.remove('active');
                        }
                    });
                    
                    // Scroll to education section
                    window.scrollTo({
                        top: educationSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without triggering reload
                    history.pushState(null, '', '#education');
                }
            }
        });
    }
    
    // Certificate link click
    if (certificateLink) {
        certificateLink.addEventListener('click', function(e) {
            e.preventDefault();
            showCertificateSection();
            
            // Close mobile menu if open
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
            document.body.classList.remove('menu-open');
            overlay.classList.remove('active');
            
            // Update URL without triggering reload
            history.pushState(null, '', '#certificate');
        });
    }
    
    // Images dropdown click
    if (imagesLink) {
        imagesLink.addEventListener('click', function(e) {
            if (window.innerWidth > 768) { // Only on desktop
                e.preventDefault();
                showImagesSection('personal'); // Default to personal tab
                
                // Update URL without triggering reload
                history.pushState(null, '', '#images');
            }
        });
    }
    
    // Image dropdown links (personal, work, events)
    imageDropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1); // Remove #
            showImagesSection(target);
            
            // Close mobile menu if open
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
            document.body.classList.remove('menu-open');
            overlay.classList.remove('active');
            
            // Update URL without triggering reload
            history.pushState(null, '', this.getAttribute('href'));
        });
    });
});

// Initialize Bootstrap tooltips and popovers if needed
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips (if any)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    if (tooltipTriggerList.length) {
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Initialize Bootstrap popovers (if any)
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    if (popoverTriggerList.length) {
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }
});

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
                // Skip if section is certificate and not active
                if (sec.id === 'certificate' && !sec.classList.contains('active')) {
                    return;
                }
                
                const top = window.scrollY;
                const offset = sec.offsetTop - 550;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active');
                    });

                    sec.classList.add('show-animate');
                } 
            });

            // Update sticky header
            header.classList.toggle('sticky', window.scrollY > 100);

            // Update footer animation
            footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
            
            ticking = false;
        });
        ticking = true;
    }
}

// Contact form submission with enhanced validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !phone || !subject || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all required fields',
            confirmButtonColor: '#00abf0'
        });
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address',
            confirmButtonColor: '#00abf0'
        });
        return;
    }

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

// Initialize dropdown functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdownParents = document.querySelectorAll('.navbar .dropdown-parent');
    
    // Handle mobile dropdown toggles
    dropdownParents.forEach(parent => {
        const parentLink = parent.querySelector('a');
        
        if (parentLink) {
            parentLink.addEventListener('click', function(e) {
                // Only for mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle active state
                    parent.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdownParents.forEach(other => {
                        if (other !== parent) {
                            other.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
});

// Gallery tabs functionality
const galleryTabs = document.querySelectorAll('.gallery-tabs .tab');
const galleryContents = document.querySelectorAll('.gallery-content');

galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        galleryTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get the target content
        const target = tab.getAttribute('data-target');
        
        // Hide all gallery content
        galleryContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the target content
        document.getElementById(target).classList.add('active');
    });
});

// Update section visibility when clicking regular nav links
navLinks.forEach(link => {
    if (!link.classList.contains('dropdown-parent')) {
        link.addEventListener('click', function() {
            const target = this.getAttribute('href');
            if (target !== '#certificate' && !target.startsWith('#images') && 
                target !== '#personal' && target !== '#work' && target !== '#events') {
                
                // Show all main sections and hide special sections
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    if (section.id !== 'certificate' && section.id !== 'images') {
                        section.style.display = '';
                    } else {
                        section.style.display = 'none';
                        section.classList.remove('active');
                    }
                });
            }
        });
    }
});

// Check hash on page load and when hash changes
window.addEventListener('load', checkUrlHash);
window.addEventListener('hashchange', checkUrlHash);