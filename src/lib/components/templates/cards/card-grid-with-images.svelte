<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { ChevronRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CardItem {
		imageSrc: string;
		imageAlt: string;
		badge?: string;
		title: string;
		description: string;
		linkText?: string;
		linkHref?: string;
	}

	interface CardGridWithImagesProps {
		cards?: CardItem[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-with-images') || {};

	let { cards = DEFAULTS.cards || [] }: CardGridWithImagesProps = $props();
</script>

<!-- Card Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<!-- Card -->
			<Card class="group flex h-full flex-col shadow-sm">
				<div class="h-52 overflow-hidden rounded-t-xl">
					<img
						class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
						src={card.imageSrc}
						alt={card.imageAlt}
					/>
				</div>
				<CardContent class="p-4 md:p-6">
					{#if card.badge}
						<Badge variant="secondary" class="mb-2">
							{card.badge}
						</Badge>
					{/if}
					<h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300">
						{card.title}
					</h3>
					<p class="mt-3 text-muted-foreground">
						{card.description}
					</p>
					{#if card.linkText}
						<a
							href={card.linkHref || '#'}
							class="mt-4 inline-flex items-center gap-x-1.5 text-sm font-semibold text-primary decoration-2 hover:underline"
						>
							{card.linkText}
							<ChevronRight class="size-4 shrink-0" />
						</a>
					{/if}
				</CardContent>
			</Card>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Grid -->

