import { HelpCircle } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import FAQ components
import FaqWithIcons from './faq-with-icons.svelte';
import FaqTwoColumn from './faq-two-column.svelte';
import FaqCenteredCards from './faq-centered-cards.svelte';
import FaqMinimal from './faq-minimal.svelte';

/**
 * FAQ component mapping for dynamic component loading
 */
export const FAQ_COMPONENTS: Record<string, TemplateComponent> = {
	'faq-with-icons': FaqWithIcons as TemplateComponent,
	'faq-two-column': FaqTwoColumn as TemplateComponent,
	'faq-centered-cards': FaqCenteredCards as TemplateComponent,
	'faq-minimal': FaqMinimal as TemplateComponent
};

/**
 * FAQ templates registry with metadata and default props
 */
export const FAQ_REGISTRY: Template[] = [
	{
		id: 'faq-with-icons',
		name: 'FAQ with Icons',
		description: 'FAQ section with icon-based categories and expandable answers',
		icon: HelpCircle,
		category: 'faq',
		variant: 'default',
		previewImage: '/templates/faq-with-icons.png',
		thumbnailImage: '/templates/thumbnails/faq-with-icons.jpg',
		tags: ['faq', 'icons', 'cards', 'categories', 'expandable'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Icon Categories',
			'Expandable Answers',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Help Centers', 'Support Pages', 'Knowledge Base'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Frequently Asked Questions',
			description: 'Find answers to common questions about our platform',
			categories: []
		},
		template: FaqWithIcons
	},
	{
		id: 'faq-two-column',
		name: 'FAQ Two Column',
		description: 'FAQ section with questions organized in two columns',
		icon: HelpCircle,
		category: 'faq',
		variant: 'default',
		previewImage: '/templates/faq-two-column.png',
		thumbnailImage: '/templates/thumbnails/faq-two-column.jpg',
		tags: ['faq', 'two-column', 'grid', 'questions'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Two Column Layout',
			'Accordion Style',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Help Centers', 'Support Pages', 'Documentation'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Frequently Asked Questions',
			faqs: []
		},
		template: FaqTwoColumn
	},
	{
		id: 'faq-centered-cards',
		name: 'FAQ Centered Cards',
		description: 'Centered FAQ section with card-style questions',
		icon: HelpCircle,
		category: 'faq',
		variant: 'centered',
		previewImage: '/templates/faq-centered-cards.png',
		thumbnailImage: '/templates/thumbnails/faq-centered-cards.jpg',
		tags: ['faq', 'centered', 'cards', 'minimal'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Card Layout',
			'Centered Design',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple FAQ Pages', 'Support Sections', 'Help Centers'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Frequently Asked Questions',
			description: 'Everything you need to know',
			faqs: []
		},
		template: FaqCenteredCards
	},
	{
		id: 'faq-minimal',
		name: 'FAQ Minimal',
		description: 'Minimalist FAQ section with clean accordion design',
		icon: HelpCircle,
		category: 'faq',
		variant: 'minimal',
		previewImage: '/templates/faq-minimal.png',
		thumbnailImage: '/templates/thumbnails/faq-minimal.jpg',
		tags: ['faq', 'minimal', 'accordion', 'clean'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Accordion Component',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Clean FAQ Sections', 'Documentation', 'Support Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Frequently Asked Questions',
			description: 'Quick answers to questions you may have',
			faqs: []
		},
		template: FaqMinimal
	}
];
