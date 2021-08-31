const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment_body = document.querySelector('#comment-body').value.trim();

  if (comment_body) {
    const response = await fetch('/article/:id', {
      method: 'POST',
      body: JSON.stringify({comment_body}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/article');
    } else {
      alert('failed to create comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);