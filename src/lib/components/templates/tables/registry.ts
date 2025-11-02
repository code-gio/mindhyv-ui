import { Table as TableIcon } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import table components
import TableSimple from './table-simple.svelte';
import TableWithActions from './table-with-actions.svelte';
import TableWithPagination from './table-with-pagination.svelte';
import TableWithSearch from './table-with-search.svelte';
import TableWithCheckboxes from './table-with-checkboxes.svelte';
import TableWithBadges from './table-with-badges.svelte';
import TableWithAvatars from './table-with-avatars.svelte';
import TableStriped from './table-striped.svelte';
import TableWithSorting from './table-with-sorting.svelte';

/**
 * Tables component mapping for dynamic component loading
 */
export const TABLES_COMPONENTS: Record<string, TemplateComponent> = {
	'table-simple': TableSimple as TemplateComponent,
	'table-with-actions': TableWithActions as TemplateComponent,
	'table-with-pagination': TableWithPagination as TemplateComponent,
	'table-with-search': TableWithSearch as TemplateComponent,
	'table-with-checkboxes': TableWithCheckboxes as TemplateComponent,
	'table-with-badges': TableWithBadges as TemplateComponent,
	'table-with-avatars': TableWithAvatars as TemplateComponent,
	'table-striped': TableStriped as TemplateComponent,
	'table-with-sorting': TableWithSorting as TemplateComponent
};

/**
 * Tables templates registry with metadata and default props
 */
export const TABLES_REGISTRY: Template[] = [
	{
		id: 'table-simple',
		name: 'Table Simple',
		description: 'Basic data table with columns and rows',
		icon: TableIcon,
		category: 'tables',
		variant: 'simple',
		previewImage: '/templates/table-simple.png',
		thumbnailImage: '/templates/thumbnails/table-simple.jpg',
		tags: ['table', 'data', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Clean Layout', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Data Display', 'Lists', 'Reports'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: []
		},
		template: TableSimple
	},
	{
		id: 'table-with-actions',
		name: 'Table with Actions',
		description: 'Data table with row action menu',
		icon: TableIcon,
		category: 'tables',
		variant: 'actions',
		previewImage: '/templates/table-with-actions.png',
		thumbnailImage: '/templates/thumbnails/table-with-actions.jpg',
		tags: ['table', 'actions', 'dropdown', 'crud'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Action Menu',
			'Dropdown',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Admin Panels', 'CRUD Operations', 'Management'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: [],
			showActions: true
		},
		template: TableWithActions
	},
	{
		id: 'table-with-pagination',
		name: 'Table with Pagination',
		description: 'Data table with pagination controls',
		icon: TableIcon,
		category: 'tables',
		variant: 'pagination',
		previewImage: '/templates/table-with-pagination.png',
		thumbnailImage: '/templates/thumbnails/table-with-pagination.jpg',
		tags: ['table', 'pagination', 'paging'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Pagination',
			'Page Navigation',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Large Datasets', 'Reports', 'Data Lists'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: [],
			currentPage: 1,
			totalPages: 1
		},
		template: TableWithPagination
	},
	{
		id: 'table-with-search',
		name: 'Table with Search',
		description: 'Data table with search functionality',
		icon: TableIcon,
		category: 'tables',
		variant: 'search',
		previewImage: '/templates/table-with-search.png',
		thumbnailImage: '/templates/thumbnails/table-with-search.jpg',
		tags: ['table', 'search', 'filter'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Search Bar',
			'Filtering',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Searchable Data', 'Filtering', 'Data Management'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: [],
			searchPlaceholder: 'Search...'
		},
		template: TableWithSearch
	},
	{
		id: 'table-with-checkboxes',
		name: 'Table with Checkboxes',
		description: 'Data table with row selection checkboxes',
		icon: TableIcon,
		category: 'tables',
		variant: 'checkboxes',
		previewImage: '/templates/table-with-checkboxes.png',
		thumbnailImage: '/templates/thumbnails/table-with-checkboxes.jpg',
		tags: ['table', 'checkbox', 'selection', 'multi-select'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Row Selection',
			'Select All',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Bulk Operations', 'Multi-select', 'Data Management'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: []
		},
		template: TableWithCheckboxes
	},
	{
		id: 'table-with-badges',
		name: 'Table with Badges',
		description: 'Data table with badge status indicators',
		icon: TableIcon,
		category: 'tables',
		variant: 'badges',
		previewImage: '/templates/table-with-badges.png',
		thumbnailImage: '/templates/thumbnails/table-with-badges.jpg',
		tags: ['table', 'badges', 'status'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Badge Support',
			'Status Indicators',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Status Tables', 'Order Lists', 'User Management'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: []
		},
		template: TableWithBadges
	},
	{
		id: 'table-with-avatars',
		name: 'Table with Avatars',
		description: 'Data table with user avatars',
		icon: TableIcon,
		category: 'tables',
		variant: 'avatars',
		previewImage: '/templates/table-with-avatars.png',
		thumbnailImage: '/templates/thumbnails/table-with-avatars.jpg',
		tags: ['table', 'avatars', 'users'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Avatar Display',
			'User Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Lists', 'Team Tables', 'Member Management'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Users',
			columns: [],
			data: []
		},
		template: TableWithAvatars
	},
	{
		id: 'table-striped',
		name: 'Table Striped',
		description: 'Data table with alternating row colors',
		icon: TableIcon,
		category: 'tables',
		variant: 'striped',
		previewImage: '/templates/table-striped.png',
		thumbnailImage: '/templates/thumbnails/table-striped.jpg',
		tags: ['table', 'striped', 'alternating'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Striped Rows',
			'Better Readability',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Data Display', 'Reports', 'Lists'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: []
		},
		template: TableStriped
	},
	{
		id: 'table-with-sorting',
		name: 'Table with Sorting',
		description: 'Data table with sortable columns',
		icon: TableIcon,
		category: 'tables',
		variant: 'sorting',
		previewImage: '/templates/table-with-sorting.png',
		thumbnailImage: '/templates/thumbnails/table-with-sorting.jpg',
		tags: ['table', 'sorting', 'sortable'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Column Sorting',
			'Asc/Desc',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Data Analysis', 'Reports', 'Sortable Lists'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Data Table',
			columns: [],
			data: []
		},
		template: TableWithSorting
	}
];
