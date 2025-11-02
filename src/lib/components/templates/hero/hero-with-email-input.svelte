<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface HeroWithEmailInputProps {
		title?: string;
		description?: string;
		inputPlaceholder?: string;
		ctaText?: string;
		ctaHref?: string;
		trustedByText?: string;
		showLogos?: boolean;
		clientLogos?: ClientLogo[];
		imageSrc?: string;
		imageAlt?: string;
		onSubmit?: (email: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-with-email-input') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		inputPlaceholder = DEFAULTS.inputPlaceholder,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		trustedByText = DEFAULTS.trustedByText,
		showLogos = DEFAULTS.showLogos,
		clientLogos = DEFAULTS.clientLogos,
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt,
		onSubmit
	}: HeroWithEmailInputProps = $props();

	let email = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (email) {
			onSubmit?.(email);
		}
	}
</script>

<div class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
	<!-- Grid -->
	<div class="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
		<div class="lg:col-span-3">
			<h1 class="block text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
				{title}
			</h1>
			<p class="mt-3 text-lg text-muted-foreground">{description}</p>

			<form
				onsubmit={handleSubmit}
				class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8"
			>
				<div class="w-full sm:w-auto">
					<Label for="hero-input" class="sr-only">Email</Label>
					<Input
						type="email"
						id="hero-input"
						name="hero-input"
						bind:value={email}
						class="block w-full min-w-80 rounded-md px-4 py-2.5 sm:py-3 sm:text-sm"
						placeholder={inputPlaceholder}
						required
					/>
				</div>
				<Button
					type="submit"
					href={ctaHref}
					class="inline-flex w-full items-center justify-center gap-x-2 px-4 py-3 text-sm font-medium sm:w-auto"
				>
					{ctaText}
				</Button>
			</form>

			<!-- Brands -->
			{#if showLogos}
				<div class="mt-6 lg:mt-12">
					<span class="text-xs font-medium text-foreground uppercase">{trustedByText}</span>

					<div class="mt-4 flex gap-x-8">
						{#each clientLogos as logo}
							<div class="h-auto w-20 text-foreground" title={logo.name}>
								{@html logo.svg}
							</div>
						{/each}
					</div>
				</div>
			{/if}
			<!-- End Brands -->
		</div>
		<!-- End Col -->

		<div class="mt-10 lg:col-span-4 lg:mt-0">
			<img class="w-full rounded-xl" src={imageSrc} alt={imageAlt} />
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
