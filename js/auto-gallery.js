/**
 * Auto Gallery - Simple image detection and display
 * This script automatically detects and displays images from the corresponding folders
 * with captions based on filenames.
 */

// Define the actual images that exist in the folders
const ACTUAL_IMAGES = {
    // certificate: [
    //     'python_basic.jpg',
    //     'certificate.jpg',
    //     'Untitled.jpg'
    // ],
    personal: [
        'Ford-1990.jpeg',
        'Ford-1990__1.jpeg',
        'Ford-1990__2.jpeg',

    ],
    events: [
        'Marathon.jpeg',
        'Marathon__1.jpeg',
        'HULT-Prize.JPG',
        'HULT-Prize__1.JPG',
        'HULT-Prize__2.JPG',
        'HULT-Prize__3.JPG',
        'HULT-Prize__4.JPG',
        'Student-Interaction-Program.jpg',
        'Skill-Shikshya-Certificate.jpg',

    ],
    work: [
        'Work.jpg'
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize galleries
    loadAllImages();
    
    // Set up tab filtering
    setupTabFiltering();
    
    // Show all images initially
    showAllImages();
});

/**
 * Load all images for all galleries
 */
function loadAllImages() {
    console.log('Loading all images...');
    
    // Load gallery images (personal, work, events, certificate)
    loadImagesFromList('personal', '#personal .image-container', createImageBox);
    loadImagesFromList('work', '#work .image-container', createImageBox);
    loadImagesFromList('events', '#events .image-container', createImageBox);
    loadImagesFromList('certificate', '#certificate .image-container', createImageBox);
    
    // Load all images for the "All" tab
    loadAllGalleryImages();
}

/**
 * Load images from a predefined list
 * @param {string} category - The category to load images from
 * @param {string} containerSelector - The selector for the container to add images to
 * @param {Function} createFn - The function to create the image element
 */
function loadImagesFromList(category, containerSelector, createFn) {
    console.log('Loading images for category:', category);
    console.log('Container selector:', containerSelector);
    
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Container not found:', containerSelector);
        return;
    }
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Get the list of images for this category
    const images = ACTUAL_IMAGES[category] || [];
    console.log('Found images for category:', category, images);
    
    // Add each image to the container
    images.forEach((filename, index) => {
        const imgPath = `images/${category}/${filename}`;
        console.log('Loading image:', imgPath);
        const caption = formatCaption(filename);
        
        const element = createFn({
            path: imgPath,
            caption: caption
        }, index);
        
        if (element) {
            element.dataset.category = category;
            container.appendChild(element);
            console.log('Added image element:', caption);
        }
    });
    
    // Add a message if no images were found
    if (images.length === 0) {
        console.log('No images found for category:', category);
        const noImagesMsg = document.createElement('div');
        noImagesMsg.className = 'no-images-message';
        noImagesMsg.innerHTML = `
            <p>No images found in ${category} folder.</p>
            <p>Add images to the images/${category}/ directory to see them here.</p>
        `;
        container.appendChild(noImagesMsg);
    }
}

/**
 * Format a filename into a caption
 * @param {string} filename - The filename to format
 * @returns {string} - The formatted caption
 */
function formatCaption(filename) {
    // Remove file extension
    let nameWithoutExt = filename.replace(/\.[^/.]+$/, "");

    // Remove anything after __ (double underscores), including the __ itself
    nameWithoutExt = nameWithoutExt.replace(/__\d+$/, "");

    // Replace hyphens and underscores with spaces
    const withSpaces = nameWithoutExt.replace(/[-_]/g, ' ');

    // Capitalize each word
    return withSpaces.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}



/**
 * Show all images (for initial load)
 */
function showAllImages() {
    // Show the first tab content by default
    const firstTab = document.querySelector('.gallery-tabs .tab');
    if (firstTab) {
        const targetId = firstTab.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
            firstTab.classList.add('active');
        }
    }
}

/**
 * Setup tab filtering for image galleries
 */
function setupTabFiltering() {
    const tabs = document.querySelectorAll('.gallery-tabs .tab');
    const contents = document.querySelectorAll('.gallery-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            console.log('Tab clicked:', target);
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all gallery content
            contents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });
            
            // Show the target content
            const targetContent = document.getElementById(target);
            if (targetContent) {
                console.log('Showing content for:', target);
                targetContent.style.display = 'block';
                targetContent.classList.add('active');
                
                // Force a reflow to ensure the content is visible
                targetContent.offsetHeight;
            } else {
                console.error('Target content not found:', target);
            }
        });
    });
}

// /**
//  * Create a certificate box element
//  * @param {Object} image - The image object with path and caption
//  * @param {number} index - The index of the certificate for animation delay
//  * @returns {HTMLElement} - The created certificate box element
//  */
// function createCertificateBox(image, index) {
//     // Support both string and object formats
//     const imagePath = typeof image === 'string' ? image : image.path;
//     const caption = typeof image === 'string' ? `Certificate ${index + 1}` : image.caption;

//     const box = document.createElement('div');
//     box.className = 'certificate-box';

