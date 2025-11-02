import { Users } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import team components
import TeamGridWithSocials from './team-grid-with-socials.svelte';
import TeamCards from './team-cards.svelte';
import TeamCircular from './team-circular.svelte';
import TeamMinimal from './team-minimal.svelte';

/**
 * Team component mapping for dynamic component loading
 */
export const TEAM_COMPONENTS: Record<string, TemplateComponent> = {
	'team-grid-with-socials': TeamGridWithSocials as TemplateComponent,
	'team-cards': TeamCards as TemplateComponent,
	'team-circular': TeamCircular as TemplateComponent,
	'team-minimal': TeamMinimal as TemplateComponent
};

/**
 * Team templates registry with metadata and default props
 */
export const TEAM_REGISTRY: Template[] = [
	{
		id: 'team-grid-with-socials',
		name: 'Team Grid with Socials',
		description: 'Team member grid with social media links',
		icon: Users,
		category: 'team',
		variant: 'default',
		previewImage: '/templates/team-grid-with-socials.png',
		thumbnailImage: '/templates/thumbnails/team-grid-with-socials.jpg',
		tags: ['team', 'grid', 'social', 'profiles'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Social Links',
			'Grid Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['About Pages', 'Team Pages', 'Company Profiles'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Our Team',
			description: 'Meet the people behind our success',
			members: []
		},
		template: TeamGridWithSocials
	},
	{
		id: 'team-cards',
		name: 'Team Cards',
		description: 'Team member cards with images and role descriptions',
		icon: Users,
		category: 'team',
		variant: 'default',
		previewImage: '/templates/team-cards.png',
		thumbnailImage: '/templates/thumbnails/team-cards.jpg',
		tags: ['team', 'cards', 'profiles', 'bios'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Card Layout',
			'Profile Images',
			'Role Descriptions',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['About Pages', 'Team Pages', 'Company Profiles'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Meet our team',
			description: 'Passionate professionals dedicated to excellence',
			members: []
		},
		template: TeamCards
	},
	{
		id: 'team-circular',
		name: 'Team Circular',
		description: 'Team section with circular profile photos and names',
		icon: Users,
		category: 'team',
		variant: 'default',
		previewImage: '/templates/team-circular.png',
		thumbnailImage: '/templates/thumbnails/team-circular.jpg',
		tags: ['team', 'circular', 'photos', 'minimal'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Circular Photos',
			'Clean Layout',
			'Name & Title',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Team Pages', 'About Sections', 'Staff Directory'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Our Leadership',
			members: []
		},
		template: TeamCircular
	},
	{
		id: 'team-minimal',
		name: 'Team Minimal',
		description: 'Minimal team grid with essential information',
		icon: Users,
		category: 'team',
		variant: 'minimal',
		previewImage: '/templates/team-minimal.png',
		thumbnailImage: '/templates/thumbnails/team-minimal.jpg',
		tags: ['team', 'minimal', 'grid', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Minimal Design',
			'Grid Layout',
			'Essential Info Only',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Team Pages', 'Compact Layouts', 'Minimal About Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Team',
			members: []
		},
		template: TeamMinimal
	}
];

