import { FileText } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import blog components
import BlogGridWithSidebar from './blog-grid-with-sidebar.svelte';
import BlogGridSimple from './blog-grid-simple.svelte';
import BlogFeaturedPost from './blog-featured-post.svelte';
import BlogHorizontalCards from './blog-horizontal-cards.svelte';
import BlogListView from './blog-list-view.svelte';
import BlogMasonryGrid from './blog-masonry-grid.svelte';
import BlogWithDateBadge from './blog-with-date-badge.svelte';
import BlogCardsCompact from './blog-cards-compact.svelte';
import BlogTimeline from './blog-timeline.svelte';
import BlogWithSidebarList from './blog-with-sidebar-list.svelte';
import BlogMinimalGrid from './blog-minimal-grid.svelte';
import BlogLargeFeatured from './blog-large-featured.svelte';

/**
 * Blog component mapping for dynamic component loading
 */
export const BLOG_COMPONENTS: Record<string, TemplateComponent> = {
	'blog-grid-with-sidebar': BlogGridWithSidebar as TemplateComponent,
	'blog-grid-simple': BlogGridSimple as TemplateComponent,
	'blog-featured-post': BlogFeaturedPost as TemplateComponent,
	'blog-horizontal-cards': BlogHorizontalCards as TemplateComponent,
	'blog-list-view': BlogListView as TemplateComponent,
	'blog-masonry-grid': BlogMasonryGrid as TemplateComponent,
	'blog-with-date-badge': BlogWithDateBadge as TemplateComponent,
	'blog-cards-compact': BlogCardsCompact as TemplateComponent,
	'blog-timeline': BlogTimeline as TemplateComponent,
	'blog-with-sidebar-list': BlogWithSidebarList as TemplateComponent,
	'blog-minimal-grid': BlogMinimalGrid as TemplateComponent,
	'blog-large-featured': BlogLargeFeatured as TemplateComponent
};

/**
 * Blog templates registry with metadata and default props
 */
