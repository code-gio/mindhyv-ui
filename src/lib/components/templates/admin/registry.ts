import { Shield } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import AdminDashboard from './admin-dashboard.svelte';

export const ADMIN_COMPONENTS: Record<string, TemplateComponent> = {
	'admin-dashboard': AdminDashboard as TemplateComponent
};

export const ADMIN_REGISTRY: Template[] = [
	{
		id: 'admin-dashboard',
		name: 'Admin Dashboard',
		description: 'Complete admin dashboard layout',
		icon: Shield,
		category: 'admin',
		variant: 'dashboard',
		previewImage: '/templates/admin-dashboard.png',
		thumbnailImage: '/templates/thumbnails/admin-dashboard.jpg',
		tags: ['admin', 'dashboard', 'management'],
		isPro: false,
		complexity: 'complex',
		features: ['Responsive Design', 'Dark Mode Support', 'Sidebar Nav', 'Stats Widgets', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Admin Panels', 'Management Dashboards', 'Backend Interfaces'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { stats: [] },
		template: AdminDashboard
	}
];

