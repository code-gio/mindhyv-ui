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
	import { Button } from '$lib/components/ui/button';
	import { MoreHorizontal, Eye, Edit, Trash } from '@lucide/svelte/icons';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TableColumn {
		key: string;
		label: string;
	}

	interface TableWithActionsProps {
		title?: string;
		columns?: TableColumn[];
		data?: Record<string, any>[];
		showActions?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('table-with-actions') || {};

	let {
		title = DEFAULTS.title,
		columns = DEFAULTS.columns || [],
		data = DEFAULTS.data || [],
		showActions = DEFAULTS.showActions
	}: TableWithActionsProps = $props();
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
						{#if showActions}
							<TableHead class="w-[100px]">Actions</TableHead>
						{/if}
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data as row}
						<TableRow>
							{#each columns as column}
								<TableCell>{row[column.key]}</TableCell>
							{/each}
							{#if showActions}
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger asChild let:builder>
											<Button variant="ghost" size="icon" builders={[builder]}>
												<MoreHorizontal class="size-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>
												<Eye class="mr-2 size-4" />
												View
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Edit class="mr-2 size-4" />
												Edit
											</DropdownMenuItem>
											<DropdownMenuItem class="text-destructive">
												<Trash class="mr-2 size-4" />
												Delete
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							{/if}
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
