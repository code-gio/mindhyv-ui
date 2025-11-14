<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { Check } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface PricingPlan {
		name: string;
		price: number;
		priceAnnual?: number;
		description: string;
		features: string[];
		ctaText: string;
		ctaHref: string;
		isPopular?: boolean;
	}

	interface ComparisonFeature {
		name: string;
		plans: Record<string, boolean>;
	}

	interface ComparisonCategory {
		name: string;
		features: ComparisonFeature[];
	}

	interface PricingCardsToggleProps {
		title?: string;
		description?: string;
		monthlyLabel?: string;
		annualLabel?: string;
		annualSavings?: string;
		plans?: PricingPlan[];
		comparisonTitle?: string;
		comparisonCategories?: ComparisonCategory[];
		onPlanClick?: (planName: string, isAnnual: boolean) => void;
	}

	const DEFAULTS = getTemplateDefaults('pricing-cards-toggle') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		monthlyLabel = DEFAULTS.monthlyLabel,
		annualLabel = DEFAULTS.annualLabel,
		annualSavings = DEFAULTS.annualSavings,
		plans = DEFAULTS.plans,
		comparisonTitle = DEFAULTS.comparisonTitle,
		comparisonCategories = DEFAULTS.comparisonCategories,
		onPlanClick
	}: PricingCardsToggleProps = $props();

	let isAnnual = $state(true);
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Switch -->
	<div class="flex items-center justify-center gap-x-3">
		<Label for="pricing-switch" class="text-sm text-foreground">{monthlyLabel}</Label>
		<Switch id="pricing-switch" bind:checked={isAnnual} />
		<Label for="pricing-switch" class="relative text-sm text-foreground">
			{annualLabel}
			{#if annualSavings}
				<span class="absolute start-auto -end-28 -top-10">
					<span class="flex items-center">
						<svg
							class="-me-6 h-8 w-14"
							width="45"
							height="25"
							viewBox="0 0 45 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
								fill="currentColor"
								class="fill-gray-300 dark:fill-neutral-700"
							/>
						</svg>
						<Badge
							variant="default"
							class="mt-3 inline-block px-2.5 py-1 text-[11px] leading-5 font-semibold whitespace-nowrap uppercase"
						>
							{annualSavings}
						</Badge>
					</span>
				</span>
			{/if}
		</Label>
	</div>
	<!-- End Switch -->

	<!-- Grid -->
	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
		{#each plans as plan}
			<Card
				class={plan.isPopular
					? 'border-2 border-primary text-center shadow-xl'
					: 'border border-border text-center'}
			>
				<CardHeader>
					{#if plan.isPopular}
						<Badge
							variant="default"
							class="mb-3 inline-block mx-auto self-center px-3 py-1.5 text-xs font-semibold uppercase"
						>
							Most popular
						</Badge>
					{/if}
					<CardTitle class="text-lg font-medium">{plan.name}</CardTitle>
					<div class="mt-5 text-5xl font-bold text-foreground">
						{#if typeof plan.price === 'string'}
							{plan.price}
						{:else}
							<span class="-me-2 text-2xl font-bold">$</span>
							{isAnnual && plan.priceAnnual ? plan.priceAnnual : plan.price}
						{/if}
					</div>
					<p class="mt-2 text-sm text-muted-foreground">{plan.description}</p>
				</CardHeader>
				<CardContent>
					<ul class="space-y-2.5 text-sm">
						{#each plan.features as feature}
							<li class="flex gap-x-2">
								<Check class="mt-0.5 size-4 shrink-0 text-primary" />
								<span class="text-muted-foreground">
									{feature}
								</span>
							</li>
						{/each}
					</ul>

					<Button
						href={plan.ctaHref}
						onclick={() => onPlanClick?.(plan.name, isAnnual)}
						variant={plan.isPopular ? 'default' : 'outline'}
						class="mt-5 w-full justify-center py-6"
					>
						{plan.ctaText}
					</Button>
				</CardContent>
			</Card>
		{/each}
	</div>
	<!-- End Grid -->

	<!-- Comparison table -->
	{#if comparisonCategories && comparisonCategories.length > 0}
		<div class="mt-20 lg:mt-32">
			<div class="mb-10 lg:mb-20 lg:text-center">
				<h3 class="text-2xl font-semibold text-foreground">{comparisonTitle}</h3>
			</div>

			<!-- xs to lg -->
			<div class="space-y-24 lg:hidden">
				{#each plans as plan}
					<section>
						<div class="mb-4 px-4">
							<h2 class="text-lg font-medium leading-6 text-foreground">{plan.name}</h2>
						</div>

						{#each comparisonCategories as category}
							<table class="w-full">
								<caption
									class="border-t border-border bg-muted py-3 px-4 text-start text-sm font-bold text-foreground"
								>
									{category.name}
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">Feature</th>
										<th class="sr-only" scope="col">Included</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-border">
									{#each category.features as feature}
										<tr class="border-t border-border">
											<th
												class="whitespace-nowrap py-5 px-4 text-start text-sm font-normal text-muted-foreground"
												scope="row"
											>
												{feature.name}
											</th>
											<td class="py-5 pe-4">
												{#if feature.plans[plan.name]}
													<Check class="ms-auto size-5 shrink-0 text-primary" />
													<span class="sr-only">Yes</span>
												{:else}
													<svg
														class="ms-auto size-5 shrink-0 text-muted-foreground"
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path d="M5 12h14" />
													</svg>
													<span class="sr-only">No</span>
												{/if}
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						{/each}
					</section>
				{/each}
			</div>
			<!-- End xs to lg -->

			<!-- lg+ -->
			<div class="hidden lg:block">
				<table class="h-px w-full">
					<caption class="sr-only">Pricing plan comparison</caption>
					<thead class="sticky inset-x-0 top-0 bg-background">
						<tr>
							<th class="py-4 ps-6 pe-6 text-start text-sm font-medium text-foreground" scope="col">
								<span class="sr-only">Feature by</span>
								<span>Plans</span>
							</th>
							{#each plans as plan}
								<th
									class="w-1/4 py-4 px-6 text-center text-lg font-medium leading-6 text-foreground"
									scope="col"
								>
									{plan.name}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-y divide-border border-t border-border">
						{#each comparisonCategories as category}
							<tr>
								<th
									class="bg-muted py-3 ps-6 text-start font-bold text-foreground"
									colspan={plans.length + 1}
									scope="colgroup"
								>
									{category.name}
								</th>
							</tr>
							{#each category.features as feature}
								<tr>
									<th
										class="whitespace-nowrap py-5 ps-6 pe-6 text-start text-sm font-normal text-muted-foreground"
										scope="row"
									>
										{feature.name}
									</th>
									{#each plans as plan}
										<td class="py-5 px-6">
											{#if feature.plans[plan.name]}
												<Check class="mx-auto size-5 shrink-0 text-primary" />
												<span class="sr-only">Included in {plan.name}</span>
											{:else}
												<svg
													class="mx-auto size-5 shrink-0 text-muted-foreground"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<path d="M5 12h14" />
												</svg>
												<span class="sr-only">Not included in {plan.name}</span>
											{/if}
										</td>
									{/each}
								</tr>
							{/each}
						{/each}
					</tbody>
				</table>
			</div>
			<!-- End lg+ -->
		</div>
	{/if}
	<!-- End Comparison table -->
</div>
