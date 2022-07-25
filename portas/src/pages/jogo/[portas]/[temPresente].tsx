import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react";
import Porta from "../../../components/porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link"
import { useRouter } from "next/router"

export default function jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdeValida = portas >= 3 && portas <= 100
    const presenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdeValida && presenteValido)
  }, [portas])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])


  function renderizarPortas() {
    return portas.map((porta) => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />;
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? 
          renderizarPortas() :
          <h1>Valores Inválidos</h1>
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}