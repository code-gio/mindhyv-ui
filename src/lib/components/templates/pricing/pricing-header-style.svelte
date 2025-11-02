<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Check } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface PricingPlan {
		name: string;
		price: number;
		subtitle: string;
		features: string[];
		ctaText: string;
		ctaHref: string;
	}

	interface PricingHeaderStyleProps {
		title?: string;
		description?: string;
		plans?: PricingPlan[];
		onPlanClick?: (planName: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('pricing-header-style') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		plans = DEFAULTS.plans,
		onPlanClick
	}: PricingHeaderStyleProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each plans as plan}
			<Card>
				<CardHeader class="border-b border-border pb-5">
					<CardTitle class="text-lg font-medium">{plan.name}</CardTitle>
					<p class="mt-2 text-sm text-muted-foreground">{plan.subtitle}</p>
					<div class="mt-5">
						<span class="text-6xl font-bold text-foreground">{plan.price}</span>
						<span class="ms-3 text-lg font-medium text-muted-foreground">/month</span>
					</div>
				</CardHeader>
				<CardContent class="pt-7">
					<ul class="space-y-2.5 text-sm">
						{#each plan.features as feature}
							<li class="flex gap-x-3">
								<Check class="mt-0.5 size-5 shrink-0 text-primary" />
								<span class="text-muted-foreground">
									{feature}
								</span>
							</li>
						{/each}
					</ul>
				</CardContent>
				<CardFooter>
					<Button
						href={plan.ctaHref}
						onclick={() => onPlanClick?.(plan.name)}
						variant="outline"
						class="w-full justify-center border-primary text-primary hover:bg-primary/10"
					>
						{plan.ctaText}
					</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
	<!-- End Grid -->
</div>
