<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarWithCtaButtonsProps {
		brandName?: string;
		links?: NavLink[];
		primaryCta?: { text: string; href: string };
		secondaryCta?: { text: string; href: string };
	}

	const DEFAULTS = getTemplateDefaults('navbar-with-cta-buttons') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		primaryCta = DEFAULTS.primaryCta,
		secondaryCta = DEFAULTS.secondaryCta
	}: NavbarWithCtaButtonsProps = $props();

	let mobileMenuOpen = $state(false);
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-semibold text-foreground">{brandName}</a>

			<div class="hidden items-center gap-x-6 md:flex">
				{#each links as link}
					<a
						href={link.href}
						class="text-sm font-medium text-muted-foreground hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div class="flex items-center gap-x-3">
				{#if secondaryCta}
					<Button variant="ghost" href={secondaryCta.href} class="hidden md:inline-flex">
						{secondaryCta.text}
					</Button>
				{/if}
				{#if primaryCta}
					<Button href={primaryCta.href} class="hidden md:inline-flex">
						{primaryCta.text}
					</Button>
				{/if}
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
		</div>

		{#if mobileMenuOpen}
			<div class="border-t border-border py-4 md:hidden">
				<div class="space-y-3">
					{#each links as link}
						<a
							href={link.href}
							class="block text-sm font-medium text-muted-foreground hover:text-foreground"
						>
							{link.label}
						</a>
					{/each}
					<div class="space-y-2">
						{#if secondaryCta}
							<Button variant="ghost" href={secondaryCta.href} class="w-full">
								{secondaryCta.text}
							</Button>
						{/if}
						{#if primaryCta}
							<Button href={primaryCta.href} class="w-full">
								{primaryCta.text}
							</Button>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>
