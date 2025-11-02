<script lang="ts">
	import { X, Info } from '@lucide/svelte/icons';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BannerWithIconProps {
		icon?: typeof LucideIcon;
		message: string;
		linkText?: string;
		linkHref?: string;
		dismissible?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('banner-with-icon') || {};

	let {
		icon = DEFAULTS.icon || Info,
		message = DEFAULTS.message,
		linkText = DEFAULTS.linkText,
		linkHref = DEFAULTS.linkHref,
		dismissible = DEFAULTS.dismissible
	}: BannerWithIconProps = $props();

	let visible = $state(true);

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<div class="mx-auto max-w-340 border-b border-border bg-card px-4 py-3 sm:px-6 lg:px-8">
		<div class="flex items-center gap-x-3">
			<div class="shrink-0">
				<icon class="size-5 text-card-foreground" />
			</div>
			<p class="grow text-sm text-card-foreground">
				{message}
				{#if linkText && linkHref}
					<a
						class="font-semibold text-primary underline decoration-2 hover:decoration-primary/50"
						href={linkHref}
					>
						{linkText}
					</a>
				{/if}
			</p>
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

