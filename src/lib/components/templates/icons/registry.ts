import {
	Grid3x3,
	Smartphone,
	GitBranch,
	Book,
	MessageCircle,
	Zap,
	Shield,
	Users,
	TrendingUp,
	CheckCircle,
	Settings,
	Rocket,
	Heart,
	Star,
	Globe,
	Clock
} from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import icon components
import IconBlocksBlueBg from './icon-blocks-blue-bg.svelte';
import IconBlocksOutline from './icon-blocks-outline.svelte';
import IconBlocksWithImage from './icon-blocks-with-image.svelte';
import IconBlocksBrandColor from './icon-blocks-brand-color.svelte';
import IconBlocksCentered from './icon-blocks-centered.svelte';
import IconBlocksVertical from './icon-blocks-vertical.svelte';
import IconBlocksHorizontal from './icon-blocks-horizontal.svelte';
import IconBlocksTwoColumn from './icon-blocks-two-column.svelte';
import IconBlocksWithStats from './icon-blocks-with-stats.svelte';
import IconBlocksLargeIcons from './icon-blocks-large-icons.svelte';
import IconBlocksShadow from './icon-blocks-shadow.svelte';

/**
 * Icon component mapping for dynamic component loading
 */
export const ICONS_COMPONENTS: Record<string, TemplateComponent> = {
	'icon-blocks-blue-bg': IconBlocksBlueBg as TemplateComponent,
	'icon-blocks-outline': IconBlocksOutline as TemplateComponent,
	'icon-blocks-with-image': IconBlocksWithImage as TemplateComponent,
	'icon-blocks-brand-color': IconBlocksBrandColor as TemplateComponent,
	'icon-blocks-centered': IconBlocksCentered as TemplateComponent,
	'icon-blocks-vertical': IconBlocksVertical as TemplateComponent,
	'icon-blocks-horizontal': IconBlocksHorizontal as TemplateComponent,
	'icon-blocks-two-column': IconBlocksTwoColumn as TemplateComponent,
	'icon-blocks-with-stats': IconBlocksWithStats as TemplateComponent,
	'icon-blocks-large-icons': IconBlocksLargeIcons as TemplateComponent,
	'icon-blocks-shadow': IconBlocksShadow as TemplateComponent
};

/**
 * Icon templates registry with metadata and default props
 */
