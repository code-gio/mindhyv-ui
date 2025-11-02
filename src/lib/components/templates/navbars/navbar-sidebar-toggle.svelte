<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X, Search } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarSidebarToggleProps {
		brandName?: string;
		links?: NavLink[];
		showSearch?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('navbar-sidebar-toggle') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		showSearch = DEFAULTS.showSearch
	}: NavbarSidebarToggleProps = $props();

	let sidebarOpen = $state(false);
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<nav class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center gap-x-4">
				<button type="button" class="inline-flex" onclick={() => (sidebarOpen = !sidebarOpen)}>
					<Menu class="size-6 text-foreground" />
				</button>
				<a href="/" class="text-xl font-semibold text-foreground">{brandName}</a>
			</div>

			{#if showSearch}
				<div class="hidden max-w-xl flex-1 px-8 md:block">
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
							<Search class="size-4 text-muted-foreground" />
						</div>
						<input
							type="search"
							placeholder="Search..."
							class="block w-full rounded-lg border border-border bg-background py-2 ps-10 pe-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-hidden "
						/>
					</div>
				</div>
			{/if}

			<div class="flex items-center gap-x-4">
				<Button size="sm">Sign in</Button>
			</div>
		</div>
	</nav>
</header>

{#if sidebarOpen}
	<div class="fixed inset-0 z-40 bg-black/50" onclick={() => (sidebarOpen = false)}></div>
	<aside
		class="fixed inset-y-0 start-0 z-50 w-64 bg-white transition-transform dark:bg-primary"
	>
		<div class="flex h-full flex-col p-4">
			<div class="mb-6 flex items-center justify-between">
				<span class="text-lg font-semibold text-foreground">{brandName}</span>
				<button type="button" onclick={() => (sidebarOpen = false)}>
					<X class="size-5" />
				</button>
			</div>
			<nav class="space-y-2">
				{#each links as link}
					<a
						href={link.href}
						class="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent "
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	</aside>
{/if}
