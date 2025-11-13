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
			<span class={cn('text-primary', highlightColor)}>{highlightText}</span>
			{' '}
			<span class="text-foreground">{title}</span>
		</h1>
		<div class="mt-5 max-w-4xl">
			<p class="text-lg text-foreground">
				{description}
			</p>
		</div>
	</div>
</div>
<!-- End Hero -->

{#if showClients}
	<!-- Clients -->
	<div class={cn('relative overflow-hidden pt-4', backgroundColor)}>
		{#if showWavePattern}
			<svg
				class="absolute start-1/2 -bottom-20 w-[1900px] -translate-x-1/2 transform text-primary/25"
				width="2745"
				height="488"
				viewBox="0 0 2745 488"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
					stroke="currentColor"
				/>
				<path
					d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
					stroke="currentColor"
				/>
				<path
					d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
					stroke="currentColor"
				/>
				<path
					d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
					stroke="currentColor"
				/>
				<path
					d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
					stroke="currentColor"
				/>
				<path
					d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
					stroke="currentColor"
				/>
				<path
					d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
					stroke="currentColor"
				/>
				<path
					d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
					stroke="currentColor"
				/>
				<path
					d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
					stroke="currentColor"
				/>
				<path
					d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
					stroke="currentColor"
				/>
				<path
					d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
					stroke="currentColor"
				/>
				<path
					d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
					stroke="currentColor"
				/>
				<path
					d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
					stroke="currentColor"
				/>
				<path
					d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
					stroke="currentColor"
				/>
				<path
					d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
					stroke="currentColor"
				/>
				<path
					d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
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
						<p class="text-sm font-medium tracking-[0.3em] text-foreground uppercase">
							{clientsHeading}
						</p>
					{/if}
				</div>

				<div class="flex flex-wrap items-center gap-x-10 gap-y-6">
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
