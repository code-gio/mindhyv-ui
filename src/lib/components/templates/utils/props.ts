/**
 * Prop Validation and Default Utilities
 * Helpers for validating and handling component props
 */

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

/**
 * Validate color (hex, rgb, hsl, or CSS variable)
 */
export const isValidColor = (color: string): boolean => {
	// Check for CSS variable
	if (color.startsWith('var(--')) return true;

	// Check for hex
	if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) return true;

	// Check for rgb/rgba
	if (/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/.test(color)) return true;

	// Check for hsl/hsla
	if (/^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%/.test(color)) return true;

	// Check for named colors (basic check)
	const namedColors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'transparent'];
	if (namedColors.includes(color.toLowerCase())) return true;

	return false;
};

/**
 * Validate image URL
 */
export const isValidImageUrl = (url: string): boolean => {
	if (!isValidUrl(url)) return false;

	const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
	const lowerUrl = url.toLowerCase();
	return imageExtensions.some((ext) => lowerUrl.includes(ext));
};

/**
 * Validate rating range
 */
export const isValidRating = (rating: number, min = 0, max = 5): boolean => {
	return typeof rating === 'number' && rating >= min && rating <= max;
};

/**
 * Merge props with defaults
 */
export const withDefaults = <T extends Record<string, any>>(
	props: Partial<T>,
	defaults: T
): T => {
	return { ...defaults, ...props };
};

/**
 * Sanitize text (remove dangerous HTML/scripts)
 */
export const sanitizeText = (text: string): string => {
	return text
		.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
		.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
		.replace(/on\w+="[^"]*"/gi, '')
		.trim();
};

/**
 * Sanitize HTML (allow only safe tags)
 */
export const sanitizeHtml = (html: string): string => {
	const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'a', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
	const tagRegex = /<(\/?)([\w]+)([^>]*)>/g;

	return html.replace(tagRegex, (match, slash, tag, attrs) => {
		if (allowedTags.includes(tag.toLowerCase())) {
			// Remove dangerous attributes
			const cleanAttrs = attrs
				.replace(/on\w+="[^"]*"/gi, '')
				.replace(/javascript:/gi, '')
				.trim();
			return `<${slash}${tag}${cleanAttrs ? ' ' + cleanAttrs : ''}>`;
		}
		return '';
	});
};

/**
 * Sanitize URL (ensure safety)
 */
export const sanitizeUrl = (url: string): string => {
	// Block javascript: and data: URLs
	if (url.startsWith('javascript:') || url.startsWith('data:')) {
		return '#';
	}
	return url.trim();
};

/**
 * Sanitize image URL
 */
export const sanitizeImageUrl = (url: string): string => {
	const sanitized = sanitizeUrl(url);
	return isValidImageUrl(sanitized) ? sanitized : '';
};

/**
 * Validate required field
 */
export const isRequired = (value: string | null | undefined): boolean => {
	return value !== null && value !== undefined && value.trim().length > 0;
};

/**
 * Validate minimum length
 */
export const hasMinLength = (value: string, min: number): boolean => {
	return value.length >= min;
};

/**
 * Validate maximum length
 */
export const hasMaxLength = (value: string, max: number): boolean => {
	return value.length <= max;
};

/**
 * Validate pattern (regex)
 */
export const matchesPattern = (value: string, pattern: RegExp): boolean => {
	return pattern.test(value);
};

/**
 * Validate number range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
	return value >= min && value <= max;
};

/**
 * Type guard for checking if value is a string
 */
export const isString = (value: unknown): value is string => {
	return typeof value === 'string';
};

/**
 * Type guard for checking if value is a number
 */
export const isNumber = (value: unknown): value is number => {
	return typeof value === 'number' && !isNaN(value);
};

/**
 * Type guard for checking if value is an object
 */
export const isObject = (value: unknown): value is Record<string, any> => {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/**
 * Type guard for checking if value is an array
 */
export const isArray = (value: unknown): value is any[] => {
	return Array.isArray(value);
};

