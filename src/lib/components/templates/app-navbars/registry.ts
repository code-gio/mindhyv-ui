import { Menu } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import AppNavbarSimple from './app-navbar-simple.svelte';
import AppNavbarWithSearch from './app-navbar-with-search.svelte';
import AppNavbarWithTabs from './app-navbar-with-tabs.svelte';
import AppNavbarWithDropdown from './app-navbar-with-dropdown.svelte';
import AppNavbarWithBreadcrumb from './app-navbar-with-breadcrumb.svelte';
import AppNavbarMinimal from './app-navbar-minimal.svelte';

export const APP_NAVBARS_COMPONENTS: Record<string, TemplateComponent> = {
	'app-navbar-simple': AppNavbarSimple as TemplateComponent,
	'app-navbar-with-search': AppNavbarWithSearch as TemplateComponent,
	'app-navbar-with-tabs': AppNavbarWithTabs as TemplateComponent,
	'app-navbar-with-dropdown': AppNavbarWithDropdown as TemplateComponent,
	'app-navbar-with-breadcrumb': AppNavbarWithBreadcrumb as TemplateComponent,
	'app-navbar-minimal': AppNavbarMinimal as TemplateComponent
};

export const APP_NAVBARS_REGISTRY: Template[] = [
	{
		id: 'app-navbar-simple',
		name: 'App Navbar Simple',
		description: 'Simple application navbar',
		icon: Menu,
		category: 'app-navbars',
		variant: 'simple',
		previewImage: '/templates/app-navbar-simple.png',
		thumbnailImage: '/templates/thumbnails/app-navbar-simple.jpg',
		tags: ['navbar', 'header', 'navigation'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'User Avatar', 'Icons', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['App Headers', 'Navigation', 'Admin Panels'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { appName: 'App' },
		template: AppNavbarSimple
	},
	{
		id: 'app-navbar-with-search',
		name: 'App Navbar with Search',
		description: 'Application navbar with integrated search',
		icon: Menu,
		category: 'app-navbars',
		variant: 'search',
		previewImage: '/templates/app-navbar-with-search.png',
		thumbnailImage: '/templates/thumbnails/app-navbar-with-search.jpg',
		tags: ['navbar', 'search', 'header'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Search Bar', 'User Avatar', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['App Headers', 'Search Navigation', 'Dashboards'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { appName: 'App' },
		template: AppNavbarWithSearch
	},
	{
		id: 'app-navbar-with-tabs',
		name: 'App Navbar with Tabs',
		description: 'Application navbar with tab navigation',
		icon: Menu,
		category: 'app-navbars',
		variant: 'tabs',
		previewImage: '/templates/app-navbar-with-tabs.png',
		thumbnailImage: '/templates/thumbnails/app-navbar-with-tabs.jpg',
		tags: ['navbar', 'tabs', 'navigation'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Tab Navigation', 'User Avatar', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['App Navigation', 'Tab Switching', 'Multi-Section Apps'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { appName: 'App', tabs: [] },
		template: AppNavbarWithTabs
	},
	{
		id: 'app-navbar-with-dropdown',
		name: 'App Navbar with Dropdown',
		description: 'Application navbar with user dropdown menu',
		icon: Menu,
		category: 'app-navbars',
		variant: 'dropdown',
		previewImage: '/templates/app-navbar-with-dropdown.png',
		thumbnailImage: '/templates/thumbnails/app-navbar-with-dropdown.jpg',
		tags: ['navbar', 'dropdown', 'menu'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Dropdown Menu', 'User Avatar', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['App Headers', 'User Menus', 'Settings Access'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { appName: 'App', userName: 'User' },
		template: AppNavbarWithDropdown
	},
	{
		id: 'app-navbar-with-breadcrumb',
		name: 'App Navbar with Breadcrumb',
		description: 'Application navbar with breadcrumb navigation',
		icon: Menu,
		category: 'app-navbars',
		variant: 'breadcrumb',
		previewImage: '/templates/app-navbar-with-breadcrumb.png',
		thumbnailImage: '/templates/thumbnails/app-navbar-with-breadcrumb.jpg',
		tags: ['navbar', 'breadcrumb', 'navigation'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Breadcrumbs', 'User Avatar', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['App Navigation', 'Breadcrumb Trails', 'Multi-Level Apps'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { appName: 'App', breadcrumbs: [] },
		template: AppNavbarWithBreadcrumb
	},
	{
		id: 'app-navbar-minimal',
		name: 'App Navbar Minimal',
		description: 'Minimal application navbar',
		icon: Menu,
		category: 'app-navbars',
		variant: 'minimal',
		previewImage: '/templates/app-navbar-minimal.png',
		thumbnailImage: '/templates/thumbnails/app-navbar-minimal.jpg',
		tags: ['navbar', 'minimal', 'clean'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Clean Design', 'User Avatar', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Apps', 'Minimal Headers', 'Clean Interfaces'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { appName: 'App' },
		template: AppNavbarMinimal
	}
];

