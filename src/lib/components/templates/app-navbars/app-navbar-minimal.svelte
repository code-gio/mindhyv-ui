<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface AppNavbarMinimalProps {
		appName?: string;
		userAvatar?: string;
		userFallback?: string;
	}

	const DEFAULTS = getTemplateDefaults('app-navbar-minimal') || {};

	let {
		appName = DEFAULTS.appName || 'App',
		userAvatar = DEFAULTS.userAvatar,
		userFallback = DEFAULTS.userFallback || 'U'
	}: AppNavbarMinimalProps = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
		<span class="text-xl font-bold text-foreground">{appName}</span>
		<Avatar class="size-8">
			{#if userAvatar}
				<AvatarImage src={userAvatar} alt="User" />
			{/if}
			<AvatarFallback>{userFallback}</AvatarFallback>
		</Avatar>
	</div>
</header>

