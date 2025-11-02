<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { ChevronRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BreadcrumbItem {
		label: string;
		href: string;
	}

	interface AppNavbarWithBreadcrumbProps {
		appName?: string;
		breadcrumbs?: BreadcrumbItem[];
		userAvatar?: string;
		userFallback?: string;
	}

	const DEFAULTS = getTemplateDefaults('app-navbar-with-breadcrumb') || {};

	let {
		appName = DEFAULTS.appName || 'App',
		breadcrumbs = DEFAULTS.breadcrumbs || [],
		userAvatar = DEFAULTS.userAvatar,
		userFallback = DEFAULTS.userFallback || 'U'
	}: AppNavbarWithBreadcrumbProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center gap-x-4">
				<span class="text-xl font-bold text-foreground">{appName}</span>
				{#if breadcrumbs.length > 0}
					<nav class="hidden items-center gap-x-2 md:flex">
						{#each breadcrumbs as item, index}
							{#if index > 0}
								<ChevronRight class="size-4 text-gray-400" />
							{/if}
							<a
								href={item.href}
								class="text-sm text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-primary-foreground"
							>
								{item.label}
							</a>
						{/each}
					</nav>
				{/if}
			</div>
			<Avatar class="size-8">
				{#if userAvatar}
					<AvatarImage src={userAvatar} alt="User" />
				{/if}
				<AvatarFallback>{userFallback}</AvatarFallback>
			</Avatar>
		</div>
	</div>
</header>

