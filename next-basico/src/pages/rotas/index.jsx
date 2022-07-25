/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link"
import router from "next/router"

export default function rotas() {

  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: '0123',
        nome: 'bruno'
      }
    })
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?nome=bruno&id=0123">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/nome">
          <li>Nome</li>
        </Link>
      </ul>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/nome")}>Nome</button>
        <button onClick={navegComParams}>Params</button>
      </div>
    </div>
  )
}