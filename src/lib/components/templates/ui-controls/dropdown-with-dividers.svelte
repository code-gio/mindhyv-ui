<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { ChevronDown } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface DropdownSection {
		label?: string;
		items: { label: string; onClick?: () => void; href?: string }[];
	}

	interface DropdownWithDividersProps {
		label?: string;
		sections?: DropdownSection[];
	}

	const DEFAULTS = getTemplateDefaults('dropdown-with-dividers') || {};

	let { label = DEFAULTS.label, sections = DEFAULTS.sections || [] }: DropdownWithDividersProps =
		$props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="flex justify-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props}>
						{label}
						<ChevronDown class="ml-2 size-4" />
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each sections as section, index}
					{#if section.label}
						<DropdownMenu.Label>{section.label}</DropdownMenu.Label>
					{/if}
					{#each section.items as item}
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
					{#if index < sections.length - 1}
						<DropdownMenu.Separator />
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
