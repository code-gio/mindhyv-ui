<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { CreditCard } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface InvoiceItem {
		description: string;
		quantity: number;
		price: number;
		total: number;
	}

	interface InvoiceWithPaymentProps {
		invoiceNumber?: string;
		status?: 'paid' | 'pending' | 'overdue';
		date?: string;
		dueDate?: string;
		from?: { name: string; address: string };
		to?: { name: string; address: string };
		items?: InvoiceItem[];
		subtotal?: number;
		tax?: number;
		total?: number;
		paymentButtonText?: string;
	}

	const DEFAULTS = getTemplateDefaults('invoice-with-payment') || {};

	let {
		invoiceNumber = DEFAULTS.invoiceNumber,
		status = DEFAULTS.status,
		date = DEFAULTS.date,
		dueDate = DEFAULTS.dueDate,
		from = DEFAULTS.from,
		to = DEFAULTS.to,
		items = DEFAULTS.items || [],
		subtotal = DEFAULTS.subtotal,
		tax = DEFAULTS.tax,
		total = DEFAULTS.total,
		paymentButtonText = DEFAULTS.paymentButtonText
	}: InvoiceWithPaymentProps = $props();

	const statusColors = {
		paid: 'default',
		pending: 'secondary',
		overdue: 'destructive'
	};
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-4xl">
		<CardContent class="p-8">
			<!-- Header -->
			<div class="flex items-start justify-between">
				<div>
					<h1 class="text-3xl font-bold text-foreground">Invoice</h1>
					<p class="mt-1 text-sm text-muted-foreground">#{invoiceNumber}</p>
				</div>
				{#if status}
					<Badge variant={statusColors[status]}>
						{status.toUpperCase()}
					</Badge>
				{/if}
			</div>

			<!-- Bill To/From -->
			<div class="mt-8 grid gap-6 sm:grid-cols-2">
				<div>
					<h3 class="text-sm font-semibold uppercase text-foreground">From:</h3>
					<p class="mt-2 text-sm font-medium text-foreground">{from?.name}</p>
					<p class="text-sm text-muted-foreground">{from?.address}</p>
				</div>
				<div>
					<h3 class="text-sm font-semibold uppercase text-foreground">Bill To:</h3>
					<p class="mt-2 text-sm font-medium text-foreground">{to?.name}</p>
					<p class="text-sm text-muted-foreground">{to?.address}</p>
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

			<!-- Items -->
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

			<!-- Summary & Payment -->
			<div class="mt-8 flex flex-col items-end gap-4">
				<div class="w-full max-w-sm space-y-2">
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Subtotal:</span>
						<span class="text-foreground">${subtotal}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Tax:</span>
						<span class="text-foreground">${tax}</span>
					</div>
					<div class="flex items-center justify-between border-t border-border pt-2 text-base font-semibold">
						<span class="text-foreground">Total:</span>
						<span class="text-foreground">${total}</span>
					</div>
				</div>
				{#if status === 'pending'}
					<Button class="w-full max-w-sm">
						<CreditCard class="mr-2 size-4" />
						{paymentButtonText || 'Pay Now'}
					</Button>
				{/if}
			</div>
		</CardContent>
	</Card>
</div>

