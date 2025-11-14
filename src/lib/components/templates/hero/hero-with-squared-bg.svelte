<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from '@lucide/svelte/icons';
	import { Github } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface HeroWithSquaredBgProps {
		announcementText?: string;
		announcementLinkText?: string;
		announcementHref?: string;
		title?: string;
		titleHighlight?: string;
		description?: string;
		ctaText?: string;
		ctaHref?: string;
		backgroundImageLight?: string;
		backgroundImageDark?: string;
		onCtaClick?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-with-squared-bg') || {};

	let {
		announcementText = DEFAULTS.announcementText,
		announcementLinkText = DEFAULTS.announcementLinkText,
		announcementHref = DEFAULTS.announcementHref,
		title = DEFAULTS.title,
		titleHighlight = DEFAULTS.titleHighlight ?? 'Mindhyv Experience',
		description = DEFAULTS.description,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		backgroundImageLight = DEFAULTS.backgroundImageLight,
		backgroundImageDark = DEFAULTS.backgroundImageDark,
		onCtaClick
	}: HeroWithSquaredBgProps = $props();

	const baseTitle = $derived(
		(() => {
			if (!titleHighlight || !title) {
				return title;
			}

			const highlightIndex = title.indexOf(titleHighlight);
			if (highlightIndex === -1) {
				return title;
			}

			const beforeHighlight = title.slice(0, highlightIndex).trimEnd();
			const afterHighlight = title.slice(highlightIndex + titleHighlight.length).trimStart();

			return [beforeHighlight, afterHighlight].filter(Boolean).join(' ').trim();
		})()
	);
</script>

<div
	class="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-1 before:size-full before:-translate-x-1/2 before:transform after:absolute after:inset-0 after:-z-1 after:bg-gradient-to-r after:from-background after:via-transparent after:to-background"
	style="--bg-light: url('{backgroundImageLight}'); --bg-dark: url('{backgroundImageDark}');"
	style:background-image="var(--bg-light)"
	style:background-position="40% 0%"
	style:background-repeat="no-repeat"
	style:background-size="auto"
	class:dark:before:bg-[--bg-dark]={true}
	class:before:bg-[--bg-light]={true}
>
	<div class="mx-auto max-w-340 px-4 pt-24 pb-10 sm:px-6 lg:px-8">
		<!-- Announcement Banner -->
		<div class="flex justify-center">
			<a
				href={announcementHref}
				class="inline-flex items-center gap-x-2 rounded-full border border-border bg-background p-2 px-3 text-xs font-medium text-muted-foreground transition hover:border-muted-foreground focus:border-muted-foreground focus:outline-hidden"
			>
				{announcementText}
				<span class="flex items-center gap-x-1">
					<span
						class="border-s border-border ps-2 font-semibold text-primary transition-colors hover:text-primary/85"
					>
						{announcementLinkText}
					</span>
					<ChevronRight class="size-4 shrink-0 text-primary" />
				</span>
			</a>
		</div>
		<!-- End Announcement Banner -->

		<!-- Title -->
		<div class="mx-auto mt-5 max-w-xl text-center">
			<h1 class="block text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
				{#if baseTitle}
					<span class="block">{baseTitle}</span>
				{/if}
				{#if titleHighlight}
					<span class="mt-2 block text-primary">{titleHighlight}</span>
				{/if}
			</h1>
		</div>
		<!-- End Title -->

		<div class="mx-auto mt-5 max-w-3xl text-center">
			<p class="text-lg text-muted-foreground">{description}</p>
		</div>

		<!-- Buttons -->
		<div class="mt-8 flex justify-center gap-3">
			<Button
				href={ctaHref}
				onclick={onCtaClick}
				variant="default"
				class="inline-flex items-center justify-center gap-x-3 rounded-full bg-primary px-12 w-52 h-12 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-primary/60"
			>
				<Github class="size-4 shrink-0" />
				{ctaText}
			</Button>
		</div>
		<!-- End Buttons -->
	</div>
</div>
