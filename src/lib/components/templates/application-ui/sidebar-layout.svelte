<script lang="ts">
	import { Home, Users, Settings, FileText, HelpCircle } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavItem {
		label: string;
		icon: any;
		href: string;
		active?: boolean;
	}

	interface SidebarLayoutProps {
		logo?: string;
		appName?: string;
		navItems?: NavItem[];
	}

	const DEFAULTS = getTemplateDefaults('sidebar-layout') || {};

	let {
		logo = DEFAULTS.logo,
		appName = DEFAULTS.appName || 'App',
		navItems = DEFAULTS.navItems || []
	}: SidebarLayoutProps = $props();
</script>

<div class="flex h-screen bg-gray-100 dark:bg-primary">
	<!-- Sidebar -->
	<aside class="w-64 border-r border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
		<div class="flex h-16 items-center border-b border-gray-200 px-6 dark:border-neutral-700">
			{#if logo}
				<img src={logo} alt={appName} class="h-8" />
			{:else}
				<span class="text-xl font-bold text-foreground">{appName}</span>
			{/if}
		</div>
		<nav class="p-4">
			<ul class="space-y-1">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class={cn(
								'flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm transition-colors',
								item.active
									? 'bg-primary text-primary-foreground'
									: 'text-muted-foreground hover:bg-accent dark:text-neutral-300 dark:hover:bg-neutral-700'
							)}
						>
							<item.icon class="size-5" />
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>

	<!-- Main Content -->
	<div class="flex-1 overflow-auto">
		<header class="h-16 border-b border-gray-200 bg-white px-6 dark:border-neutral-700 dark:bg-neutral-800">
			<div class="flex h-full items-center justify-between">
				<h1 class="text-2xl font-semibold text-foreground">Dashboard</h1>
			</div>
		</header>
		<main class="p-6">
			<div class="mx-auto max-w-340">
				<p class="text-muted-foreground">Main content area</p>
			</div>
		</main>
	</div>
</div>

