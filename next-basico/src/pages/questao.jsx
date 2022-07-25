import { useEffect, useState } from "react"

export default function questao() {
  const [questao, setQuestao] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123')
      .then(resp => resp.json())
      .then(setQuestao)
  }, [])

  function renderRespostas() {
    if(questao) {
      return questao.resposta.map((resp, i) => {
        return <li key={i}>{resp}</li>
      })
    }
    return false
  }

  return (
    <div>
      <h1>Questao</h1>
      <div>
        <span>{questao?.id} - {questao?.enuciado}</span>
        <ul>
          {renderRespostas()}
        </ul>
      </div>
    </div>
  )
}