<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarDarkProps {
		brandName?: string;
		links?: NavLink[];
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('navbar-dark') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: NavbarDarkProps = $props();

	let mobileMenuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b border-border bg-primary">
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-semibold text-primary-foreground">{brandName}</a>

			<div class="hidden items-center gap-x-6 md:flex">
				{#each links as link}
					<a href={link.href} class="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground">
						{link.label}
					</a>
				{/each}
			</div>

			<div class="flex items-center gap-x-4">
				{#if ctaText}
					<Button href={ctaHref} variant="secondary" class="hidden md:inline-flex">
						{ctaText}
					</Button>
				{/if}
				<button
					type="button"
					class="text-primary-foreground md:hidden"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					{#if mobileMenuOpen}
						<X class="size-6" />
					{:else}
						<Menu class="size-6" />
					{/if}
				</button>
			</div>
		</div>

		{#if mobileMenuOpen}
			<div class="border-t border-border py-4 md:hidden">
				<div class="space-y-3">
					{#each links as link}
						<a href={link.href} class="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground">
							{link.label}
						</a>
					{/each}
					{#if ctaText}
						<Button href={ctaHref} variant="secondary" class="w-full">
							{ctaText}
						</Button>
					{/if}
				</div>
			</div>
		{/if}
	</nav>
</header>

