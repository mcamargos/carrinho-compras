let totalGeral;
limpar();

function adicionar(){
    //recuperar valores
    let produto = document.getElementById("produto").value; //encontra o nome do produtos
    let nomeProduto = produto.split('-')[0]; //somente o nome do produtos
    let valorUnitario = produto.split("R$")[1]; //somente o valor do produtos
    let quantidade = document.getElementById("quantidade").value; //quantidade de produtos

    //calcular o preço
    let preco = quantidade.value * valorUnitario; // faz o calculo preço x qntd do produto. 

    //adicionar carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML  = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>
      </section>`;
    //atualizar valor total
    let totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById("quantidade").value = 0;

}

function limpar(){
    totalGeral = 0; 
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";

}