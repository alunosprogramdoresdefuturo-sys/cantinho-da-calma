const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const titulo = card.querySelector("span").innerText;

        card.style.transform = "scale(0.95)";

        setTimeout(() => {
            card.style.transform = "scale(1)";
            alert(`Você escolheu: ${titulo}`);
        }, 150);

    });

});