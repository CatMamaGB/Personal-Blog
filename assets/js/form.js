document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        // Validate form
        if (!username || !title || !content) {
            alert('Please fill in all fields');
            return;
        }

        // Create blog post object
        const blogPost = {
            username,
            title,
            content,
            date: new Date().toLocaleDateString()
        };

        // Get existing posts or initialize empty array
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add new post
        existingPosts.push(blogPost);

        // Save to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        // Redirect to blog page
        window.location.href = 'blog.html';
    });
}); 