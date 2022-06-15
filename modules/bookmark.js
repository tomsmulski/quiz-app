function bookmark() {
    const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
    bookmarks.forEach((bookmark) => {
        bookmark.addEventListener('click', () => {
            bookmark.classList.toggle('bookmark_activ');
        });
    });

};


export { bookmark };