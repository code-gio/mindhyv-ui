<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Mail, Phone, MapPin } from '@lucide/svelte/icons';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ContactInfo {
		icon: typeof LucideIcon;
		title: string;
		value: string;
	}

	interface ContactSplitMapProps {
		title?: string;
		description?: string;
		contactInfo?: ContactInfo[];
		mapEmbedUrl?: string;
		submitText?: string;
	}

	const DEFAULTS = getTemplateDefaults('contact-split-map') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		contactInfo = DEFAULTS.contactInfo || [],
		mapEmbedUrl = DEFAULTS.mapEmbedUrl,
		submitText = DEFAULTS.submitText
	}: ContactSplitMapProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl lg:max-w-5xl">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-primary-foreground">
				{title}
			</h1>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>

		<div class="mt-12 grid gap-8 lg:grid-cols-2">
			<!-- Contact Form -->
			<div>
				<form class="space-y-4">
					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<Label for="name">Name</Label>
							<Input id="name" type="text" placeholder="Your name" required />
						</div>
						<div>
							<Label for="email">Email</Label>
							<Input id="email" type="email" placeholder="your.email@example.com" required />
						</div>
					</div>
					<div>
						<Label for="subject">Subject</Label>
						<Input id="subject" type="text" placeholder="How can we help?" required />
					</div>
					<div>
						<Label for="message">Message</Label>
						<Textarea
							id="message"
							placeholder="Tell us more..."
							rows={6}
							required
						/>
					</div>
					<Button type="submit" class="w-full">
						{submitText}
					</Button>
				</form>

				<!-- Contact Info -->
				<div class="mt-8 space-y-4">
					{#each contactInfo as info}
						<div class="flex gap-x-4">
							<info.icon class="mt-1 size-5 shrink-0 text-primary" />
							<div>
								<h4 class="font-semibold text-foreground">
									{info.title}
								</h4>
								<p class="text-sm text-muted-foreground">
									{info.value}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<!-- End Contact Form -->

			<!-- Map -->
			<div>
				{#if mapEmbedUrl}
					<div class="h-full min-h-[400px] overflow-hidden rounded-xl">
						<iframe
							src={mapEmbedUrl}
							class="size-full"
							style="border:0;"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="Location map"
						></iframe>
					</div>
				{/if}
			</div>
			<!-- End Map -->
		</div>
	</div>
</div>

