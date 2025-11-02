<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Check } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface Feature {
		name: string;
		included: boolean;
	}

	interface PricingPlan {
		name: string;
		price: number;
		period: string;
		description: string;
		badge?: string;
		features: Feature[];
		ctaText: string;
		ctaHref: string;
		isPopular?: boolean;
	}

	interface PricingTwoCardsProps {
		title?: string;
		description?: string;
		plans?: PricingPlan[];
		onPlanClick?: (planName: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('pricing-two-cards') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		plans = DEFAULTS.plans,
		onPlanClick
	}: PricingTwoCardsProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 lg:grid-cols-2 lg:items-center">
		{#each plans as plan}
			<Card class={plan.isPopular ? 'border-primary shadow-xl' : ''}>
				<CardHeader class="text-center">
					{#if plan.badge}
						<Badge variant={plan.isPopular ? 'default' : 'secondary'} class="mb-3 self-center">
							{plan.badge}
						</Badge>
					{/if}
					<CardTitle class="text-lg font-medium">{plan.name}</CardTitle>
					<div class="mt-5 text-5xl font-bold text-foreground">
						<span class="-me-2 text-2xl font-bold">$</span>
						{plan.price}
					</div>
					<p class="mt-2 text-sm text-muted-foreground">{plan.period}</p>
					<p class="mt-3 text-sm text-muted-foreground">{plan.description}</p>
				</CardHeader>
				<CardContent>
					<ul class="space-y-3 text-sm">
						{#each plan.features as feature}
							<li class="flex gap-x-3">
								<Check
									class="mt-0.5 size-5 shrink-0 {feature.included
										? 'text-primary'
										: 'text-muted-foreground'}"
								/>
								<span class="text-muted-foreground">
									{feature.name}
								</span>
							</li>
						{/each}
					</ul>
				</CardContent>
				<CardFooter>
					<Button
						href={plan.ctaHref}
						onclick={() => onPlanClick?.(plan.name)}
						variant={plan.isPopular ? 'default' : 'outline'}
						class="w-full justify-center"
					>
						{plan.ctaText}
					</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
	<!-- End Grid -->
</div>
