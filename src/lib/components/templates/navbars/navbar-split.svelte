<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarSplitProps {
		brandName?: string;
		leftLinks?: NavLink[];
		rightLinks?: NavLink[];
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('navbar-split') || {};

	let {
		brandName = DEFAULTS.brandName,
		leftLinks = DEFAULTS.leftLinks || [],
		rightLinks = DEFAULTS.rightLinks || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: NavbarSplitProps = $props();

	let mobileMenuOpen = $state(false);
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="hidden items-center gap-x-6 md:flex">
				{#each leftLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-muted-foreground hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<a href="/" class="text-xl font-semibold text-foreground">{brandName}</a>

			<div class="hidden items-center gap-x-6 md:flex">
				{#each rightLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-muted-foreground hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
				{#if ctaText}
					<Button href={ctaHref}>
						{ctaText}
					</Button>
				{/if}
			</div>

			<button
				type="button"
				class="inline-flex md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<X class="size-6" />
				{:else}
					<Menu class="size-6" />
				{/if}
			</button>
		</div>

		{#if mobileMenuOpen}
			<div class="border-t border-border py-4 md:hidden">
				<div class="space-y-3">
					{#each [...leftLinks, ...rightLinks] as link}
						<a
							href={link.href}
							class="block text-sm font-medium text-muted-foreground hover:text-foreground"
						>
							{link.label}
						</a>
					{/each}
					{#if ctaText}
						<Button href={ctaHref} class="w-full">
							{ctaText}
						</Button>
					{/if}
				</div>
			</div>
		{/if}
	</nav>
</header>
