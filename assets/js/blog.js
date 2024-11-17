document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const themeToggle = document.getElementById('themeToggle');
    const backBtn = document.getElementById('backBtn');

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        // Save theme preference
        localStorage.setItem('theme', document.body.dataset.theme);
    });

    // Back button functionality
    backBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
    }

    // Display blog posts
    function displayPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No blog posts yet!</p>';
            return;
        }

        postsContainer.innerHTML = posts.map(post => `
            <article class="post">
                <h2>${post.title}</h2>
                <p class="post-meta">Posted by ${post.username} on ${post.date}</p>
                <p>${post.content}</p>
            </article>
        `).join('');
    }

    // Initial display of posts
    displayPosts();
}); 