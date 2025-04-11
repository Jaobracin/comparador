document.addEventListener("DOMContentLoaded", function () {
    const linhas = document.querySelectorAll("#tabela-precos tbody tr");

    linhas.forEach(linha => {
        const colunas = linha.querySelectorAll("td");
        let menorPreco = Infinity;
        let lojaMaisBarata = "";

        for (let i = 1; i <= 3; i++) {
            const preco = parseFloat(colunas[i].dataset.preco);
            if (preco < menorPreco) {
                menorPreco = preco;
                lojaMaisBarata = ["Loja A", "Loja B", "Loja C"][i - 1];
            }
        }
        colunas[4].textContent = lojaMaisBarata + " (R$ " + menorPreco.toFixed(2).replace(".", ",") + ")";
    });
});
