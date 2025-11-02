/**
 * Template Utilities
 * Main export file for all template utility functions
 */

// Theme and styling utilities
export {
	cn,
	getThemeColor,
	resolveColor,
	buildSpacingClasses,
	buildGridClasses,
	buildFlexClasses,
	buildInlineStyles,
	getGradientStyle,
	getShadowClass,
	getBlurClass,
	hexToRgb,
	rgbToHex,
	isDarkColor,
	getContrastColor
} from './utils/theme';

// Rating and review utilities
export {
	type StarType,
	formatRating,
	getRatingPercentage,
	generateStarArray,
	isValidRating,
	formatReviewCount,
	parseReviewCount,
	aggregateRatings,
	formatReviewDate,
	sortReviews,
	filterByMinRating,
	getRatingColorClass,
	getRatingLabel
} from './utils/ratings';

// Content formatting utilities
export {
	formatCurrency,
	formatNumber,
	formatDate,
	formatTimeAgo,
	pluralize,
	truncateText,
	extractExcerpt,
	stripHtml,
	getReadingTime,
	capitalize,
	capitalizeWords,
	toTitleCase,
	slugify,
	generateId,
	getAnchorId,
	appendQueryParams,
	isExternalUrl,
	formatPhoneNumber,
	formatCompactNumber,
	highlightText
} from './utils/formatting';

// Prop validation and default utilities
export {
	isValidUrl,
	isValidEmail,
	isValidColor,
	isValidImageUrl,
	withDefaults,
	sanitizeText,
	sanitizeHtml,
	sanitizeUrl,
	sanitizeImageUrl,
	isRequired,
	hasMinLength,
	hasMaxLength,
	matchesPattern,
	isInRange,
	isString,
	isNumber,
	isObject,
	isArray
} from './utils/props';

