import styles from '../styles/Formulario.module.css'
import Cartao from '../components/cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/entradaNumerica'
import { useState } from 'react'

const Formulario: React.FC = () => {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Copos?"
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica
            text="Copo Premiado?"
            value={comPresente}
            onChange={novaPortaComPresente =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}

export default Formulario
