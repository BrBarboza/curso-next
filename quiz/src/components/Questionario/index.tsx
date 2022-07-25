import QuestaoModel from '../../model/questao'
import Botao from '../Botao'
import Questao from '../Questao'
import styles from './styles.module.css'

interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoPraResposta={10}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irPraProximoPasso}
        />
      ) : (
        false
      )}

      <Botao
        onClick={props.irPraProximoPasso}
        texto={props.ultima ? 'Finalizar' : 'Próxima'}
      />
    </div>
  )
}