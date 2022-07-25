/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(
    questao => questao.id === idSelecionado
  )

  if (unicaQuestaoOuNada.length === 1) {
    const questaSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
    res.status(200).json(questaSelecionada.toObject())
  } else {
    res.status(204).send('')
  }
}
