<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormTextareaSimpleProps {
		title?: string;
		label?: string;
		placeholder?: string;
		submitText?: string;
		helperText?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-textarea-simple') || {};

	let {
		title = DEFAULTS.title,
		label = DEFAULTS.label,
		placeholder = DEFAULTS.placeholder,
		submitText = DEFAULTS.submitText,
		helperText = DEFAULTS.helperText
	}: FormTextareaSimpleProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-2xl">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div>
					<Label for="message">{label}</Label>
					<Textarea
						id="message"
						placeholder={placeholder}
						rows={8}
						required
					/>
					{#if helperText}
						<p class="mt-2 text-xs text-muted-foreground">
							{helperText}
						</p>
					{/if}
				</div>
				<Button type="submit" class="w-full">
					{submitText}
				</Button>
			</form>
		</CardContent>
	</Card>
</div>

