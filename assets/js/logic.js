const utils = {
    // Format date
    formatDate: (date) => {
        return new Date(date).toLocaleDateString();
    },

    // Validate input
    validateInput: (text) => {
        return text && text.trim().length > 0;
    },
};