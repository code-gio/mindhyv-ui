<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ButtonItem {
		label: string;
		icon?: typeof LucideIcon;
		onClick?: () => void;
		href?: string;
		variant?: 'default' | 'outline' | 'ghost';
	}

	interface ButtonGroupProps {
		buttons?: ButtonItem[];
		orientation?: 'horizontal' | 'vertical';
	}

	const DEFAULTS = getTemplateDefaults('button-group') || {};

	let {
		buttons = DEFAULTS.buttons || [],
		orientation = DEFAULTS.orientation || 'horizontal'
	}: ButtonGroupProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="flex justify-center">
		<div
			class={cn(
				'inline-flex rounded-lg shadow-sm',
				orientation === 'vertical' ? 'flex-col' : 'flex-row'
			)}
			role="group"
		>
			{#each buttons as button, index}
				<Button
					variant={button.variant || 'outline'}
					href={button.href}
					onclick={button.onClick}
					class={cn(
						orientation === 'horizontal'
							? index === 0
								? 'rounded-e-none'
								: index === buttons.length - 1
									? 'rounded-s-none'
									: 'rounded-none'
							: index === 0
								? 'rounded-b-none'
								: index === buttons.length - 1
									? 'rounded-t-none'
									: 'rounded-none',
						orientation === 'horizontal' && index !== 0 && '-ms-px',
						orientation === 'vertical' && index !== 0 && '-mt-px'
					)}
				>
					{#if button.icon}
						<button.icon class="mr-2 size-4" />
					{/if}
					{button.label}
				</Button>
			{/each}
		</div>
	</div>
</div>
