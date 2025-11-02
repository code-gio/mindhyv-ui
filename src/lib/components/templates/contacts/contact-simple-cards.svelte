<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Mail, Phone, MapPin } from '@lucide/svelte/icons';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ContactCard {
		icon: typeof LucideIcon;
		title: string;
		value: string;
		linkHref?: string;
	}

	interface ContactSimpleCardsProps {
		title?: string;
		description?: string;
		cards?: ContactCard[];
	}

	const DEFAULTS = getTemplateDefaults('contact-simple-cards') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		cards = DEFAULTS.cards || []
	}: ContactSimpleCardsProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
			{title}
		</h2>
		{#if description}
			<p class="mt-1 text-muted-foreground">
				{description}
			</p>
		{/if}
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<Card class="text-center">
				<CardContent class="p-6">
					<div class="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
						<card.icon class="size-6 text-primary" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-foreground">
						{card.title}
					</h3>
					{#if card.linkHref}
						<a
							href={card.linkHref}
							class="text-gray-600 hover:text-primary dark:text-neutral-400"
						>
							{card.value}
						</a>
					{:else}
						<p class="text-muted-foreground">
							{card.value}
						</p>
					{/if}
				</CardContent>
			</Card>
		{/each}
	</div>
</div>

