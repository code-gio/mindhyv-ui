<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Tabs, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { LineChart } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ChartAnalyticsProps {
		title?: string;
		description?: string;
	}

	const DEFAULTS = getTemplateDefaults('chart-analytics') || {};

	let {
		title = DEFAULTS.title || 'Analytics',
		description = DEFAULTS.description
	}: ChartAnalyticsProps = $props();

	let activeTab = $state('7d');
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<div class="flex items-center justify-between">
				<div>
					<CardTitle class="flex items-center gap-x-2">
						<LineChart class="size-5" />
						{title}
					</CardTitle>
					{#if description}
						<CardDescription class="mt-2">{description}</CardDescription>
					{/if}
				</div>
				<Tabs value={activeTab} onValueChange={(v) => (activeTab = v)}>
					<TabsList>
						<TabsTrigger value="7d">7 Days</TabsTrigger>
						<TabsTrigger value="30d">30 Days</TabsTrigger>
						<TabsTrigger value="90d">90 Days</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
		</CardHeader>
		<CardContent>
			<!-- Large chart placeholder -->
			<div class="h-[300px] w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
		</CardContent>
	</Card>
</div>

