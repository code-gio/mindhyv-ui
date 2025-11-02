<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface FeaturesCenteredGridProps {
		title?: string;
		description?: string;
		features?: FeatureBlock[];
	}

	const DEFAULTS = getTemplateDefaults('features-centered-grid') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		features = DEFAULTS.features || []
	}: FeaturesCenteredGridProps = $props();
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
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each features as feature}
			<!-- Icon Block -->
			<div class="group flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-primary md:p-7">
				<div class="flex size-12 items-center justify-center rounded-full bg-primary/10">
					<feature.icon class="size-6 shrink-0 text-primary" />
				</div>
				<div class="mt-5 text-center">
					<h3 class="text-lg font-semibold text-foreground">
						{feature.title}
					</h3>
					<p class="mt-2 text-muted-foreground">
						{feature.description}
					</p>
				</div>
			</div>
			<!-- End Icon Block -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->

