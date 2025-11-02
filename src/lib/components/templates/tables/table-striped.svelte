<script lang="ts">
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TableColumn {
		key: string;
		label: string;
	}

	interface TableStripedProps {
		title?: string;
		columns?: TableColumn[];
		data?: Record<string, any>[];
	}

	const DEFAULTS = getTemplateDefaults('table-striped') || {};

	let {
		title = DEFAULTS.title,
		columns = DEFAULTS.columns || [],
		data = DEFAULTS.data || []
	}: TableStripedProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		{#if title}
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
		{/if}
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						{#each columns as column}
							<TableHead>{column.label}</TableHead>
						{/each}
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data as row, index}
						<TableRow class={index % 2 === 0 ? 'bg-muted/50' : ''}>
							{#each columns as column}
								<TableCell>{row[column.key]}</TableCell>
							{/each}
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
