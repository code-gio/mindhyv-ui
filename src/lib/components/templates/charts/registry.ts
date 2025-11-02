import { BarChart3 } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import ChartCard from './chart-card.svelte';
import ChartStatsGrid from './chart-stats-grid.svelte';
import ChartAnalytics from './chart-analytics.svelte';

export const CHARTS_COMPONENTS: Record<string, TemplateComponent> = {
	'chart-card': ChartCard as TemplateComponent,
	'chart-stats-grid': ChartStatsGrid as TemplateComponent,
	'chart-analytics': ChartAnalytics as TemplateComponent
};

export const CHARTS_REGISTRY: Template[] = [
	{
		id: 'chart-card',
		name: 'Chart Card',
		description: 'Card with chart visualization',
		icon: BarChart3,
		category: 'charts',
		variant: 'card',
		previewImage: '/templates/chart-card.png',
		thumbnailImage: '/templates/thumbnails/chart-card.jpg',
		tags: ['chart', 'card', 'visualization'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Chart Display', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Analytics', 'Data Visualization', 'Reports'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { title: 'Chart', description: 'Data visualization', value: '0', change: '' },
		template: ChartCard
	},
	{
		id: 'chart-stats-grid',
		name: 'Chart Stats Grid',
		description: 'Grid of stats with mini charts',
		icon: BarChart3,
		category: 'charts',
		variant: 'grid',
		previewImage: '/templates/chart-stats-grid.png',
		thumbnailImage: '/templates/thumbnails/chart-stats-grid.jpg',
		tags: ['chart', 'stats', 'grid'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Multiple Charts', 'Stats Display', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dashboards', 'Analytics', 'KPI Display'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { stats: [] },
		template: ChartStatsGrid
	},
	{
		id: 'chart-analytics',
		name: 'Chart Analytics',
		description: 'Analytics chart with time period selection',
		icon: BarChart3,
		category: 'charts',
		variant: 'analytics',
		previewImage: '/templates/chart-analytics.png',
		thumbnailImage: '/templates/thumbnails/chart-analytics.jpg',
		tags: ['chart', 'analytics', 'time-series'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Time Filters', 'Large Chart', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Analytics', 'Time-Series Data', 'Reports'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { title: 'Analytics', description: '' },
		template: ChartAnalytics
	}
];

