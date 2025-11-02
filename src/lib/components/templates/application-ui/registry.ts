import { Layout } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import SidebarLayout from './sidebar-layout.svelte';
import ListView from './list-view.svelte';
import GridView from './grid-view.svelte';
import DetailPanel from './detail-panel.svelte';
import DashboardWidgets from './dashboard-widgets.svelte';
import EmptyState from './empty-state.svelte';
import NotificationList from './notification-list.svelte';

export const APPLICATION_UI_COMPONENTS: Record<string, TemplateComponent> = {
	'sidebar-layout': SidebarLayout as TemplateComponent,
	'list-view': ListView as TemplateComponent,
	'grid-view': GridView as TemplateComponent,
	'detail-panel': DetailPanel as TemplateComponent,
	'dashboard-widgets': DashboardWidgets as TemplateComponent,
	'empty-state': EmptyState as TemplateComponent,
	'notification-list': NotificationList as TemplateComponent
};

export const APPLICATION_UI_REGISTRY: Template[] = [
	{
		id: 'sidebar-layout',
		name: 'Sidebar Layout',
		description: 'Application layout with sidebar navigation',
		icon: Layout,
		category: 'application-ui',
		variant: 'layout',
		previewImage: '/templates/sidebar-layout.png',
		thumbnailImage: '/templates/thumbnails/sidebar-layout.jpg',
		tags: ['layout', 'sidebar', 'navigation'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Sidebar Nav', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Admin Panels', 'Dashboards', 'Applications'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { appName: 'App', navItems: [] },
		template: SidebarLayout
	},
	{
		id: 'list-view',
		name: 'List View',
		description: 'List view with avatars and status',
		icon: Layout,
		category: 'application-ui',
		variant: 'list',
		previewImage: '/templates/list-view.png',
		thumbnailImage: '/templates/thumbnails/list-view.jpg',
		tags: ['list', 'users', 'items'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Avatars', 'Badges', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Lists', 'Item Lists', 'Data Display'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'List', items: [] },
		template: ListView
	},
	{
		id: 'grid-view',
		name: 'Grid View',
		description: 'Grid view with cards',
		icon: Layout,
		category: 'application-ui',
		variant: 'grid',
		previewImage: '/templates/grid-view.png',
		thumbnailImage: '/templates/thumbnails/grid-view.jpg',
		tags: ['grid', 'cards', 'layout'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Grid Layout', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Grids', 'Image Galleries', 'Card Layouts'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Grid', items: [], columns: 3 },
		template: GridView
	},
	{
		id: 'detail-panel',
		name: 'Detail Panel',
		description: 'Sliding detail panel',
		icon: Layout,
		category: 'application-ui',
		variant: 'panel',
		previewImage: '/templates/detail-panel.png',
		thumbnailImage: '/templates/thumbnails/detail-panel.jpg',
		tags: ['panel', 'detail', 'slide'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Slide Animation', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Detail Views', 'Sidebars', 'Overlays'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { title: 'Details', open: false },
		template: DetailPanel
	},
	{
		id: 'dashboard-widgets',
		name: 'Dashboard Widgets',
		description: 'Dashboard stats widgets',
		icon: Layout,
		category: 'application-ui',
		variant: 'widgets',
		previewImage: '/templates/dashboard-widgets.png',
		thumbnailImage: '/templates/thumbnails/dashboard-widgets.jpg',
		tags: ['dashboard', 'widgets', 'stats'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Stats Display', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dashboards', 'Analytics', 'Stats Display'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { widgets: [] },
		template: DashboardWidgets
	},
	{
		id: 'empty-state',
		name: 'Empty State',
		description: 'Empty state placeholder',
		icon: Layout,
		category: 'application-ui',
		variant: 'empty',
		previewImage: '/templates/empty-state.png',
		thumbnailImage: '/templates/thumbnails/empty-state.jpg',
		tags: ['empty', 'placeholder', 'state'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Icon Support', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Empty States', 'Placeholders', 'No Data'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { title: 'No items found', description: 'Get started by creating a new item' },
		template: EmptyState
	},
	{
		id: 'notification-list',
		name: 'Notification List',
		description: 'Notification feed list',
		icon: Layout,
		category: 'application-ui',
		variant: 'notifications',
		previewImage: '/templates/notification-list.png',
		thumbnailImage: '/templates/thumbnails/notification-list.jpg',
		tags: ['notifications', 'feed', 'list'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Unread Indicators', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Notifications', 'Activity Feed', 'Updates'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { title: 'Notifications', notifications: [] },
		template: NotificationList
	}
];

