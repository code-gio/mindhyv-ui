import { Footprints } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import footer components
import FooterMultiColumn from './footer-multi-column.svelte';
import FooterMinimal from './footer-minimal.svelte';
import FooterWithNewsletter from './footer-with-newsletter.svelte';
import FooterCenteredSocials from './footer-centered-socials.svelte';
import FooterWithAppLinks from './footer-with-app-links.svelte';
import FooterSimpleLinks from './footer-simple-links.svelte';
import FooterWithLogoGrid from './footer-with-logo-grid.svelte';
import FooterDarkBg from './footer-dark-bg.svelte';
import FooterCompact from './footer-compact.svelte';
import FooterWithBadges from './footer-with-badges.svelte';

/**
 * Footer component mapping for dynamic component loading
 */
export const FOOTER_COMPONENTS: Record<string, TemplateComponent> = {
	'footer-multi-column': FooterMultiColumn as TemplateComponent,
	'footer-minimal': FooterMinimal as TemplateComponent,
	'footer-with-newsletter': FooterWithNewsletter as TemplateComponent,
	'footer-centered-socials': FooterCenteredSocials as TemplateComponent,
	'footer-with-app-links': FooterWithAppLinks as TemplateComponent,
	'footer-simple-links': FooterSimpleLinks as TemplateComponent,
	'footer-with-logo-grid': FooterWithLogoGrid as TemplateComponent,
	'footer-dark-bg': FooterDarkBg as TemplateComponent,
	'footer-compact': FooterCompact as TemplateComponent,
	'footer-with-badges': FooterWithBadges as TemplateComponent
};

/**
 * Footer templates registry with metadata and default props
 */
