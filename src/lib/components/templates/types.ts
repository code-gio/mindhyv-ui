import type { Component } from 'svelte';
import type { Icon as IconType } from 'lucide-svelte';

/**
 * Template component type
 */
export type TemplateComponent = Component<any>;

/**
 * Social media platforms
 */
export type SocialPlatform =
	| 'facebook'
	| 'twitter'
	| 'instagram'
	| 'linkedin'
	| 'youtube'
	| 'tiktok'
	| 'pinterest'
	| 'github';

/**
 * Template complexity levels
 */
export type TemplateComplexity = 'simple' | 'moderate' | 'complex';

/**
 * Template variants
 */
export type TemplateVariant =
	| 'default'
	| 'centered'
	| 'split'
	| 'full-width'
	| 'minimal'
	| 'creative'
	| 'modern'
	| 'classic';

/**
 * Responsive breakpoints
 */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

/**
 * Individual template definition
 */
export interface Template {
	id: string;
	name: string;
	description: string;
	icon: typeof IconType;
	category: string;
	variant?: TemplateVariant;
	previewImage?: string;
	thumbnailImage?: string;
	tags: string[];
	isPro?: boolean;
	complexity: TemplateComplexity;
	features: string[];
	darkModeSupport: boolean;
	responsive: Breakpoint[];
	propsSchema?: Record<string, any>;
	defaultProps?: Record<string, any>;
	useCases?: string[];
	dependencies?: string[];
}

/**
 * Template category definition
 */
export interface TemplateCategory {
	id: string;
	name: string;
	icon: typeof IconType;
	description: string;
	order: number;
	templates: Template[];
}

/**
 * Review/Rating data structure for review platforms
 */
export interface Review {
	rating: number;
	totalReviews: string;
	platform: string;
	platformLogo?: 'google' | 'trustpilot' | 'yelp' | 'facebook' | string;
}

/**
 * Author information
 */
export interface Author {
	name: string;
	title?: string;
	avatar?: string;
	company?: string;
}

/**
 * Testimonial data structure
 */
export interface Testimonial {
	id: string;
	content: string;
	author: Author;
	rating?: number;
	date?: Date;
	featured?: boolean;
	verified?: boolean;
}

/**
 * Feature data structure
 */
export interface Feature {
	id: string;
	title: string;
	description: string;
	icon?: string;
	image?: string;
	priority?: number;
}

/**
 * Pricing plan data structure
 */
export interface PricingPlan {
	id: string;
	name: string;
	price: number;
	period: 'month' | 'year' | 'one-time';
	currency: string;
	features: string[];
	popular?: boolean;
	cta: {
		text: string;
		href: string;
	};
}

/**
 * CTA (Call to Action) data structure
 */
export interface CTA {
	id: string;
	text: string;
	href: string;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	icon?: typeof IconType;
	onClick?: () => void;
}

/**
 * Image optimization options
 */
export interface ImageOptimization {
	width?: number;
	height?: number;
	quality?: number;
	format?: 'webp' | 'avif' | 'jpeg' | 'png';
	fit?: 'cover' | 'contain' | 'fill';
}

/**
 * Responsive image configuration
 */
export interface ResponsiveSrcSet {
	srcset: string;
	sizes: string;
	src: string;
}

/**
 * Image breakpoint configuration
 */
export interface ImageBreakpoint {
	breakpoint: Breakpoint;
	width: number;
}

/**
 * Spacing configuration
 */
export interface SpacingConfig {
	padding?: string;
	margin?: string;
	gap?: string;
}

/**
 * Flex configuration
 */
export interface FlexConfig {
	direction?: 'row' | 'column';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	wrap?: boolean;
	gap?: string;
}

/**
 * Meta data for SEO
 */
export interface MetaData {
	title: string;
	description?: string;
	keywords?: string[];
	author?: string;
	image?: string;
}

/**
 * Open Graph data
 */
export interface OpenGraphData {
	title: string;
	description: string;
	image: string;
	url: string;
	type?: string;
	siteName?: string;
}

/**
 * Twitter Card data
 */
export interface TwitterCardData {
	card: 'summary' | 'summary_large_image' | 'app' | 'player';
	title: string;
	description: string;
	image: string;
	site?: string;
	creator?: string;
}

