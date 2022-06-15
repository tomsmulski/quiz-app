function bookmark(questions) {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  bookmarks.forEach(bookmark => {
    const questionId = document.querySelector(
      `[data-id="${bookmark.dataset.id}"]`
    );

    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmark_activ');
    });
  });
}

function loadBookmarkQuestions(questions) {
  const bookmarkedCards = questions.filter(question => {
    return question.isBookmark;
  });
}

export { bookmark, loadBookmarkQuestions };
