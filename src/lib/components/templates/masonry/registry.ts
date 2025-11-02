import { LayoutGrid } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import masonry components
import MasonryGrid from './masonry-grid.svelte';

/**
 * Masonry component mapping for dynamic component loading
 */
export const MASONRY_COMPONENTS: Record<string, TemplateComponent> = {
	'masonry-grid': MasonryGrid as TemplateComponent
};

/**
 * Masonry templates registry with metadata and default props
 */
export const MASONRY_REGISTRY: Template[] = [
	{
		id: 'masonry-grid',
		name: 'Masonry Grid',
		description: 'Masonry layout for mixed content',
		icon: LayoutGrid,
		category: 'masonry',
		variant: 'grid',
		previewImage: '/templates/masonry-grid.png',
		thumbnailImage: '/templates/thumbnails/masonry-grid.jpg',
		tags: ['masonry', 'grid', 'layout', 'pinterest'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Masonry Layout',
			'Column Layout',
			'Break-inside-avoid',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Pinterest-style Layouts', 'Mixed Content', 'Portfolio'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Gallery',
			description: 'Explore our collection',
			items: []
		},
		template: MasonryGrid
	}
];

