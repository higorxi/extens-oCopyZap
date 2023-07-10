function createButton() {
    const header = document.querySelector("#app > div > div > div._2Ts6i._3RGKj > header > div._604FD > div > span");
    if (header && !header.querySelector(".copyButton")) {
        const button = document.createElement("button");
        button.innerHTML = "CTRL + C";
        button.classList.add("copyButton");

        button.addEventListener("click", copyContent);

        header.appendChild(button);
    }
}

function copyContent() {
    const firstDiv = document.querySelector("#app > div > div > div._2Ts6i._1xFRo > span > div > span > div > div > section > div.gsqs0kct.oauresqk.efgp0a3n.tio0brup.g0rxnol2.tvf2evcx.oq44ahr5.lb5m6g5c.brac1wpa.lkjmyc96.b8cdf3jl.bcymb0na.myel2vfb.e8k79tju > div.tvf2evcx.m0h2a7mj.lb5m6g5c.j7l1k36l.ktfrpxia.nu7pwgvd.p357zi0d.dnb887gk.gjuq5ydh.i2cterl7.fhf7t426.f8m0rgwh.gndfcl4n > div > span > span");

    // Substitua o seletor pelo correto

    const otherDiv = document.querySelector("#app > div > div > div._2Ts6i._1xFRo > span > div > span > div > div > section > div.gsqs0kct.oauresqk.efgp0a3n.tio0brup.g0rxnol2.tvf2evcx.oq44ahr5.lb5m6g5c.brac1wpa.lkjmyc96.b8cdf3jl.bcymb0na.myel2vfb.e8k79tju > div.tvf2evcx.m0h2a7mj.lb5m6g5c.j7l1k36l.ktfrpxia.nu7pwgvd.p357zi0d.dnb887gk.gjuq5ydh.i2cterl7.fhf7t426.f8m0rgwh.gndfcl4n > h2 > span");

    let content = '';
    let contentFormatted = '';

    if (!contemLetraDoAlfabeto(firstDiv.innerText)) {
        content = firstDiv.innerText;
    } else if (!contemLetraDoAlfabeto(otherDiv.innerText)) {
        content = otherDiv.innerText;
    } else {
        console.error('Nenhuma div encontrada para copiar o conteúdo.');
        return;
    }

    contentFormatted = formatNumber(content);

    navigator.clipboard.writeText(contentFormatted)
        .then(() => {
            console.log('Conteúdo copiado para a área de transferência:', contentFormatted);
        })
        .catch((error) => {
            console.error('Erro ao copiar o conteúdo:', error);
        });
}

function contemLetraDoAlfabeto(string) {
    return /[a-zA-Z]/.test(string);
}

function formatNumber(string) {
    return string.replace(/^\+\d+\s?/, "").replace(/-/g, "").replace(/ /g, "");
}


createButton();

const interval = setInterval(createButton, 1000);
