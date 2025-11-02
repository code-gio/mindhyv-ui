<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Home } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface NavbarWithBreadcrumbProps {
		brandName?: string;
		breadcrumbs?: BreadcrumbItem[];
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('navbar-with-breadcrumb') || {};

	let {
		brandName = DEFAULTS.brandName,
		breadcrumbs = DEFAULTS.breadcrumbs || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: NavbarWithBreadcrumbProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center gap-x-6">
				<a href="/" class="text-xl font-semibold text-foreground">{brandName}</a>

				{#if breadcrumbs.length > 0}
					<div class="hidden items-center gap-x-2 md:flex">
						<ChevronRight class="size-4 text-muted-foreground" />
						{#each breadcrumbs as crumb, index}
							{#if crumb.href}
								<a
									href={crumb.href}
									class="text-sm text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-primary-foreground"
								>
									{crumb.label}
								</a>
							{:else}
								<span class="text-sm font-medium text-foreground">
									{crumb.label}
								</span>
							{/if}
							{#if index < breadcrumbs.length - 1}
								<ChevronRight class="size-4 text-muted-foreground" />
							{/if}
						{/each}
					</div>
				{/if}
			</div>

			{#if ctaText}
				<Button href={ctaHref}>
					{ctaText}
				</Button>
			{/if}
		</div>
	</nav>
</header>
