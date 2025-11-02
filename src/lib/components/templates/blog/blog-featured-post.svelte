<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BlogPost {
		imageSrc: string;
		imageAlt: string;
		category: string;
		title: string;
		excerpt: string;
		author: {
			name: string;
			avatarUrl: string;
			avatarFallback: string;
		};
		date: string;
		readTime?: string;
		linkHref: string;
	}

	interface BlogFeaturedPostProps {
		featuredPost?: BlogPost;
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-featured-post') || {};

	let {
		featuredPost = DEFAULTS.featuredPost,
		posts = DEFAULTS.posts || []
	}: BlogFeaturedPostProps = $props();
</script>

<!-- Blog Section -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 lg:grid-cols-2 lg:gap-y-16">
		<!-- Featured Post -->
		{#if featuredPost}
			<a class="group block rounded-xl lg:col-span-2" href={featuredPost.linkHref}>
				<div class="grid gap-6 sm:grid-cols-2 sm:items-center">
					<div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-xl">
						<img
							class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={featuredPost.imageSrc}
							alt={featuredPost.imageAlt}
						/>
					</div>
					<div>
						<Badge variant="default" class="mb-3">
							{featuredPost.category}
						</Badge>
						<h2 class="text-3xl font-bold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{featuredPost.title}
						</h2>
						<p class="mt-3 text-muted-foreground">
							{featuredPost.excerpt}
						</p>
						<div class="mt-5 flex items-center gap-x-3">
							<Avatar class="size-10">
								<AvatarImage src={featuredPost.author.avatarUrl} alt={featuredPost.author.name} />
								<AvatarFallback>{featuredPost.author.avatarFallback}</AvatarFallback>
							</Avatar>
							<div>
								<h5 class="text-sm text-foreground">
									{featuredPost.author.name}
								</h5>
								<p class="text-xs text-muted-foreground">
									{featuredPost.date}
									{#if featuredPost.readTime}· {featuredPost.readTime}{/if}
								</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/if}
		<!-- End Featured Post -->

		<!-- Regular Posts -->
		{#each posts as post}
			<a class="group block" href={post.linkHref}>
				<Card class="h-full shadow-sm transition group-hover:shadow-md">
					<div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-t-xl">
						<img
							class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={post.imageSrc}
							alt={post.imageAlt}
						/>
					</div>
					<CardContent class="p-4 md:p-6">
						<Badge variant="secondary" class="mb-2">
							{post.category}
						</Badge>
						<h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{post.title}
						</h3>
						<p class="mt-2 text-muted-foreground">
							{post.excerpt}
						</p>
						<div class="mt-4 flex items-center gap-x-3">
							<Avatar class="size-8">
								<AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
								<AvatarFallback>{post.author.avatarFallback}</AvatarFallback>
							</Avatar>
							<div>
								<h5 class="text-sm text-foreground">
									{post.author.name}
								</h5>
								<p class="text-xs text-muted-foreground">
									{post.date}
									{#if post.readTime}· {post.readTime}{/if}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</a>
		{/each}
		<!-- End Regular Posts -->
	</div>
</div>
<!-- End Blog Section -->

