<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { TrendingUp, Users, DollarSign, Activity } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Widget {
		title: string;
		value: string;
		change?: string;
		icon: any;
	}

	interface DashboardWidgetsProps {
		widgets?: Widget[];
	}

	const DEFAULTS = getTemplateDefaults('dashboard-widgets') || {};

	let {
		widgets = DEFAULTS.widgets || []
	}: DashboardWidgetsProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		{#each widgets as widget}
			<Card>
				<CardHeader class="flex flex-row items-center justify-between pb-2">
					<CardTitle class="text-sm font-medium">{widget.title}</CardTitle>
					<widget.icon class="size-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{widget.value}</div>
					{#if widget.change}
						<p class="text-xs text-muted-foreground">{widget.change}</p>
					{/if}
				</CardContent>
			</Card>
		{/each}
	</div>
</div>

