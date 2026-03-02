import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

/**
 * Sanity Client Configuration
 * This file initializes the Sanity client to connect our React Native app with the Sanity backend.
 *
 * - Configures project ID and dataset
 * - Enables CDN for faster data fetching
 * - Sets up an image URL builder for processing Sanity images
 *
 * Used in: Any data-fetching component
 */

export const client = createClient({
    projectId: '0minc129',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
})

// Create a builder for Sanity image URLs
const builder = imageUrlBuilder(client)

// This function converts Sanity image data into a real image URL
export const urlFor = (source) => builder.image(source)
