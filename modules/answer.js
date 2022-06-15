function answerShowHide() {
    const buttons = document.querySelectorAll('[data-js="answer_button"]');
    const answers = document.querySelectorAll('[data-js="answer_box"]');
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            answers[i].classList.toggle('answer_box-hidden');
            button.innerText = answers[i].classList.contains('answer_box-hidden') ? 'Show Answer' : 'Hide Answer';
        });
    });
}




export { answerShowHide };