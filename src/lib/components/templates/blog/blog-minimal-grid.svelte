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

	interface BlogMinimalGridProps {
		title?: string;
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-minimal-grid') || {};

	let { title = DEFAULTS.title, posts = DEFAULTS.posts || [] }: BlogMinimalGridProps = $props();
</script>

<!-- Blog Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
		</div>
	{/if}

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<a class="group block" href={post.linkHref}>
				<Card class="h-full border transition group-hover:border-primary group-hover:shadow-md">
					<div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-t-xl">
						<img
							class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={post.imageSrc}
							alt={post.imageAlt}
						/>
					</div>
					<CardContent class="p-4">
						<Badge variant="outline" class="mb-2">
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
<!-- End Blog Grid -->

