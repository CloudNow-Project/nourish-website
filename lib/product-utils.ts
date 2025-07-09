import fs from 'fs';
import path from 'path';

/**
 * Gets all image files from a product's image directory
 * @param productSlug - The product slug (e.g., 'strawberry-and-carrot')
 * @returns Array of image paths relative to the public directory
 */
export function getProductImages(productSlug: string): string[] {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const productImagesDir = path.join(publicDir, 'images', 'products', productSlug);
    
    // Check if directory exists
    if (!fs.existsSync(productImagesDir)) {
      console.warn(`Product images directory not found: ${productImagesDir}`);
      return [];
    }

    // Read directory contents
    const files = fs.readdirSync(productImagesDir);
    
    // Filter for image files and sort them
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
      })
      // Exclude card images from gallery
      .filter(file => !file.includes('-card'))
      .sort((a, b) => {
        // Sort by number in filename (e.g., 00, 01, 02)
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });

    // Convert to public URLs
    return imageFiles.map(file => `/images/products/${productSlug}/${file}`);
  } catch (error) {
    console.error(`Error getting product images for ${productSlug}:`, error);
    return [];
  }
}

/**
 * Gets the product card image (ending with -card)
 * @param productSlug - The product slug
 * @returns The card image path or undefined if not found
 */
export function getProductCardImage(productSlug: string): string | undefined {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const productImagesDir = path.join(publicDir, 'images', 'products', productSlug);
    
    if (!fs.existsSync(productImagesDir)) {
      return undefined;
    }

    const files = fs.readdirSync(productImagesDir);
    const cardImage = files.find(file => file.includes('-card'));
    
    if (cardImage) {
      return `/images/products/${productSlug}/${cardImage}`;
    }

    // Fallback to first image if no card image exists
    const firstImage = files.find(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });

    return firstImage ? `/images/products/${productSlug}/${firstImage}` : undefined;
  } catch (error) {
    console.error(`Error getting card image for ${productSlug}:`, error);
    return undefined;
  }
}

/**
 * Gets the main product image (with -00) for product detail pages
 * @param productSlug - The product slug
 * @returns The main image path or undefined if not found
 */
export function getProductMainImage(productSlug: string): string | undefined {
  const images = getProductImages(productSlug);
  // Look for an image with -00 in the name for main product image
  return images.find(img => img.includes('-00')) || images[0];
}

/**
 * Gets the hero product image (using '00' for product hero/detail pages)
 * @param productSlug - The product slug
 * @returns The hero image path or undefined if not found
 */
export function getProductHeroImage(productSlug: string): string | undefined {
  const images = getProductImages(productSlug);
  // Look for an image with '00' in the name for hero/detail pages
  return images.find(img => img.includes('00')) || images[0];
} 