<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BlogPost {
		imageSrc: string;
		imageAlt: string;
		category: string;
		title: string;
		excerpt: string;
		date: string;
		linkHref: string;
	}

	interface BlogMasonryGridProps {
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-masonry-grid') || {};

	let { posts = DEFAULTS.posts || [] }: BlogMasonryGridProps = $props();
</script>

<!-- Blog Masonry -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="columns-1 gap-6 sm:columns-2 lg:columns-3">
		{#each posts as post}
			<a class="group mb-6 block" href={post.linkHref}>
				<Card class="h-full break-inside-avoid shadow-sm transition group-hover:shadow-lg">
					<div class="overflow-hidden rounded-t-xl">
						<img
							class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={post.imageSrc}
							alt={post.imageAlt}
						/>
					</div>
					<CardContent class="p-4">
						<Badge variant="secondary" class="mb-2">
							{post.category}
						</Badge>
						<h3 class="text-lg font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{post.title}
						</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							{post.excerpt}
						</p>
						<p class="mt-3 text-xs text-muted-foreground">
							{post.date}
						</p>
					</CardContent>
				</Card>
			</a>
		{/each}
	</div>
</div>
<!-- End Blog Masonry -->

