/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function buscar() {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Rotas / id / Buscar </h1>
      <h2>Minha rota / id / pode ser trocada por quaquer coisa por ser dinamica</h2>
      <h2>{id}</h2>
      <span>Este é o pelo o que minha rota foi trocada</span>

      <div>
        <Link href="/rotas">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  )
}

// em minha rotas o nome id eh dinamico 