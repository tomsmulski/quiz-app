function navigation() {

    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll("[data-js=nav_link]");
    const navButtons = document.querySelectorAll(".nav_button");
    const title = document.querySelector("[data-js=title]");

    navLinks.forEach((navLink) => {

        navLink.addEventListener("click", () => {

            const selectedPage = document.querySelector(
                `[data-js=${navLink.dataset.link}]`
            );

            const selectedButton = document.querySelector(".nav_button");

            pages.forEach((page) => {
                page.classList.remove("page_current");
            });

            navButtons.forEach((button) => {
                button.children[0].classList.add("color-white");
            });

            navLink.children[0].classList.remove("color-white");

            selectedPage.classList.add("page_current");

            title.textContent = navLink.dataset.title;

        });



    });




}


export { navigation };