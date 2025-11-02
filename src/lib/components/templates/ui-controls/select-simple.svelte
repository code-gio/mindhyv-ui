<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface SelectOption {
		value: string;
		label: string;
	}

	interface SelectSimpleProps {
		label?: string;
		placeholder?: string;
		options?: SelectOption[];
		value?: string;
	}

	const DEFAULTS = getTemplateDefaults('select-simple') || {};

	let {
		label = DEFAULTS.label,
		placeholder = DEFAULTS.placeholder,
		options = DEFAULTS.options || [],
		value = DEFAULTS.value
	}: SelectSimpleProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-sm">
		<div class="space-y-2">
			{#if label}
				<Label for="select">{label}</Label>
			{/if}
			<select
				id="select"
				class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
				bind:value
			>
				{#if placeholder}
					<option value="" disabled selected>{placeholder}</option>
				{/if}
				{#each options as option}
					<option value={option.value}>{option.label}</option>
				{/each}
			</select>
		</div>
	</div>
</div>
