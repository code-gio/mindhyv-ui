import { TrendingUp } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import StatsCards from './stats-cards.svelte';
import StatsList from './stats-list.svelte';
import StatsProgress from './stats-progress.svelte';
import StatsComparison from './stats-comparison.svelte';
import StatsGridCompact from './stats-grid-compact.svelte';
import StatsWithChart from './stats-with-chart.svelte';
import StatsKPI from './stats-kpi.svelte';

export const APP_STATS_COMPONENTS: Record<string, TemplateComponent> = {
	'stats-cards': StatsCards as TemplateComponent,
	'stats-list': StatsList as TemplateComponent,
	'stats-progress': StatsProgress as TemplateComponent,
	'stats-comparison': StatsComparison as TemplateComponent,
	'stats-grid-compact': StatsGridCompact as TemplateComponent,
	'stats-with-chart': StatsWithChart as TemplateComponent,
	'stats-kpi': StatsKPI as TemplateComponent
};

export const APP_STATS_REGISTRY: Template[] = [
	{
		id: 'stats-cards',
		name: 'Stats Cards',
		description: 'Statistics cards with trend indicators',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'cards',
		previewImage: '/templates/stats-cards.png',
		thumbnailImage: '/templates/thumbnails/stats-cards.jpg',
		tags: ['stats', 'cards', 'metrics'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Trend Indicators', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dashboards', 'Analytics', 'KPI Display'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { stats: [] },
		template: StatsCards
	},
	{
		id: 'stats-list',
		name: 'Stats List',
		description: 'List of statistics',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'list',
		previewImage: '/templates/stats-list.png',
		thumbnailImage: '/templates/thumbnails/stats-list.jpg',
		tags: ['stats', 'list', 'metrics'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Clean Layout', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Reports', 'Summaries', 'Metrics'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Statistics', stats: [] },
		template: StatsList
	},
	{
		id: 'stats-progress',
		name: 'Stats Progress',
		description: 'Statistics with progress bars',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'progress',
		previewImage: '/templates/stats-progress.png',
		thumbnailImage: '/templates/thumbnails/stats-progress.jpg',
		tags: ['stats', 'progress', 'goals'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Progress Bars', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Goals', 'Progress Tracking', 'Targets'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Progress', stats: [] },
		template: StatsProgress
	},
	{
		id: 'stats-comparison',
		name: 'Stats Comparison',
		description: 'Compare current vs previous statistics',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'comparison',
		previewImage: '/templates/stats-comparison.png',
		thumbnailImage: '/templates/thumbnails/stats-comparison.jpg',
		tags: ['stats', 'comparison', 'analytics'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Comparison Table', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Analytics', 'Period Comparison', 'Reports'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Comparison', stats: [] },
		template: StatsComparison
	},
	{
		id: 'stats-grid-compact',
		name: 'Stats Grid Compact',
		description: 'Compact grid of statistics',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'compact',
		previewImage: '/templates/stats-grid-compact.png',
		thumbnailImage: '/templates/thumbnails/stats-grid-compact.jpg',
		tags: ['stats', 'grid', 'compact'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Compact Layout', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dashboards', 'Quick Stats', 'Overview'],
		dependencies: [],
		defaultProps: { stats: [] },
		template: StatsGridCompact
	},
	{
		id: 'stats-with-chart',
		name: 'Stats with Chart',
		description: 'Statistics with chart visualization',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'chart',
		previewImage: '/templates/stats-with-chart.png',
		thumbnailImage: '/templates/thumbnails/stats-with-chart.jpg',
		tags: ['stats', 'chart', 'visualization'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Chart Display', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Analytics', 'Data Visualization', 'Trends'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Total Revenue', value: '$0', change: '+0%' },
		template: StatsWithChart
	},
	{
		id: 'stats-kpi',
		name: 'Stats KPI',
		description: 'Key Performance Indicator cards',
		icon: TrendingUp,
		category: 'app-stats',
		variant: 'kpi',
		previewImage: '/templates/stats-kpi.png',
		thumbnailImage: '/templates/thumbnails/stats-kpi.jpg',
		tags: ['stats', 'kpi', 'metrics'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'KPI Cards', 'Trend Indicators', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['KPI Dashboards', 'Performance Tracking', 'Metrics'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { kpis: [] },
		template: StatsKPI
	}
];

