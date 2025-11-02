import type { Template, TemplateCategory, TemplateComponent } from './types';

import {
	Layout,
	DollarSign,
	Star,
	MessageCircle,
	HelpCircle,
	Users,
	Footprints,
	Grid3x3,
	LayoutGrid,
	Building2,
	Bell,
	FileInput,
	Mail,
	Image,
	TrendingUp,
	User,
	Clock,
	List,
	Menu,
	Table as TableIcon,
	MousePointerClick,
	FileText,
	Shield,
	BarChart3,
	Sparkles,
	Layers
} from '@lucide/svelte/icons';

// Import category registries
import { HERO_REGISTRY, HERO_COMPONENTS } from './hero';
import { PRICING_REGISTRY, PRICING_COMPONENTS } from './pricing';
import { FAQ_REGISTRY, FAQ_COMPONENTS } from './faq';
import { TESTIMONIALS_REGISTRY, TESTIMONIALS_COMPONENTS } from './testimonials';
import { TEAM_REGISTRY, TEAM_COMPONENTS } from './team';
import { FOOTER_REGISTRY, FOOTER_COMPONENTS } from './footer';
import { ICONS_REGISTRY, ICONS_COMPONENTS } from './icons';
import { FEATURES_REGISTRY, FEATURES_COMPONENTS } from './features';
import { CARDS_REGISTRY, CARDS_COMPONENTS } from './cards';
import { CLIENTS_REGISTRY, CLIENTS_COMPONENTS } from './clients';
import { BLOG_REGISTRY, BLOG_COMPONENTS } from './blog';
import { BANNERS_REGISTRY, BANNERS_COMPONENTS } from './banners';
import { FORMS_REGISTRY, FORMS_COMPONENTS } from './forms';
import { CONTACTS_REGISTRY, CONTACTS_COMPONENTS } from './contacts';
import { GALLERIES_REGISTRY, GALLERIES_COMPONENTS } from './galleries';
import { ARTICLES_REGISTRY, ARTICLES_COMPONENTS } from './articles';
import { STATS_REGISTRY, STATS_COMPONENTS } from './stats';
import { PROFILES_REGISTRY, PROFILES_COMPONENTS } from './profiles';
import { TIMELINE_REGISTRY, TIMELINE_COMPONENTS } from './timeline';
import { MASONRY_REGISTRY, MASONRY_COMPONENTS } from './masonry';
import { DESCRIPTION_LISTS_REGISTRY, DESCRIPTION_LISTS_COMPONENTS } from './description-lists';
import { NAVBARS_REGISTRY, NAVBARS_COMPONENTS } from './navbars';
import { MEGA_MENU_REGISTRY, MEGA_MENU_COMPONENTS } from './mega-menu';
import { TABLES_REGISTRY, TABLES_COMPONENTS } from './tables';
import { UI_CONTROLS_REGISTRY, UI_CONTROLS_COMPONENTS } from './ui-controls';
import { INVOICE_REGISTRY, INVOICE_COMPONENTS } from './invoice';
import { APPLICATION_UI_REGISTRY, APPLICATION_UI_COMPONENTS } from './application-ui';
import { ADMIN_REGISTRY, ADMIN_COMPONENTS } from './admin';
import { CHARTS_REGISTRY, CHARTS_COMPONENTS } from './charts';
import { AI_PROMPT_REGISTRY, AI_PROMPT_COMPONENTS } from './ai-prompt';
import { FORM_LAYOUTS_REGISTRY, FORM_LAYOUTS_COMPONENTS } from './form-layouts';
import { APP_STATS_REGISTRY, APP_STATS_COMPONENTS } from './app-stats';
import { APP_NAVBARS_REGISTRY, APP_NAVBARS_COMPONENTS } from './app-navbars';
import { OVERLAYS_REGISTRY, OVERLAYS_COMPONENTS } from './overlays';

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
		templates: FEATURES_REGISTRY
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
	},
	{
		id: 'icons',
		name: 'Icon Sections',
		icon: Grid3x3,
		description: 'Showcase features and services with icon blocks',
		order: 8,
		templates: ICONS_REGISTRY
	},
	{
		id: 'cards',
		name: 'Card Sections',
		icon: LayoutGrid,
		description: 'Versatile card layouts for content and features',
		order: 9,
		templates: CARDS_REGISTRY
	},
	{
		id: 'clients',
		name: 'Client Showcases',
		icon: Building2,
		description: 'Display client and partner logos for social proof',
		order: 10,
		templates: CLIENTS_REGISTRY
	},
	{
		id: 'blog',
		name: 'Blog Sections',
		icon: FileText,
		description: 'Blog and article layouts for content sites',
		order: 11,
		templates: BLOG_REGISTRY
	},
	{
		id: 'banners',
		name: 'Announcement Banners',
		icon: Bell,
		description: 'Announcement and promotional banners',
		order: 12,
		templates: BANNERS_REGISTRY
	},
	{
		id: 'forms',
		name: 'Forms',
		icon: FileInput,
		description: 'Form templates for authentication, feedback, and subscriptions',
		order: 13,
		templates: FORMS_REGISTRY
	},
	{
		id: 'contacts',
		name: 'Contact Pages',
		icon: Mail,
		description: 'Contact forms and pages for customer communication',
		order: 14,
		templates: CONTACTS_REGISTRY
	},
	{
		id: 'galleries',
		name: 'Galleries',
		icon: Image,
		description: 'Image galleries and photo showcases',
		order: 15,
		templates: GALLERIES_REGISTRY
	},
	{
		id: 'articles',
		name: 'Blog Articles',
		icon: FileText,
		description: 'Article page templates for blogs',
		order: 16,
		templates: ARTICLES_REGISTRY
	},
	{
		id: 'stats',
		name: 'Statistics',
		icon: TrendingUp,
		description: 'Display metrics and statistics',
		order: 17,
		templates: STATS_REGISTRY
	},
	{
		id: 'profiles',
		name: 'User Profiles',
		icon: User,
		description: 'User profile pages and cards',
		order: 18,
		templates: PROFILES_REGISTRY
	},
	{
		id: 'timeline',
		name: 'Timeline',
		icon: Clock,
		description: 'Timeline and history displays',
		order: 19,
		templates: TIMELINE_REGISTRY
	},
	{
		id: 'masonry',
		name: 'Masonry',
		icon: LayoutGrid,
		description: 'Masonry layouts for mixed content',
		order: 20,
		templates: MASONRY_REGISTRY
	},
	{
		id: 'description-lists',
		name: 'Description Lists',
		icon: List,
		description: 'Term and description lists',
		order: 21,
		templates: DESCRIPTION_LISTS_REGISTRY
	},
	{
		id: 'navbars',
		name: 'Navbars',
		icon: Menu,
		description: 'Navigation headers and menu bars',
		order: 22,
		templates: NAVBARS_REGISTRY
	},
	{
		id: 'mega-menu',
		name: 'Mega Menus',
		icon: Menu,
		description: 'Complex multi-column navigation menus',
		order: 23,
		templates: MEGA_MENU_REGISTRY
	},
	{
		id: 'tables',
		name: 'Tables',
		icon: TableIcon,
		description: 'Data tables for application interfaces',
		order: 24,
		templates: TABLES_REGISTRY
	},
	{
		id: 'ui-controls',
		name: 'UI Controls',
		icon: MousePointerClick,
		description: 'Interactive UI controls and components',
		order: 25,
		templates: UI_CONTROLS_REGISTRY
	},
	{
		id: 'invoice',
		name: 'Invoices',
		icon: FileText,
		description: 'Invoice and billing templates',
		order: 26,
		templates: INVOICE_REGISTRY
	},
	{
		id: 'application-ui',
		name: 'Application UI',
		icon: Layout,
		description: 'Application UI components and layouts',
		order: 27,
		templates: APPLICATION_UI_REGISTRY
	},
	{
		id: 'admin',
		name: 'Admin',
		icon: Shield,
		description: 'Admin dashboard and management interfaces',
		order: 28,
		templates: ADMIN_REGISTRY
	},
	{
		id: 'charts',
		name: 'Charts',
		icon: BarChart3,
		description: 'Data visualization and charts',
		order: 29,
		templates: CHARTS_REGISTRY
	},
	{
		id: 'ai-prompt',
		name: 'AI Prompts',
		icon: Sparkles,
		description: 'AI prompt interfaces and chat',
		order: 30,
		templates: AI_PROMPT_REGISTRY
	},
	{
		id: 'form-layouts',
		name: 'Form Layouts',
		icon: FileInput,
		description: 'Form layout templates and structures',
		order: 31,
		templates: FORM_LAYOUTS_REGISTRY
	},
	{
		id: 'app-stats',
		name: 'App Stats',
		icon: TrendingUp,
		description: 'Application statistics and metrics',
		order: 32,
		templates: APP_STATS_REGISTRY
	},
	{
		id: 'app-navbars',
		name: 'App Navbars',
		icon: Menu,
		description: 'Application navigation bars',
		order: 33,
		templates: APP_NAVBARS_REGISTRY
	},
	{
		id: 'overlays',
		name: 'Overlays',
		icon: Layers,
		description: 'Modals, toasts, alerts, and overlays',
		order: 34,
		templates: OVERLAYS_REGISTRY
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
	...FOOTER_COMPONENTS,
	...ICONS_COMPONENTS,
	...FEATURES_COMPONENTS,
	...CARDS_COMPONENTS,
	...CLIENTS_COMPONENTS,
	...BLOG_COMPONENTS,
	...BANNERS_COMPONENTS,
	...FORMS_COMPONENTS,
	...CONTACTS_COMPONENTS,
	...GALLERIES_COMPONENTS,
	...ARTICLES_COMPONENTS,
	...STATS_COMPONENTS,
	...PROFILES_COMPONENTS,
	...TIMELINE_COMPONENTS,
	...MASONRY_COMPONENTS,
	...DESCRIPTION_LISTS_COMPONENTS,
	...NAVBARS_COMPONENTS,
	...MEGA_MENU_COMPONENTS,
	...TABLES_COMPONENTS,
	...UI_CONTROLS_COMPONENTS,
	...INVOICE_COMPONENTS,
	...APPLICATION_UI_COMPONENTS,
	...ADMIN_COMPONENTS,
	...CHARTS_COMPONENTS,
	...AI_PROMPT_COMPONENTS,
	...FORM_LAYOUTS_COMPONENTS,
	...APP_STATS_COMPONENTS,
	...APP_NAVBARS_COMPONENTS,
	...OVERLAYS_COMPONENTS
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
