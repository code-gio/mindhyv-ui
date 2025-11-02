<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Bell, Settings, LogOut } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface AppNavbarWithDropdownProps {
		appName?: string;
		userAvatar?: string;
		userFallback?: string;
		userName?: string;
	}

	const DEFAULTS = getTemplateDefaults('app-navbar-with-dropdown') || {};

	let {
		appName = DEFAULTS.appName || 'App',
		userAvatar = DEFAULTS.userAvatar,
		userFallback = DEFAULTS.userFallback || 'U',
		userName = DEFAULTS.userName || 'User'
	}: AppNavbarWithDropdownProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
		<span class="text-xl font-bold text-foreground">{appName}</span>
		<div class="flex items-center gap-x-2">
			<Button variant="ghost" size="icon">
				<Bell class="size-5" />
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="ghost" class="relative size-8 rounded-full p-0">
							<Avatar class="size-8">
								{#if userAvatar}
									<AvatarImage src={userAvatar} alt={userName} />
								{/if}
								<AvatarFallback>{userFallback}</AvatarFallback>
							</Avatar>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<div class="px-2 py-1.5">
						<p class="text-sm font-medium">{userName}</p>
					</div>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<Settings class="mr-2 size-4" />
						Settings
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<LogOut class="mr-2 size-4" />
						Logout
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>

