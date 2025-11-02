import { Star } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import feature components
import FeaturesWithImageGrid from './features-with-image-grid.svelte';
import FeaturesGridWithStats from './features-grid-with-stats.svelte';
import FeaturesSplitWithList from './features-split-with-list.svelte';
import FeaturesThreeColumn from './features-three-column.svelte';
import FeaturesCenteredGrid from './features-centered-grid.svelte';
import FeaturesTwoColumnList from './features-two-column-list.svelte';
import FeaturesSplitImageRight from './features-split-image-right.svelte';
import FeaturesSimpleList from './features-simple-list.svelte';
import FeaturesTabNav from './features-tab-nav.svelte';
import FeaturesPillNav from './features-pill-nav.svelte';

/**
 * Features component mapping for dynamic component loading
 */
export const FEATURES_COMPONENTS: Record<string, TemplateComponent> = {
	'features-with-image-grid': FeaturesWithImageGrid as TemplateComponent,
	'features-grid-with-stats': FeaturesGridWithStats as TemplateComponent,
	'features-split-with-list': FeaturesSplitWithList as TemplateComponent,
	'features-three-column': FeaturesThreeColumn as TemplateComponent,
	'features-centered-grid': FeaturesCenteredGrid as TemplateComponent,
	'features-two-column-list': FeaturesTwoColumnList as TemplateComponent,
	'features-split-image-right': FeaturesSplitImageRight as TemplateComponent,
	'features-simple-list': FeaturesSimpleList as TemplateComponent,
	'features-tab-nav': FeaturesTabNav as TemplateComponent,
	'features-pill-nav': FeaturesPillNav as TemplateComponent
};

/**
 * Features templates registry with metadata and default props
 */
