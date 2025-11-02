import { Layers } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import ModalSimple from './modal-simple.svelte';
import AlertSuccess from './alert-success.svelte';
import ToastNotification from './toast-notification.svelte';
import CookieBanner from './cookie-banner.svelte';
import LoadingSpinner from './loading-spinner.svelte';
import SkeletonCard from './skeleton-card.svelte';

export const OVERLAYS_COMPONENTS: Record<string, TemplateComponent> = {
	'modal-simple': ModalSimple as TemplateComponent,
	'alert-success': AlertSuccess as TemplateComponent,
	'toast-notification': ToastNotification as TemplateComponent,
	'cookie-banner': CookieBanner as TemplateComponent,
	'loading-spinner': LoadingSpinner as TemplateComponent,
	'skeleton-card': SkeletonCard as TemplateComponent
};

export const OVERLAYS_REGISTRY: Template[] = [
	{
		id: 'modal-simple',
		name: 'Modal Simple',
		description: 'Simple modal dialog',
		icon: Layers,
		category: 'overlays',
		variant: 'modal',
		previewImage: '/templates/modal-simple.png',
		thumbnailImage: '/templates/thumbnails/modal-simple.jpg',
		tags: ['modal', 'dialog', 'overlay'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Dialog', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Confirmations', 'Forms', 'Dialogs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { open: false },
		template: ModalSimple
	},
	{
		id: 'alert-success',
		name: 'Alert Success',
		description: 'Success alert notification',
		icon: Layers,
		category: 'overlays',
		variant: 'alert',
		previewImage: '/templates/alert-success.png',
		thumbnailImage: '/templates/thumbnails/alert-success.jpg',
		tags: ['alert', 'success', 'notification'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Alert', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Success Messages', 'Notifications', 'Feedback'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { title: 'Success' },
		template: AlertSuccess
	},
	{
		id: 'toast-notification',
		name: 'Toast Notification',
		description: 'Toast notification message',
		icon: Layers,
		category: 'overlays',
		variant: 'toast',
		previewImage: '/templates/toast-notification.png',
		thumbnailImage: '/templates/thumbnails/toast-notification.jpg',
		tags: ['toast', 'notification', 'alert'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Toast', 'Auto-dismiss', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Notifications', 'Alerts', 'Messages'],
		dependencies: ['lucide-svelte'],
		defaultProps: { message: 'Notification', visible: false },
		template: ToastNotification
	},
	{
		id: 'cookie-banner',
		name: 'Cookie Banner',
		description: 'Cookie consent banner',
		icon: Layers,
		category: 'overlays',
		variant: 'banner',
		previewImage: '/templates/cookie-banner.png',
		thumbnailImage: '/templates/thumbnails/cookie-banner.jpg',
		tags: ['cookie', 'consent', 'gdpr'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'GDPR Compliant', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Cookie Consent', 'GDPR', 'Privacy'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { visible: false },
		template: CookieBanner
	},
	{
		id: 'loading-spinner',
		name: 'Loading Spinner',
		description: 'Loading spinner indicator',
		icon: Layers,
		category: 'overlays',
		variant: 'loading',
		previewImage: '/templates/loading-spinner.png',
		thumbnailImage: '/templates/thumbnails/loading-spinner.jpg',
		tags: ['loading', 'spinner', 'indicator'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Animation', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Loading States', 'Async Operations', 'Data Fetching'],
		dependencies: [],
		defaultProps: {},
		template: LoadingSpinner
	},
	{
		id: 'skeleton-card',
		name: 'Skeleton Card',
		description: 'Skeleton loading placeholder',
		icon: Layers,
		category: 'overlays',
		variant: 'skeleton',
		previewImage: '/templates/skeleton-card.png',
		thumbnailImage: '/templates/thumbnails/skeleton-card.jpg',
		tags: ['skeleton', 'loading', 'placeholder'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Skeleton', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Loading States', 'Content Placeholder', 'Data Loading'],
		dependencies: ['shadcn-svelte'],
		defaultProps: { count: 3 },
		template: SkeletonCard
	}
];

