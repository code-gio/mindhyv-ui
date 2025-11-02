<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormLoginSimpleProps {
		title?: string;
		submitText?: string;
		forgotPasswordLink?: string;
		signupLink?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-login-simple') || {};

	let {
		title = DEFAULTS.title,
		submitText = DEFAULTS.submitText,
		forgotPasswordLink = DEFAULTS.forgotPasswordLink,
		signupLink = DEFAULTS.signupLink
	}: FormLoginSimpleProps = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-primary">
	<Card class="w-full max-w-md">
		<CardHeader>
			<CardTitle class="text-center text-2xl">{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div>
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="name@company.com" required />
				</div>
				<div>
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="••••••••" required />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-2">
						<Checkbox id="remember" />
						<Label for="remember" class="text-sm font-normal">Remember me</Label>
					</div>
					{#if forgotPasswordLink}
						<a
							href={forgotPasswordLink}
							class="text-sm text-primary hover:underline"
						>
							Forgot password?
						</a>
					{/if}
				</div>
				<Button type="submit" class="w-full">
					{submitText}
				</Button>
				{#if signupLink}
					<p class="text-center text-sm text-muted-foreground">
						Don't have an account?
						<a href={signupLink} class="font-medium text-primary hover:underline">
							Sign up
						</a>
					</p>
				{/if}
			</form>
		</CardContent>
	</Card>
</div>

