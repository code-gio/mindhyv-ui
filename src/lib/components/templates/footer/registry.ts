import { Footprints } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import footer components
import FooterMultiColumn from './footer-multi-column.svelte';
import FooterMinimal from './footer-minimal.svelte';
import FooterWithNewsletter from './footer-with-newsletter.svelte';
import FooterCenteredSocials from './footer-centered-socials.svelte';

/**
 * Footer component mapping for dynamic component loading
 */
export const FOOTER_COMPONENTS: Record<string, TemplateComponent> = {
	'footer-multi-column': FooterMultiColumn as TemplateComponent,
	'footer-minimal': FooterMinimal as TemplateComponent,
	'footer-with-newsletter': FooterWithNewsletter as TemplateComponent,
	'footer-centered-socials': FooterCenteredSocials as TemplateComponent
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
	}
];

