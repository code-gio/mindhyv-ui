<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { ChevronDown } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface DropdownItem {
		label: string;
		onClick?: () => void;
		href?: string;
	}

	interface DropdownSimpleProps {
		label?: string;
		items?: DropdownItem[];
		variant?: 'default' | 'outline' | 'ghost';
	}

	const DEFAULTS = getTemplateDefaults('dropdown-simple') || {};

	let {
		label = DEFAULTS.label,
		items = DEFAULTS.items || [],
		variant = DEFAULTS.variant
	}: DropdownSimpleProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="flex justify-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} {variant}>
						{label}
						<ChevronDown class="ml-2 size-4" />
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each items as item}
					<DropdownMenu.Item onclick={item.onClick}>
						{#if item.href}
							<a href={item.href} class="w-full">
								{item.label}
							</a>
						{:else}
							{item.label}
						{/if}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
