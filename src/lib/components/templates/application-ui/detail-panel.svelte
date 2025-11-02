<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface DetailPanelProps {
		title?: string;
		open?: boolean;
		onClose?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('detail-panel') || {};

	let {
		title = DEFAULTS.title,
		open = DEFAULTS.open || false,
		onClose = DEFAULTS.onClose
	}: DetailPanelProps = $props();
</script>

{#if open}
	<div class="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-white shadow-xl dark:bg-neutral-800">
		<div class="flex h-full flex-col">
			<div class="flex items-center justify-between border-b border-gray-200 p-6 dark:border-neutral-700">
				{#if title}
					<h2 class="text-xl font-bold text-foreground">{title}</h2>
				{/if}
				<Button variant="ghost" size="icon" onclick={onClose}>
					<X class="size-5" />
				</Button>
			</div>
			<div class="flex-1 overflow-auto p-6">
				<p class="text-muted-foreground">Detail content</p>
			</div>
		</div>
	</div>
	<div class="fixed inset-0 z-40 bg-black/50" onclick={onClose}></div>
{/if}

