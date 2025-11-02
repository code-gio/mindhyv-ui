import { FileText } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import invoice components
import InvoiceSimple from './invoice-simple.svelte';
import InvoiceDetailed from './invoice-detailed.svelte';
import InvoiceMinimal from './invoice-minimal.svelte';
import InvoiceWithPayment from './invoice-with-payment.svelte';
import InvoiceProfessional from './invoice-professional.svelte';

/**
 * Invoice component mapping for dynamic component loading
 */
export const INVOICE_COMPONENTS: Record<string, TemplateComponent> = {
	'invoice-simple': InvoiceSimple as TemplateComponent,
	'invoice-detailed': InvoiceDetailed as TemplateComponent,
	'invoice-minimal': InvoiceMinimal as TemplateComponent,
	'invoice-with-payment': InvoiceWithPayment as TemplateComponent,
	'invoice-professional': InvoiceProfessional as TemplateComponent
};

/**
 * Invoice templates registry with metadata and default props
 */
export const INVOICE_REGISTRY: Template[] = [
	{
		id: 'invoice-simple',
		name: 'Invoice Simple',
		description: 'Simple invoice template with basic information',
		icon: FileText,
		category: 'invoice',
		variant: 'simple',
		previewImage: '/templates/invoice-simple.png',
		thumbnailImage: '/templates/thumbnails/invoice-simple.jpg',
		tags: ['invoice', 'billing', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Print/Download',
			'Item List',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Billing', 'Invoicing', 'Payment Requests'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			invoiceNumber: '00001',
			date: new Date().toLocaleDateString(),
			dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
			from: { name: '', address: '', email: '' },
			to: { name: '', address: '', email: '' },
			items: [],
			subtotal: 0,
			tax: 0,
			total: 0
		},
		template: InvoiceSimple
	},
	{
		id: 'invoice-detailed',
		name: 'Invoice Detailed',
		description: 'Detailed invoice with full address and status',
		icon: FileText,
		category: 'invoice',
		variant: 'detailed',
		previewImage: '/templates/invoice-detailed.png',
		thumbnailImage: '/templates/thumbnails/invoice-detailed.jpg',
		tags: ['invoice', 'detailed', 'professional'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Status Badge',
			'Full Address',
			'Discount Support',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Professional Invoicing', 'B2B Billing', 'Detailed Records'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			logo: '',
			invoiceNumber: '00001',
			status: 'pending',
			date: new Date().toLocaleDateString(),
			dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
			from: { name: '', address: '', city: '', zip: '', email: '', phone: '' },
			to: { name: '', address: '', city: '', zip: '', email: '', phone: '' },
			items: [],
			subtotal: 0,
			tax: 0,
			discount: 0,
			total: 0,
			notes: ''
		},
		template: InvoiceDetailed
	},
	{
		id: 'invoice-minimal',
		name: 'Invoice Minimal',
		description: 'Minimal invoice design',
		icon: FileText,
		category: 'invoice',
		variant: 'minimal',
		previewImage: '/templates/invoice-minimal.png',
		thumbnailImage: '/templates/thumbnails/invoice-minimal.jpg',
		tags: ['invoice', 'minimal', 'clean'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Download Option',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Billing', 'Quick Invoices', 'Freelance Work'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			invoiceNumber: '00001',
			date: new Date().toLocaleDateString(),
			from: { name: '', email: '' },
			to: { name: '', email: '' },
			items: [],
			total: 0
		},
		template: InvoiceMinimal
	},
	{
		id: 'invoice-with-payment',
		name: 'Invoice with Payment',
		description: 'Invoice with integrated payment button',
		icon: FileText,
		category: 'invoice',
		variant: 'payment',
		previewImage: '/templates/invoice-with-payment.png',
		thumbnailImage: '/templates/thumbnails/invoice-with-payment.jpg',
		tags: ['invoice', 'payment', 'billing'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Payment CTA',
			'Status Badge',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Online Payments', 'E-commerce', 'SaaS Billing'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			invoiceNumber: '00001',
			status: 'pending',
			date: new Date().toLocaleDateString(),
			dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
			from: { name: '', address: '' },
			to: { name: '', address: '' },
			items: [],
			subtotal: 0,
			tax: 0,
			total: 0,
			paymentButtonText: 'Pay Now'
		},
		template: InvoiceWithPayment
	},
	{
		id: 'invoice-professional',
		name: 'Invoice Professional',
		description: 'Professional invoice with full branding',
		icon: FileText,
		category: 'invoice',
		variant: 'professional',
		previewImage: '/templates/invoice-professional.png',
		thumbnailImage: '/templates/thumbnails/invoice-professional.jpg',
		tags: ['invoice', 'professional', 'branding'],
		isPro: false,
		complexity: 'complex',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Logo Support',
			'Full Address',
			'Payment Terms',
			'Multiple Actions',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Corporate Billing', 'Professional Services', 'B2B Invoicing'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			logo: '',
			companyName: 'Company Name',
			invoiceNumber: '00001',
			status: 'pending',
			issueDate: new Date().toLocaleDateString(),
			dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
			from: { name: '', address: '', city: '', zip: '', country: '', email: '', phone: '', website: '' },
			to: { name: '', address: '', city: '', zip: '', country: '', email: '', phone: '' },
			items: [],
			subtotal: 0,
			tax: 0,
			shipping: 0,
			total: 0,
			paymentTerms: 'Payment due within 30 days',
			notes: ''
		},
		template: InvoiceProfessional
	}
];

