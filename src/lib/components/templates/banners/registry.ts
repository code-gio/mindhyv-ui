import { Bell } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import banner components
import BannerSimple from './banner-simple.svelte';
import BannerWithIcon from './banner-with-icon.svelte';
import BannerGradient from './banner-gradient.svelte';
import BannerStickyTop from './banner-sticky-top.svelte';
import BannerCentered from './banner-centered.svelte';
import BannerWithImage from './banner-with-image.svelte';
import BannerMinimal from './banner-minimal.svelte';

/**
 * Banners component mapping for dynamic component loading
 */
export const BANNERS_COMPONENTS: Record<string, TemplateComponent> = {
	'banner-simple': BannerSimple as TemplateComponent,
	'banner-with-icon': BannerWithIcon as TemplateComponent,
	'banner-gradient': BannerGradient as TemplateComponent,
	'banner-sticky-top': BannerStickyTop as TemplateComponent,
	'banner-centered': BannerCentered as TemplateComponent,
	'banner-with-image': BannerWithImage as TemplateComponent,
	'banner-minimal': BannerMinimal as TemplateComponent
};

/**
 * Banners templates registry with metadata and default props
 */
export const BANNERS_REGISTRY: Template[] = [
	{
		id: 'banner-simple',
		name: 'Banner Simple',
		description: 'Simple announcement banner with dismiss option',
		icon: Bell,
		category: 'banners',
		variant: 'default',
		previewImage: '/templates/banner-simple.png',
		thumbnailImage: '/templates/thumbnails/banner-simple.jpg',
		tags: ['banner', 'announcement', 'simple', 'dismissible'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dismissible', 'Primary Background', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Announcements', 'Promotions', 'Alerts'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			message: 'New features available',
			linkText: 'Learn more',
			linkHref: '#',
			dismissible: true
		},
		template: BannerSimple
	},
	{
		id: 'banner-with-icon',
		name: 'Banner with Icon',
		description: 'Banner with icon and dismiss option',
		icon: Bell,
		category: 'banners',
		variant: 'default',
		previewImage: '/templates/banner-with-icon.png',
		thumbnailImage: '/templates/thumbnails/banner-with-icon.jpg',
		tags: ['banner', 'icon', 'announcement'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Icon Support',
			'Dismissible',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Info Banners', 'Announcements', 'Alerts'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			icon: undefined,
			message: 'Important announcement',
			linkText: 'Read more',
			linkHref: '#',
			dismissible: true
		},
		template: BannerWithIcon
	},
	{
		id: 'banner-gradient',
		name: 'Banner Gradient',
		description: 'Gradient banner with CTA button',
		icon: Bell,
		category: 'banners',
		variant: 'default',
		previewImage: '/templates/banner-gradient.png',
		thumbnailImage: '/templates/thumbnails/banner-gradient.jpg',
		tags: ['banner', 'gradient', 'cta', 'button'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Gradient Background',
			'CTA Button',
			'Dismissible',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Promotions', 'Marketing', 'CTAs'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			message: 'Special offer available',
			ctaText: 'Get started',
			ctaHref: '#',
			dismissible: true
		},
		template: BannerGradient
	},
	{
		id: 'banner-sticky-top',
		name: 'Banner Sticky Top',
		description: 'Sticky banner at top of page',
		icon: Bell,
		category: 'banners',
		variant: 'sticky',
		previewImage: '/templates/banner-sticky-top.png',
		thumbnailImage: '/templates/thumbnails/banner-sticky-top.jpg',
		tags: ['banner', 'sticky', 'top', 'dark'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Sticky Positioning',
			'Dark Background',
			'Dismissible',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Sticky Announcements', 'Top Banners', 'Promotions'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			message: 'New update available',
			linkText: 'Update now',
			linkHref: '#',
			dismissible: true
		},
		template: BannerStickyTop
	},
	{
		id: 'banner-centered',
		name: 'Banner Centered',
		description: 'Centered banner with icon and CTA',
		icon: Bell,
		category: 'banners',
		variant: 'centered',
		previewImage: '/templates/banner-centered.png',
		thumbnailImage: '/templates/thumbnails/banner-centered.jpg',
		tags: ['banner', 'centered', 'icon', 'cta'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Icon Support',
			'CTA Button',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Marketing Banners', 'Promotions', 'CTAs'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'New Feature',
			message: 'Try our latest feature',
			ctaText: 'Get started',
			ctaHref: '#',
			dismissible: true
		},
		template: BannerCentered
	},
	{
		id: 'banner-with-image',
		name: 'Banner with Image',
		description: 'Banner with image and CTA',
		icon: Bell,
		category: 'banners',
		variant: 'default',
		previewImage: '/templates/banner-with-image.png',
		thumbnailImage: '/templates/thumbnails/banner-with-image.jpg',
		tags: ['banner', 'image', 'cta', 'announcement'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Image Support',
			'CTA Button',
			'Dismissible',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Banners', 'Promotions', 'Announcements'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			imageSrc: '',
			imageAlt: 'Banner image',
			title: 'New Feature',
			message: 'Check out our latest update',
			ctaText: 'Learn more',
			ctaHref: '#',
			dismissible: true
		},
		template: BannerWithImage
	},
	{
		id: 'banner-minimal',
		name: 'Banner Minimal',
		description: 'Minimal banner with subtle styling',
		icon: Bell,
		category: 'banners',
		variant: 'minimal',
		previewImage: '/templates/banner-minimal.png',
		thumbnailImage: '/templates/thumbnails/banner-minimal.jpg',
		tags: ['banner', 'minimal', 'simple', 'subtle'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Dismissible',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Subtle Announcements', 'Info Banners', 'Notifications'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			message: 'New update available',
			linkText: 'Learn more',
			linkHref: '#',
			dismissible: true
		},
		template: BannerMinimal
	}
];

