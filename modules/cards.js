function cards(questions) {

    questions.forEach(question => {

        const pageHome = document.querySelector("[data-js=page_home]");

        const element_section = document.createElement("section");
        element_section.classList.add("cards")

        pageHome.append(element_section);

        const element_i = document.createElement("i");
        element_i.setAttribute("data-js", "bookmark");
        element_i.setAttribute("data-id", question.id);
        element_i.classList.add("bookmark", "fa-solid", "fa-bookmark", "fa-2x");

        element_section.append(element_i);

        const element_h2 = document.createElement("h2");
        element_h2.setAttribute("data-js", "question_title");
        element_h2.classList.add("title_stlye");
        element_h2.textContent = "QUESTION: " + question.title;

        element_section.append(element_h2);

        const element_article_question_box = document.createElement("article");
        element_article_question_box.classList.add("font-small", "question_box");

        element_section.append(element_article_question_box);

        const element_p_question = document.createElement("p");
        element_p_question.textContent = question.question;
        element_article_question_box.append(element_p_question);

        const element_button = document.createElement("button");
        element_button.classList.add("button_show_answer");
        element_button.setAttribute("data-js", "answer_button");
        element_button.type = "button";
        element_button.textContent = "Show Answer";
        element_section.append(element_button);

        const element_article_answer_box = document.createElement("article");
        element_article_answer_box.classList.add("font-small", "answer_box", "answer_box-hidden");
        element_article_answer_box.setAttribute("data-js", "answer_box");
        const element_p_answer = document.createElement("p");
        element_p_answer.setAttribute("data-js", "question_answer");
        element_p_answer.textContent = question.answer;
        element_article_answer_box.append(element_p_answer);

        element_section.append(element_article_answer_box);

        const element_ul = document.createElement("ul");
        element_ul.classList.add("list-no-style", "font-small", "center", "padding-top-8", "tags")
        element_section.append(element_ul);

        const element_li_tag1 = document.createElement("li");
        element_li_tag1.classList.add("list-inline");
        element_li_tag1.textContent = question.tag[0];
        element_ul.append(element_li_tag1);

        const element_li_tag2 = document.createElement("li");
        element_li_tag2.classList.add("list-inline");
        element_li_tag2.textContent = question.tag[1];
        element_ul.append(element_li_tag2);

        const element_li_tag3 = document.createElement("li");
        element_li_tag3.classList.add("list-inline");
        element_li_tag3.textContent = question.tag[2];
        element_ul.append(element_li_tag3);

        const element_li_tag4 = document.createElement("li");
        element_li_tag4.classList.add("list-inline");
        element_li_tag4.textContent = question.tag[3];
        element_ul.append(element_li_tag4);


    })



}


export { cards };