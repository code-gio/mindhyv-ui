<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface HeroDarkWithClientsProps {
		title?: string;
		highlightText?: string;
		highlightColor?: string;
		description?: string;
		backgroundColor?: string;
		showClients?: boolean;
		clientsHeading?: string;
		clientLogos?: ClientLogo[];
		maxWidth?: string;
		showWavePattern?: boolean;
	}

	const DEFAULT_CLIENTS_HEADING = 'Trusted by Open Source, enterprise, and more than 99,000 of you';
	const DEFAULT_PLACEHOLDER_LOGOS: ClientLogo[] = [
		{
			name: 'Placeholder Logo 1',
			svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.12"/><path d="M24 20c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12S24 26.627 24 20Zm12-6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6Zm24-3h6l8 18h-6l-1.2-3h-8.6L57 29h-6Zm3.8 9L60 15.6 63.2 20Zm22.2-9h6v12.4c0 2.68-.72 4.66-2.16 6-1.44 1.32-3.44 2-6 2-2.64 0-4.72-.68-6.2-2.04-1.48-1.36-2.2-3.32-2.2-5.88h6c0 1.12.24 1.92.72 2.4.48.48 1.16.72 2.04.72.88 0 1.56-.24 2.04-.72.48-.48.72-1.28.72-2.4Zm9 0h6v18h-6Zm10.8 0H108l8 8.2 8-8.2h6l-11.2 11.4V33h-6v-8.6Z" fill="currentColor"/></svg>'
		},
		{
			name: 'Placeholder Logo 2',
			svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.08"/><path d="M32 12h10l-7 16h-10Zm14 0h6l4 8 4-8h6l-7 16h-6Zm28 0c5.52 0 10 4.48 10 10s-4.48 10-10 10h-8V12Zm-2 6v8h2c2.21 0 4-1.79 4-4s-1.79-4-4-4Z" fill="currentColor"/></svg>'
		},
		{
			name: 'Placeholder Logo 3',
			svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.1"/><path d="M26 12h6l4 16h-6Zm10 0h6v16h-6Zm16 0h6l4 10 4-10h6l-7 16h-6Zm28 0c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" fill="currentColor"/></svg>'
		},
		{
			name: 'Placeholder Logo 4',
			svg: '<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="12" fill="currentColor" opacity="0.07"/><path d="M24 12h8l6 10 6-10h8l-10 16h-8Zm36 0h16v6h-10v2h8v6h-8v2h10v6H60Zm26 0h8l6 6 6-6h8l-10 10v6h-8v-6Z" fill="currentColor"/></svg>'
		}
	];

	// Get defaults from template registry (single source of truth)
	const DEFAULTS = getTemplateDefaults('hero-dark-with-clients') || {};

	let {
		title = DEFAULTS.title ?? 'Agency',
		highlightText = DEFAULTS.highlightText ?? 'MindHyv',
		highlightColor = DEFAULTS.highlightColor ?? 'text-primary',
		description = DEFAULTS.description,
		backgroundColor = DEFAULTS.backgroundColor ?? 'bg-background',
		showClients = DEFAULTS.showClients,
		clientsHeading = DEFAULTS.clientsHeading ?? DEFAULT_CLIENTS_HEADING,
		clientLogos = DEFAULTS.clientLogos && DEFAULTS.clientLogos.length > 0
			? DEFAULTS.clientLogos
			: DEFAULT_PLACEHOLDER_LOGOS,
		maxWidth = DEFAULTS.maxWidth,
		showWavePattern = DEFAULTS.showWavePattern
	}: HeroDarkWithClientsProps = $props();

	const headingSegments = $derived(() => {
		if (!clientsHeading || clientsHeading.trim() === DEFAULT_CLIENTS_HEADING) {
			return ['Trusted by Open Source,', 'enterprise,', 'and more than 99,000 of you'];
		}
		return [clientsHeading];
	});
</script>

