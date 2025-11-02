<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Bell } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Tab {
		label: string;
		href: string;
		active?: boolean;
	}

	interface AppNavbarWithTabsProps {
		appName?: string;
		tabs?: Tab[];
		userAvatar?: string;
		userFallback?: string;
	}

	const DEFAULTS = getTemplateDefaults('app-navbar-with-tabs') || {};

	let {
		appName = DEFAULTS.appName || 'App',
		tabs = DEFAULTS.tabs || [],
		userAvatar = DEFAULTS.userAvatar,
		userFallback = DEFAULTS.userFallback || 'U'
	}: AppNavbarWithTabsProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<span class="text-xl font-bold text-foreground">{appName}</span>
			<div class="flex items-center gap-x-2">
				<Button variant="ghost" size="icon">
					<Bell class="size-5" />
				</Button>
				<Avatar class="size-8">
					{#if userAvatar}
						<AvatarImage src={userAvatar} alt="User" />
					{/if}
					<AvatarFallback>{userFallback}</AvatarFallback>
				</Avatar>
			</div>
		</div>
		{#if tabs.length > 0}
			<nav class="-mb-px flex gap-x-6">
				{#each tabs as tab}
					<a
						href={tab.href}
						class={cn(
							'border-b-2 py-4 text-sm font-medium transition-colors',
							tab.active
								? 'border-primary text-primary'
								: 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-primary-foreground'
						)}
					>
						{tab.label}
					</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>

