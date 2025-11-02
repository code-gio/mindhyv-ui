<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface RelatedPost {
		title: string;
		href: string;
		date: string;
	}

	interface ArticleWithSidebarProps {
		category?: string;
		title?: string;
		subtitle?: string;
		author?: {
			name: string;
			avatarUrl: string;
			avatarFallback: string;
			bio?: string;
		};
		date?: string;
		readTime?: string;
		coverImage?: string;
		coverImageAlt?: string;
		content?: string;
		relatedPosts?: RelatedPost[];
	}

	const DEFAULTS = getTemplateDefaults('article-with-sidebar') || {};

	let {
		category = DEFAULTS.category,
		title = DEFAULTS.title,
		subtitle = DEFAULTS.subtitle,
		author = DEFAULTS.author,
		date = DEFAULTS.date,
		readTime = DEFAULTS.readTime,
		coverImage = DEFAULTS.coverImage,
		coverImageAlt = DEFAULTS.coverImageAlt,
		content = DEFAULTS.content,
		relatedPosts = DEFAULTS.relatedPosts || []
	}: ArticleWithSidebarProps = $props();
</script>

<!-- Article with Sidebar -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-12 lg:grid-cols-4">
		<!-- Article -->
		<div class="lg:col-span-3">
			<!-- Header -->
			<div class="mb-8">
				{#if category}
					<Badge variant="secondary" class="mb-4">
						{category}
					</Badge>
				{/if}
				<h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-primary-foreground">
					{title}
				</h1>
				{#if subtitle}
					<p class="mt-4 text-lg text-muted-foreground">
						{subtitle}
					</p>
				{/if}
			</div>

			<!-- Author -->
			{#if author}
				<div class="mb-8 flex items-center gap-x-4">
					<Avatar class="size-12">
						<AvatarImage src={author.avatarUrl} alt={author.name} />
						<AvatarFallback>{author.avatarFallback}</AvatarFallback>
					</Avatar>
					<div>
						<p class="font-semibold text-foreground">
							{author.name}
						</p>
						<p class="text-sm text-muted-foreground">
							{date}
							{#if readTime}· {readTime}{/if}
						</p>
					</div>
				</div>
			{/if}

			<!-- Cover Image -->
			{#if coverImage}
				<div class="mb-10">
					<img class="w-full rounded-xl object-cover" src={coverImage} alt={coverImageAlt} />
				</div>
			{/if}

			<!-- Content -->
			<div class="prose prose-lg max-w-none dark:prose-invert">
				{@html content}
			</div>
		</div>
		<!-- End Article -->

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<div class="sticky top-4 space-y-8">
				<!-- Author Card -->
				{#if author?.bio}
					<Card>
						<CardContent class="p-6">
							<h3 class="mb-4 font-semibold text-foreground">
								About the Author
							</h3>
							<div class="flex items-center gap-x-3">
								<Avatar>
									<AvatarImage src={author.avatarUrl} alt={author.name} />
									<AvatarFallback>{author.avatarFallback}</AvatarFallback>
								</Avatar>
								<div>
									<p class="font-medium text-foreground">
										{author.name}
									</p>
								</div>
							</div>
							<p class="mt-3 text-sm text-muted-foreground">
								{author.bio}
							</p>
						</CardContent>
					</Card>
				{/if}

				<!-- Related Posts -->
				{#if relatedPosts.length > 0}
					<Card>
						<CardContent class="p-6">
							<h3 class="mb-4 font-semibold text-foreground">
								Related Articles
							</h3>
							<div class="space-y-3">
								{#each relatedPosts as post}
									<a
										href={post.href}
										class="block text-sm text-gray-600 hover:text-primary dark:text-neutral-400"
									>
										<p class="font-medium">{post.title}</p>
										<p class="text-xs text-muted-foreground">
											{post.date}
										</p>
									</a>
								{/each}
							</div>
						</CardContent>
					</Card>
				{/if}
			</div>
		</div>
		<!-- End Sidebar -->
	</div>
</div>
<!-- End Article with Sidebar -->

