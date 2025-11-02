<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Menu, X, User, Settings, LogOut } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface UserInfo {
		name: string;
		email: string;
		avatarUrl: string;
		avatarFallback: string;
	}

	interface NavbarWithAvatarProps {
		brandName?: string;
		links?: NavLink[];
		user?: UserInfo;
	}

	const DEFAULTS = getTemplateDefaults('navbar-with-avatar') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		user = DEFAULTS.user
	}: NavbarWithAvatarProps = $props();

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

			<div class="flex items-center gap-x-4">
				{#if user}
					<DropdownMenu>
						<DropdownMenuTrigger class="hidden md:inline-flex">
							<Avatar class="size-9">
								<AvatarImage src={user.avatarUrl} alt={user.name} />
								<AvatarFallback>{user.avatarFallback}</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<div class="px-2 py-1.5">
								<p class="text-sm font-semibold">{user.name}</p>
								<p class="text-xs text-muted-foreground">{user.email}</p>
							</div>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<User class="mr-2 size-4" />
								Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings class="mr-2 size-4" />
								Settings
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut class="mr-2 size-4" />
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
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
				</div>
			</div>
		{/if}
	</nav>
</header>
