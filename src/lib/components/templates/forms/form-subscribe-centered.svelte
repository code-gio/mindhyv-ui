<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Mail } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormSubscribeCenteredProps {
		title?: string;
		description?: string;
		placeholder?: string;
		buttonText?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-subscribe-centered') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		placeholder = DEFAULTS.placeholder,
		buttonText = DEFAULTS.buttonText
	}: FormSubscribeCenteredProps = $props();
</script>

<div class="bg-gradient-to-r from-primary to-primary/80">
	<div class="mx-auto max-w-340 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-2xl text-center">
			<div class="mb-6 inline-flex size-16 items-center justify-center rounded-full bg-white/10">
				<Mail class="size-8 text-primary-foreground" />
			</div>
			<h2 class="text-3xl font-bold text-primary-foreground md:text-4xl">
				{title}
			</h2>
			{#if description}
				<p class="mt-4 text-lg text-primary-foreground/90">
					{description}
				</p>
			{/if}
			<form class="mx-auto mt-8 max-w-lg">
				<div class="flex flex-col gap-3 sm:flex-row sm:gap-2">
					<Input
						type="email"
						placeholder={placeholder}
						required
						class="flex-1 border-primary-foreground/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60"
					/>
					<Button type="submit" variant="secondary">
						{buttonText}
					</Button>
				</div>
			</form>
		</div>
	</div>
</div>

