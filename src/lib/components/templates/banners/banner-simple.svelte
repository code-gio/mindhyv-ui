<script lang="ts">
	import { X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BannerSimpleProps {
		message: string;
		linkText?: string;
		linkHref?: string;
		dismissible?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('banner-simple') || {};

	let {
		message = DEFAULTS.message,
		linkText = DEFAULTS.linkText,
		linkHref = DEFAULTS.linkHref,
		dismissible = DEFAULTS.dismissible
	}: BannerSimpleProps = $props();

	let visible = $state(true);

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<div class="mx-auto max-w-340 bg-primary px-4 py-3 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between gap-x-3">
			<p class="grow text-sm text-primary-foreground">
				{message}
				{#if linkText && linkHref}
					<a
						class="font-semibold underline decoration-2 hover:decoration-primary-foreground/50"
						href={linkHref}
					>
						{linkText}
					</a>
				{/if}
			</p>
			{#if dismissible}
				<button
					type="button"
					class="shrink-0 rounded-md p-1.5 transition hover:bg-primary/80 focus:outline-hidden"
					onclick={dismiss}
				>
					<X class="size-4 text-primary-foreground" />
				</button>
			{/if}
		</div>
	</div>
{/if}

