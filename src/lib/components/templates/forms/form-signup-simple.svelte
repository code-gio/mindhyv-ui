<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormSignupSimpleProps {
		title?: string;
		submitText?: string;
		loginLink?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-signup-simple') || {};

	let {
		title = DEFAULTS.title,
		submitText = DEFAULTS.submitText,
		loginLink = DEFAULTS.loginLink
	}: FormSignupSimpleProps = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-primary">
	<Card class="w-full max-w-md">
		<CardHeader>
			<CardTitle class="text-center text-2xl">{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div>
					<Label for="name">Full Name</Label>
					<Input id="name" type="text" placeholder="John Doe" required />
				</div>
				<div>
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="name@company.com" required />
				</div>
				<div>
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="••••••••" required />
				</div>
				<div>
					<Label for="confirm-password">Confirm Password</Label>
					<Input id="confirm-password" type="password" placeholder="••••••••" required />
				</div>
				<div class="flex items-start space-x-2">
					<Checkbox id="terms" />
					<Label for="terms" class="text-sm font-normal">
						I agree to the
						<a href="#" class="text-primary hover:underline">Terms and Conditions</a>
					</Label>
				</div>
				<Button type="submit" class="w-full">
					{submitText}
				</Button>
				{#if loginLink}
					<p class="text-center text-sm text-muted-foreground">
						Already have an account?
						<a href={loginLink} class="font-medium text-primary hover:underline">
							Sign in
						</a>
					</p>
				{/if}
			</form>
		</CardContent>
	</Card>
</div>

