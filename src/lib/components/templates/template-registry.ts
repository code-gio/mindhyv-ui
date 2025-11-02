import type { Component } from 'svelte';
import type { Template, TemplateCategory, TemplateComponent } from './types';

import {
	type Icon as IconType,
	Image,
	Layout,
	DollarSign,
	Star,
	MessageCircle,
	Megaphone,
	Users,
	Newspaper,
	Mail,
	HelpCircle,
	Navigation,
	Footprints
} from '@lucide/svelte/icons';

// Import template components
import HeroWithImageReviews from './hero/hero-with-image-reviews.svelte';

/**
 * Template Categories
 */
export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
	{
		id: 'hero',
		name: 'Hero Sections',
		icon: Layout,
		description: 'Eye-catching hero sections to start your pages with impact',
		order: 1,
		templates: [
			{
				id: 'hero-with-image-reviews',
				name: 'Hero with Image & Reviews',
				description:
					'Hero section featuring a prominent image, customer reviews, and dual call-to-action buttons',
				icon: Image,
				category: 'hero',
				variant: 'split',
				previewImage: '/templates/hero-with-image-reviews.png',
				thumbnailImage: '/templates/thumbnails/hero-with-image-reviews.jpg',
				tags: [
					'hero',
					'image',
					'reviews',
					'ratings',
					'cta',
					'social-proof',
					'landing-page',
					'marketing'
				],
				isPro: false,
				complexity: 'moderate',
				features: [
					'Responsive Design',
					'Dark Mode Support',
					'Customizable Content',
					'Star Ratings',
					'Platform Reviews (Google, Trustpilot)',
					'Dual CTA Buttons',
					'Image Loading States',
					'SVG Decorations',
					'TypeScript Support',
					'Accessibility (WCAG AA)'
				],
				darkModeSupport: true,
				responsive: ['mobile', 'tablet', 'desktop'],
				useCases: [
					'SaaS Landing Pages',
					'Product Launches',
					'Marketing Websites',
					'Agency Portfolios',
					'E-commerce Stores'
				],
				dependencies: ['lucide-svelte', 'shadcn-svelte'],
				defaultProps: {
					title: 'Start your journey with',
					brandName: 'Mindhyv',
					description:
						'Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.',
					imageSrc:
						'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80',
					imageAlt: 'Dashboard Interface',
					showReviews: true,
					reviews: [
						{
							rating: 4.6,
							totalReviews: '12k',
							platform: 'Google',
							platformLogo: 'google'
						},
						{
							rating: 4.8,
							totalReviews: '5k',
							platform: 'Trustpilot',
							platformLogo: 'trustpilot'
						}
					],
					ctaPrimaryText: 'Get started',
					ctaPrimaryHref: '#',
					ctaSecondaryText: 'Contact sales team',
					ctaSecondaryHref: '#'
				}
			}
		]
	},
	{
		id: 'features',
		name: 'Feature Sections',
		icon: Star,
		description: 'Showcase your product features and benefits effectively',
		order: 2,
		templates: []
	},
	{
		id: 'pricing',
		name: 'Pricing Tables',
		icon: DollarSign,
		description: 'Present your pricing plans clearly and convert visitors',
		order: 3,
		templates: []
	},
	{
		id: 'testimonials',
		name: 'Testimonials',
		icon: MessageCircle,
		description: 'Build trust with customer testimonials and reviews',
		order: 4,
		templates: []
	},
	{
		id: 'cta',
		name: 'Call-to-Action',
		icon: Megaphone,
		description: 'Drive conversions with compelling CTAs',
		order: 5,
		templates: []
	},
	{
		id: 'team',
		name: 'Team Sections',
		icon: Users,
		description: 'Introduce your team members professionally',
		order: 6,
		templates: []
	},
	{
		id: 'blog',
		name: 'Blog & News',
		icon: Newspaper,
		description: 'Display blog posts and news articles',
		order: 7,
		templates: []
	},
	{
		id: 'contact',
		name: 'Contact Forms',
		icon: Mail,
		description: 'Make it easy for visitors to get in touch',
		order: 8,
		templates: []
	},
	{
		id: 'faq',
		name: 'FAQ Sections',
		icon: HelpCircle,
		description: 'Answer common questions with elegant accordions',
		order: 9,
		templates: []
	},
	{
		id: 'navigation',
		name: 'Headers & Navigation',
		icon: Navigation,
		description: 'Professional headers and navigation menus',
		order: 10,
		templates: []
	},
	{
		id: 'footer',
		name: 'Footers',
		icon: Footprints,
		description: 'Complete your pages with informative footers',
		order: 11,
		templates: []
	}
];

