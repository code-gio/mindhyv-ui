<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CardItem {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface CardGridMinimalProps {
		cards?: CardItem[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-minimal') || {};

	let { cards = DEFAULTS.cards || [] }: CardGridMinimalProps = $props();
</script>

<!-- Card Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
		{#each cards as card}
			<!-- Card -->
			<Card class="group flex h-full flex-col border transition hover:border-primary hover:shadow-md">
				<CardContent class="p-4 md:p-6">
					<card.icon class="size-10 text-foreground" />
					<h3 class="mt-5 text-lg font-semibold text-foreground">
						{card.title}
					</h3>
					<p class="mt-2 text-muted-foreground">
						{card.description}
					</p>
				</CardContent>
			</Card>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Grid -->

