const article = document.querySelectorAll(".news1");

article.forEach((item) => {
    item.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
});

