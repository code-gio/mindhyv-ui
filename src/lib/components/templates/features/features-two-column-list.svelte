<script lang="ts">
	import { Check } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FeaturesTwoColumnListProps {
		title?: string;
		description?: string;
		featuresLeft?: string[];
		featuresRight?: string[];
	}

	const DEFAULTS = getTemplateDefaults('features-two-column-list') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		featuresLeft = DEFAULTS.featuresLeft || [],
		featuresRight = DEFAULTS.featuresRight || []
	}: FeaturesTwoColumnListProps = $props();
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
	<div class="grid gap-10 sm:grid-cols-2 lg:gap-16">
		<ul class="space-y-3 text-sm">
			{#each featuresLeft as feature}
				<li class="flex space-x-3">
					<Check class="mt-0.5 size-5 shrink-0 text-primary" />
					<span class="text-muted-foreground">
						{feature}
					</span>
				</li>
			{/each}
		</ul>

		<ul class="space-y-3 text-sm">
			{#each featuresRight as feature}
				<li class="flex space-x-3">
					<Check class="mt-0.5 size-5 shrink-0 text-primary" />
					<span class="text-muted-foreground">
						{feature}
					</span>
				</li>
			{/each}
		</ul>
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->
