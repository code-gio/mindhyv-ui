<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ContactMinimalProps {
		title?: string;
		description?: string;
		submitText?: string;
	}

	const DEFAULTS = getTemplateDefaults('contact-minimal') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		submitText = DEFAULTS.submitText
	}: ContactMinimalProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-primary-foreground">
				{title}
			</h1>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>

		<form class="mt-10 space-y-4">
			<div class="grid gap-4 sm:grid-cols-2">
				<Input type="text" placeholder="Name" required />
				<Input type="email" placeholder="Email" required />
			</div>
			<Input type="text" placeholder="Subject" required />
			<Textarea
				placeholder="Message"
				rows={6}
				required
			/>
			<div class="flex justify-center">
				<Button type="submit" size="lg">
					{submitText}
				</Button>
			</div>
		</form>
	</div>
</div>