export const FOOTER_REGISTRY: Template[] = [
	{
		id: 'footer-multi-column',
		name: 'Footer Multi-Column',
		description: 'Multi-column footer with navigation links and social media',
		icon: Footprints,
		category: 'footer',
		variant: 'default',
		previewImage: '/templates/footer-multi-column.png',
		thumbnailImage: '/templates/thumbnails/footer-multi-column.jpg',
		tags: ['footer', 'multi-column', 'navigation', 'social'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Multiple Columns',
			'Social Links',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Corporate Sites', 'Marketing Pages', 'Landing Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			tagline: 'Building better web experiences',
			columns: [],
			socialLinks: [],
			copyrightText: '© 2025 Mindhyv. All rights reserved.'
		},
		template: FooterMultiColumn
	},
	{
		id: 'footer-minimal',
		name: 'Footer Minimal',
		description: 'Minimalist footer with essential links and copyright',
		icon: Footprints,
		category: 'footer',
		variant: 'minimal',
		previewImage: '/templates/footer-minimal.png',
		thumbnailImage: '/templates/thumbnails/footer-minimal.jpg',
		tags: ['footer', 'minimal', 'simple', 'clean'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Essential Links',
			'Copyright Notice',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Sites', 'Landing Pages', 'Minimal Designs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			copyrightText: '© 2025 Mindhyv. All rights reserved.'
		},
		template: FooterMinimal
	},
	{
		id: 'footer-with-newsletter',
		name: 'Footer with Newsletter',
		description: 'Footer with newsletter signup form and multi-column links',
		icon: Footprints,
		category: 'footer',
		variant: 'default',
		previewImage: '/templates/footer-with-newsletter.png',
		thumbnailImage: '/templates/thumbnails/footer-with-newsletter.jpg',
		tags: ['footer', 'newsletter', 'signup', 'form', 'multi-column'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Newsletter Form',
			'Multi-Column Layout',
			'Social Links',
			'Email Validation',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Marketing Sites', 'Blogs', 'E-commerce', 'Content Sites'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			tagline: 'Stay updated with our latest news',
			newsletterTitle: 'Subscribe to our newsletter',
			newsletterDescription: 'Get the latest updates delivered to your inbox',
			columns: [],
			socialLinks: [],
			copyrightText: '© 2025 Mindhyv. All rights reserved.'
		},
		template: FooterWithNewsletter
	},
	{
		id: 'footer-centered-socials',
		name: 'Footer Centered with Socials',
		description: 'Centered footer with social media links and copyright',
		icon: Footprints,
		category: 'footer',
		variant: 'centered',
		previewImage: '/templates/footer-centered-socials.png',
		thumbnailImage: '/templates/thumbnails/footer-centered-socials.jpg',
		tags: ['footer', 'centered', 'social', 'minimal'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Social Media Links',
			'Clean Design',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Landing Pages', 'Simple Sites', 'Portfolios'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			socialLinks: [],
			links: [],
			copyrightText: '© 2025 Mindhyv. All rights reserved.'
		},
		template: FooterCenteredSocials
	},
	{
		id: 'footer-with-app-links',
		name: 'Footer with App Links',
		description: 'Footer with app store download links',
		icon: Footprints,
		category: 'footer',
		variant: 'default',
		previewImage: '/templates/footer-with-app-links.png',
		thumbnailImage: '/templates/thumbnails/footer-with-app-links.jpg',
		tags: ['footer', 'app-links', 'download', 'mobile'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'App Store Links',
			'Multi-Column Layout',
			'Social Links',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Mobile App Sites', 'Product Pages', 'Marketing Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			brandDescription: 'Building better experiences',
			columns: [],
			socialLinks: [],
			appStoreLink: '#',
			googlePlayLink: '#',
			copyrightText: ''
		},
		template: FooterWithAppLinks
	},
	{
		id: 'footer-simple-links',
		name: 'Footer Simple Links',
		description: 'Simple footer with inline links',
		icon: Footprints,
		category: 'footer',
		variant: 'minimal',
		previewImage: '/templates/footer-simple-links.png',
		thumbnailImage: '/templates/thumbnails/footer-simple-links.jpg',
		tags: ['footer', 'simple', 'links', 'inline'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Inline Links',
			'Social Icons',
			'Copyright',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Sites', 'Landing Pages', 'Single Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			socialLinks: [],
			copyrightText: ''
		},
		template: FooterSimpleLinks
	},
	{
		id: 'footer-with-logo-grid',
		name: 'Footer with Logo Grid',
		description: 'Footer with brand logo and grid layout',
		icon: Footprints,
		category: 'footer',
		variant: 'default',
		previewImage: '/templates/footer-with-logo-grid.png',
		thumbnailImage: '/templates/thumbnails/footer-with-logo-grid.jpg',
		tags: ['footer', 'logo', 'grid', 'brand'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Logo Display',
			'Grid Layout',
			'Social Links',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Brand Sites', 'Corporate Pages', 'Marketing Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			brandLogo: '',
			brandDescription: 'Building better experiences',
			columns: [],
			socialLinks: [],
			copyrightText: ''
		},
		template: FooterWithLogoGrid
	},
	{
		id: 'footer-dark-bg',
		name: 'Footer Dark Background',
		description: 'Footer with dark background theme',
		icon: Footprints,
		category: 'footer',
		variant: 'dark',
		previewImage: '/templates/footer-dark-bg.png',
		thumbnailImage: '/templates/thumbnails/footer-dark-bg.jpg',
		tags: ['footer', 'dark', 'background', 'theme'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Background',
			'Multi-Column Layout',
			'Social Links',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dark Themed Sites', 'Modern Designs', 'Tech Sites'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			brandDescription: 'Building better experiences',
			columns: [],
			socialLinks: [],
			copyrightText: ''
		},
		template: FooterDarkBg
	},
	{
		id: 'footer-compact',
		name: 'Footer Compact',
		description: 'Compact single-line footer',
		icon: Footprints,
		category: 'footer',
		variant: 'compact',
		previewImage: '/templates/footer-compact.png',
		thumbnailImage: '/templates/thumbnails/footer-compact.jpg',
		tags: ['footer', 'compact', 'minimal', 'single-line'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Compact Layout',
			'Inline Links',
			'Social Icons',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Sites', 'Apps', 'Minimal Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			links: [],
			socialLinks: [],
			copyrightText: ''
		},
		template: FooterCompact
	},
	{
		id: 'footer-with-badges',
		name: 'Footer with Badges',
		description: 'Footer with feature badges and links',
		icon: Footprints,
		category: 'footer',
		variant: 'default',
		previewImage: '/templates/footer-with-badges.png',
		thumbnailImage: '/templates/thumbnails/footer-with-badges.jpg',
		tags: ['footer', 'badges', 'features', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Feature Badges',
			'Multi-Column Layout',
			'Social Links',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Sites', 'Marketing Pages', 'Feature Showcases'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			brandName: 'Mindhyv',
			brandDescription: 'Building better experiences',
			badges: [],
			columns: [],
			socialLinks: [],
			copyrightText: ''
		},
		template: FooterWithBadges
	}
];

