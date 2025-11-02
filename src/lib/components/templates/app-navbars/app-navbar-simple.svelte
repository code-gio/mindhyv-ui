<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Bell, Search, Menu } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface AppNavbarSimpleProps {
		appName?: string;
		userAvatar?: string;
		userFallback?: string;
	}

	const DEFAULTS = getTemplateDefaults('app-navbar-simple') || {};

	let {
		appName = DEFAULTS.appName || 'App',
		userAvatar = DEFAULTS.userAvatar,
		userFallback = DEFAULTS.userFallback || 'U'
	}: AppNavbarSimpleProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
		<div class="flex items-center gap-x-4">
			<Button variant="ghost" size="icon" class="md:hidden">
				<Menu class="size-5" />
			</Button>
			<span class="text-xl font-bold text-foreground">{appName}</span>
		</div>
		<div class="flex items-center gap-x-2">
			<Button variant="ghost" size="icon">
				<Search class="size-5" />
			</Button>
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
</header>

