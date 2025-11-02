<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Bell } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Notification {
		id: string;
		title: string;
		message: string;
		time: string;
		read?: boolean;
		type?: 'info' | 'success' | 'warning' | 'error';
	}

	interface NotificationListProps {
		title?: string;
		notifications?: Notification[];
	}

	const DEFAULTS = getTemplateDefaults('notification-list') || {};

	let {
		title = DEFAULTS.title || 'Notifications',
		notifications = DEFAULTS.notifications || []
	}: NotificationListProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-x-2">
				<Bell class="size-5" />
				{title}
			</CardTitle>
		</CardHeader>
		<CardContent class="p-0">
			<ul class="divide-y divide-border">
				{#each notifications as notification}
					<li class={cn(
						'p-4 transition-colors hover:bg-accent/50',
						!notification.read && 'bg-blue-50/50 dark:bg-blue-950/20'
					)}>
						<div class="flex items-start justify-between gap-x-3">
							<div class="flex-1">
								<p class="text-sm font-medium text-foreground">{notification.title}</p>
								<p class="mt-1 text-sm text-muted-foreground">{notification.message}</p>
								<p class="mt-1 text-xs text-muted-foreground">{notification.time}</p>
							</div>
							{#if !notification.read}
								<Badge variant="secondary" class="shrink-0">New</Badge>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</CardContent>
	</Card>
</div>

