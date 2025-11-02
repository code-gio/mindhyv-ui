import { User } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import profile components
import ProfileCard from './profile-card.svelte';
import ProfileSimple from './profile-simple.svelte';

/**
 * Profiles component mapping for dynamic component loading
 */
export const PROFILES_COMPONENTS: Record<string, TemplateComponent> = {
	'profile-card': ProfileCard as TemplateComponent,
	'profile-simple': ProfileSimple as TemplateComponent
};

/**
 * Profiles templates registry with metadata and default props
 */
export const PROFILES_REGISTRY: Template[] = [
	{
		id: 'profile-card',
		name: 'Profile Card',
		description: 'User profile card with cover image and stats',
		icon: User,
		category: 'profiles',
		variant: 'card',
		previewImage: '/templates/profile-card.png',
		thumbnailImage: '/templates/thumbnails/profile-card.jpg',
		tags: ['profile', 'user', 'card', 'social'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Cover Image',
			'Stats Display',
			'Social Links',
			'Badges',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Profiles', 'Team Members', 'Social Pages'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			name: 'John Doe',
			title: 'Product Designer',
			bio: 'Passionate about creating beautiful experiences',
			avatarUrl: '',
			avatarFallback: 'JD',
			coverImage: '',
			badges: [],
			socialLinks: [],
			stats: []
		},
		template: ProfileCard
	},
	{
		id: 'profile-simple',
		name: 'Profile Simple',
		description: 'Simple centered user profile',
		icon: User,
		category: 'profiles',
		variant: 'simple',
		previewImage: '/templates/profile-simple.png',
		thumbnailImage: '/templates/thumbnails/profile-simple.jpg',
		tags: ['profile', 'user', 'simple', 'centered'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Social Links',
			'Action Buttons',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Profiles', 'About Pages', 'Author Bios'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			name: 'John Doe',
			title: 'Product Designer',
			bio: 'Passionate about creating beautiful experiences',
			avatarUrl: '',
			avatarFallback: 'JD',
			socialLinks: [],
			primaryAction: { text: 'Follow', href: '#' },
			secondaryAction: { text: 'Message', href: '#' }
		},
		template: ProfileSimple
	}
];

