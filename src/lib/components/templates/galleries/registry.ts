import { Image } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import gallery components
import GalleryGrid from './gallery-grid.svelte';
import GalleryMasonry from './gallery-masonry.svelte';
import GalleryWithOverlay from './gallery-with-overlay.svelte';

/**
 * Galleries component mapping for dynamic component loading
 */
export const GALLERIES_COMPONENTS: Record<string, TemplateComponent> = {
	'gallery-grid': GalleryGrid as TemplateComponent,
	'gallery-masonry': GalleryMasonry as TemplateComponent,
	'gallery-with-overlay': GalleryWithOverlay as TemplateComponent
};

/**
 * Galleries templates registry with metadata and default props
 */
export const GALLERIES_REGISTRY: Template[] = [
	{
		id: 'gallery-grid',
		name: 'Gallery Grid',
		description: 'Grid-based image gallery',
		icon: Image,
		category: 'galleries',
		variant: 'grid',
		previewImage: '/templates/gallery-grid.png',
		thumbnailImage: '/templates/thumbnails/gallery-grid.jpg',
		tags: ['gallery', 'grid', 'images', 'photos'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Photo Galleries', 'Portfolio', 'Image Showcases'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Gallery',
			description: 'Explore our collection',
			images: []
		},
		template: GalleryGrid
	},
	{
		id: 'gallery-masonry',
		name: 'Gallery Masonry',
		description: 'Masonry-style image gallery',
		icon: Image,
		category: 'galleries',
		variant: 'masonry',
		previewImage: '/templates/gallery-masonry.png',
		thumbnailImage: '/templates/thumbnails/gallery-masonry.jpg',
		tags: ['gallery', 'masonry', 'images', 'columns'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Masonry Layout',
			'Column Layout',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Photo Galleries', 'Portfolio', 'Pinterest-style'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			images: []
		},
		template: GalleryMasonry
	},
	{
		id: 'gallery-with-overlay',
		name: 'Gallery with Overlay',
		description: 'Image gallery with hover overlay effects',
		icon: Image,
		category: 'galleries',
		variant: 'overlay',
		previewImage: '/templates/gallery-with-overlay.png',
		thumbnailImage: '/templates/thumbnails/gallery-with-overlay.jpg',
		tags: ['gallery', 'overlay', 'hover', 'images'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Hover Overlay',
			'Grid Layout',
			'Gradient Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Interactive Galleries', 'Portfolio', 'Photo Showcases'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Gallery',
			description: 'Browse our collection',
			images: []
		},
		template: GalleryWithOverlay
	}
];

