function adicionarTarefa() {

    const input = document.getElementById("tarefa");

    const texto = input.value.trim();

    if (!texto) return;

    const lista = document.getElementById("lista");

    const item = document.createElement("li");

    item.innerHTML = `
        <div class="conteudo">

            <input type="checkbox" class="check">

            <span>${texto}</span>

        </div>

        <button class="remover">
            X
        </button>
    `;

    const checkbox = item.querySelector(".check");

    const textoItem = item.querySelector("span");

    checkbox.addEventListener("change", () => {

        textoItem.classList.toggle(
            "concluida"
        );

    });

    item
    .querySelector(".remover")
    .addEventListener("click", () => {

        item.remove();

    });

    lista.appendChild(item);

    input.value = "";

    input.focus();
}

document
.getElementById("tarefa")
.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){

        adicionarTarefa();

    }

});