export const BLOG_REGISTRY: Template[] = [
	{
		id: 'blog-grid-with-sidebar',
		name: 'Blog Grid with Sidebar',
		description: 'Blog grid layout with sidebar navigation',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-grid-with-sidebar.png',
		thumbnailImage: '/templates/thumbnails/blog-grid-with-sidebar.jpg',
		tags: ['blog', 'grid', 'sidebar', 'articles'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Sidebar Navigation', 'Grid Layout'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Pages', 'Article Lists', 'Content Hubs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: [],
			sidebarTitle: 'Recent Posts',
			sidebarItems: []
		},
		template: BlogGridWithSidebar
	},
	{
		id: 'blog-grid-simple',
		name: 'Blog Grid Simple',
		description: 'Simple blog grid with badges and dates',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-grid-simple.png',
		thumbnailImage: '/templates/thumbnails/blog-grid-simple.jpg',
		tags: ['blog', 'grid', 'simple', 'badges'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Badge Support', 'Hover Effects'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Sections', 'Article Grids', 'News Lists'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Blog',
			description: 'Latest articles',
			posts: []
		},
		template: BlogGridSimple
	},
	{
		id: 'blog-featured-post',
		name: 'Blog Featured Post',
		description: 'Featured post with smaller posts grid',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-featured-post.png',
		thumbnailImage: '/templates/thumbnails/blog-featured-post.jpg',
		tags: ['blog', 'featured', 'grid', 'author'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Featured Post',
			'Author Info',
			'Grid Layout'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Homepages', 'Article Showcases', 'Content Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			featuredPost: undefined,
			posts: []
		},
		template: BlogFeaturedPost
	},
	{
		id: 'blog-horizontal-cards',
		name: 'Blog Horizontal Cards',
		description: 'Horizontal blog cards with images',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-horizontal-cards.png',
		thumbnailImage: '/templates/thumbnails/blog-horizontal-cards.jpg',
		tags: ['blog', 'horizontal', 'cards', 'images'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Horizontal Layout', 'Image Cards'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Lists', 'Article Cards', 'News Sections'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: []
		},
		template: BlogHorizontalCards
	},
	{
		id: 'blog-list-view',
		name: 'Blog List View',
		description: 'Vertical list of blog posts with author info',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-list-view.png',
		thumbnailImage: '/templates/thumbnails/blog-list-view.jpg',
		tags: ['blog', 'list', 'author', 'vertical'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'List Layout', 'Author Info'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Archives', 'Article Lists', 'News Feeds'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: []
		},
		template: BlogListView
	},
	{
		id: 'blog-masonry-grid',
		name: 'Blog Masonry Grid',
		description: 'Masonry-style blog grid layout',
		icon: FileText,
		category: 'blog',
		variant: 'masonry',
		previewImage: '/templates/blog-masonry-grid.png',
		thumbnailImage: '/templates/thumbnails/blog-masonry-grid.jpg',
		tags: ['blog', 'masonry', 'grid', 'columns'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Masonry Layout', 'Column Layout'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Galleries', 'Article Showcases', 'Portfolio Blogs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: []
		},
		template: BlogMasonryGrid
	},
	{
		id: 'blog-with-date-badge',
		name: 'Blog with Date Badge',
		description: 'Blog cards with prominent date badges',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-with-date-badge.png',
		thumbnailImage: '/templates/thumbnails/blog-with-date-badge.jpg',
		tags: ['blog', 'date', 'badge', 'cards'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Date Badges', 'Card Layout'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Event Blogs', 'News Cards', 'Timeline Posts'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: []
		},
		template: BlogWithDateBadge
	},
	{
		id: 'blog-cards-compact',
		name: 'Blog Cards Compact',
		description: 'Compact blog cards in dense grid',
		icon: FileText,
		category: 'blog',
		variant: 'compact',
		previewImage: '/templates/blog-cards-compact.png',
		thumbnailImage: '/templates/thumbnails/blog-cards-compact.jpg',
		tags: ['blog', 'compact', 'dense', 'grid'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Compact Layout', 'Dense Grid'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Archives', 'Article Grids', 'News Sections'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: []
		},
		template: BlogCardsCompact
	},
	{
		id: 'blog-timeline',
		name: 'Blog Timeline',
		description: 'Timeline-style blog list view',
		icon: FileText,
		category: 'blog',
		variant: 'timeline',
		previewImage: '/templates/blog-timeline.png',
		thumbnailImage: '/templates/thumbnails/blog-timeline.jpg',
		tags: ['blog', 'timeline', 'list', 'vertical'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Timeline Layout', 'List View'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Archives', 'Article Timelines', 'News Feeds'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: []
		},
		template: BlogTimeline
	},
	{
		id: 'blog-with-sidebar-list',
		name: 'Blog with Sidebar List',
		description: 'Blog grid with sidebar post list',
		icon: FileText,
		category: 'blog',
		variant: 'default',
		previewImage: '/templates/blog-with-sidebar-list.png',
		thumbnailImage: '/templates/thumbnails/blog-with-sidebar-list.jpg',
		tags: ['blog', 'sidebar', 'list', 'grid'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Sidebar List',
			'Grid Layout',
			'Author Info'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Pages', 'Article Sections', 'Content Hubs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			posts: [],
			sidebarTitle: 'Popular Posts',
			sidebarPosts: []
		},
		template: BlogWithSidebarList
	},
	{
		id: 'blog-minimal-grid',
		name: 'Blog Minimal Grid',
		description: 'Minimal blog grid with borders',
		icon: FileText,
		category: 'blog',
		variant: 'minimal',
		previewImage: '/templates/blog-minimal-grid.png',
		thumbnailImage: '/templates/thumbnails/blog-minimal-grid.jpg',
		tags: ['blog', 'minimal', 'grid', 'borders'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Minimal Design', 'Border Cards'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Clean Blog Sections', 'Article Grids', 'Minimal Designs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Blog',
			posts: []
		},
		template: BlogMinimalGrid
	},
	{
		id: 'blog-large-featured',
		name: 'Blog Large Featured',
		description: 'Large featured post with side posts',
		icon: FileText,
		category: 'blog',
		variant: 'featured',
		previewImage: '/templates/blog-large-featured.png',
		thumbnailImage: '/templates/thumbnails/blog-large-featured.jpg',
		tags: ['blog', 'featured', 'large', 'sidebar'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Large Featured',
			'Side Posts',
			'Author Info'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Homepages', 'Featured Articles', 'Content Showcases'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			featuredPost: undefined,
			posts: []
		},
		template: BlogLargeFeatured
	}
];

