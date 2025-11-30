// Like button functionality
function toggleLike(element) {
    if (element.textContent === '🤍') {
        element.textContent = '❤️';
        element.classList.add('liked');
        
        // Update like count
        const likesDiv = element.closest('.post').querySelector('.post-likes');
        const currentLikes = parseInt(likesDiv.textContent.replace(/,/g, ''));
        likesDiv.textContent = (currentLikes + 1).toLocaleString() + ' likes';
    } else {
        element.textContent = '🤍';
        element.classList.remove('liked');
        
        // Update like count
        const likesDiv = element.closest('.post').querySelector('.post-likes');
        const currentLikes = parseInt(likesDiv.textContent.replace(/,/g, ''));
        likesDiv.textContent = (currentLikes - 1).toLocaleString() + ' likes';
    }
}

// Save button functionality
function toggleSave(element) {
    if (element.textContent === '🔖') {
        element.textContent = '📌';
    } else {
        element.textContent = '🔖';
    }
}

// Add comment functionality
document.querySelectorAll('.add-comment').forEach(commentBox => {
    const input = commentBox.querySelector('input');
    const button = commentBox.querySelector('button');
    
    button.addEventListener('click', () => {
        if (input.value.trim()) {
            alert('Comment added: ' + input.value);
            input.value = '';
        }
    });
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
            alert('Comment added: ' + input.value);
            input.value = '';
        }
    });
});

// View comments functionality
document.querySelectorAll('.post-comments').forEach(commentsLink => {
    commentsLink.addEventListener('click', () => {
        alert('Comments section opened!');
    });
});