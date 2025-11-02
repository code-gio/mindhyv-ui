<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatItem {
		value: string;
		label: string;
		description: string;
	}

	interface StatsCenteredCardsProps {
		title?: string;
		stats?: StatItem[];
	}

	const DEFAULTS = getTemplateDefaults('stats-centered-cards') || {};

	let { title = DEFAULTS.title, stats = DEFAULTS.stats || [] }: StatsCenteredCardsProps = $props();
</script>

<!-- Stats -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
		</div>
	{/if}

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each stats as stat}
			<Card class="text-center">
				<CardContent class="p-6">
					<div class="mb-3 text-4xl font-bold text-primary sm:text-5xl">
						{stat.value}
					</div>
					<h3 class="text-lg font-semibold text-foreground">
						{stat.label}
					</h3>
					<p class="mt-2 text-sm text-muted-foreground">
						{stat.description}
					</p>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
<!-- End Stats -->

