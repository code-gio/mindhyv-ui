<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Copy } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';
	import { cn } from '../utils';

	interface HeroCenteredWithPolygonProps {
		announcementText?: string;
		announcementHref?: string;
		title?: string;
		gradientText?: string;
		description?: string;
		ctaPrimaryText?: string;
		ctaPrimaryHref?: string;
		codeCommand?: string;
		packageManager?: string;
		guideText?: string;
		guideHref?: string;
		backgroundImageLight?: string;
		backgroundImageDark?: string;
		onCtaClick?: (type: 'primary' | 'code') => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-centered-with-polygon') || {};

	let {
		announcementText = DEFAULTS.announcementText,
		announcementHref = DEFAULTS.announcementHref,
		title = DEFAULTS.title,
		gradientText = DEFAULTS.gradientText,
		description = DEFAULTS.description,
		ctaPrimaryText = DEFAULTS.ctaPrimaryText,
		ctaPrimaryHref = DEFAULTS.ctaPrimaryHref,
		codeCommand = DEFAULTS.codeCommand,
		packageManager = DEFAULTS.packageManager,
		guideText = DEFAULTS.guideText,
		guideHref = DEFAULTS.guideHref,
		backgroundImageLight = DEFAULTS.backgroundImageLight,
		backgroundImageDark = DEFAULTS.backgroundImageDark,
		onCtaClick
	}: HeroCenteredWithPolygonProps = $props();

	let copied = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(codeCommand);
			copied = true;
			onCtaClick?.('code');
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	function handlePrimaryClick() {
		onCtaClick?.('primary');
	}
</script>

<div
	class="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-1 before:size-full before:-translate-x-1/2 before:transform before:bg-cover before:bg-top before:bg-no-repeat"
	style="--bg-light: url('{backgroundImageLight}'); --bg-dark: url('{backgroundImageDark}');"
	style:background-image="var(--bg-light)"
	class:dark:before:bg-[--bg-dark]={true}
	class:before:bg-[--bg-light]={true}
>
	<div class="mx-auto max-w-340 px-4 pt-24 pb-10 sm:px-6 lg:px-8">
		<!-- Announcement Banner -->
		<div class="flex justify-center">
			<a
				href={announcementHref}
				class="inline-flex items-center gap-x-2 rounded-full border border-border bg-background p-1 ps-3 text-sm text-foreground transition hover:border-muted-foreground focus:border-muted-foreground focus:outline-hidden"
			>
				{announcementText}
				<span
					class="inline-flex items-center justify-center gap-x-2 rounded-full bg-muted px-2.5 py-1.5 text-sm font-semibold text-muted-foreground"
				>
					<ChevronRight class="size-4 shrink-0" />
				</span>
			</a>
		</div>
		<!-- End Announcement Banner -->

		<!-- Title -->
		<div class="mx-auto mt-5 max-w-2xl text-center">
			<h1 class="block text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
				{title}
				<span class="text-primary">
					{gradientText}
				</span>
			</h1>
		</div>
		<!-- End Title -->

		<div class="mx-auto mt-5 max-w-3xl text-center">
			<p class="text-lg text-muted-foreground">{description}</p>
		</div>

		<!-- Buttons -->
		<div class="mt-8 flex justify-center gap-3">
			<Button
				href={ctaPrimaryHref}
				onclick={handlePrimaryClick}
				class="inline-flex items-center justify-center gap-x-3 text-center text-sm font-medium"
			>
				{ctaPrimaryText}
				<ChevronRight class="size-4 shrink-0" />
			</Button>

			<button
				type="button"
				onclick={copyToClipboard}
				class={cn(
					'group relative inline-flex items-center gap-x-2 rounded-lg border border-border bg-background p-2 ps-3 font-mono text-sm text-foreground shadow-2xs',
					'hover:bg-muted focus:bg-muted focus:outline-hidden disabled:pointer-events-none disabled:opacity-50'
				)}
			>
				{codeCommand}
				<span
					class="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground"
				>
					<Copy class={cn('size-4 shrink-0 transition', copied ? '' : 'group-hover:rotate-6')} />
				</span>
			</button>
		</div>
		<!-- End Buttons -->

		<div class="mt-5 flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-3">
			<div class="flex flex-wrap gap-1 sm:gap-3">
				<span class="text-sm text-muted-foreground">Package Manager:</span>
				<span class="text-sm font-bold text-foreground">{packageManager}</span>
			</div>
			<svg
				class="hidden size-5 text-border sm:block"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
			</svg>
			<a
				href={guideHref}
				class="inline-flex items-center gap-x-1 text-sm font-medium text-primary decoration-2 hover:underline focus:underline focus:outline-hidden"
			>
				{guideText}
				<ChevronRight class="size-4 shrink-0" />
			</a>
		</div>
	</div>
</div>
