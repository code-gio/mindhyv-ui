<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Star } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormFeedbackRatingProps {
		title?: string;
		submitText?: string;
	}

	const DEFAULTS = getTemplateDefaults('form-feedback-rating') || {};

	let {
		title = DEFAULTS.title,
		submitText = DEFAULTS.submitText
	}: FormFeedbackRatingProps = $props();

	let rating = $state(0);
	let hoverRating = $state(0);
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-2xl">
		<CardHeader>
			<CardTitle class="text-2xl">{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div>
					<Label>How would you rate your experience?</Label>
					<div class="mt-2 flex gap-x-2">
						{#each [1, 2, 3, 4, 5] as star}
							<button
								type="button"
								class="transition hover:scale-110"
								onmouseenter={() => (hoverRating = star)}
								onmouseleave={() => (hoverRating = 0)}
								onclick={() => (rating = star)}
							>
								<Star
									class={cn(
										'size-8',
										star <= (hoverRating || rating)
											? 'fill-yellow-400 text-yellow-400'
											: 'fill-gray-300 text-gray-300 dark:fill-neutral-600 dark:text-neutral-600'
									)}
								/>
							</button>
						{/each}
					</div>
				</div>
				<div>
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="your.email@example.com" required />
				</div>
				<div>
					<Label for="feedback">Your Feedback</Label>
					<Textarea
						id="feedback"
						placeholder="Tell us more about your experience..."
						rows={6}
						required
					/>
				</div>
				<Button type="submit" class="w-full">
					{submitText}
				</Button>
			</form>
		</CardContent>
	</Card>
</div>

