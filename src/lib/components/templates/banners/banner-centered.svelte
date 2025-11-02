<script lang="ts">
	import { X, Sparkles } from '@lucide/svelte/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BannerCenteredProps {
		title?: string;
		message: string;
		ctaText?: string;
		ctaHref?: string;
		dismissible?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('banner-centered') || {};

	let {
		title = DEFAULTS.title,
		message = DEFAULTS.message,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		dismissible = DEFAULTS.dismissible
	}: BannerCenteredProps = $props();

	let visible = $state(true);

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<div
		class="mx-auto max-w-340 bg-gradient-to-r from-primary via-primary/90 to-primary px-4 py-6 sm:px-6 lg:px-8"
	>
		<div class="relative mx-auto max-w-3xl text-center">
			<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<Sparkles class="size-5 shrink-0 text-primary-foreground" />
				<div class="grow">
					{#if title}
						<h3 class="mb-1 text-base font-semibold text-primary-foreground">
							{title}
						</h3>
					{/if}
					<p class="text-sm text-primary-foreground">
						{message}
					</p>
				</div>
				{#if ctaText && ctaHref}
					<Button variant="secondary" size="sm" href={ctaHref}>
						{ctaText}
					</Button>
				{/if}
				{#if dismissible}
					<button
						type="button"
						class="absolute end-0 top-0 rounded-md p-1.5 transition hover:bg-primary/80 focus:outline-hidden"
						onclick={dismiss}
					>
						<X class="size-4 text-primary-foreground" />
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

