<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface MasonryItem {
		imageSrc?: string;
		imageAlt?: string;
		title: string;
		description: string;
		linkHref?: string;
	}

	interface MasonryGridProps {
		title?: string;
		description?: string;
		items?: MasonryItem[];
	}

	const DEFAULTS = getTemplateDefaults('masonry-grid') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		items = DEFAULTS.items || []
	}: MasonryGridProps = $props();
</script>

<!-- Masonry -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>
	{/if}

	<div class="columns-1 gap-6 sm:columns-2 lg:columns-3">
		{#each items as item}
			<a
				class="group mb-6 block break-inside-avoid"
				href={item.linkHref || '#'}
			>
				<Card class="overflow-hidden shadow-sm transition group-hover:shadow-lg">
					{#if item.imageSrc}
						<div class="overflow-hidden">
							<img
								class="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
								src={item.imageSrc}
								alt={item.imageAlt}
							/>
						</div>
					{/if}
					<CardContent class="p-4">
						<h3 class="mb-2 text-lg font-semibold text-gray-800 group-hover:text-primary dark:text-primary-foreground">
							{item.title}
						</h3>
						<p class="text-sm text-muted-foreground">
							{item.description}
						</p>
					</CardContent>
				</Card>
			</a>
		{/each}
	</div>
</div>
<!-- End Masonry -->

