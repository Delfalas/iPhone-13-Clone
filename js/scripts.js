// Seletor de objeto
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        // remover classe selected
        buttons.forEach((btn) =>
            btn.querySelector(".color").classList.remove("selected")
        );

        // marcar o botão alvo
        const button = e.target;

        // pegar o id do botão
        const id = button.getAttribute("id");

        // adicionar o marcador selected
        button.querySelector(".color").classList.add("selected");

        // transição de imagem
        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        // tempo de transição
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});