export const FEATURES_REGISTRY: Template[] = [
	{
		id: 'features-with-image-grid',
		name: 'Features with Image Grid',
		description: 'Feature section with header image and grid of icon blocks',
		icon: Star,
		category: 'features',
		variant: 'default',
		previewImage: '/templates/features-with-image-grid.png',
		thumbnailImage: '/templates/thumbnails/features-with-image-grid.jpg',
		tags: ['features', 'image', 'grid', 'icons'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Header Image',
			'Grid Layout',
			'Icon Blocks',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Sections', 'Product Pages', 'About Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'We tackle the challenges start-ups face',
			description:
				'Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points.',
			imageSrc:
				'https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
			imageAlt: 'Features Image',
			features: []
		},
		template: FeaturesWithImageGrid
	},
	{
		id: 'features-grid-with-stats',
		name: 'Features Grid with Statistics',
		description: 'Feature grid combining statistics and descriptions',
		icon: Star,
		category: 'features',
		variant: 'default',
		previewImage: '/templates/features-grid-with-stats.png',
		thumbnailImage: '/templates/thumbnails/features-grid-with-stats.jpg',
		tags: ['features', 'stats', 'grid', 'metrics'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Statistics Display',
			'Grid Layout',
			'Icon Blocks',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Stats Sections', 'Metrics Display', 'Feature Highlights'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Our Impact',
			description: 'See how we make a difference',
			features: []
		},
		template: FeaturesGridWithStats
	},
	{
		id: 'features-split-with-list',
		name: 'Features Split with Check List',
		description: 'Split layout feature section with checkmark list and image',
		icon: Star,
		category: 'features',
		variant: 'split',
		previewImage: '/templates/features-split-with-list.png',
		thumbnailImage: '/templates/thumbnails/features-split-with-list.jpg',
		tags: ['features', 'split', 'list', 'checkmarks'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Split Layout',
			'Check List',
			'CTA Button',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Features', 'Benefit Lists', 'Comparison Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			subtitle: 'Features',
			title: 'Everything you need',
			description: 'Build faster, scale easier',
			features: [],
			ctaText: 'Learn more',
			ctaHref: '#',
			imageSrc: '',
			imageAlt: 'Features'
		},
		template: FeaturesSplitWithList
	},
	{
		id: 'features-three-column',
		name: 'Features Three Column',
		description: 'Three-column feature layout with title sidebar',
		icon: Star,
		category: 'features',
		variant: 'default',
		previewImage: '/templates/features-three-column.png',
		thumbnailImage: '/templates/thumbnails/features-three-column.jpg',
		tags: ['features', 'three-column', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Three Column Layout',
			'Icon Blocks',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Sections', 'Product Pages', 'Service Lists'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Why choose us',
			description: 'Everything you need to succeed',
			features: []
		},
		template: FeaturesThreeColumn
	},
	{
		id: 'features-centered-grid',
		name: 'Features Centered Grid',
		description: 'Centered feature grid with card style blocks',
		icon: Star,
		category: 'features',
		variant: 'centered',
		previewImage: '/templates/features-centered-grid.png',
		thumbnailImage: '/templates/thumbnails/features-centered-grid.jpg',
		tags: ['features', 'centered', 'grid', 'cards'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Card Style',
			'Shadow Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Showcases', 'Product Benefits', 'Service Lists'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Features',
			description: 'Everything you need in one place',
			features: []
		},
		template: FeaturesCenteredGrid
	},
	{
		id: 'features-two-column-list',
		name: 'Features Two Column List',
		description: 'Two-column feature list with checkmarks',
		icon: Star,
		category: 'features',
		variant: 'default',
		previewImage: '/templates/features-two-column-list.png',
		thumbnailImage: '/templates/thumbnails/features-two-column-list.jpg',
		tags: ['features', 'list', 'two-column', 'checkmarks'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Two Column Layout',
			'Checkmark List',
			'Clean Design',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Lists', 'Comparison Sections', 'Product Benefits'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Features',
			description: 'See what makes us different',
			featuresLeft: [],
			featuresRight: []
		},
		template: FeaturesTwoColumnList
	},
	{
		id: 'features-split-image-right',
		name: 'Features Split with Image Right',
		description: 'Dark-themed split layout with image on right',
		icon: Star,
		category: 'features',
		variant: 'split',
		previewImage: '/templates/features-split-image-right.png',
		thumbnailImage: '/templates/thumbnails/features-split-image-right.jpg',
		tags: ['features', 'split', 'dark', 'image'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Theme',
			'Split Layout',
			'Icon Blocks',
			'CTA Button',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dark Themed Features', 'Product Pages', 'Service Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Build products your users will love',
			description: 'Create exceptional experiences for your customers',
			features: [],
			ctaText: 'Learn more',
			ctaHref: '#',
			imageSrc: '',
			imageAlt: 'Product'
		},
		template: FeaturesSplitImageRight
	},
	{
		id: 'features-simple-list',
		name: 'Features Simple List',
		description: 'Simple vertical list of features with icons',
		icon: Star,
		category: 'features',
		variant: 'minimal',
		previewImage: '/templates/features-simple-list.png',
		thumbnailImage: '/templates/thumbnails/features-simple-list.jpg',
		tags: ['features', 'list', 'simple', 'minimal'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Vertical List',
			'Icon Blocks',
			'Clean Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Feature Lists', 'Product Benefits', 'Service Descriptions'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			features: []
		},
		template: FeaturesSimpleList
	},
	{
		id: 'features-tab-nav',
		name: 'Features Tab Navigation',
		description: 'Features with tab navigation between sections',
		icon: Star,
		category: 'features',
		variant: 'tabs',
		previewImage: '/templates/features-tab-nav.png',
		thumbnailImage: '/templates/thumbnails/features-tab-nav.jpg',
		tags: ['features', 'tabs', 'navigation', 'interactive'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Tab Navigation',
			'Interactive',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Comparisons', 'Product Showcases', 'Interactive Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			tabs: []
		},
		template: FeaturesTabNav
	},
	{
		id: 'features-pill-nav',
		name: 'Features Pill Navigation',
		description: 'Features with pill-style navigation',
		icon: Star,
		category: 'features',
		variant: 'pills',
		previewImage: '/templates/features-pill-nav.png',
		thumbnailImage: '/templates/thumbnails/features-pill-nav.jpg',
		tags: ['features', 'pills', 'navigation', 'toggle'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Pill Navigation',
			'Interactive',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Sections', 'Product Features', 'Service Showcases'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			sections: []
		},
		template: FeaturesPillNav
	}
];

