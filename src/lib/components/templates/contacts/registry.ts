import { Mail } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import contact components
import ContactWithForm from './contact-with-form.svelte';
import ContactSimpleCards from './contact-simple-cards.svelte';
import ContactSplitMap from './contact-split-map.svelte';
import ContactCentered from './contact-centered.svelte';
import ContactMinimal from './contact-minimal.svelte';

/**
 * Contacts component mapping for dynamic component loading
 */
export const CONTACTS_COMPONENTS: Record<string, TemplateComponent> = {
	'contact-with-form': ContactWithForm as TemplateComponent,
	'contact-simple-cards': ContactSimpleCards as TemplateComponent,
	'contact-split-map': ContactSplitMap as TemplateComponent,
	'contact-centered': ContactCentered as TemplateComponent,
	'contact-minimal': ContactMinimal as TemplateComponent
};

/**
 * Contacts templates registry with metadata and default props
 */
export const CONTACTS_REGISTRY: Template[] = [
	{
		id: 'contact-with-form',
		name: 'Contact with Form',
		description: 'Contact page with form and info blocks',
		icon: Mail,
		category: 'contacts',
		variant: 'default',
		previewImage: '/templates/contact-with-form.png',
		thumbnailImage: '/templates/thumbnails/contact-with-form.jpg',
		tags: ['contact', 'form', 'info', 'split'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Contact Form',
			'Info Blocks',
			'Split Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Contact Pages', 'Support Forms', 'Customer Service'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Contact Us',
			description: 'We would love to hear from you',
			contactInfo: [],
			submitText: 'Send message'
		},
		template: ContactWithForm
	},
	{
		id: 'contact-simple-cards',
		name: 'Contact Simple Cards',
		description: 'Simple contact cards with icons',
		icon: Mail,
		category: 'contacts',
		variant: 'cards',
		previewImage: '/templates/contact-simple-cards.png',
		thumbnailImage: '/templates/thumbnails/contact-simple-cards.jpg',
		tags: ['contact', 'cards', 'simple', 'icons'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Card Layout',
			'Contact Icons',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Contact Info', 'Get in Touch', 'Support Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Get in touch',
			description: 'We are here to help',
			cards: []
		},
		template: ContactSimpleCards
	},
	{
		id: 'contact-split-map',
		name: 'Contact Split with Map',
		description: 'Contact form with embedded map',
		icon: Mail,
		category: 'contacts',
		variant: 'split',
		previewImage: '/templates/contact-split-map.png',
		thumbnailImage: '/templates/thumbnails/contact-split-map.jpg',
		tags: ['contact', 'map', 'form', 'location'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Map Embed',
			'Contact Form',
			'Split Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Location Pages', 'Office Contact', 'Store Locators'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Contact Us',
			description: 'Visit us or send a message',
			contactInfo: [],
			mapEmbedUrl: '',
			submitText: 'Send message'
		},
		template: ContactSplitMap
	},
	{
		id: 'contact-centered',
		name: 'Contact Centered',
		description: 'Centered contact form layout',
		icon: Mail,
		category: 'contacts',
		variant: 'centered',
		previewImage: '/templates/contact-centered.png',
		thumbnailImage: '/templates/thumbnails/contact-centered.jpg',
		tags: ['contact', 'centered', 'form', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Contact Form',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Contact Pages', 'Simple Forms', 'Get in Touch'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Contact Us',
			description: 'Send us a message',
			submitText: 'Send message'
		},
		template: ContactCentered
	},
	{
		id: 'contact-minimal',
		name: 'Contact Minimal',
		description: 'Minimal contact form without labels',
		icon: Mail,
		category: 'contacts',
		variant: 'minimal',
		previewImage: '/templates/contact-minimal.png',
		thumbnailImage: '/templates/thumbnails/contact-minimal.jpg',
		tags: ['contact', 'minimal', 'form', 'clean'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Placeholder Labels',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Contact', 'Minimal Forms', 'Clean Designs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Get in touch',
			description: 'We will get back to you soon',
			submitText: 'Send'
		},
		template: ContactMinimal
	}
];
