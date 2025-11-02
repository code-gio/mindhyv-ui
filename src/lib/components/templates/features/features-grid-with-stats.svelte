<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureBlock {
		icon: typeof LucideIcon;
		stat: string;
		title: string;
		description: string;
	}

	interface FeaturesGridWithStatsProps {
		title?: string;
		description?: string;
		features?: FeatureBlock[];
	}

	const DEFAULTS = getTemplateDefaults('features-grid-with-stats') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		features = DEFAULTS.features || []
	}: FeaturesGridWithStatsProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
			{title}
		</h2>
		<p class="mt-1 text-muted-foreground">
			{description}
		</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
		{#each features as feature}
			<!-- Stats -->
			<div>
				<div class="flex items-center gap-x-2">
					<feature.icon class="size-8 shrink-0 text-primary" />
					<h3 class="text-3xl font-semibold text-gray-800 sm:text-4xl dark:text-neutral-200">
						{feature.stat}
					</h3>
				</div>
				<p class="mt-2 text-sm font-medium text-gray-800 sm:mt-3 sm:text-base dark:text-neutral-200">
					{feature.title}
				</p>
				<p class="mt-1 text-sm text-muted-foreground">
					{feature.description}
				</p>
			</div>
			<!-- End Stats -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->

