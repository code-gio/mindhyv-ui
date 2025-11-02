import { TrendingUp } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import stats components
import StatsGridSimple from './stats-grid-simple.svelte';
import StatsWithIcons from './stats-with-icons.svelte';
import StatsCenteredCards from './stats-centered-cards.svelte';

/**
 * Stats component mapping for dynamic component loading
 */
export const STATS_COMPONENTS: Record<string, TemplateComponent> = {
	'stats-grid-simple': StatsGridSimple as TemplateComponent,
	'stats-with-icons': StatsWithIcons as TemplateComponent,
	'stats-centered-cards': StatsCenteredCards as TemplateComponent
};

/**
 * Stats templates registry with metadata and default props
 */
export const STATS_REGISTRY: Template[] = [
	{
		id: 'stats-grid-simple',
		name: 'Stats Grid Simple',
		description: 'Simple stats grid with centered layout',
		icon: TrendingUp,
		category: 'stats',
		variant: 'simple',
		previewImage: '/templates/stats-grid-simple.png',
		thumbnailImage: '/templates/thumbnails/stats-grid-simple.jpg',
		tags: ['stats', 'grid', 'numbers', 'metrics'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Statistics Display', 'Metrics', 'Achievements'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Our Impact',
			description: 'See our achievements',
			stats: []
		},
		template: StatsGridSimple
	},
	{
		id: 'stats-with-icons',
		name: 'Stats with Icons',
		description: 'Stats with icons in card format',
		icon: TrendingUp,
		category: 'stats',
		variant: 'icons',
		previewImage: '/templates/stats-with-icons.png',
		thumbnailImage: '/templates/thumbnails/stats-with-icons.jpg',
		tags: ['stats', 'icons', 'cards', 'metrics'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Icon Support',
			'Card Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Stats Cards', 'Metrics Display', 'Achievement Showcases'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			stats: []
		},
		template: StatsWithIcons
	},
	{
		id: 'stats-centered-cards',
		name: 'Stats Centered Cards',
		description: 'Centered stats in card format',
		icon: TrendingUp,
		category: 'stats',
		variant: 'cards',
		previewImage: '/templates/stats-centered-cards.png',
		thumbnailImage: '/templates/thumbnails/stats-centered-cards.jpg',
		tags: ['stats', 'centered', 'cards', 'descriptions'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Card Layout',
			'Centered Design',
			'Descriptions',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Detailed Stats', 'Metrics Cards', 'Achievement Sections'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Statistics',
			stats: []
		},
		template: StatsCenteredCards
	}
];

