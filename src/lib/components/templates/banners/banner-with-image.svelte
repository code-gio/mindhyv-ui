<script lang="ts">
	import { X } from '@lucide/svelte/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BannerWithImageProps {
		imageSrc?: string;
		imageAlt?: string;
		title: string;
		message: string;
		ctaText?: string;
		ctaHref?: string;
		dismissible?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('banner-with-image') || {};

	let {
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt,
		title = DEFAULTS.title,
		message = DEFAULTS.message,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		dismissible = DEFAULTS.dismissible
	}: BannerWithImageProps = $props();

	let visible = $state(true);

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<div class="mx-auto max-w-340 border-b border-border bg-card px-4 py-3 sm:px-6 lg:px-8">
		<div class="flex items-center gap-x-3">
			{#if imageSrc}
				<div class="shrink-0">
					<img class="size-10 rounded-lg" src={imageSrc} alt={imageAlt} />
				</div>
			{/if}
			<div class="grow">
				<h3 class="text-sm font-semibold text-card-foreground">
					{title}
				</h3>
				<p class="mt-1 text-sm text-muted-foreground">
					{message}
				</p>
			</div>
			{#if ctaText && ctaHref}
				<Button variant="outline" size="sm" href={ctaHref}>
					{ctaText}
				</Button>
			{/if}
			{#if dismissible}
				<button
					type="button"
					class="shrink-0 rounded-md p-1.5 transition hover:bg-accent focus:outline-hidden"
					onclick={dismiss}
				>
					<X class="size-4 text-muted-foreground" />
				</button>
			{/if}
		</div>
	</div>
{/if}

