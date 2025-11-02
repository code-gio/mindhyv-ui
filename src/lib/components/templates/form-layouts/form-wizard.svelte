<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormWizardProps {
		title?: string;
		onSubmit?: (data: any) => void;
	}

	const DEFAULTS = getTemplateDefaults('form-wizard') || {};

	let {
		title = DEFAULTS.title || 'Multi-Step Form',
		onSubmit = DEFAULTS.onSubmit
	}: FormWizardProps = $props();

	let step = $state(1);
	let formData = $state({ name: '', email: '', phone: '', message: '' });

	function nextStep() {
		if (step < 3) step++;
	}

	function prevStep() {
		if (step > 1) step--;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (step === 3) {
			onSubmit?.(formData);
		} else {
			nextStep();
		}
	}
</script>

<div class="mx-auto max-w-xl px-4 py-10">
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<div class="mt-4 flex items-center justify-between">
				{#each [1, 2, 3] as s}
					<div class={cn(
						'flex size-8 items-center justify-center rounded-full',
						step >= s ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-muted-foreground'
					)}>
						{s}
					</div>
					{#if s < 3}
						<div class={cn(
							'h-1 flex-1',
							step > s ? 'bg-primary' : 'bg-muted'
						)}></div>
					{/if}
				{/each}
			</div>
		</CardHeader>
		<CardContent>
			<form onsubmit={handleSubmit} class="space-y-4">
				{#if step === 1}
					<div class="space-y-2">
						<Label for="name">Name</Label>
						<Input id="name" bind:value={formData.name} required />
					</div>
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input id="email" type="email" bind:value={formData.email} required />
					</div>
				{:else if step === 2}
					<div class="space-y-2">
						<Label for="phone">Phone</Label>
						<Input id="phone" type="tel" bind:value={formData.phone} />
					</div>
				{:else}
					<div class="space-y-2">
						<Label for="message">Message</Label>
						<Input id="message" bind:value={formData.message} />
					</div>
				{/if}
				<div class="flex justify-between">
					<Button type="button" variant="outline" onclick={prevStep} disabled={step === 1}>
						Previous
					</Button>
					<Button type="submit">
						{step === 3 ? 'Submit' : 'Next'}
					</Button>
				</div>
			</form>
		</CardContent>
	</Card>
</div>

