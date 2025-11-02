<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureItem {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface FeaturesSimpleListProps {
		features?: FeatureItem[];
	}

	const DEFAULTS = getTemplateDefaults('features-simple-list') || {};

	let { features = DEFAULTS.features || [] }: FeaturesSimpleListProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="space-y-6 lg:space-y-8">
		{#each features as feature}
			<!-- Icon Block -->
			<div class="flex gap-x-5 sm:gap-x-8">
				<feature.icon class="mt-1 size-8 shrink-0 text-primary" />
				<div class="grow">
					<h3 class="text-base font-semibold text-gray-800 sm:text-lg dark:text-neutral-200">
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
<!-- End Features -->

