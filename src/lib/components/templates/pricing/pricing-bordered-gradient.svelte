<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getTemplateDefaults } from '../template-registry';

	interface PricingPlan {
		name: string;
		price: string | number;
		features: string[];
		ctaText: string;
		ctaHref: string;
	}

	interface PricingBorderedGradientProps {
		title?: string;
		description?: string;
		plans?: PricingPlan[];
		onPlanClick?: (planName: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('pricing-bordered-gradient') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		plans = DEFAULTS.plans,
		onPlanClick
	}: PricingBorderedGradientProps = $props();
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div
		class="relative mt-12 before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(closest-side,hsl(var(--border)),transparent)] dark:before:bg-[radial-gradient(closest-side,hsl(var(--border)),transparent)]"
	>
		<div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
			{#each plans as plan}
				<!-- Card -->
				<div class="flex h-full flex-col text-center">
					<div class="bg-background px-8 pt-8 pb-5">
						<h4 class="text-lg font-medium text-foreground">{plan.name}</h4>
					</div>

					<div class="h-full bg-background px-8 lg:mt-px lg:py-5">
						<span class="mt-7 text-5xl font-bold text-foreground">
							{#if typeof plan.price === 'string'}
								{plan.price}
							{:else}
								<span class="-me-2 text-2xl font-bold">$</span>
								{plan.price}
							{/if}
						</span>
					</div>

					<div class="flex justify-center bg-background px-8 pt-7 lg:mt-px">
						<ul class="space-y-2.5 text-center text-sm">
							{#each plan.features as feature}
								<li class="text-muted-foreground">
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					<div class="bg-background px-8 py-8">
						<Button
							href={plan.ctaHref}
							onclick={() => onPlanClick?.(plan.name)}
							variant="outline"
							class="w-full justify-center border-primary text-primary hover:border-primary/80 hover:text-primary/80 focus:border-primary/80 focus:text-primary/80"
						>
							{plan.ctaText}
						</Button>
					</div>
				</div>
				<!-- End Card -->
			{/each}
		</div>
	</div>
	<!-- End Grid -->
</div>
