<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormFeedbackSimpleProps {
		title?: string;
		description?: string;
		submitText?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-feedback-simple') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		submitText = DEFAULTS.submitText
	}: FormFeedbackSimpleProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-2xl">
		<CardHeader>
			<CardTitle class="text-2xl">{title}</CardTitle>
			{#if description}
				<p class="text-sm text-muted-foreground">{description}</p>
			{/if}
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div class="grid gap-4 sm:grid-cols-2">
					<div>
						<Label for="name">Name</Label>
						<Input id="name" type="text" placeholder="Your name" required />
					</div>
					<div>
						<Label for="email">Email</Label>
						<Input id="email" type="email" placeholder="your.email@example.com" required />
					</div>
				</div>
				<div>
					<Label for="message">Message</Label>
					<Textarea
						id="message"
						placeholder="Tell us what you think..."
						rows={6}
						required
					/>
				</div>
				<Button type="submit" class="w-full">
					{submitText}
				</Button>
			</form>
		</CardContent>
	</Card>
</div>