/**
 * Component registry - maps template IDs to their Svelte components
 */
export const TEMPLATE_COMPONENT_REGISTRY: Record<string, TemplateComponent> = {
	'hero-with-image-reviews': HeroWithImageReviews as TemplateComponent
};

/**
 * Get all templates across all categories
 */
export const getAllTemplates = (): Template[] => {
	return TEMPLATE_CATEGORIES.flatMap((category) => category.templates);
};

/**
 * Get a specific template by ID
 */
export const getTemplateById = (id: string): Template | undefined => {
	return getAllTemplates().find((template) => template.id === id);
};

/**
 * Search templates by query (name, description, tags)
 */
export const searchTemplates = (query: string): Template[] => {
	const lowerQuery = query.toLowerCase();
	return getAllTemplates().filter(
		(template) =>
			template.name.toLowerCase().includes(lowerQuery) ||
			template.description.toLowerCase().includes(lowerQuery) ||
			template.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
	);
};

/**
 * Get templates by category ID
 */
export const getTemplatesByCategory = (categoryId: string): Template[] => {
	const category = TEMPLATE_CATEGORIES.find((cat) => cat.id === categoryId);
	return category?.templates ?? [];
};

/**
 * Filter templates by tags
 */
export const getTemplatesByTags = (tags: string[]): Template[] => {
	const lowerTags = tags.map((tag) => tag.toLowerCase());
	return getAllTemplates().filter((template) =>
		template.tags.some((tag) => lowerTags.includes(tag.toLowerCase()))
	);
};

/**
 * Get featured/popular templates
 */
export const getFeaturedTemplates = (): Template[] => {
	return getAllTemplates().filter((template) => template.tags.includes('featured'));
};

/**
 * Get premium templates only
 */
export const getProTemplates = (): Template[] => {
	return getAllTemplates().filter((template) => template.isPro === true);
};

/**
 * Get free templates only
 */
export const getFreeTemplates = (): Template[] => {
	return getAllTemplates().filter((template) => !template.isPro);
};

/**
 * Filter templates by complexity
 */
export const filterTemplatesByComplexity = (
	complexity: 'simple' | 'moderate' | 'complex'
): Template[] => {
	return getAllTemplates().filter((template) => template.complexity === complexity);
};

/**
 * Filter templates by variant
 */
export const filterTemplatesByVariant = (
	variant: 'default' | 'centered' | 'split' | 'full-width' | 'minimal'
): Template[] => {
	return getAllTemplates().filter((template) => template.variant === variant);
};

/**
 * Get template component by ID
 */
export const getTemplateComponent = (id: string): TemplateComponent | null => {
	return TEMPLATE_COMPONENT_REGISTRY[id] || null;
};

/**
 * Get template default props
 */
export const getTemplateDefaults = (id: string): Record<string, any> | undefined => {
	const template = getTemplateById(id);
	return template?.defaultProps;
};

/**
 * Get template features list
 */
export const getTemplateFeatures = (id: string): string[] => {
	const template = getTemplateById(id);
	return template?.features ?? [];
};

/**
 * Get template preview image URL
 */
export const getTemplatePreview = (id: string): string | undefined => {
	const template = getTemplateById(id);
	return template?.previewImage;
};

/**
 * Get all categories sorted by order
 */
export const getSortedCategories = (): TemplateCategory[] => {
	return [...TEMPLATE_CATEGORIES].sort((a, b) => a.order - b.order);
};

/**
 * Get category by ID
 */
export const getCategoryById = (id: string): TemplateCategory | undefined => {
	return TEMPLATE_CATEGORIES.find((cat) => cat.id === id);
};

/**
 * Get template count by category
 */
export const getTemplateCounts = (): Record<string, number> => {
	return TEMPLATE_CATEGORIES.reduce(
		(acc, category) => {
			acc[category.id] = category.templates.length;
			return acc;
		},
		{} as Record<string, number>
	);
};

/**
 * Check if a template supports dark mode
 */
export const supportsDarkMode = (id: string): boolean => {
	const template = getTemplateById(id);
	return template?.darkModeSupport ?? false;
};

/**
 * Get templates that support specific breakpoints
 */
export const getTemplatesByBreakpoint = (
	breakpoint: 'mobile' | 'tablet' | 'desktop'
): Template[] => {
	return getAllTemplates().filter((template) => template.responsive.includes(breakpoint));
};
