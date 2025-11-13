<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface HeroCenteredDarkGradientProps {
		announcementText?: string;
		announcementHref?: string;
		title?: string;
		description?: string;
		ctaText?: string;
		ctaHref?: string;
		onCtaClick?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-centered-dark-gradient') || {};

	let {
		announcementText = DEFAULTS.announcementText,
		announcementHref = DEFAULTS.announcementHref,
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		onCtaClick
	}: HeroCenteredDarkGradientProps = $props();
</script>

<div class="bg-linear-to-b from-primary/10 via-transparent">
	<div class="mx-auto max-w-340 space-y-8 px-4 py-24 sm:px-6 lg:px-8">
		<!-- Announcement Banner -->
		<div class="flex justify-center">
			<a
				href={announcementHref}
				class="group inline-flex items-center rounded-full border border-border bg-muted/50 p-1 ps-4 shadow-md hover:bg-muted focus:bg-muted focus:outline-hidden"
			>
				<p class="me-2 text-sm text-foreground">
					{announcementText}
				</p>
				<span
					class="flex items-center justify-center gap-x-2 rounded-full bg-muted px-2.5 py-1.5 text-sm font-semibold text-foreground group-hover:bg-muted"
				>
					<ChevronRight class="size-4 shrink-0" />
				</span>
			</a>
		</div>
		<!-- End Announcement Banner -->

		<!-- Title -->
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="block text-4xl font-medium text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
				{title}
			</h1>
		</div>
		<!-- End Title -->

		<div class="mx-auto max-w-3xl text-center">
			<p class="text-lg text-muted-foreground">{description}</p>
		</div>

		<!-- Buttons -->
		<div class="text-center">
			<Button
				href={ctaHref}
				onclick={onCtaClick}
				variant="default"
				class="inline-flex items-center justify-center gap-x-3 rounded-full px-6 py-3 text-center text-sm font-semibold shadow-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-primary/60"
			>
				{ctaText}
				<ChevronRight class="size-4 shrink-0" />
			</Button>
		</div>
		<!-- End Buttons -->
	</div>
</div>