<!-- Hero -->
<div class={cn('overflow-hidden', backgroundColor)}>
	<div class={cn('mx-auto px-4 pt-24 pb-24 lg:pt-32 xl:px-0', maxWidth)}>
		<h1 class="text-5xl font-semibold text-foreground md:text-6xl">
			<span class={cn('text[#FFFF00]', highlightColor)}>{highlightText}</span>
			{' '}
			<span class="text-foreground">{title}</span>
		</h1>
		<div class="mt-5 max-w-4xl">
			<p class="text-lg text-foreground/50">
				{description}
			</p>
		</div>
	</div>
</div>
<!-- End Hero -->

{#if showClients}
	<!-- Clients -->
	<div class={cn('relative overflow-hidden pt-6 pb-1 ', backgroundColor)}>
		{#if showWavePattern}
			<svg
				class="absolute start-1/2 -bottom-20 w-[1900px] -translate-x-1/2 transform text-primary/25 "
				width="2745"
				height="488"
				viewBox="0 0 2745 488"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 26C232.505 98.9367 853.749 222.819 1482.69 134.855C2111.63 46.8914 2585.54 129.724 2743.87 182.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 51C232.505 123.937 853.749 247.819 1482.69 159.855C2111.63 71.8914 2585.54 154.724 2743.87 207.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 76C232.505 148.937 853.749 272.819 1482.69 184.855C2111.63 96.8914 2585.54 179.724 2743.87 232.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 101C232.505 173.937 853.749 297.819 1482.69 209.855C2111.63 121.891 2585.54 204.724 2743.87 257.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 126C232.505 198.937 853.749 322.819 1482.69 234.855C2111.63 146.891 2585.54 229.724 2743.87 282.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 151C232.505 223.937 853.749 347.819 1482.69 259.855C2111.63 171.891 2585.54 254.724 2743.87 307.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 176C232.505 248.937 853.749 372.819 1482.69 284.855C2111.63 196.891 2585.54 279.724 2743.87 332.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 201C232.505 273.937 853.749 397.819 1482.69 309.855C2111.63 221.891 2585.54 304.724 2743.87 357.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 226C232.505 298.937 853.749 422.819 1482.69 334.855C2111.63 246.891 2585.54 329.724 2743.87 382.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 251C232.505 323.937 853.749 447.819 1482.69 359.855C2111.63 271.891 2585.54 354.724 2743.87 407.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 276C232.505 348.937 853.749 472.819 1482.69 384.855C2111.63 296.891 2585.54 379.724 2743.87 432.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 301C232.505 373.937 853.749 497.819 1482.69 409.855C2111.63 321.891 2585.54 404.724 2743.87 457.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 326C232.505 398.937 853.749 522.819 1482.69 434.855C2111.63 346.891 2585.54 429.724 2743.87 482.136"
					stroke="currentColor"
				/>
				<path
					d="M0.5 351C232.505 423.937 853.749 547.819 1482.69 459.855C2111.63 371.891 2585.54 454.724 2743.87 507.136"
					stroke="currentColor"
				/>
				
			</svg>
		{/if}

		<div class="relative z-10">
			<div class={cn('mx-auto px-4 xl:px-0', maxWidth)}>
				<div class="mb-4">
					{#if headingSegments.length > 1}
						<p
							class="flex flex-wrap items-center gap-x-3 text-sm font-medium tracking-[0.3em] text-foreground uppercase"
						>
							{#each headingSegments as segment, index}
								<span class="whitespace-pre">{segment}</span>
							{/each}
						</p>
					{:else}
						<!-- <p class="text-sm font-medium tracking-[0.3em] text-foreground uppercase">
							{clientsHeading}
							</p> -->
						<h2 class="text-foreground/50 mb-8">
							{clientsHeading}
						</h2>
					{/if}
				</div>

				<div class="flex flex-wrap items-center gap-x-10 gap-y-1  pt-6 pb-4 ">
					{#each clientLogos as logo}
						<div
							class="h-auto w-20 text-foreground/70 md:w-24"
							title={logo.name}
							role="img"
							aria-label={logo.name}
						>
							{@html logo.svg}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- End Clients -->
{/if}
