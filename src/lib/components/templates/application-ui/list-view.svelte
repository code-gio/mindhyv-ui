<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ListItem {
		id: string;
		name: string;
		avatar?: string;
		avatarFallback?: string;
		status?: string;
		description?: string;
	}

	interface ListViewProps {
		title?: string;
		items?: ListItem[];
	}

	const DEFAULTS = getTemplateDefaults('list-view') || {};

	let {
		title = DEFAULTS.title,
		items = DEFAULTS.items || []
	}: ListViewProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="p-6">
		{#if title}
			<h2 class="mb-4 text-xl font-bold text-foreground">{title}</h2>
		{/if}
		<ul class="divide-y divide-border">
			{#each items as item}
				<li class="flex items-center justify-between py-4">
					<div class="flex items-center gap-x-3">
						{#if item.avatar || item.avatarFallback}
							<Avatar>
								<AvatarImage src={item.avatar} alt={item.name} />
								<AvatarFallback>{item.avatarFallback}</AvatarFallback>
							</Avatar>
						{/if}
						<div>
							<p class="text-sm font-medium text-foreground">{item.name}</p>
							{#if item.description}
								<p class="text-xs text-muted-foreground">{item.description}</p>
							{/if}
						</div>
					</div>
					{#if item.status}
						<Badge variant="secondary">{item.status}</Badge>
					{/if}
				</li>
			{/each}
		</ul>
	</Card>
</div>

