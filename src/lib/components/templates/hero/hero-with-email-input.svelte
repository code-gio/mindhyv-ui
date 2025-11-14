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
const DEFAULT_PLACEHOLDER_LOGOS: ClientLogo[] = [
	{
		name: 'Placeholder 1',
		svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.12"/><path d="M32 12h8l5 9.5 5-9.5h8l-9 16h-8Zm30 0c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm22-6h8l6 6.5 6-6.5h8l-10 11v5h-8v-5Z" fill="currentColor"/></svg>'
	},
	{
		name: 'Placeholder 2',
		svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.08"/><path d="M24 12h8l6 10 6-10h8l-10 16h-8Zm32 0h16v6h-10v2h8v6h-8v2h10v6H56Zm30 0h8l6 6 6-6h8l-10 10v6h-8v-6Z" fill="currentColor"/></svg>'
	},
	{
		name: 'Placeholder 3',
		svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.06"/><path d="M30 12h10l-7 16h-10Zm14 0h6v16h-6Zm12 0h6l4 10 4-10h6l-7 16h-6Zm28 0c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" fill="currentColor"/></svg>'
	}
];

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		inputPlaceholder = DEFAULTS.inputPlaceholder,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		trustedByText = DEFAULTS.trustedByText,
		showLogos = DEFAULTS.showLogos,
		clientLogos = (DEFAULTS.clientLogos && DEFAULTS.clientLogos.length > 0
			? DEFAULTS.clientLogos
			: DEFAULT_PLACEHOLDER_LOGOS),
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
			<p class="mt-3 text-lg text-foreground">{description}</p>

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
						class="block w-full min-w-80 rounded-md px-4 py-2.5 sm:py-3 sm:text-sm h-12"
						placeholder={inputPlaceholder}
						required
					/>
				</div>
				<Button
					type="submit"
					href={ctaHref}
					variant="default"
					class="inline-flex w-full items-center justify-center gap-x-2 px-4 h-12 py-3 text-sm font-semibold bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-primary/60 sm:w-auto"
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
