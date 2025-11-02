import { MousePointerClick } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import UI control components
import DropdownSimple from './dropdown-simple.svelte';
import DropdownWithIcons from './dropdown-with-icons.svelte';
import DropdownWithDividers from './dropdown-with-dividers.svelte';
import DropdownContextual from './dropdown-contextual.svelte';
import SelectSimple from './select-simple.svelte';
import ButtonGroup from './button-group.svelte';

/**
 * UI Controls component mapping for dynamic component loading
 */
export const UI_CONTROLS_COMPONENTS: Record<string, TemplateComponent> = {
	'dropdown-simple': DropdownSimple as TemplateComponent,
	'dropdown-with-icons': DropdownWithIcons as TemplateComponent,
	'dropdown-with-dividers': DropdownWithDividers as TemplateComponent,
	'dropdown-contextual': DropdownContextual as TemplateComponent,
	'select-simple': SelectSimple as TemplateComponent,
	'button-group': ButtonGroup as TemplateComponent
};

/**
 * UI Controls templates registry with metadata and default props
 */
export const UI_CONTROLS_REGISTRY: Template[] = [
	{
		id: 'dropdown-simple',
		name: 'Dropdown Simple',
		description: 'Simple dropdown menu',
		icon: MousePointerClick,
		category: 'ui-controls',
		variant: 'dropdown',
		previewImage: '/templates/dropdown-simple.png',
		thumbnailImage: '/templates/thumbnails/dropdown-simple.jpg',
		tags: ['dropdown', 'menu', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Dropdown Menu', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Menus', 'Actions', 'Options'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			label: 'Options',
			items: [],
			variant: 'default'
		},
		template: DropdownSimple
	},
	{
		id: 'dropdown-with-icons',
		name: 'Dropdown with Icons',
		description: 'Dropdown menu with icon support',
		icon: MousePointerClick,
		category: 'ui-controls',
		variant: 'dropdown',
		previewImage: '/templates/dropdown-with-icons.png',
		thumbnailImage: '/templates/thumbnails/dropdown-with-icons.jpg',
		tags: ['dropdown', 'icons', 'menu'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Icon Support',
			'Dropdown Menu',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Action Menus', 'Options with Icons', 'Navigation'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			label: 'Options',
			items: []
		},
		template: DropdownWithIcons
	},
	{
		id: 'dropdown-with-dividers',
		name: 'Dropdown with Dividers',
		description: 'Dropdown menu with section dividers',
		icon: MousePointerClick,
		category: 'ui-controls',
		variant: 'dropdown',
		previewImage: '/templates/dropdown-with-dividers.png',
		thumbnailImage: '/templates/thumbnails/dropdown-with-dividers.jpg',
		tags: ['dropdown', 'dividers', 'sections'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Section Dividers',
			'Labeled Sections',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Grouped Actions', 'Categorized Menus', 'Complex Dropdowns'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			label: 'Options',
			sections: []
		},
		template: DropdownWithDividers
	},
	{
		id: 'dropdown-contextual',
		name: 'Dropdown Contextual',
		description: 'Context menu dropdown with more icon',
		icon: MousePointerClick,
		category: 'ui-controls',
		variant: 'dropdown',
		previewImage: '/templates/dropdown-contextual.png',
		thumbnailImage: '/templates/thumbnails/dropdown-contextual.jpg',
		tags: ['dropdown', 'context', 'more', 'actions'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Context Menu',
			'More Icon',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Row Actions', 'Context Menus', 'Quick Actions'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			items: []
		},
		template: DropdownContextual
	},
	{
		id: 'select-simple',
		name: 'Select Simple',
		description: 'Simple select dropdown',
		icon: MousePointerClick,
		category: 'ui-controls',
		variant: 'select',
		previewImage: '/templates/select-simple.png',
		thumbnailImage: '/templates/thumbnails/select-simple.jpg',
		tags: ['select', 'dropdown', 'form'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Form Control',
			'Options',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Form Inputs', 'Filters', 'Option Selection'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			label: 'Select an option',
			placeholder: 'Choose one',
			options: [],
			value: ''
		},
		template: SelectSimple
	},
	{
		id: 'button-group',
		name: 'Button Group',
		description: 'Group of connected buttons',
		icon: MousePointerClick,
		category: 'ui-controls',
		variant: 'button-group',
		previewImage: '/templates/button-group.png',
		thumbnailImage: '/templates/thumbnails/button-group.jpg',
		tags: ['button', 'group', 'toggle', 'actions'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Horizontal/Vertical',
			'Icon Support',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Toggle Groups', 'Action Sets', 'Segmented Controls'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			buttons: [],
			orientation: 'horizontal'
		},
		template: ButtonGroup
	}
];
