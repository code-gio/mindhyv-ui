<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import { Send, User, Bot } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Message {
		role: 'user' | 'assistant';
		content: string;
	}

	interface PromptChatProps {
		messages?: Message[];
		onSend?: (message: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('prompt-chat') || {};

	let {
		messages = DEFAULTS.messages || [],
		onSend = DEFAULTS.onSend
	}: PromptChatProps = $props();

	let input = $state('');

	function handleSend() {
		if (input.trim() && onSend) {
			onSend(input);
			input = '';
		}
	}
</script>

<div class="mx-auto max-w-2xl px-4 py-10">
	<div class="flex h-[600px] flex-col rounded-lg border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
		<div class="flex-1 space-y-4 overflow-y-auto p-4">
			{#each messages as message}
				<div class={cn('flex gap-3', message.role === 'user' ? 'justify-end' : '')}>
					{#if message.role === 'assistant'}
						<Avatar class="size-8">
							<AvatarFallback><Bot class="size-4" /></AvatarFallback>
						</Avatar>
					{/if}
					<div class={cn(
						'max-w-[70%] rounded-lg p-3',
						message.role === 'user'
							? 'bg-primary text-primary-foreground'
							: 'bg-gray-100 dark:bg-neutral-700'
					)}>
						<p class="text-sm">{message.content}</p>
					</div>
					{#if message.role === 'user'}
						<Avatar class="size-8">
							<AvatarFallback><User class="size-4" /></AvatarFallback>
						</Avatar>
					{/if}
				</div>
			{/each}
		</div>
		<div class="border-t border-gray-200 p-4 dark:border-neutral-700">
			<div class="flex gap-2">
				<Input
					bind:value={input}
					placeholder="Type a message..."
					onkeydown={(e) => e.key === 'Enter' && handleSend()}
				/>
				<Button onclick={handleSend} disabled={!input.trim()}>
					<Send class="size-4" />
				</Button>
			</div>
		</div>
	</div>
</div>

