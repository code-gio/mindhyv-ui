<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { getTemplateDefaults } from '../template-registry';

	interface SignupFormData {
		name: string;
		email: string;
		password: string;
	}

	interface HeroSplitSignupProps {
		title?: string;
		highlightText?: string;
		description?: string;
		googleSignupText?: string;
		submitButtonText?: string;
		backgroundImage?: string;
		onGoogleSignup?: () => void;
		onSubmit?: (data: SignupFormData) => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-split-signup') || {};

	let {
		title = DEFAULTS.title,
		highlightText = DEFAULTS.highlightText,
		description = DEFAULTS.description,
		googleSignupText = DEFAULTS.googleSignupText,
		submitButtonText = DEFAULTS.submitButtonText,
		backgroundImage = DEFAULTS.backgroundImage,
		onGoogleSignup,
		onSubmit
	}: HeroSplitSignupProps = $props();

	let formData = $state({
		name: '',
		email: '',
		password: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit?.(formData);
	}
</script>

<div class="relative overflow-hidden">
	<div class="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-20 lg:py-32">
		<div class="w-1/2 pe-8 md:w-1/2 xl:w-5/12 xl:pe-0">
			<!-- Title -->
			<h1
				class="text-3xl font-bold text-foreground md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight"
			>
				{title} <span class="text-primary">{highlightText}</span>
			</h1>
			<p class="mt-3 text-base text-muted-foreground">
				{description}
			</p>
			<!-- End Title -->

			<div class="mt-8 grid">
				<Button
					type="button"
					onclick={onGoogleSignup}
					variant="outline"
					class="w-full justify-center gap-x-2"
				>
					<svg class="size-4" width="46" height="47" viewBox="0 0 46 47" fill="none">
						<path
							d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
							fill="#4285F4"
						/>
						<path
							d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
							fill="#34A853"
						/>
						<path
							d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
							fill="#FBBC05"
						/>
						<path
							d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
							fill="#EB4335"
						/>
					</svg>
					{googleSignupText}
				</Button>
			</div>

			<div
				class="flex items-center py-6 text-sm text-muted-foreground uppercase before:me-6 before:flex-1 before:border-t before:border-border after:ms-6 after:flex-1 after:border-t after:border-border"
			>
				Or
			</div>

			<!-- Form -->
			<form onsubmit={handleSubmit} class="space-y-4">
				<div>
					<Label for="name" class="sr-only">Full name</Label>
					<Input
						type="text"
						id="name"
						bind:value={formData.name}
						placeholder="Full name"
						required
					/>
				</div>

				<div>
					<Label for="email" class="sr-only">Email address</Label>
					<Input
						type="email"
						id="email"
						bind:value={formData.email}
						placeholder="Email address"
						required
					/>
				</div>

				<div>
					<Label for="password" class="sr-only">Password</Label>
					<Input
						type="password"
						id="password"
						bind:value={formData.password}
						placeholder="Password"
						required
					/>
				</div>

				<div class="grid">
					<Button type="submit" class="w-full justify-center">
						{submitButtonText}
					</Button>
				</div>
			</form>
			<!-- End Form -->
		</div>
	</div>

	<div
		class="hidden h-full bg-cover bg-center bg-no-repeat md:absolute md:start-1/2 md:end-0 md:top-0 md:block"
		style="background-image: url('{backgroundImage}')"
	></div>
	<!-- End Col -->
</div>
