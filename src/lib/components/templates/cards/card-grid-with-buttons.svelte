<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CardItem {
		category: string;
		categoryColor?: string;
		title: string;
		description: string;
		logo?: string;
		logoColor?: string;
		primaryLink: { text: string; href: string };
		secondaryLink: { text: string; href: string };
	}

	interface CardGridWithButtonsProps {
		cards?: CardItem[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-with-buttons') || {};

	let { cards = DEFAULTS.cards || [] }: CardGridWithButtonsProps = $props();
</script>

<!-- Card Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<!-- Card -->
			<Card class="group flex h-full flex-col shadow-sm">
				<div
					class={cn(
						'flex h-52 flex-col items-center justify-center rounded-t-xl',
						card.logoColor || 'bg-primary'
					)}
				>
					{#if card.logo}
						<div class="size-28">
							{@html card.logo}
						</div>
					{/if}
				</div>
				<CardContent class="p-4 md:p-6">
					<span
						class={cn(
							'mb-1 block text-xs font-semibold uppercase',
							card.categoryColor || 'text-primary'
						)}
					>
						{card.category}
					</span>
					<h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300">
						{card.title}
					</h3>
					<p class="mt-3 text-muted-foreground">
						{card.description}
					</p>
				</CardContent>
				<div class="mt-auto flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
					<Button
						variant="ghost"
						href={card.primaryLink.href}
						class="w-full rounded-b-none rounded-se-none"
					>
						{card.primaryLink.text}
					</Button>
					<Button
						variant="ghost"
						href={card.secondaryLink.href}
						class="w-full rounded-b-none rounded-ss-none"
					>
						{card.secondaryLink.text}
					</Button>
				</div>
			</Card>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Grid -->

