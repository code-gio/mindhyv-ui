<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { MoreVertical } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface DropdownContextualProps {
		items?: { label: string; onClick?: () => void }[];
	}

	const DEFAULTS = getTemplateDefaults('dropdown-contextual') || {};

	let { items = DEFAULTS.items || [] }: DropdownContextualProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="flex justify-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						class="inline-flex size-8 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
					>
						<MoreVertical class="size-5" />
					</button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				{#each items as item}
					<DropdownMenu.Item onclick={item.onClick}>
						{item.label}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
