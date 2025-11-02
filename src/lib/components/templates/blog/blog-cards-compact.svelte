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
		linkHref: string;
	}

	interface BlogCardsCompactProps {
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-cards-compact') || {};

	let { posts = DEFAULTS.posts || [] }: BlogCardsCompactProps = $props();
</script>

<!-- Blog Cards -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
					<CardContent class="p-3">
						<Badge variant="secondary" class="mb-2 text-xs">
							{post.category}
						</Badge>
						<h3 class="text-sm font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{post.title}
						</h3>
					</CardContent>
				</Card>
			</a>
		{/each}
	</div>
</div>
<!-- End Blog Cards -->

