export async function getStaticProps() {
  console.log('[Server] gerendo props para o componente')

  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()

  return {
    props: {
      produtos
    }
  }
}

export default function estatico4(props) {
  console.log('[Cliente] renderizando o componente')

  function renderizarProdutos() {
    return props.produtos.map(produto => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} tem preço de R${produto.preco}
        </li>
      )
    })
  }

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  )
}

//  BUG - Ao rodar nosso codigo em modo de BUILD ele vai monstrar um erro que ocorre a fato de pararmos a nossa API para que nosso codigo seja lido em modo de contrução.

// Para solucionar o problema, basta rodar a aplicacao em modo de desenvolvimento, abrir outra aba e  rodar em producao.
