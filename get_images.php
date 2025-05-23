<?php
header('Content-Type: application/json');

// Function to get images from a directory
function getImagesFromDirectory($dir) {
    $images = [];
    
    if (is_dir($dir)) {
        $files = scandir($dir);
        
        foreach ($files as $file) {
            // Skip . and .. directories and non-image files
            if ($file === '.' || $file === '..' || !isImageFile($file)) {
                continue;
            }
            
            // Get the filename without extension for caption
            $filenameWithoutExt = pathinfo($file, PATHINFO_FILENAME);
            
            // Convert filename to a readable caption (replace underscores with spaces and capitalize words)
            $caption = ucwords(str_replace('_', ' ', $filenameWithoutExt));
            
            $images[] = [
                'filename' => $file,
                'path' => $dir . '/' . $file,
                'caption' => $caption
            ];
        }
    }
    
    return $images;
}

// Check if a file is an image based on extension
function isImageFile($filename) {
    $imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
    return in_array($ext, $imageExtensions);
}

// Get the requested category
$category = isset($_GET['category']) ? $_GET['category'] : '';

// Set the base directory for images
$baseDir = 'images';

// Get images based on category
switch ($category) {
    case 'certificates':
        $images = getImagesFromDirectory($baseDir . '/certificates');
        break;
    case 'personal':
        $images = getImagesFromDirectory($baseDir . '/personal');
        break;
    case 'work':
        $images = getImagesFromDirectory($baseDir . '/work');
        break;
    case 'events':
        $images = getImagesFromDirectory($baseDir . '/events');
        break;
    default:
        // Return all images organized by category
        $images = [
            'certificates' => getImagesFromDirectory($baseDir . '/certificates'),
            'personal' => getImagesFromDirectory($baseDir . '/personal'),
            'work' => getImagesFromDirectory($baseDir . '/work'),
            'events' => getImagesFromDirectory($baseDir . '/events')
        ];
}

echo json_encode($images);
?> 