<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureCard {
		icon: typeof LucideIcon;
		title: string;
		description: string;
		linkText: string;
		linkHref: string;
	}

	interface FeaturesCardsWithButtonsProps {
		cards?: FeatureCard[];
	}

	const DEFAULTS = getTemplateDefaults('features-cards-with-buttons') || {};

	let { cards = DEFAULTS.cards || [] }: FeaturesCardsWithButtonsProps = $props();
</script>

<!-- Card Section -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<!-- Card -->
			<div class="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-transparent hover:shadow-lg dark:border-neutral-700 dark:bg-primary">
				<div class="p-4 md:p-5">
					<div class="flex">
						<card.icon class="mt-1 size-8 shrink-0 text-primary" />
						<div class="ms-5 grow">
							<h3 class="font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-200">
								{card.title}
							</h3>
							<p class="text-sm text-muted-foreground">
								{card.description}
							</p>
						</div>
					</div>
				</div>
				<div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
					<Button
						variant="ghost"
						href={card.linkHref}
						class="w-full rounded-t-none rounded-se-none py-3 text-sm"
					>
						{card.linkText}
					</Button>
				</div>
			</div>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Section -->

