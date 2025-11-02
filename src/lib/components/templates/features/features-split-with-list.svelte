<script lang="ts">
	import { Check } from '@lucide/svelte/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FeaturesSplitWithListProps {
		subtitle?: string;
		title?: string;
		description?: string;
		features?: string[];
		ctaText?: string;
		ctaHref?: string;
		imageSrc?: string;
		imageAlt?: string;
	}

	const DEFAULTS = getTemplateDefaults('features-split-with-list') || {};

	let {
		subtitle = DEFAULTS.subtitle,
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		features = DEFAULTS.features || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt
	}: FeaturesSplitWithListProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
		<div>
			<p class="mb-2 text-xs font-semibold uppercase text-primary">
				{subtitle}
			</p>
			<h2 class="mb-4 text-2xl font-bold text-gray-800 md:text-3xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
			<p class="mb-6 text-gray-600 md:mb-8 dark:text-neutral-400">
				{description}
			</p>

			<!-- List -->
			<ul class="space-y-2">
				{#each features as feature}
					<li class="flex space-x-3">
						<Check class="mt-0.5 size-5 shrink-0 text-primary" />
						<span class="text-muted-foreground">
							{feature}
						</span>
					</li>
				{/each}
			</ul>
			<!-- End List -->

			<div class="mt-8">
				<Button href={ctaHref}>
					{ctaText}
				</Button>
			</div>
		</div>
		<!-- End Col -->

		<div>
			<img
				class="w-full rounded-xl"
				src={imageSrc}
				alt={imageAlt}
			/>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->

