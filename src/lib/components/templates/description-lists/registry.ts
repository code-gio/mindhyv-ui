import { List } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import description list components
import DescriptionList from './description-list.svelte';

/**
 * Description Lists component mapping for dynamic component loading
 */
export const DESCRIPTION_LISTS_COMPONENTS: Record<string, TemplateComponent> = {
	'description-list': DescriptionList as TemplateComponent
};

/**
 * Description Lists templates registry with metadata and default props
 */
export const DESCRIPTION_LISTS_REGISTRY: Template[] = [
	{
		id: 'description-list',
		name: 'Description List',
		description: 'Term and description list layout',
		icon: List,
		category: 'description-lists',
		variant: 'default',
		previewImage: '/templates/description-list.png',
		thumbnailImage: '/templates/thumbnails/description-list.jpg',
		tags: ['description', 'list', 'terms', 'definitions'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Dividers',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Specs', 'Feature Lists', 'Glossaries'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Specifications',
			items: []
		},
		template: DescriptionList
	}
];

