<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import { X } from '@lucide/svelte/icons';

	interface ToastNotificationProps {
		message?: string;
		visible?: boolean;
		onClose?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('toast-notification') || {};

	let {
		message = DEFAULTS.message || 'Notification',
		visible = DEFAULTS.visible || false,
		onClose = DEFAULTS.onClose
	}: ToastNotificationProps = $props();
</script>

{#if visible}
	<div class="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-5">
		<div class="rounded-lg border border-border bg-card p-4 shadow-lg">
			<div class="flex items-start justify-between gap-3">
				<p class="text-sm text-card-foreground">{message}</p>
				<button onclick={onClose} class="shrink-0 text-muted-foreground hover:text-foreground">
					<X class="size-4" />
				</button>
			</div>
		</div>
	</div>
{/if}

