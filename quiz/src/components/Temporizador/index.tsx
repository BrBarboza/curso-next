import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './styles.module.css'

interface TemporizadorProps {
  key: number
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={120}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={['#bce596', '#F7B801', '#ed827a']}
        colorsTime={[10, 5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
