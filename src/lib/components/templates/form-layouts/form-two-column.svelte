<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormTwoColumnProps {
		title?: string;
		onSubmit?: (data: any) => void;
	}

	const DEFAULTS = getTemplateDefaults('form-two-column') || {};

	let {
		title = DEFAULTS.title || 'Form',
		onSubmit = DEFAULTS.onSubmit
	}: FormTwoColumnProps = $props();

	let formData = $state({ firstName: '', lastName: '', email: '', phone: '' });

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit?.(formData);
	}
</script>

<div class="mx-auto max-w-2xl px-4 py-10">
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<form onsubmit={handleSubmit} class="space-y-4">
				<div class="grid gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<Label for="firstName">First Name</Label>
						<Input id="firstName" bind:value={formData.firstName} required />
					</div>
					<div class="space-y-2">
						<Label for="lastName">Last Name</Label>
						<Input id="lastName" bind:value={formData.lastName} required />
					</div>
				</div>
				<div class="grid gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input id="email" type="email" bind:value={formData.email} required />
					</div>
					<div class="space-y-2">
						<Label for="phone">Phone</Label>
						<Input id="phone" type="tel" bind:value={formData.phone} />
					</div>
				</div>
				<Button type="submit" class="w-full">Submit</Button>
			</form>
		</CardContent>
	</Card>
</div>

