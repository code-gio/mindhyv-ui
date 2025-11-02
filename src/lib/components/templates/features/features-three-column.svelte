<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface FeaturesThreeColumnProps {
		title?: string;
		description?: string;
		features?: FeatureBlock[];
	}

	const DEFAULTS = getTemplateDefaults('features-three-column') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		features = DEFAULTS.features || []
	}: FeaturesThreeColumnProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-12 md:grid-cols-3">
		<!-- Col -->
		<div class="md:col-span-1">
			<h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-neutral-200">
				{title}
			</h2>
			<p class="mt-2 text-gray-600 md:mt-4 dark:text-neutral-400">
				{description}
			</p>
		</div>
		<!-- End Col -->

		<!-- Col -->
		<div class="md:col-span-2">
			<div class="grid gap-8 sm:grid-cols-2 md:gap-12">
				{#each features as feature}
					<!-- Icon Block -->
					<div class="flex gap-x-5">
						<feature.icon class="mt-1 size-6 shrink-0 text-primary" />
						<div class="grow">
							<h3 class="text-lg font-semibold text-foreground">
								{feature.title}
							</h3>
							<p class="mt-1 text-muted-foreground">
								{feature.description}
							</p>
						</div>
					</div>
					<!-- End Icon Block -->
				{/each}
			</div>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->

