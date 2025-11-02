import type { Template, TemplateCategory, TemplateComponent } from './types';

import {
	Layout,
	DollarSign,
	Star,
	MessageCircle,
	HelpCircle,
	Users,
	Footprints
} from '@lucide/svelte/icons';

// Import category registries
import { HERO_REGISTRY, HERO_COMPONENTS } from './hero';
import { PRICING_REGISTRY, PRICING_COMPONENTS } from './pricing';
import { FAQ_REGISTRY, FAQ_COMPONENTS } from './faq';
import { TESTIMONIALS_REGISTRY, TESTIMONIALS_COMPONENTS } from './testimonials';
import { TEAM_REGISTRY, TEAM_COMPONENTS } from './team';
import { FOOTER_REGISTRY, FOOTER_COMPONENTS } from './footer';

/**
 * Template Categories - Built from distributed category registries
 */
export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
	{
		id: 'hero',
		name: 'Hero Sections',
		icon: Layout,
		description: 'Eye-catching hero sections to start your pages with impact',
		order: 1,
		templates: HERO_REGISTRY
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
		templates: PRICING_REGISTRY
	},
	{
		id: 'faq',
		name: 'FAQ Sections',
		icon: HelpCircle,
		description: 'Answer common questions and reduce support burden',
		order: 4,
		templates: FAQ_REGISTRY
	},
	{
		id: 'testimonials',
		name: 'Testimonials',
		icon: MessageCircle,
		description: 'Display customer reviews and build trust',
		order: 5,
		templates: TESTIMONIALS_REGISTRY
	},
	{
		id: 'team',
		name: 'Team Sections',
		icon: Users,
		description: 'Showcase your team members and build credibility',
		order: 6,
		templates: TEAM_REGISTRY
	},
	{
		id: 'footer',
		name: 'Footer Sections',
		icon: Footprints,
		description: 'Complete your pages with professional footers',
		order: 7,
		templates: FOOTER_REGISTRY
	}
];

/**
 * Component registry - Maps template IDs to their Svelte components
 * Built from distributed category component mappings
 */
export const TEMPLATE_COMPONENT_REGISTRY: Record<string, TemplateComponent> = {
	...HERO_COMPONENTS,
	...PRICING_COMPONENTS,
	...FAQ_COMPONENTS,
	...TESTIMONIALS_COMPONENTS,
	...TEAM_COMPONENTS,
	...FOOTER_COMPONENTS
};

/**
 * Get all templates across all categories
 */
export const getAllTemplates = (): Template[] => {
	return TEMPLATE_CATEGORIES.flatMap((category) => category.templates);
};

/**
 * Get template by ID
 */
export const getTemplateById = (id: string): Template | undefined => {
	return getAllTemplates().find((template) => template.id === id);
};

/**
 * Get templates by category
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
