import { MessageCircle } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import testimonial components
import TestimonialsCardsDark from './testimonials-cards-dark.svelte';
import TestimonialsCentered from './testimonials-centered.svelte';
import TestimonialsWithImage from './testimonials-with-image.svelte';
import TestimonialsGrid from './testimonials-grid.svelte';
import TestimonialsMinimal from './testimonials-minimal.svelte';
import TestimonialsCarousel from './testimonials-carousel.svelte';
import TestimonialsTwoColumn from './testimonials-two-column.svelte';
import TestimonialsWithCompanyLogos from './testimonials-with-company-logos.svelte';
import TestimonialsQuoteStyle from './testimonials-quote-style.svelte';
import TestimonialsSlider from './testimonials-slider.svelte';
import TestimonialsCompactList from './testimonials-compact-list.svelte';

/**
 * Testimonials component mapping for dynamic component loading
 */
export const TESTIMONIALS_COMPONENTS: Record<string, TemplateComponent> = {
	'testimonials-cards-dark': TestimonialsCardsDark as TemplateComponent,
	'testimonials-centered': TestimonialsCentered as TemplateComponent,
	'testimonials-with-image': TestimonialsWithImage as TemplateComponent,
	'testimonials-grid': TestimonialsGrid as TemplateComponent,
	'testimonials-minimal': TestimonialsMinimal as TemplateComponent,
	'testimonials-carousel': TestimonialsCarousel as TemplateComponent,
	'testimonials-two-column': TestimonialsTwoColumn as TemplateComponent,
	'testimonials-with-company-logos': TestimonialsWithCompanyLogos as TemplateComponent,
	'testimonials-quote-style': TestimonialsQuoteStyle as TemplateComponent,
	'testimonials-slider': TestimonialsSlider as TemplateComponent,
	'testimonials-compact-list': TestimonialsCompactList as TemplateComponent
};

/**
 * Testimonials templates registry with metadata and default props
 */
