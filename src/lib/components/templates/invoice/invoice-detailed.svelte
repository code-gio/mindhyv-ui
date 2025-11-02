<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Printer, Download, Send } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface InvoiceItem {
		description: string;
		quantity: number;
		price: number;
		total: number;
	}

	interface InvoiceDetailedProps {
		logo?: string;
		invoiceNumber?: string;
		status?: 'paid' | 'pending' | 'overdue';
		date?: string;
		dueDate?: string;
		from?: { name: string; address: string; city: string; zip: string; email: string; phone: string };
		to?: { name: string; address: string; city: string; zip: string; email: string; phone: string };
		items?: InvoiceItem[];
		subtotal?: number;
		tax?: number;
		discount?: number;
		total?: number;
		notes?: string;
	}

	const DEFAULTS = getTemplateDefaults('invoice-detailed') || {};

	let {
		logo = DEFAULTS.logo,
		invoiceNumber = DEFAULTS.invoiceNumber,
		status = DEFAULTS.status,
		date = DEFAULTS.date,
		dueDate = DEFAULTS.dueDate,
		from = DEFAULTS.from,
		to = DEFAULTS.to,
		items = DEFAULTS.items || [],
		subtotal = DEFAULTS.subtotal,
		tax = DEFAULTS.tax,
		discount = DEFAULTS.discount,
		total = DEFAULTS.total,
		notes = DEFAULTS.notes
	}: InvoiceDetailedProps = $props();

	const statusColors = {
		paid: 'default',
		pending: 'secondary',
		overdue: 'destructive'
	};
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-4xl">
		<CardContent class="p-8 sm:p-12">
			<!-- Header -->
			<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					{#if logo}
						<img src={logo} alt="Logo" class="mb-4 h-12" />
					{/if}
					<h1 class="text-3xl font-bold text-foreground">Invoice</h1>
					<p class="mt-1 text-sm text-muted-foreground">#{invoiceNumber}</p>
				</div>
				<div class="flex flex-col items-end gap-3">
					{#if status}
						<Badge variant={statusColors[status]}>
							{status.toUpperCase()}
						</Badge>
					{/if}
					<div class="flex gap-2">
						<Button variant="outline" size="sm">
							<Printer class="size-4" />
						</Button>
						<Button variant="outline" size="sm">
							<Download class="size-4" />
						</Button>
						<Button size="sm">
							<Send class="mr-2 size-4" />
							Send
						</Button>
					</div>
				</div>
			</div>

			<!-- Bill To/From -->
			<div class="mt-8 grid gap-6 sm:grid-cols-2">
				<div>
					<h3 class="text-sm font-semibold uppercase text-foreground">From:</h3>
					<div class="mt-2 space-y-1">
						<p class="text-sm font-medium text-foreground">{from?.name}</p>
						<p class="text-sm text-muted-foreground">{from?.address}</p>
						<p class="text-sm text-muted-foreground">{from?.city}, {from?.zip}</p>
						<p class="text-sm text-muted-foreground">{from?.email}</p>
						<p class="text-sm text-muted-foreground">{from?.phone}</p>
					</div>
				</div>
				<div>
					<h3 class="text-sm font-semibold uppercase text-foreground">Bill To:</h3>
					<div class="mt-2 space-y-1">
						<p class="text-sm font-medium text-foreground">{to?.name}</p>
						<p class="text-sm text-muted-foreground">{to?.address}</p>
						<p class="text-sm text-muted-foreground">{to?.city}, {to?.zip}</p>
						<p class="text-sm text-muted-foreground">{to?.email}</p>
						<p class="text-sm text-muted-foreground">{to?.phone}</p>
					</div>
				</div>
			</div>

			<!-- Dates -->
			<div class="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-6">
				<div>
					<span class="block text-xs uppercase text-muted-foreground">Invoice Date:</span>
					<span class="block text-sm font-medium text-foreground">{date}</span>
				</div>
				<div>
					<span class="block text-xs uppercase text-muted-foreground">Due Date:</span>
					<span class="block text-sm font-medium text-foreground">{dueDate}</span>
				</div>
			</div>

			<!-- Items Table -->
			<div class="mt-8 overflow-x-auto">
				<table class="min-w-full divide-y divide-border">
					<thead class="bg-muted">
						<tr>
							<th class="px-6 py-3 text-start text-xs font-medium uppercase text-muted-foreground">Description</th>
							<th class="px-6 py-3 text-end text-xs font-medium uppercase text-muted-foreground">Qty</th>
							<th class="px-6 py-3 text-end text-xs font-medium uppercase text-muted-foreground">Price</th>
							<th class="px-6 py-3 text-end text-xs font-medium uppercase text-muted-foreground">Total</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each items as item}
							<tr>
								<td class="px-6 py-4 text-sm text-foreground">{item.description}</td>
								<td class="px-6 py-4 text-end text-sm text-foreground">{item.quantity}</td>
								<td class="px-6 py-4 text-end text-sm text-foreground">${item.price}</td>
								<td class="px-6 py-4 text-end text-sm text-foreground">${item.total}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<!-- Summary -->
			<div class="mt-8 flex justify-end">
				<div class="w-full max-w-sm space-y-2">
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Subtotal:</span>
						<span class="text-foreground">${subtotal}</span>
					</div>
					{#if discount}
						<div class="flex items-center justify-between text-sm">
							<span class="text-muted-foreground">Discount:</span>
							<span class="text-foreground">-${discount}</span>
						</div>
					{/if}
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Tax:</span>
						<span class="text-foreground">${tax}</span>
					</div>
					<div class="flex items-center justify-between border-t border-gray-200 pt-2 text-lg font-bold dark:border-neutral-700">
						<span class="text-foreground">Total:</span>
						<span class="text-foreground">${total}</span>
					</div>
				</div>
			</div>

			<!-- Notes -->
			{#if notes}
				<div class="mt-8">
					<h3 class="text-sm font-semibold text-foreground">Notes:</h3>
					<p class="mt-2 text-sm text-muted-foreground">{notes}</p>
				</div>
			{/if}
		</CardContent>
	</Card>
</div>

