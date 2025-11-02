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
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TableColumn {
		key: string;
		label: string;
	}

	interface TableWithCheckboxesProps {
		title?: string;
		columns?: TableColumn[];
		data?: Record<string, any>[];
	}

	const DEFAULTS = getTemplateDefaults('table-with-checkboxes') || {};

	let {
		title = DEFAULTS.title,
		columns = DEFAULTS.columns || [],
		data = DEFAULTS.data || []
	}: TableWithCheckboxesProps = $props();

	let selectedRows = $state<Set<number>>(new Set());

	function toggleRow(index: number) {
		const newSet = new Set(selectedRows);
		if (newSet.has(index)) {
			newSet.delete(index);
		} else {
			newSet.add(index);
		}
		selectedRows = newSet;
	}

	function toggleAll() {
		if (selectedRows.size === data.length) {
			selectedRows = new Set();
		} else {
			selectedRows = new Set(data.map((_, i) => i));
		}
	}
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		{#if title}
			<CardHeader class="flex flex-row items-center justify-between">
				<CardTitle>{title}</CardTitle>
				{#if selectedRows.size > 0}
					<p class="text-sm text-muted-foreground">
						{selectedRows.size} selected
					</p>
				{/if}
			</CardHeader>
		{/if}
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead class="w-[50px]">
							<Checkbox
								checked={selectedRows.size === data.length && data.length > 0}
								onCheckedChange={toggleAll}
							/>
						</TableHead>
						{#each columns as column}
							<TableHead>{column.label}</TableHead>
						{/each}
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data as row, index}
						<TableRow>
							<TableCell>
								<Checkbox
									checked={selectedRows.has(index)}
									onCheckedChange={() => toggleRow(index)}
								/>
							</TableCell>
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
