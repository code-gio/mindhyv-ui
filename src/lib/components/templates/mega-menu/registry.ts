import { Menu } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import mega menu components
import MegaMenuSimple from './mega-menu-simple.svelte';
import MegaMenuWithImages from './mega-menu-with-images.svelte';
import MegaMenuFullWidth from './mega-menu-full-width.svelte';

/**
 * Mega Menu component mapping for dynamic component loading
 */
export const MEGA_MENU_COMPONENTS: Record<string, TemplateComponent> = {
	'mega-menu-simple': MegaMenuSimple as TemplateComponent,
	'mega-menu-with-images': MegaMenuWithImages as TemplateComponent,
	'mega-menu-full-width': MegaMenuFullWidth as TemplateComponent
};

/**
 * Mega Menu templates registry with metadata and default props
 */
export const MEGA_MENU_REGISTRY: Template[] = [
	{
		id: 'mega-menu-simple',
		name: 'Mega Menu Simple',
		description: 'Multi-column mega menu with hover activation',
		icon: Menu,
		category: 'mega-menu',
		variant: 'simple',
		previewImage: '/templates/mega-menu-simple.png',
		thumbnailImage: '/templates/thumbnails/mega-menu-simple.jpg',
		tags: ['mega-menu', 'navigation', 'dropdown', 'columns'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Multi-column Layout',
			'Hover Activation',
			'Mobile Menu',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['E-commerce', 'Large Sites', 'Complex Navigation'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			menuLabel: 'Products',
			columns: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: MegaMenuSimple
	},
	{
		id: 'mega-menu-with-images',
		name: 'Mega Menu with Images',
		description: 'Mega menu with featured image section',
		icon: Menu,
		category: 'mega-menu',
		variant: 'images',
		previewImage: '/templates/mega-menu-with-images.png',
		thumbnailImage: '/templates/thumbnails/mega-menu-with-images.jpg',
		tags: ['mega-menu', 'images', 'featured', 'columns'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Featured Section',
			'Multi-column',
			'Image Support',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['E-commerce', 'Product Showcases', 'Marketing Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			menuLabel: 'Products',
			columns: [],
			featured: undefined,
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: MegaMenuWithImages
	},
	{
		id: 'mega-menu-full-width',
		name: 'Mega Menu Full Width',
		description: 'Full-width mega menu with multiple columns',
		icon: Menu,
		category: 'mega-menu',
		variant: 'full-width',
		previewImage: '/templates/mega-menu-full-width.png',
		thumbnailImage: '/templates/thumbnails/mega-menu-full-width.jpg',
		tags: ['mega-menu', 'full-width', 'columns', 'navigation'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Full Width',
			'Multi-column',
			'Hover Activation',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Large Sites', 'E-commerce', 'Complex Navigation'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			menuLabel: 'Products',
			columns: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: MegaMenuFullWidth
	}
];
