import { FileInput } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import FormSingleColumn from './form-single-column.svelte';
import FormTwoColumn from './form-two-column.svelte';
import FormSplit from './form-split.svelte';
import FormWizard from './form-wizard.svelte';

export const FORM_LAYOUTS_COMPONENTS: Record<string, TemplateComponent> = {
	'form-single-column': FormSingleColumn as TemplateComponent,
	'form-two-column': FormTwoColumn as TemplateComponent,
	'form-split': FormSplit as TemplateComponent,
	'form-wizard': FormWizard as TemplateComponent
};

export const FORM_LAYOUTS_REGISTRY: Template[] = [
	{
		id: 'form-single-column',
		name: 'Form Single Column',
		description: 'Single column form layout',
		icon: FileInput,
		category: 'form-layouts',
		variant: 'single',
		previewImage: '/templates/form-single-column.png',
		thumbnailImage: '/templates/thumbnails/form-single-column.jpg',
		tags: ['form', 'layout', 'single-column'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Form Validation', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Contact Forms', 'Sign Up', 'Data Entry'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Form' },
		template: FormSingleColumn
	},
	{
		id: 'form-two-column',
		name: 'Form Two Column',
		description: 'Two column form layout',
		icon: FileInput,
		category: 'form-layouts',
		variant: 'two-column',
		previewImage: '/templates/form-two-column.png',
		thumbnailImage: '/templates/thumbnails/form-two-column.jpg',
		tags: ['form', 'layout', 'two-column'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Grid Layout', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Registration Forms', 'Checkout', 'Profile Forms'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Form' },
		template: FormTwoColumn
	},
	{
		id: 'form-split',
		name: 'Form Split',
		description: 'Split layout with form and content',
		icon: FileInput,
		category: 'form-layouts',
		variant: 'split',
		previewImage: '/templates/form-split.png',
		thumbnailImage: '/templates/thumbnails/form-split.jpg',
		tags: ['form', 'layout', 'split'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Split Layout', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Contact Pages', 'Lead Gen', 'Landing Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Contact Us' },
		template: FormSplit
	},
	{
		id: 'form-wizard',
		name: 'Form Wizard',
		description: 'Multi-step wizard form',
		icon: FileInput,
		category: 'form-layouts',
		variant: 'wizard',
		previewImage: '/templates/form-wizard.png',
		thumbnailImage: '/templates/thumbnails/form-wizard.jpg',
		tags: ['form', 'wizard', 'multi-step'],
		isPro: false,
		complexity: 'complex',
		features: ['Responsive Design', 'Dark Mode Support', 'Step Progress', 'Navigation', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Multi-Step Forms', 'Onboarding', 'Complex Forms'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { title: 'Multi-Step Form' },
		template: FormWizard
	}
];

