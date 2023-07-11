    function createButton() {
        const header = document.querySelector("#app > div > div > div._2Ts6i._3RGKj > header > div._604FD > div > span");
        if (header && !header.querySelector(".copyButton")) {
            const button = document.createElement("button");
            button.innerHTML = "CTRL + C";
            button.classList.add("copyButton");

            button.addEventListener("click", chamarFuncaoComAtraso);

            header.appendChild(button);
        }
    }
    function chamarFuncaoComAtraso(){
        openHeader()

        setTimeout(copyContent, 500)
    }

    function openHeader() {
        // Abrir a header de classe ._3W2ap
        const header = document.querySelector('._3W2ap');
        header.click()
    }

    function copyContent() {
        const firstDiv = document.querySelector("#app > div > div > div._2Ts6i._1xFRo > span > div > span > div > div > section > div.gsqs0kct.oauresqk.efgp0a3n.tio0brup.g0rxnol2.tvf2evcx.oq44ahr5.lb5m6g5c.brac1wpa.lkjmyc96.b8cdf3jl.bcymb0na.myel2vfb.e8k79tju > div.tvf2evcx.m0h2a7mj.lb5m6g5c.j7l1k36l.ktfrpxia.nu7pwgvd.p357zi0d.dnb887gk.gjuq5ydh.i2cterl7.fhf7t426.f8m0rgwh.gndfcl4n > div > span > span");

        const contfirstdiv = firstDiv ? firstDiv.innerText : '';

        const comercialText = document.querySelector("#app > div > div > div._2Ts6i._1xFRo > span > div > span > div > div > section > div.gsqs0kct.oauresqk.efgp0a3n.tio0brup.g0rxnol2.tvf2evcx.oq44ahr5.lb5m6g5c.brac1wpa.lkjmyc96.i4pc7asj.bcymb0na.przvwfww.e8k79tju > div.gx1rr48f._3VUan > div > div > span > span")

        const contcomercialdiv = comercialText ? comercialText.innerText : '';
        
        const otherDiv = document.querySelector("#app > div > div > div._2Ts6i._1xFRo > span > div > span > div > div > section > div.gsqs0kct.oauresqk.efgp0a3n.tio0brup.g0rxnol2.tvf2evcx.oq44ahr5.lb5m6g5c.brac1wpa.lkjmyc96.b8cdf3jl.bcymb0na.myel2vfb.e8k79tju > div.tvf2evcx.m0h2a7mj.lb5m6g5c.j7l1k36l.ktfrpxia.nu7pwgvd.p357zi0d.dnb887gk.gjuq5ydh.i2cterl7.fhf7t426.f8m0rgwh.gndfcl4n > h2 > span");
        
        const contotherDiv = otherDiv ? otherDiv.innerText : '';

        let content ;
        let contentFormatted = '';

        if (contcomercialdiv && !contemLetraDoAlfabeto(contcomercialdiv)) {
            content = contcomercialdiv;
          } else if (contotherDiv && !contemLetraDoAlfabeto(contotherDiv)) {
            content = contotherDiv;
          } else if (contfirstdiv && !contemLetraDoAlfabeto(contfirstdiv)) {
            content = contfirstdiv;
          } else {
            console.error('Nenhuma div encontrada para copiar o conteúdo.');
            return;
          }

        contentFormatted = formatNumber(content);

        navigator.clipboard.writeText(contentFormatted)
            .then(() => {
                console.log('Conteúdo copiado para a área de transferência:', contentFormatted);
                setTimeout(closeHeader, 0)
            })
            .catch((error) => {
                console.error('Erro ao copiar o conteúdo:', error);
            });

    }
    
    function closeHeader(){
        const closeheader = document.querySelector("#app > div > div > div._2Ts6i._1xFRo > span > div > span > div > header > div > div.kk3akd72.p6y6hbba > div > span")
        closeheader.click()
    }
    function contemLetraDoAlfabeto(string) {
        return /[a-zA-Z]/.test(string);
    }

    function formatNumber(string) {
        return string.replace(/^\+\d+\s?/, "").replace(/-/g, "").replace(/ /g, "");
    }


    createButton();

    const interval = setInterval(createButton, 1000);
