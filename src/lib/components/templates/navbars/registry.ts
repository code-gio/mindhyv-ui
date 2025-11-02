import { Menu } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import navbar components
import NavbarSimple from './navbar-simple.svelte';
import NavbarWithDropdown from './navbar-with-dropdown.svelte';
import NavbarCentered from './navbar-centered.svelte';
import NavbarDark from './navbar-dark.svelte';
import NavbarWithSearch from './navbar-with-search.svelte';
import NavbarTransparent from './navbar-transparent.svelte';
import NavbarWithAvatar from './navbar-with-avatar.svelte';
import NavbarWithLogo from './navbar-with-logo.svelte';
import NavbarSidebarToggle from './navbar-sidebar-toggle.svelte';
import NavbarWithBreadcrumb from './navbar-with-breadcrumb.svelte';
import NavbarWithTabs from './navbar-with-tabs.svelte';
import NavbarWithCtaButtons from './navbar-with-cta-buttons.svelte';
import NavbarSplit from './navbar-split.svelte';
import NavbarCompact from './navbar-compact.svelte';

/**
 * Navbars component mapping for dynamic component loading
 */
export const NAVBARS_COMPONENTS: Record<string, TemplateComponent> = {
	'navbar-simple': NavbarSimple as TemplateComponent,
	'navbar-with-dropdown': NavbarWithDropdown as TemplateComponent,
	'navbar-centered': NavbarCentered as TemplateComponent,
	'navbar-dark': NavbarDark as TemplateComponent,
	'navbar-with-search': NavbarWithSearch as TemplateComponent,
	'navbar-transparent': NavbarTransparent as TemplateComponent,
	'navbar-with-avatar': NavbarWithAvatar as TemplateComponent,
	'navbar-with-logo': NavbarWithLogo as TemplateComponent,
	'navbar-sidebar-toggle': NavbarSidebarToggle as TemplateComponent,
	'navbar-with-breadcrumb': NavbarWithBreadcrumb as TemplateComponent,
	'navbar-with-tabs': NavbarWithTabs as TemplateComponent,
	'navbar-with-cta-buttons': NavbarWithCtaButtons as TemplateComponent,
	'navbar-split': NavbarSplit as TemplateComponent,
	'navbar-compact': NavbarCompact as TemplateComponent
};

/**
 * Navbars templates registry with metadata and default props
 */
