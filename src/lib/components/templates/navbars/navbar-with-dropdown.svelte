<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Menu, X, ChevronDown } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavDropdown {
		label: string;
		items: NavLink[];
	}

	interface NavbarWithDropdownProps {
		brandName?: string;
		links?: NavLink[];
		dropdowns?: NavDropdown[];
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('navbar-with-dropdown') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		dropdowns = DEFAULTS.dropdowns || [],
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: NavbarWithDropdownProps = $props();

	let mobileMenuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
				{#each dropdowns as dropdown}
					<DropdownMenu>
						<DropdownMenuTrigger class="flex items-center gap-x-1 text-sm font-medium text-muted-foreground hover:text-foreground">
							{dropdown.label}
							<ChevronDown class="size-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{#each dropdown.items as item}
								<DropdownMenuItem>
									<a href={item.href} class="w-full">
										{item.label}
									</a>
								</DropdownMenuItem>
							{/each}
						</DropdownMenuContent>
					</DropdownMenu>
				{/each}
			</div>

			<div class="flex items-center gap-x-4">
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
					{#each links as link}
						<a
							href={link.href}
							class="block text-sm font-medium text-muted-foreground hover:text-foreground"
						>
							{link.label}
						</a>
					{/each}
					{#each dropdowns as dropdown}
						<div>
							<p class="mb-2 text-xs font-semibold uppercase text-muted-foreground">
								{dropdown.label}
							</p>
							{#each dropdown.items as item}
								<a
									href={item.href}
									class="block py-2 text-sm text-muted-foreground hover:text-foreground"
								>
									{item.label}
								</a>
							{/each}
						</div>
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

