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

	interface BlogTimelineProps {
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-timeline') || {};

	let { posts = DEFAULTS.posts || [] }: BlogTimelineProps = $props();
</script>

<!-- Blog Timeline -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="space-y-8">
		{#each posts as post}
			<a class="group block" href={post.linkHref}>
				<div class="flex gap-4">
					<div class="shrink-0">
						<div class="aspect-square h-24 overflow-hidden rounded-lg">
							<img
								class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
								src={post.imageSrc}
								alt={post.imageAlt}
							/>
						</div>
					</div>
					<div class="grow">
						<Badge variant="secondary" class="mb-2 text-xs">
							{post.category}
						</Badge>
						<h3 class="text-lg font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{post.title}
						</h3>
						<p class="mt-1 text-sm text-muted-foreground">
							{post.excerpt}
						</p>
						<p class="mt-2 text-xs text-muted-foreground">
							{post.date}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
<!-- End Blog Timeline -->

