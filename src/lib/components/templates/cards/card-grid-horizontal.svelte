<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CardItem {
		imageSrc: string;
		imageAlt: string;
		category: string;
		title: string;
		description: string;
		linkText: string;
		linkHref: string;
	}

	interface CardGridHorizontalProps {
		cards?: CardItem[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-horizontal') || {};

	let { cards = DEFAULTS.cards || [] }: CardGridHorizontalProps = $props();
</script>

<!-- Card Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 lg:grid-cols-2">
		{#each cards as card}
			<!-- Card -->
			<a
				class="group block rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-700 dark:bg-primary"
				href={card.linkHref}
			>
				<div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
					<div class="shrink-0 sm:w-56">
						<img
							class="h-full w-full rounded-t-xl object-cover sm:rounded-s-xl sm:rounded-se-none"
							src={card.imageSrc}
							alt={card.imageAlt}
						/>
					</div>
					<div class="grow p-4 sm:p-6">
						<span class="mb-1 block text-xs font-semibold uppercase text-primary">
							{card.category}
						</span>
						<h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{card.title}
						</h3>
						<p class="mt-2 text-muted-foreground">
							{card.description}
						</p>
						<p class="mt-4 text-sm font-semibold text-primary">
							{card.linkText}
						</p>
					</div>
				</div>
			</a>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Grid -->

