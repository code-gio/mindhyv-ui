import { FileText } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import article components
import ArticleSimple from './article-simple.svelte';
import ArticleWithSidebar from './article-with-sidebar.svelte';

/**
 * Articles component mapping for dynamic component loading
 */
export const ARTICLES_COMPONENTS: Record<string, TemplateComponent> = {
	'article-simple': ArticleSimple as TemplateComponent,
	'article-with-sidebar': ArticleWithSidebar as TemplateComponent
};

/**
 * Articles templates registry with metadata and default props
 */
export const ARTICLES_REGISTRY: Template[] = [
	{
		id: 'article-simple',
		name: 'Article Simple',
		description: 'Simple article page with centered content',
		icon: FileText,
		category: 'articles',
		variant: 'simple',
		previewImage: '/templates/article-simple.png',
		thumbnailImage: '/templates/thumbnails/article-simple.jpg',
		tags: ['article', 'blog', 'post', 'content'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Centered Layout',
			'Author Info',
			'Cover Image',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Posts', 'Articles', 'News Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			category: 'Technology',
			title: 'Article Title',
			subtitle: 'A brief description of the article',
			author: {
				name: 'Author Name',
				avatarUrl: '',
				avatarFallback: 'AN'
			},
			date: 'Jan 1, 2025',
			readTime: '5 min read',
			coverImage: '',
			coverImageAlt: 'Article cover',
			content: '<p>Article content goes here...</p>'
		},
		template: ArticleSimple
	},
	{
		id: 'article-with-sidebar',
		name: 'Article with Sidebar',
		description: 'Article page with sidebar for related content',
		icon: FileText,
		category: 'articles',
		variant: 'sidebar',
		previewImage: '/templates/article-with-sidebar.png',
		thumbnailImage: '/templates/thumbnails/article-with-sidebar.jpg',
		tags: ['article', 'blog', 'sidebar', 'related'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Sidebar Layout',
			'Author Info',
			'Related Posts',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Posts', 'Articles', 'News Pages', 'Content Sites'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			category: 'Technology',
			title: 'Article Title',
			subtitle: 'A brief description of the article',
			author: {
				name: 'Author Name',
				avatarUrl: '',
				avatarFallback: 'AN',
				bio: 'Author bio'
			},
			date: 'Jan 1, 2025',
			readTime: '5 min read',
			coverImage: '',
			coverImageAlt: 'Article cover',
			content: '<p>Article content goes here...</p>',
			relatedPosts: []
		},
		template: ArticleWithSidebar
	}
];

