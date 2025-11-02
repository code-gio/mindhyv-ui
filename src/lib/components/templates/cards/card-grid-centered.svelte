<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CardItem {
		icon: typeof LucideIcon;
		iconColor?: string;
		title: string;
		description: string;
	}

	interface CardGridCenteredProps {
		title?: string;
		description?: string;
		cards?: CardItem[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-centered') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		cards = DEFAULTS.cards || []
	}: CardGridCenteredProps = $props();
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
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each cards as card}
			<!-- Card -->
			<Card class="flex h-full flex-col text-center">
				<CardContent class="p-4 md:p-5">
					<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
						<card.icon class={cn('size-6', card.iconColor || 'text-primary')} />
					</div>
					<div class="mt-3">
						<h3 class="text-lg font-semibold text-foreground">
							{card.title}
						</h3>
						<p class="mt-1 text-muted-foreground">
							{card.description}
						</p>
					</div>
				</CardContent>
			</Card>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Grid -->

