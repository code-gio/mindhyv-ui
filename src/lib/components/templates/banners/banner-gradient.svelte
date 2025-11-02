<script lang="ts">
	import { X } from '@lucide/svelte/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BannerGradientProps {
		message: string;
		ctaText?: string;
		ctaHref?: string;
		dismissible?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('banner-gradient') || {};

	let {
		message = DEFAULTS.message,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		dismissible = DEFAULTS.dismissible
	}: BannerGradientProps = $props();

	let visible = $state(true);

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<div
		class="mx-auto max-w-340 bg-gradient-to-r from-primary to-primary/80 px-4 py-3 sm:px-6 lg:px-8"
	>
		<div class="flex items-center justify-between gap-x-3">
			<p class="grow text-sm text-primary-foreground">
				{message}
			</p>
			<div class="flex shrink-0 items-center gap-x-2">
				{#if ctaText && ctaHref}
					<Button variant="secondary" size="sm" href={ctaHref}>
						{ctaText}
					</Button>
				{/if}
				{#if dismissible}
					<button
						type="button"
						class="rounded-md p-1.5 transition hover:bg-primary/80 focus:outline-hidden"
						onclick={dismiss}
					>
						<X class="size-4 text-primary-foreground" />
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

