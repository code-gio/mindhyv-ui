<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Menu, X, Search } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarWithSearchProps {
		brandName?: string;
		links?: NavLink[];
		showSearch?: boolean;
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('navbar-with-search') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		showSearch = DEFAULTS.showSearch,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: NavbarWithSearchProps = $props();

	let mobileMenuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between gap-x-4">
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

			<div class="flex flex-1 items-center justify-end gap-x-4">
				{#if showSearch}
					<div class="relative hidden max-w-sm flex-1 md:block">
						<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
							<Search class="size-4 text-muted-foreground" />
						</div>
						<Input type="search" placeholder="Search..." class="ps-10" />
					</div>
				{/if}
				{#if ctaText}
					<Button href={ctaHref} class="hidden md:inline-flex">
						{ctaText}
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
					{#if showSearch}
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
								<Search class="size-4 text-muted-foreground" />
							</div>
							<Input type="search" placeholder="Search..." class="ps-10" />
						</div>
					{/if}
					{#each links as link}
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