export const ICONS_REGISTRY: Template[] = [
	{
		id: 'icon-blocks-blue-bg',
		name: 'Icon Blocks with Blue Background',
		description: 'Grid of icon blocks with blue backgrounds showcasing features or services',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-blue-bg.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-blue-bg.jpg',
		tags: ['icons', 'features', 'services', 'grid', 'blocks'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Custom Icons',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Showcases', 'Service Lists', 'Benefits Sections', 'Product Features'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			blocks: [
				{
					icon: Smartphone,
					title: 'Responsive',
					description: 'Responsive, and mobile-first project on the web',
					linkText: 'Learn more',
					linkHref: '#'
				},
				{
					icon: GitBranch,
					title: 'Customizable',
					description: 'Components are easily customized and extendable',
					linkText: 'Learn more',
					linkHref: '#'
				},
				{
					icon: Book,
					title: 'Documentation',
					description: 'Every component and plugin is well documented',
					linkText: 'Learn more',
					linkHref: '#'
				},
				{
					icon: MessageCircle,
					title: '24/7 Support',
					description: 'Contact us 24 hours a day, 7 days a week',
					linkText: 'Learn more',
					linkHref: '#'
				}
			],
			columns: 4
		},
		template: IconBlocksBlueBg
	},
	{
		id: 'icon-blocks-outline',
		name: 'Icon Blocks Outline Style',
		description: 'Grid of icon blocks with outline style and hover effects',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-outline.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-outline.jpg',
		tags: ['icons', 'features', 'outline', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Grid Layout',
			'Hover Effects',
			'Custom Icons',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Sections', 'Service Lists', 'Benefits'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			blocks: []
		},
		template: IconBlocksOutline
	},
	{
		id: 'icon-blocks-with-image',
		name: 'Icon Blocks with Image Header',
		description: 'Feature section with header image and icon blocks in grid layout',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-with-image.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-with-image.jpg',
		tags: ['icons', 'features', 'image', 'grid'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Header Image',
			'Grid Layout',
			'Icon Blocks',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Showcases', 'Product Pages', 'About Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'We tackle the challenges start-ups face',
			description: 'Besides working with start-up enterprises as a partner for digitalization',
			imageSrc:
				'https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
			imageAlt: 'Features Image',
			blocks: []
		},
		template: IconBlocksWithImage
	},
	{
		id: 'icon-blocks-brand-color',
		name: 'Icon Blocks with Brand Color',
		description: 'Icon blocks with customizable brand colors and shadows',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-brand-color.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-brand-color.jpg',
		tags: ['icons', 'features', 'brand', 'colors'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Custom Icon Colors',
			'Grid Layout',
			'Shadow Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Brand Showcases', 'Feature Lists', 'Service Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Our Features',
			description: 'Powerful features to help you succeed',
			blocks: []
		},
		template: IconBlocksBrandColor
	},
	{
		id: 'icon-blocks-centered',
		name: 'Icon Blocks Centered Cards',
		description: 'Centered icon blocks in card format with borders',
		icon: Grid3x3,
		category: 'icons',
		variant: 'centered',
		previewImage: '/templates/icon-blocks-centered.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-centered.jpg',
		tags: ['icons', 'features', 'centered', 'cards'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Card Style',
			'Hover Effects',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Grids', 'Service Cards', 'Benefit Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Features',
			description: 'Everything you need to succeed',
			blocks: []
		},
		template: IconBlocksCentered
	},
	{
		id: 'icon-blocks-vertical',
		name: 'Icon Blocks Vertical Cards',
		description: 'Vertical icon blocks with gradient backgrounds',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-vertical.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-vertical.jpg',
		tags: ['icons', 'features', 'vertical', 'gradient'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Vertical Layout',
			'Gradient Backgrounds',
			'Border Cards',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Cards', 'Service Blocks', 'Benefit Sections'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			blocks: []
		},
		template: IconBlocksVertical
	},
	{
		id: 'icon-blocks-horizontal',
		name: 'Icon Blocks Horizontal Layout',
		description: 'Horizontal icon blocks in card format with gradients',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-horizontal.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-horizontal.jpg',
		tags: ['icons', 'features', 'horizontal', 'cards'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Horizontal Layout',
			'Card Style',
			'Gradient Icons',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Lists', 'Service Cards', 'Benefits'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			blocks: []
		},
		template: IconBlocksHorizontal
	},
	{
		id: 'icon-blocks-two-column',
		name: 'Icon Blocks Two Column',
		description: 'Two-column feature section with title and icon blocks',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-two-column.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-two-column.jpg',
		tags: ['icons', 'features', 'two-column', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Two Column Layout',
			'Icon Blocks',
			'Shadow Borders',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Sections', 'About Pages', 'Service Lists'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Collaborative tools to design user experience',
			description: 'We provide solutions that help teams collaborate better',
			blocks: []
		},
		template: IconBlocksTwoColumn
	},
	{
		id: 'icon-blocks-with-stats',
		name: 'Icon Blocks with Statistics',
		description: 'Icon blocks combining statistics with features',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-with-stats.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-with-stats.jpg',
		tags: ['icons', 'stats', 'features', 'numbers'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Statistics Display',
			'Icon Blocks',
			'Card Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Stats Sections', 'Metrics Display', 'Achievement Showcases'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			blocks: []
		},
		template: IconBlocksWithStats
	},
	{
		id: 'icon-blocks-large-icons',
		name: 'Icon Blocks with Large Icons',
		description: 'Feature section with large icons and gradient background',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-large-icons.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-large-icons.jpg',
		tags: ['icons', 'features', 'large', 'gradient'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Large Icons',
			'Gradient Background',
			'Grid Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Highlights', 'Service Sections', 'Benefits'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Our Features',
			blocks: []
		},
		template: IconBlocksLargeIcons
	},
	{
		id: 'icon-blocks-shadow',
		name: 'Icon Blocks with Shadow',
		description: 'Icon blocks with prominent shadow effects',
		icon: Grid3x3,
		category: 'icons',
		variant: 'default',
		previewImage: '/templates/icon-blocks-shadow.png',
		thumbnailImage: '/templates/thumbnails/icon-blocks-shadow.jpg',
		tags: ['icons', 'features', 'shadow', 'cards'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Shadow Cards',
			'Large Icons',
			'Clean Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Feature Cards', 'Service Highlights', 'Product Features'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			blocks: []
		},
		template: IconBlocksShadow
	}
];