//     box.innerHTML = `
//         <img
//             src="${imagePath}"
//             loading="lazy"
//             alt="${caption}"
//             onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/112e42/00abf0?text=${encodeURIComponent(caption)}';"
//         />
//         <div class="certificate-content">
//             <h3>${caption}</h3>
//             <p>Certificate of Achievement</p>
//             <a href="#" class="btn" onclick="viewFullImage('${imagePath}'); return false;">View Certificate</a>
//         </div>
//         <span class="animate scroll" style="--i: ${index + 2}"></span>
//     `;

//     console.log("Creating certificate box for", imagePath);

//     return box;
// }

/* lazy loading*/
function lazyLoadImage(img) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;  // load actual image
            lazyImage.removeAttribute('data-src');
            obs.unobserve(lazyImage);
          }
        });
      });
      observer.observe(img);
    } else {
      // Fallback for browsers without IntersectionObserver
      img.src = img.dataset.src;
    }
  }
  
  
/**
 * Create an image box element
 * @param {Object} image - The image object with path and caption
 * @returns {HTMLElement} - The created image box element
 */
  function createImageBox(image) {
    const box = document.createElement('div');
    box.className = 'image-box';
  
    const img = document.createElement('img');
    img.alt = image.caption;
    img.loading = 'lazy';  // keep native lazy loading too
    img.dataset.src = image.path;  // real image URL stored in data-src
    img.src = 'placeholder.jpg';    // lightweight placeholder image URL
  
    img.onerror = function () {
      this.onerror = null;
      this.src = `https://placehold.co/400x300/112e42/00abf0/png?text=${encodeURIComponent(image.caption)}`;
    };
  
    // Start lazy loading via Intersection Observer
    lazyLoadImage(img);
  
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.textContent = image.caption;
  
    box.appendChild(img);
    box.appendChild(overlay);
  
    box.addEventListener('click', () => {
      // Your click handler code here
      console.log(`Clicked image with caption: ${image.caption}`);
    });
  
    return box;
  }
  

// /**
//  * Create an image box element
//  * @param {Object} image - The image object with path and caption
//  * @returns {HTMLElement} - The created image box element
//  */
// function createImageBox(image) {
//     const box = document.createElement('div');
//     box.className = 'image-box';
    
//     // Create the image element
//     const img = document.createElement('img');
//     img.src = image.path;
//     img.alt = image.caption;
//     img.loading = 'lazy';
    
//     // Handle image loading errors
//     img.onerror = function() {
//         console.log('Image failed to load:', image.path);
//         this.onerror = null;
//         this.src = `https://placehold.co/400x300/112e42/00abf0/png?text=${encodeURIComponent(image.caption)}`;
//     };
    
//     // Create the overlay
//     const overlay = document.createElement('div');
//     overlay.className = 'image-overlay';
//     overlay.innerHTML = `<h3>${image.caption}</h3>`;
    
//     // Add elements to the box
//     box.appendChild(img);
//     box.appendChild(overlay);
    
//     // Add click event to view full image
//     box.addEventListener('click', () => {
//         viewFullImage(image.path);
//     });
    
//     return box;
// }

/**
 * View full-size image in a modal
 * @param {string} imagePath - Path to the image to view
 */
function viewFullImage(imagePath) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('imageModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img id="modalImage" src="" alt="Full size image" onerror="this.onerror=null; this.src='https://via.placeholder.com/800x600/112e42/00abf0?text=Image+Not+Found';">
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listener to close button
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Set image source and show modal
    document.getElementById('modalImage').src = imagePath;
    modal.style.display = 'block';
}

/**
 * Load all gallery images for the "All" tab
 */
function loadAllGalleryImages() {
    const container = document.querySelector('#all .image-container');
    if (!container) return;
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Add all images from personal, work, events, and certificate categories
    let totalImages = 0;
    
    ['personal', 'work', 'events', 'certificate'].forEach(category => {
        const images = ACTUAL_IMAGES[category] || [];
        
        images.forEach(filename => {
            const imgPath = `images/${category}/${filename}`;
            const caption = formatCaption(filename);
            
            const element = createImageBox({
                path: imgPath,
                caption: caption
            });
            
            if (element) {
                element.dataset.category = category;
                container.appendChild(element);
                totalImages++;
            }
        });
    });
    
    // Add a message if no images were found
    if (totalImages === 0) {
        const noImagesMsg = document.createElement('div');
        noImagesMsg.className = 'no-images-message';
        noImagesMsg.innerHTML = `
            <p>No images found in any gallery folders.</p>
            <p>Add images to the images/personal/, images/work/, or images/events/ directories to see them here.</p>
        `;
        container.appendChild(noImagesMsg);
    }
}

// Add styles for no-images message
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .no-images-message {
            padding: 2rem;
            text-align: center;
            background: rgba(0, 171, 240, 0.1);
            border: 2px dashed var(--main-color);
            border-radius: 1rem;
            margin: 2rem 0;
        }
        
        .no-images-message p {
            font-size: 1.6rem;
            color: var(--text-color);
            margin: 1rem 0;
        }
    `;
    document.head.appendChild(style);
}); 