function login() {
    // This function would normally handle the OAuth flow
    console.log("Login function triggered");
}

// Example of adding dummy content to the feed
window.onload = function() {
    const feeds = document.getElementById('social-feeds');
    // Dummy data to simulate feed
    const data = [
        { platform: "Twitter", content: "Here's a tweet from someone you follow." },
        { platform: "Facebook", content: "Your friend posted a new photo." },
        { platform: "Instagram", content: "This is an Instagram post you liked." }
    ];
    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<strong>${post.platform}</strong>: ${post.content}`;
        feeds.appendChild(postElement);
    });
};
