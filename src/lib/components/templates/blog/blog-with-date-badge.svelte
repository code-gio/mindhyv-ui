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
		day: string;
		month: string;
		linkHref: string;
	}

	interface BlogWithDateBadgeProps {
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-with-date-badge') || {};

	let { posts = DEFAULTS.posts || [] }: BlogWithDateBadgeProps = $props();
</script>

<!-- Blog Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<a class="group relative block overflow-hidden rounded-xl" href={post.linkHref}>
				<Card class="h-full shadow-sm transition group-hover:shadow-lg">
					<div class="relative overflow-hidden rounded-t-xl">
						<img
							class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={post.imageSrc}
							alt={post.imageAlt}
						/>
						<div
							class="absolute end-4 top-4 rounded-lg bg-white px-3 py-2 text-center shadow-md dark:bg-primary"
						>
							<span class="block text-xs font-semibold uppercase leading-none text-foreground">
								{post.month}
							</span>
							<span class="mt-1 block text-2xl font-semibold text-foreground">
								{post.day}
							</span>
						</div>
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
						<p class="mt-3 text-sm text-muted-foreground">
							{post.date}
						</p>
					</CardContent>
				</Card>
			</a>
		{/each}
	</div>
</div>
<!-- End Blog Grid -->

