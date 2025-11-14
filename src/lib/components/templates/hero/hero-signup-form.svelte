<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		name: string;
		title: string;
		avatarUrl: string;
	}

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface SignupFormData {
		firstName: string;
		lastName: string;
		email: string;
		companyName: string;
		password: string;
		confirmPassword: string;
		acceptTerms: boolean;
	}

	interface HeroSignupFormProps {
		subtitle?: string;
		title?: string;
		description?: string;
		formTitle?: string;
		signInText?: string;
		signInHref?: string;
		googleSignupText?: string;
		submitButtonText?: string;
		termsText?: string;
		termsLinkText?: string;
		termsHref?: string;
		showTestimonial?: boolean;
		testimonial?: Testimonial;
		showClients?: boolean;
		clientsCount?: string;
		clientsText?: string;
		clientLogos?: ClientLogo[];
		onGoogleSignup?: () => void;
		onSubmit?: (data: SignupFormData) => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-signup-form') || {};

	let {
		subtitle = DEFAULTS.subtitle,
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		formTitle = DEFAULTS.formTitle,
		signInText = DEFAULTS.signInText,
		signInHref = DEFAULTS.signInHref,
		googleSignupText = DEFAULTS.googleSignupText,
		submitButtonText = DEFAULTS.submitButtonText,
		termsText = DEFAULTS.termsText,
		termsLinkText = DEFAULTS.termsLinkText,
		termsHref = DEFAULTS.termsHref,
		showTestimonial = DEFAULTS.showTestimonial,
		testimonial = DEFAULTS.testimonial,
		showClients = DEFAULTS.showClients,
		clientsCount = DEFAULTS.clientsCount,
		clientsText = DEFAULTS.clientsText,
		clientLogos = DEFAULTS.clientLogos,
		onGoogleSignup,
		onSubmit
	}: HeroSignupFormProps = $props();

	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		companyName: '',
		password: '',
		confirmPassword: '',
		acceptTerms: false
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit?.(formData);
	}
</script>

<div
	class="relative bg-linear-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent"
