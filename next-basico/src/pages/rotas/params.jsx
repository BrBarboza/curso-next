/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link"
import { useRouter } from "next/router"

export default function params() {
  const router = useRouter()

  const id = router.query.id
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas Parans: {id} e {nome}</h1>
      <h2>Posso passar parametros na rota - dps de params colocar ?nome=... {'&'} id=... </h2>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}