export const TESTIMONIALS_REGISTRY: Template[] = [
	{
		id: 'testimonials-cards-dark',
		name: 'Testimonials Cards Dark',
		description: 'Testimonial cards on a dark background with author info',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-cards-dark.png',
		thumbnailImage: '/templates/thumbnails/testimonials-cards-dark.jpg',
		tags: ['testimonials', 'cards', 'dark', 'quotes'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Author Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Landing Pages', 'Social Proof', 'Client Reviews'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'What our customers say',
			testimonials: []
		},
		template: TestimonialsCardsDark
	},
	{
		id: 'testimonials-centered',
		name: 'Testimonials Centered',
		description: 'Centered testimonial with company logo and attribution',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'centered',
		previewImage: '/templates/testimonials-centered.png',
		thumbnailImage: '/templates/thumbnails/testimonials-centered.jpg',
		tags: ['testimonials', 'centered', 'logo', 'quote'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Company Logo',
			'Centered Layout',
			'Author Attribution',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Landing Pages', 'Case Studies', 'Client Testimonials'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			quote: 'Amazing experience working with this team!',
			author: 'John Doe',
			title: 'CEO, Company Inc.',
			companyLogo: ''
		},
		template: TestimonialsCentered
	},
	{
		id: 'testimonials-with-image',
		name: 'Testimonials with Image',
		description: 'Testimonial with large author image and quote',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-with-image.png',
		thumbnailImage: '/templates/thumbnails/testimonials-with-image.jpg',
		tags: ['testimonials', 'image', 'photo', 'quote'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Author Image',
			'Quote Display',
			'Author Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Personal Testimonials', 'Client Reviews', 'Social Proof'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			quote: 'This product changed the way we work!',
			author: 'Jane Smith',
			title: 'Marketing Director',
			imageUrl: '',
			imageAlt: 'Customer photo'
		},
		template: TestimonialsWithImage
	},
	{
		id: 'testimonials-grid',
		name: 'Testimonials Grid',
		description: 'Grid layout testimonials with star ratings and author info',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-grid.png',
		thumbnailImage: '/templates/thumbnails/testimonials-grid.jpg',
		tags: ['testimonials', 'grid', 'ratings', 'reviews'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Star Ratings',
			'Multiple Testimonials',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Review Sections', 'Social Proof', 'Customer Feedback'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'What our customers say',
			testimonials: []
		},
		template: TestimonialsGrid
	},
	{
		id: 'testimonials-minimal',
		name: 'Testimonials Minimal',
		description: 'Minimal testimonials with left border accent',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'minimal',
		previewImage: '/templates/testimonials-minimal.png',
		thumbnailImage: '/templates/thumbnails/testimonials-minimal.jpg',
		tags: ['testimonials', 'minimal', 'simple', 'clean'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Border Accent',
			'Clean Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Testimonials', 'Quotes', 'Customer Feedback'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			testimonials: []
		},
		template: TestimonialsMinimal
	},
	{
		id: 'testimonials-carousel',
		name: 'Testimonials Carousel',
		description: 'Testimonial cards with ratings in grid layout',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-carousel.png',
		thumbnailImage: '/templates/thumbnails/testimonials-carousel.jpg',
		tags: ['testimonials', 'carousel', 'ratings', 'cards'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Star Ratings',
			'Author Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Review Sections', 'Customer Feedback', 'Social Proof'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Customer Reviews',
			description: 'See what our customers say',
			testimonials: []
		},
		template: TestimonialsCarousel
	},
	{
		id: 'testimonials-two-column',
		name: 'Testimonials Two Column',
		description: 'Two-column testimonial layout with quote icons',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-two-column.png',
		thumbnailImage: '/templates/thumbnails/testimonials-two-column.jpg',
		tags: ['testimonials', 'two-column', 'quotes', 'cards'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Two Column Layout',
			'Quote Icon',
			'Author Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Testimonial Sections', 'Client Reviews', 'Social Proof'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Testimonials',
			testimonials: []
		},
		template: TestimonialsTwoColumn
	},
	{
		id: 'testimonials-with-company-logos',
		name: 'Testimonials with Company Logos',
		description: 'Testimonials featuring company logos and branding',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-with-company-logos.png',
		thumbnailImage: '/templates/thumbnails/testimonials-with-company-logos.jpg',
		tags: ['testimonials', 'logos', 'company', 'brand'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Company Logos',
			'Grid Layout',
			'Author Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['B2B Testimonials', 'Enterprise Reviews', 'Partner Feedback'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			testimonials: []
		},
		template: TestimonialsWithCompanyLogos
	},
	{
		id: 'testimonials-quote-style',
		name: 'Testimonials Quote Style',
		description: 'Testimonials with large quote marks and minimal design',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'minimal',
		previewImage: '/templates/testimonials-quote-style.png',
		thumbnailImage: '/templates/thumbnails/testimonials-quote-style.jpg',
		tags: ['testimonials', 'quotes', 'minimal', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Large Quote Marks',
			'Minimal Design',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Testimonials', 'Quote Sections', 'Client Feedback'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			testimonials: []
		},
		template: TestimonialsQuoteStyle
	},
	{
		id: 'testimonials-slider',
		name: 'Testimonials Slider',
		description: 'Vertical testimonial slider with ratings',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'default',
		previewImage: '/templates/testimonials-slider.png',
		thumbnailImage: '/templates/thumbnails/testimonials-slider.jpg',
		tags: ['testimonials', 'slider', 'ratings', 'vertical'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Vertical Layout',
			'Star Ratings',
			'Author Info',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Review Sections', 'Customer Stories', 'Social Proof'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Customer Reviews',
			testimonials: []
		},
		template: TestimonialsSlider
	},
	{
		id: 'testimonials-compact-list',
		name: 'Testimonials Compact List',
		description: 'Compact list of testimonials with ratings',
		icon: MessageCircle,
		category: 'testimonials',
		variant: 'compact',
		previewImage: '/templates/testimonials-compact-list.png',
		thumbnailImage: '/templates/thumbnails/testimonials-compact-list.jpg',
		tags: ['testimonials', 'compact', 'list', 'ratings'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Compact Layout',
			'Star Ratings',
			'List View',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Review Lists', 'Feedback Sections', 'Customer Testimonials'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Reviews',
			testimonials: []
		},
		template: TestimonialsCompactList
	}
];