>
	<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		<!-- Grid -->
		<div class="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
			<div>
				<p
					class="inline-block bg-linear-to-l from-primary to-violet-500 bg-clip-text text-sm font-medium text-transparent dark:from-blue-400 dark:to-violet-400"
				>
					{subtitle}
				</p>

				<!-- Title -->
				<div class="mt-4 max-w-2xl md:mb-12">
					<h1 class="mb-4 text-4xl font-semibold text-foreground lg:text-5xl">
						{title}
					</h1>
					<p class="text-muted-foreground">
						{description}
					</p>
				</div>
				<!-- End Title -->

				<!-- Blockquote -->
				{#if showTestimonial && testimonial}
					<blockquote class="relative hidden max-w-sm md:block">
						<svg
							class="absolute start-0 top-0 size-16 -translate-x-6 -translate-y-8 transform text-gray-200 dark:text-neutral-800"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
								fill="currentColor"
							/>
						</svg>

						<div class="relative z-10">
							<p class="text-xl text-foreground italic">
								{testimonial.quote}
							</p>
						</div>

						<footer class="mt-3">
							<div class="flex items-center gap-x-4">
								<div class="shrink-0">
									<img
										class="size-8 rounded-full"
										src={testimonial.avatarUrl}
										alt={testimonial.name}
									/>
								</div>
								<div class="grow">
									<div class="font-semibold text-foreground">{testimonial.name}</div>
									<div class="text-xs text-muted-foreground">{testimonial.title}</div>
								</div>
							</div>
						</footer>
					</blockquote>
				{/if}
				<!-- End Blockquote -->
			</div>
			<!-- End Col -->

			<div>
				<!-- Form -->
				<Card class="ms-auto me-0 rounded-2xl shadow-lg lg:mx-auto lg:me-0 lg:max-w-lg">
					<CardHeader class="text-center">
						<CardTitle class="text-2xl font-bold">{formTitle}</CardTitle>
						<p class="mt-2 text-sm text-muted-foreground">
							{signInText}
							<a
								href={signInHref}
								class="font-medium text-primary decoration-2 hover:underline focus:underline focus:outline-hidden"
							>
								Sign in here
							</a>
						</p>
					</CardHeader>
					<CardContent>
						<form onsubmit={handleSubmit} class="space-y-5">
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
									></path>
									<path
										d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
										fill="#34A853"
									></path>
									<path
										d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
										fill="#FBBC05"
									></path>
									<path
										d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
										fill="#EB4335"
									></path>
								</svg>
								{googleSignupText}
							</Button>

							<div
								class="flex items-center py-3 text-xs text-muted-foreground uppercase before:me-6 before:flex-1 before:border-t before:border-border after:ms-6 after:flex-1 after:border-t after:border-border"
							>
								Or
							</div>

							<!-- Grid -->
							<div class="grid grid-cols-2 gap-4">
								<div>
									<Label for="first-name" class="sr-only">First name</Label>
									<Input
										type="text"
										id="first-name"
										bind:value={formData.firstName}
										placeholder="First name"
										class="w-full"
										required
									/>
								</div>
								<div>
									<Label for="last-name" class="sr-only">Last name</Label>
									<Input
										type="text"
										id="last-name"
										bind:value={formData.lastName}
										placeholder="Last name"
										class="w-full"
										required
									/>
								</div>
								<div>
									<Label for="email" class="sr-only">Email</Label>
									<Input
										type="email"
										id="email"
										bind:value={formData.email}
										placeholder="Email"
										class="w-full"
										required
									/>
								</div>
								<div>
									<Label for="company-name" class="sr-only">Company name</Label>
									<Input
										type="text"
										id="company-name"
										bind:value={formData.companyName}
										placeholder="Company name"
										class="w-full"
										required
									/>
								</div>
								<div class="col-span-2">
									<Label for="password" class="sr-only">New password</Label>
									<Input
										type="password"
										id="password"
										bind:value={formData.password}
										placeholder="New password"
										class="w-full"
										required
									/>
								</div>
								<div class="col-span-2">
									<Label for="confirm-password" class="sr-only">Confirm password</Label>
									<Input
										type="password"
										id="confirm-password"
										bind:value={formData.confirmPassword}
										placeholder="Confirm password"
										class="w-full"
										required
									/>
								</div>
							</div>

							<!-- Checkbox -->
							<div class="flex items-center">
								<Checkbox id="acceptTerms" bind:checked={formData.acceptTerms} />
								<Label for="acceptTerms" class="ms-3 text-sm">
									{termsText}
									<a
										class="font-medium text-primary decoration-2 hover:underline focus:underline focus:outline-hidden"
										href={termsHref}
									>
										{termsLinkText}
									</a>
								</Label>
							</div>
							<!-- End Checkbox -->

							<div class="grid">
								<Button type="submit" class="w-full justify-center">
									{submitButtonText}
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
				<!-- End Form -->
			</div>
		</div>
		<!-- End Grid -->

		<!-- Clients Section -->
		{#if showClients}
			<div
				class="mt-6 flex items-center gap-x-1.5 py-3 text-sm text-foreground after:ms-6 after:flex-1 after:border-t after:border-border md:mt-12"
			>
				<span
					class="bg-gradient-to-l from-primary to-primary/60 bg-clip-text font-semibold text-transparent"
				>
					{clientsCount}
				</span>
				{clientsText}
			</div>

			<!-- Clients -->
			<div class="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-24">
				{#each clientLogos as logo}
					<div class="h-auto w-16 py-3 text-muted-foreground md:w-20 lg:w-24 lg:py-5">
						{@html logo.svg}
					</div>
				{/each}
			</div>
			<!-- End Clients -->
		{/if}
	</div>
</div>
