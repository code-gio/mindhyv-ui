<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatsWithChartProps {
		title?: string;
		value?: string;
		change?: string;
	}

	const DEFAULTS = getTemplateDefaults('stats-with-chart') || {};

	let {
		title = DEFAULTS.title || 'Total Revenue',
		value = DEFAULTS.value || '$0',
		change = DEFAULTS.change || '+0%'
	}: StatsWithChartProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="mb-4">
				<div class="text-3xl font-bold text-foreground">{value}</div>
				<p class="text-sm text-muted-foreground">{change} from last period</p>
			</div>
			<!-- Chart placeholder -->
			<div class="h-[200px] w-full rounded-lg bg-accent"></div>
		</CardContent>
	</Card>
</div>

