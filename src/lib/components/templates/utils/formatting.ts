/**
 * Content Formatting Utilities
 * Helpers for formatting text, numbers, dates, and URLs
 */

/**
 * Format currency
 */
export const formatCurrency = (
	amount: number,
	currency = 'USD',
	locale = 'en-US'
): string => {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency
	}).format(amount);
};

/**
 * Format number with locale
 */
export const formatNumber = (num: number, decimals = 0, locale = 'en-US'): string => {
	return new Intl.NumberFormat(locale, {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	}).format(num);
};

/**
 * Format date
 */
export const formatDate = (
	date: Date,
	format: 'short' | 'medium' | 'long' | 'full' = 'medium',
	locale = 'en-US'
): string => {
	const options: Intl.DateTimeFormatOptions = {
		short: { month: 'numeric', day: 'numeric', year: '2-digit' },
		medium: { month: 'short', day: 'numeric', year: 'numeric' },
		long: { month: 'long', day: 'numeric', year: 'numeric' },
		full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
	}[format];

	return new Intl.DateTimeFormat(locale, options).format(date);
};

/**
 * Format time ago (relative time)
 */
export const formatTimeAgo = (date: Date): string => {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffSeconds = Math.floor(diffMs / 1000);
	const diffMinutes = Math.floor(diffSeconds / 60);
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);
	const diffWeeks = Math.floor(diffDays / 7);
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);

	if (diffSeconds < 60) return 'just now';
	if (diffMinutes === 1) return '1 minute ago';
	if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
	if (diffHours === 1) return '1 hour ago';
	if (diffHours < 24) return `${diffHours} hours ago`;
	if (diffDays === 1) return 'yesterday';
	if (diffDays < 7) return `${diffDays} days ago`;
	if (diffWeeks === 1) return '1 week ago';
	if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
	if (diffMonths === 1) return '1 month ago';
	if (diffMonths < 12) return `${diffMonths} months ago`;
	if (diffYears === 1) return '1 year ago';
	return `${diffYears} years ago`;
};

/**
 * Pluralize word
 */
export const pluralize = (count: number, singular: string, plural?: string): string => {
	if (count === 1) return `${count} ${singular}`;
	return `${count} ${plural || singular + 's'}`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number, ellipsis = '...'): string => {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength - ellipsis.length) + ellipsis;
};

/**
 * Extract excerpt from content
 */
export const extractExcerpt = (content: string, maxLength = 160): string => {
	const stripped = stripHtml(content);
	return truncateText(stripped, maxLength);
};

/**
 * Strip HTML tags from string
 */
export const stripHtml = (html: string): string => {
	return html.replace(/<[^>]*>/g, '').trim();
};

/**
 * Calculate reading time in minutes
 */
export const getReadingTime = (content: string, wordsPerMinute = 200): number => {
	const text = stripHtml(content);
	const wordCount = text.split(/\s+/).length;
	return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Capitalize first letter
 */
export const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Capitalize all words
 */
export const capitalizeWords = (str: string): string => {
	return str
		.split(' ')
		.map((word) => capitalize(word))
		.join(' ');
};

/**
 * Convert to title case
 */
export const toTitleCase = (str: string): string => {
	const smallWords = /^(a|an|and|as|at|but|by|for|in|nor|of|on|or|the|to|up|yet)$/i;

	return str
		.toLowerCase()
		.split(' ')
		.map((word, index, array) => {
			if (index === 0 || index === array.length - 1 || !smallWords.test(word)) {
				return capitalize(word);
			}
			return word;
		})
		.join(' ');
};

/**
 * Generate slug from text
 */
export const slugify = (text: string): string => {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
};

/**
 * Generate unique ID
 */
export const generateId = (prefix = 'id'): string => {
	return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generate anchor ID from text
 */
export const getAnchorId = (text: string): string => {
	return slugify(text);
};

/**
 * Append query params to URL
 */
export const appendQueryParams = (url: string, params: Record<string, string>): string => {
	const urlObj = new URL(url, window.location.origin);
	Object.entries(params).forEach(([key, value]) => {
		urlObj.searchParams.set(key, value);
	});
	return urlObj.toString();
};

/**
 * Check if URL is external
 */
export const isExternalUrl = (url: string): boolean => {
	try {
		const urlObj = new URL(url, window.location.origin);
		return urlObj.origin !== window.location.origin;
	} catch {
		return false;
	}
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
	const cleaned = phone.replace(/\D/g, '');
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		return `(${match[1]}) ${match[2]}-${match[3]}`;
	}
	return phone;
};

/**
 * Format compact number (1.2K, 3.4M, etc.)
 */
export const formatCompactNumber = (num: number): string => {
	if (num >= 1000000000) {
		return `${(num / 1000000000).toFixed(1)}B`;
	}
	if (num >= 1000000) {
		return `${(num / 1000000).toFixed(1)}M`;
	}
	if (num >= 1000) {
		return `${(num / 1000).toFixed(1)}K`;
	}
	return num.toString();
};

/**
 * Highlight search terms in text
 */
export const highlightText = (text: string, query: string): string => {
	if (!query) return text;

	const regex = new RegExp(`(${query})`, 'gi');
	return text.replace(regex, '<mark>$1</mark>');
};

