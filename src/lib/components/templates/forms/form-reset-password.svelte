<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormResetPasswordProps {
		title?: string;
		description?: string;
		submitText?: string;
		backToLoginLink?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-reset-password') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		submitText = DEFAULTS.submitText,
		backToLoginLink = DEFAULTS.backToLoginLink
	}: FormResetPasswordProps = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-primary">
	<Card class="w-full max-w-md">
		<CardHeader>
			<CardTitle class="text-center text-2xl">{title}</CardTitle>
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
						placeholder="name@company.com"
						required
					/>
					<p class="mt-2 text-xs text-muted-foreground">
						We'll send you a link to reset your password
					</p>
				</div>
				<Button type="submit" class="w-full">
					{submitText}
				</Button>
				{#if backToLoginLink}
					<p class="text-center text-sm text-muted-foreground">
						<a href={backToLoginLink} class="font-medium text-primary hover:underline">
							Back to login
						</a>
					</p>
				{/if}
			</form>
		</CardContent>
	</Card>
</div>

