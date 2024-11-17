// This file can contain shared utilities and functions
const utils = {
    // Format date
    formatDate: (date) => {
        return new Date(date).toLocaleDateString();
    },

    // Validate input
    validateInput: (text) => {
        return text && text.trim().length > 0;
    },

    // Sanitize HTML (basic implementation)
    sanitizeHTML: (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Export utils if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
} 