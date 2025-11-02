<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormSplitProps {
		title?: string;
		onSubmit?: (data: any) => void;
	}

	const DEFAULTS = getTemplateDefaults('form-split') || {};

	let {
		title = DEFAULTS.title || 'Contact Us',
		onSubmit = DEFAULTS.onSubmit
	}: FormSplitProps = $props();

	let formData = $state({ name: '', email: '', message: '' });

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit?.(formData);
	}
</script>

<div class="mx-auto max-w-5xl px-4 py-10">
	<div class="grid gap-6 lg:grid-cols-2">
		<div class="flex flex-col justify-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground">{title}</h2>
			<p class="text-muted-foreground">
				Fill out the form and we'll get back to you as soon as possible.
			</p>
		</div>
		<Card>
			<CardContent class="pt-6">
				<form onsubmit={handleSubmit} class="space-y-4">
					<div class="space-y-2">
						<Label for="name">Name</Label>
						<Input id="name" bind:value={formData.name} required />
					</div>
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input id="email" type="email" bind:value={formData.email} required />
					</div>
					<div class="space-y-2">
						<Label for="message">Message</Label>
						<Input id="message" bind:value={formData.message} />
					</div>
					<Button type="submit" class="w-full">Send Message</Button>
				</form>
			</CardContent>
		</Card>
	</div>
</div>

