<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Bell, Search } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface AppNavbarWithSearchProps {
		appName?: string;
		userAvatar?: string;
		userFallback?: string;
	}

	const DEFAULTS = getTemplateDefaults('app-navbar-with-search') || {};

	let {
		appName = DEFAULTS.appName || 'App',
		userAvatar = DEFAULTS.userAvatar,
		userFallback = DEFAULTS.userFallback || 'U'
	}: AppNavbarWithSearchProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto flex h-16 max-w-full items-center justify-between gap-x-4 px-4 sm:px-6 lg:px-8">
		<span class="shrink-0 text-xl font-bold text-foreground">{appName}</span>
		<div class="hidden max-w-md flex-1 md:block">
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
					<Search class="size-4 text-gray-400" />
				</div>
				<Input type="search" placeholder="Search..." class="ps-10" />
			</div>
		</div>
		<div class="flex items-center gap-x-2">
			<Button variant="ghost" size="icon" class="md:hidden">
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

