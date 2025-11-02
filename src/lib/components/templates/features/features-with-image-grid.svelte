<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface FeaturesWithImageGridProps {
		title?: string;
		description?: string;
		imageSrc?: string;
		imageAlt?: string;
		features?: FeatureBlock[];
	}

	const DEFAULTS = getTemplateDefaults('features-with-image-grid') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt,
		features = DEFAULTS.features || []
	}: FeaturesWithImageGridProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="aspect-h-7 aspect-w-16">
		<img class="w-full rounded-xl object-cover" src={imageSrc} alt={imageAlt} />
	</div>

	<!-- Grid -->
	<div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
		<div class="lg:col-span-1">
			<h2 class="text-2xl font-bold text-gray-800 md:text-3xl dark:text-neutral-200">
				{title}
			</h2>
			<p class="mt-2 text-gray-500 md:mt-4 dark:text-neutral-500">
				{description}
			</p>
		</div>
		<!-- End Col -->

		<div class="lg:col-span-2">
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

