<script lang="ts">
	import { X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BannerMinimalProps {
		message: string;
		linkText?: string;
		linkHref?: string;
		dismissible?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('banner-minimal') || {};

	let {
		message = DEFAULTS.message,
		linkText = DEFAULTS.linkText,
		linkHref = DEFAULTS.linkHref,
		dismissible = DEFAULTS.dismissible
	}: BannerMinimalProps = $props();

	let visible = $state(true);

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<div
		class="mx-auto max-w-340 border-b border-border bg-muted px-4 py-2.5 sm:px-6 lg:px-8"
	>
		<div class="flex items-center justify-between gap-x-3">
			<p class="grow text-sm text-muted-foreground">
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

