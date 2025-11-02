<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormSubscribeCardProps {
		title?: string;
		description?: string;
		placeholder?: string;
		buttonText?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-subscribe-card') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		placeholder = DEFAULTS.placeholder,
		buttonText = DEFAULTS.buttonText
	}: FormSubscribeCardProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-lg">
		<CardHeader>
			<CardTitle class="text-center">{title}</CardTitle>
			{#if description}
				<CardDescription class="text-center">{description}</CardDescription>
			{/if}
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div>
					<Label for="email">Email address</Label>
					<Input
						id="email"
						type="email"
						placeholder={placeholder}
						required
					/>
				</div>
				<Button type="submit" class="w-full">
					{buttonText}
				</Button>
				<p class="text-center text-xs text-muted-foreground">
					We care about your data. Read our
					<a href="#" class="text-primary hover:underline">Privacy Policy</a>
				</p>
			</form>
		</CardContent>
	</Card>
</div>

