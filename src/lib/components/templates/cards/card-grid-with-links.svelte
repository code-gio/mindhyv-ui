<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { ChevronRight } from '@lucide/svelte/icons';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CardItem {
		icon: typeof LucideIcon;
		title: string;
		description: string;
		linkText: string;
		linkHref: string;
	}

	interface CardGridWithLinksProps {
		title?: string;
		description?: string;
		cards?: CardItem[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-with-links') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		cards = DEFAULTS.cards || []
	}: CardGridWithLinksProps = $props();
</script>

<!-- Card Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
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
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<!-- Card -->
			<a
				class="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-primary hover:shadow-md dark:border-neutral-700 dark:bg-primary"
				href={card.linkHref}
			>
				<CardContent class="p-4 md:p-5">
					<div class="flex">
						<card.icon class="mt-1 size-8 shrink-0 text-primary" />
						<div class="ms-5 grow">
							<h3 class="font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-200">
								{card.title}
							</h3>
							<p class="text-sm text-muted-foreground">
								{card.description}
							</p>
							<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-primary">
								{card.linkText}
								<ChevronRight class="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1" />
							</p>
						</div>
					</div>
				</CardContent>
			</a>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Grid -->

