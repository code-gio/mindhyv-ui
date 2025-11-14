<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Figma } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface HeroWithGradientBgProps {
		subtitle?: string;
		title?: string;
		description?: string;
		ctaPrimaryText?: string;
		ctaPrimaryHref?: string;
		ctaSecondaryText?: string;
		ctaSecondaryHref?: string;
		ctaSecondaryIcon?: string;
		onCtaClick?: (type: 'primary' | 'secondary') => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-with-gradient-bg') || {};

	let {
		subtitle = DEFAULTS.subtitle,
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		ctaPrimaryText = DEFAULTS.ctaPrimaryText,
		ctaPrimaryHref = DEFAULTS.ctaPrimaryHref,
		ctaSecondaryText = DEFAULTS.ctaSecondaryText,
		ctaSecondaryHref = DEFAULTS.ctaSecondaryHref,
		ctaSecondaryIcon = DEFAULTS.ctaSecondaryIcon,
		onCtaClick
	}: HeroWithGradientBgProps = $props();
</script>

<div class="relative overflow-hidden">
	<!-- Gradients -->
	<div aria-hidden="true" class="absolute start-1/2 -top-96 flex -translate-x-1/2 transform">
		<div
			class="h-175 w-100 -translate-x-40 rotate-[-60deg] transform bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl dark:from-violet-900/50 dark:to-purple-900"
		></div>
		<div
			class="rounded-fulls h-200 w-[1440px] origin-top-left -translate-x-60 -rotate-12 bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"
		></div>
	</div>
	<!-- End Gradients -->

	<div class="relative z-10">
		<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
			<div class="mx-auto max-w-2xl text-center">
				<p class="inline-block text-sm font-medium text-primary">
					{subtitle}
				</p>

				<!-- Title -->
				<div class="mt-5 max-w-2xl">
					<h1 class="block text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
						<span
							class="bg-linear-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
						>
							{title}
						</span>
					</h1>
				</div>
				<!-- End Title -->

				<div class="mx-auto mt-5 max-w-xl">
					<p class="text-lg text-foreground">{description}</p>
				</div>

				<!-- Buttons -->
				<div class="mt-8 flex justify-center gap-3">
					<Button
						href={ctaPrimaryHref}
						onclick={() => onCtaClick?.('primary')}
						variant="default"
						class="inline-flex items-center gap-x-2 bg-primary px-4 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-primary/60"
					>
						{ctaPrimaryText}
						<ChevronRight class="size-4 shrink-0" />
					</Button>
					<Button
						href={ctaSecondaryHref}
						onclick={() => onCtaClick?.('secondary')}
						variant="ghost"
						class="inline-flex items-center gap-x-2 px-4 py-4 text-sm font-medium"
					>
						{#if ctaSecondaryIcon}
							<div class="size-4 shrink-0">
								{@html ctaSecondaryIcon}
							</div>
						{:else}
							<!-- <Figma class="size-4 shrink-0 text-primary" /> -->
							<img src="/figma.svg" alt="Figma" class="size-4 shrink-0" />
						{/if}
						{ctaSecondaryText}
					</Button>
				</div>
				<!-- End Buttons -->
			</div>
		</div>
	</div>
</div>
