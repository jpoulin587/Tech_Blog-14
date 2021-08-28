const newFormHandler = async (event) => {
    event.preventDefault();
  
const comment = document.querySelector('#comment-body').value.trim();

if (comment) {
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: {
            'Content-Type': 'application/json',
        };
    });
    if (response.ok) {
        document.location.replace('/article');
    } else {
        alert('failed to create comment');
    }
}
};


document
.querySelector('.new-article-form')
.addEventListener('submit', newFormHandler);