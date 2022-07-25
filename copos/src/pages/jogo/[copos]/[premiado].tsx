import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Copo from '../../../components/copo/index'
import { attCopos, criarCopos } from '../../../functions/copo'

export default function Home() {
  const router = useRouter()
  const [copos, setCopos] = useState([])
  const [valido, setValido] = useState(false)

  useEffect(() => {
    const copos = +router.query.copos
    const premiado = +router.query.premiado

    const qtdeValida = copos >= 3 && copos <= 100
    const PremiadoValido = premiado >= 1 && premiado <= copos
    setValido(qtdeValida && PremiadoValido)
  }, [copos])

  useEffect(() => {
    const copos = +router.query.copos
    const premiado = +router.query.premiado
    setCopos(criarCopos(copos, premiado))
  }, [router?.query])

  function renderCopos() {
    return copos.map(copo => {
      return (
        <Copo
          key={copo.numero}
          value={copo}
          onChange={newCopo => setCopos(attCopos(copos, newCopo))}
        />
      )
    })
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.copos}>
        {valido ? renderCopos() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.btn}>
        <Link href="/">
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  )
}
