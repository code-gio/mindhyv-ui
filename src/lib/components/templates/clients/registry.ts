import { Building2 } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import client components
import ClientsSimpleLogos from './clients-simple-logos.svelte';
import ClientsGridLayout from './clients-grid-layout.svelte';
import ClientsWithBorder from './clients-with-border.svelte';
import ClientsGrayscale from './clients-grayscale.svelte';
import ClientsDarkBg from './clients-dark-bg.svelte';
import ClientsCarousel from './clients-carousel.svelte';

/**
 * Clients component mapping for dynamic component loading
 */
export const CLIENTS_COMPONENTS: Record<string, TemplateComponent> = {
	'clients-simple-logos': ClientsSimpleLogos as TemplateComponent,
	'clients-grid-layout': ClientsGridLayout as TemplateComponent,
	'clients-with-border': ClientsWithBorder as TemplateComponent,
	'clients-grayscale': ClientsGrayscale as TemplateComponent,
	'clients-dark-bg': ClientsDarkBg as TemplateComponent,
	'clients-carousel': ClientsCarousel as TemplateComponent
};

/**
 * Clients templates registry with metadata and default props
 */
export const CLIENTS_REGISTRY: Template[] = [
	{
		id: 'clients-simple-logos',
		name: 'Clients Simple Logos',
		description: 'Simple client logo showcase with centered title',
		icon: Building2,
		category: 'clients',
		variant: 'default',
		previewImage: '/templates/clients-simple-logos.png',
		thumbnailImage: '/templates/thumbnails/clients-simple-logos.jpg',
		tags: ['clients', 'logos', 'simple', 'social-proof'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'SVG Logo Support',
			'Centered Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Social Proof', 'Partner Showcases', 'Client Lists', 'Trust Building'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Trusted by Open Source, enterprise, and more than 99,000 of you',
			logos: []
		},
		template: ClientsSimpleLogos
	},
	{
		id: 'clients-grid-layout',
		name: 'Clients Grid Layout',
		description: 'Client logos in responsive grid with title and description',
		icon: Building2,
		category: 'clients',
		variant: 'default',
		previewImage: '/templates/clients-grid-layout.png',
		thumbnailImage: '/templates/thumbnails/clients-grid-layout.jpg',
		tags: ['clients', 'logos', 'grid', 'social-proof'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Logo Showcase',
			'Title Section',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Partner Pages', 'Client Showcases', 'Brand Trust', 'Logo Walls'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Trusted by',
			description: 'Leading companies around the world',
			logos: []
		},
		template: ClientsGridLayout
	},
	{
		id: 'clients-with-border',
		name: 'Clients with Border',
		description: 'Client logos in bordered grid cells',
		icon: Building2,
		category: 'clients',
		variant: 'default',
		previewImage: '/templates/clients-with-border.png',
		thumbnailImage: '/templates/thumbnails/clients-with-border.jpg',
		tags: ['clients', 'logos', 'border', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Bordered Grid',
			'Equal Height Cells',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Logo Walls', 'Partner Grids', 'Client Showcases'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			logos: []
		},
		template: ClientsWithBorder
	},
	{
		id: 'clients-grayscale',
		name: 'Clients Grayscale',
		description: 'Client logos with grayscale effect and hover color',
		icon: Building2,
		category: 'clients',
		variant: 'default',
		previewImage: '/templates/clients-grayscale.png',
		thumbnailImage: '/templates/thumbnails/clients-grayscale.jpg',
		tags: ['clients', 'logos', 'grayscale', 'hover'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grayscale Effect',
			'Hover Color',
			'Flexible Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Modern Logo Showcases', 'Partner Pages', 'Client Lists'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Trusted by leading companies',
			logos: []
		},
		template: ClientsGrayscale
	},
	{
		id: 'clients-dark-bg',
		name: 'Clients Dark Background',
		description: 'Client logos on dark background',
		icon: Building2,
		category: 'clients',
		variant: 'default',
		previewImage: '/templates/clients-dark-bg.png',
		thumbnailImage: '/templates/thumbnails/clients-dark-bg.jpg',
		tags: ['clients', 'logos', 'dark', 'background'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Background',
			'Logo Showcase',
			'Flexible Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dark Themed Pages', 'Partner Showcases', 'Client Lists'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Trusted by',
			logos: []
		},
		template: ClientsDarkBg
	},
	{
		id: 'clients-carousel',
		name: 'Clients Carousel Grid',
		description: 'Client logos in larger grid layout',
		icon: Building2,
		category: 'clients',
		variant: 'default',
		previewImage: '/templates/clients-carousel.png',
		thumbnailImage: '/templates/thumbnails/clients-carousel.jpg',
		tags: ['clients', 'logos', 'grid', 'carousel'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Large Grid',
			'Logo Display',
			'Title Section',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Extensive Client Lists', 'Partner Pages', 'Logo Showcases'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Our Partners',
			description: 'Companies we work with',
			logos: []
		},
		template: ClientsCarousel
	}
];

