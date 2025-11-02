<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FeatureBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface FeaturesSplitImageRightProps {
		title?: string;
		description?: string;
		features?: FeatureBlock[];
		ctaText?: string;
		ctaHref?: string;
		imageSrc?: string;
		imageAlt?: string;
	}

	const DEFAULTS = getTemplateDefaults('features-split-image-right') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		features = DEFAULTS.features || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt
	}: FeaturesSplitImageRightProps = $props();
</script>

<!-- Features -->
<div class="overflow-hidden bg-primary">
	<div class="mx-auto max-w-340 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<!-- Grid -->
		<div class="grid items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
			<!-- End Col -->
			<div>
				<h2 class="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl md:leading-tight lg:text-4xl">
					{title}
				</h2>
				<p class="mb-6 text-muted-foreground md:mb-8">
					{description}
				</p>

				<!-- Icon Blocks -->
				<div class="space-y-4 md:space-y-6">
					{#each features as feature}
						<div class="flex gap-x-5">
							<feature.icon class="mt-1 size-6 shrink-0 text-primary" />
							<div class="grow">
								<h3 class="text-base font-semibold text-primary-foreground sm:text-lg">
									{feature.title}
								</h3>
								<p class="mt-1 text-muted-foreground">
									{feature.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
				<!-- End Icon Blocks -->

				{#if ctaText}
					<div class="mt-8">
						<Button href={ctaHref} variant="secondary">
							{ctaText}
						</Button>
					</div>
				{/if}
			</div>
			<!-- End Col -->

			<div class="relative ms-4">
				<img class="w-full rounded-md" src={imageSrc} alt={imageAlt} />
				<div class="absolute inset-0 -z-[1] size-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 -translate-x-6 -translate-y-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
			</div>
			<!-- End Col -->
		</div>
		<!-- End Grid -->
	</div>
</div>
<!-- End Features -->

