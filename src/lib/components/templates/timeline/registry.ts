import { Clock } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import timeline components
import TimelineVertical from './timeline-vertical.svelte';

/**
 * Timeline component mapping for dynamic component loading
 */
export const TIMELINE_COMPONENTS: Record<string, TemplateComponent> = {
	'timeline-vertical': TimelineVertical as TemplateComponent
};

/**
 * Timeline templates registry with metadata and default props
 */
export const TIMELINE_REGISTRY: Template[] = [
	{
		id: 'timeline-vertical',
		name: 'Timeline Vertical',
		description: 'Vertical timeline with events',
		icon: Clock,
		category: 'timeline',
		variant: 'vertical',
		previewImage: '/templates/timeline-vertical.png',
		thumbnailImage: '/templates/thumbnails/timeline-vertical.jpg',
		tags: ['timeline', 'vertical', 'events', 'history'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Vertical Layout',
			'Event Markers',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Company History', 'Project Timeline', 'Event Lists'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Timeline',
			items: []
		},
		template: TimelineVertical
	}
];

