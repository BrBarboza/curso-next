import CopoModel from '../../model/copo'
import Bola from '../bola'
import styles from './styles.module.css'

interface CopoProps {
  value: CopoModel
  onChange: (novoCopo: CopoModel) => void
}

export default function Copo(props: CopoProps) {
  const copo = props.value
  const selecionado = copo.selecionado && copo.normal ? styles.selecionado : ''

  const alterarSelecao = e => props.onChange(copo.alternarSelecao())
  const virar = e => {
    e.stopPropagation()
    props.onChange(copo.virar())
  }

  function renderCopo() {
    return (
      <div className={`${styles.borda} ${selecionado}`}>
        <div className={styles.base}>
          <div className={styles.corpo}>
            <div className={styles.fundo} onClick={virar}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alterarSelecao}>
      {copo.normal ? renderCopo() : copo.temBola ? <Bola /> : false}
    </div>
  )
}
