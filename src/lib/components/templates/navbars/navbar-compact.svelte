<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarCompactProps {
		brandName?: string;
		links?: NavLink[];
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('navbar-compact') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: NavbarCompactProps = $props();
</script>

<header class="border-b border-border bg-background">
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-14 items-center justify-between">
			<div class="flex items-center gap-x-8">
				<a href="/" class="font-semibold text-foreground">{brandName}</a>
				<div class="hidden items-center gap-x-4 md:flex">
					{#each links as link}
						<a
							href={link.href}
							class="text-sm text-muted-foreground hover:text-foreground"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>

			{#if ctaText}
				<Button href={ctaHref} size="sm">
					{ctaText}
				</Button>
			{/if}
		</div>
	</nav>
</header>
