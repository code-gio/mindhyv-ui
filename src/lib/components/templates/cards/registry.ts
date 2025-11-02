import { LayoutGrid } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import card components
import CardGridWithButtons from './card-grid-with-buttons.svelte';
import CardGridWithImages from './card-grid-with-images.svelte';
import CardGridBlogStyle from './card-grid-blog-style.svelte';
import CardGridMinimal from './card-grid-minimal.svelte';
import CardGridWithLinks from './card-grid-with-links.svelte';
import CardGridHorizontal from './card-grid-horizontal.svelte';
import CardGridCentered from './card-grid-centered.svelte';

/**
 * Cards component mapping for dynamic component loading
 */
export const CARDS_COMPONENTS: Record<string, TemplateComponent> = {
	'card-grid-with-buttons': CardGridWithButtons as TemplateComponent,
	'card-grid-with-images': CardGridWithImages as TemplateComponent,
	'card-grid-blog-style': CardGridBlogStyle as TemplateComponent,
	'card-grid-minimal': CardGridMinimal as TemplateComponent,
	'card-grid-with-links': CardGridWithLinks as TemplateComponent,
	'card-grid-horizontal': CardGridHorizontal as TemplateComponent,
	'card-grid-centered': CardGridCentered as TemplateComponent
};

/**
 * Cards templates registry with metadata and default props
 */
export const CARDS_REGISTRY: Template[] = [
	{
		id: 'card-grid-with-buttons',
		name: 'Card Grid with Action Buttons',
		description: 'Card grid with logos, descriptions, and dual action buttons',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'default',
		previewImage: '/templates/card-grid-with-buttons.png',
		thumbnailImage: '/templates/thumbnails/card-grid-with-buttons.jpg',
		tags: ['cards', 'grid', 'buttons', 'apis', 'integrations'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Logo Display',
			'Dual Action Buttons',
			'Card Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['API Showcases', 'Integration Lists', 'Partner Highlights', 'Product Cards'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			cards: []
		},
		template: CardGridWithButtons
	},
	{
		id: 'card-grid-with-images',
		name: 'Card Grid with Images',
		description: 'Image cards with badges and descriptions',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'default',
		previewImage: '/templates/card-grid-with-images.png',
		thumbnailImage: '/templates/thumbnails/card-grid-with-images.jpg',
		tags: ['cards', 'images', 'blog', 'content'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Image Cards',
			'Hover Effects',
			'Badge Support',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Cards', 'Portfolio Items', 'Product Showcases', 'Content Grids'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			cards: []
		},
		template: CardGridWithImages
	},
	{
		id: 'card-grid-blog-style',
		name: 'Card Grid Blog Style',
		description: 'Blog-style cards with author info and metadata',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'default',
		previewImage: '/templates/card-grid-blog-style.png',
		thumbnailImage: '/templates/thumbnails/card-grid-blog-style.jpg',
		tags: ['cards', 'blog', 'author', 'articles'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Author Info',
			'Read Time',
			'Category Tags',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Sections', 'Article Lists', 'News Cards', 'Content Hubs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			cards: []
		},
		template: CardGridBlogStyle
	},
	{
		id: 'card-grid-minimal',
		name: 'Card Grid Minimal',
		description: 'Minimal cards with icons and descriptions',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'minimal',
		previewImage: '/templates/card-grid-minimal.png',
		thumbnailImage: '/templates/thumbnails/card-grid-minimal.jpg',
		tags: ['cards', 'minimal', 'icons', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Icon Support',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Cards', 'Service Grids', 'Simple Showcases'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			cards: []
		},
		template: CardGridMinimal
	},
	{
		id: 'card-grid-with-links',
		name: 'Card Grid with Links',
		description: 'Cards with icons and clickable links',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'default',
		previewImage: '/templates/card-grid-with-links.png',
		thumbnailImage: '/templates/thumbnails/card-grid-with-links.jpg',
		tags: ['cards', 'links', 'icons', 'clickable'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Clickable Cards',
			'Icon Support',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Links', 'Resource Cards', 'Navigation Grids'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Resources',
			description: 'Explore our features',
			cards: []
		},
		template: CardGridWithLinks
	},
	{
		id: 'card-grid-horizontal',
		name: 'Card Grid Horizontal Layout',
		description: 'Horizontal card layout with images',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'default',
		previewImage: '/templates/card-grid-horizontal.png',
		thumbnailImage: '/templates/thumbnails/card-grid-horizontal.jpg',
		tags: ['cards', 'horizontal', 'images', 'blog'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Horizontal Layout',
			'Image Cards',
			'Category Tags',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Lists', 'Article Cards', 'News Sections'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			cards: []
		},
		template: CardGridHorizontal
	},
	{
		id: 'card-grid-centered',
		name: 'Card Grid Centered Icons',
		description: 'Centered card grid with icon circles',
		icon: LayoutGrid,
		category: 'cards',
		variant: 'centered',
		previewImage: '/templates/card-grid-centered.png',
		thumbnailImage: '/templates/thumbnails/card-grid-centered.jpg',
		tags: ['cards', 'centered', 'icons', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Icons',
			'Card Layout',
			'Icon Circles',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Cards', 'Service Grids', 'Benefits Showcase'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Our Services',
			description: 'What we offer',
			cards: []
		},
		template: CardGridCentered
	}
];