export const NAVBARS_REGISTRY: Template[] = [
	{
		id: 'navbar-simple',
		name: 'Navbar Simple',
		description: 'Simple sticky navbar with links and CTA',
		icon: Menu,
		category: 'navbars',
		variant: 'simple',
		previewImage: '/templates/navbar-simple.png',
		thumbnailImage: '/templates/thumbnails/navbar-simple.jpg',
		tags: ['navbar', 'header', 'navigation', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Sticky Position', 'Mobile Menu'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Landing Pages', 'Marketing Sites', 'Blogs'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarSimple
	},
	{
		id: 'navbar-with-dropdown',
		name: 'Navbar with Dropdown',
		description: 'Navbar with dropdown menus',
		icon: Menu,
		category: 'navbars',
		variant: 'dropdown',
		previewImage: '/templates/navbar-with-dropdown.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-dropdown.jpg',
		tags: ['navbar', 'dropdown', 'menu', 'navigation'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Dropdown Menus',
			'Mobile Menu',
			'Sticky Position'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Multi-section Sites', 'Complex Navigation', 'Corporate Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			dropdowns: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarWithDropdown
	},
	{
		id: 'navbar-centered',
		name: 'Navbar Centered',
		description: 'Centered brand with navigation on sides',
		icon: Menu,
		category: 'navbars',
		variant: 'centered',
		previewImage: '/templates/navbar-centered.png',
		thumbnailImage: '/templates/thumbnails/navbar-centered.jpg',
		tags: ['navbar', 'centered', 'navigation'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Centered Brand', 'Mobile Menu'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Fashion Sites', 'Portfolio', 'Centered Layouts'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarCentered
	},
	{
		id: 'navbar-dark',
		name: 'Navbar Dark',
		description: 'Dark themed navigation bar',
		icon: Menu,
		category: 'navbars',
		variant: 'dark',
		previewImage: '/templates/navbar-dark.png',
		thumbnailImage: '/templates/thumbnails/navbar-dark.jpg',
		tags: ['navbar', 'dark', 'theme'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Theme', 'Sticky Position', 'Mobile Menu'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dark Themed Sites', 'Modern Apps', 'Tech Products'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarDark
	},
	{
		id: 'navbar-with-search',
		name: 'Navbar with Search',
		description: 'Navbar with integrated search bar',
		icon: Menu,
		category: 'navbars',
		variant: 'search',
		previewImage: '/templates/navbar-with-search.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-search.jpg',
		tags: ['navbar', 'search', 'searchbar'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Search Bar',
			'Mobile Menu',
			'Sticky Position'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Documentation', 'E-commerce', 'Content Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			showSearch: true,
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarWithSearch
	},
	{
		id: 'navbar-transparent',
		name: 'Navbar Transparent',
		description: 'Transparent overlay navbar for hero sections',
		icon: Menu,
		category: 'navbars',
		variant: 'transparent',
		previewImage: '/templates/navbar-transparent.png',
		thumbnailImage: '/templates/thumbnails/navbar-transparent.jpg',
		tags: ['navbar', 'transparent', 'overlay', 'hero'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Transparent Background', 'Absolute Position', 'Mobile Menu'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Hero Overlays', 'Landing Pages', 'Full-screen Layouts'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarTransparent
	},
	{
		id: 'navbar-with-avatar',
		name: 'Navbar with Avatar',
		description: 'Navbar with user avatar and dropdown menu',
		icon: Menu,
		category: 'navbars',
		variant: 'avatar',
		previewImage: '/templates/navbar-with-avatar.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-avatar.jpg',
		tags: ['navbar', 'avatar', 'user', 'dropdown'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'User Avatar',
			'Dropdown Menu',
			'Mobile Menu'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Authenticated Apps', 'User Dashboards', 'SaaS Platforms'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			user: undefined,
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarWithAvatar
	},
	{
		id: 'navbar-with-logo',
		name: 'Navbar with Logo',
		description: 'Navbar with brand logo and text',
		icon: Menu,
		category: 'navbars',
		variant: 'logo',
		previewImage: '/templates/navbar-with-logo.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-logo.jpg',
		tags: ['navbar', 'logo', 'brand'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Logo Display', 'Mobile Menu'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Brand Sites', 'Corporate Pages', 'Marketing Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandLogo: 'https://placehold.co/120x40/6366f1/FFF?text=LOGO',
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarWithLogo
	},
	{
		id: 'navbar-sidebar-toggle',
		name: 'Navbar with Sidebar Toggle',
		description: 'Navbar with sidebar menu toggle',
		icon: Menu,
		category: 'navbars',
		variant: 'sidebar',
		previewImage: '/templates/navbar-sidebar-toggle.png',
		thumbnailImage: '/templates/thumbnails/navbar-sidebar-toggle.jpg',
		tags: ['navbar', 'sidebar', 'toggle', 'drawer'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Sidebar Menu',
			'Search Bar',
			'Overlay'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Apps', 'Dashboards', 'Documentation'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			showSearch: true
		},
		template: NavbarSidebarToggle
	},
	{
		id: 'navbar-with-breadcrumb',
		name: 'Navbar with Breadcrumb',
		description: 'Navbar with breadcrumb navigation',
		icon: Menu,
		category: 'navbars',
		variant: 'breadcrumb',
		previewImage: '/templates/navbar-with-breadcrumb.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-breadcrumb.jpg',
		tags: ['navbar', 'breadcrumb', 'navigation', 'hierarchy'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Breadcrumb', 'Sticky Position'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Multi-level Sites', 'Documentation', 'E-commerce'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			breadcrumbs: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarWithBreadcrumb
	},
	{
		id: 'navbar-with-tabs',
		name: 'Navbar with Tabs',
		description: 'Navbar with active tab indicators',
		icon: Menu,
		category: 'navbars',
		variant: 'tabs',
		previewImage: '/templates/navbar-with-tabs.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-tabs.jpg',
		tags: ['navbar', 'tabs', 'active', 'navigation'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Active States',
			'Tab Style',
			'Mobile Menu'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Multi-page Apps', 'Section Navigation', 'Tabbed Layouts'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarWithTabs
	},
	{
		id: 'navbar-with-cta-buttons',
		name: 'Navbar with CTA Buttons',
		description: 'Navbar with primary and secondary CTA buttons',
		icon: Menu,
		category: 'navbars',
		variant: 'cta',
		previewImage: '/templates/navbar-with-cta-buttons.png',
		thumbnailImage: '/templates/thumbnails/navbar-with-cta-buttons.jpg',
		tags: ['navbar', 'cta', 'buttons', 'actions'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Dual CTAs',
			'Mobile Menu',
			'Sticky Position'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Marketing Sites', 'SaaS Pages', 'Landing Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			primaryCta: { text: 'Sign Up', href: '#' },
			secondaryCta: { text: 'Log In', href: '#' }
		},
		template: NavbarWithCtaButtons
	},
	{
		id: 'navbar-split',
		name: 'Navbar Split',
		description: 'Split navigation with centered brand',
		icon: Menu,
		category: 'navbars',
		variant: 'split',
		previewImage: '/templates/navbar-split.png',
		thumbnailImage: '/templates/thumbnails/navbar-split.jpg',
		tags: ['navbar', 'split', 'centered', 'navigation'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Split Layout',
			'Centered Brand',
			'Mobile Menu'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Fashion Sites', 'Portfolio', 'Lifestyle Brands'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			leftLinks: [],
			rightLinks: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarSplit
	},
	{
		id: 'navbar-compact',
		name: 'Navbar Compact',
		description: 'Compact navbar with minimal height',
		icon: Menu,
		category: 'navbars',
		variant: 'compact',
		previewImage: '/templates/navbar-compact.png',
		thumbnailImage: '/templates/thumbnails/navbar-compact.jpg',
		tags: ['navbar', 'compact', 'minimal', 'small'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Compact Height', 'Clean Design'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Apps', 'Dashboards', 'Internal Tools'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			ctaText: 'Get Started',
			ctaHref: '#'
		},
		template: NavbarCompact
	}
];

