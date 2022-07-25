/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function nome() {
  const router = useRouter()
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas / id / Buscar - nome </h1>
      <h2>O nome da rota pode ser trocada por quaquer coisa por ser dinamico</h2>
      <h2>{nome}</h2>
      <span>Este é o pelo o que foi trocado</span>

      <div>
        <Link href="/rotas">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  )
}