import { useState } from 'react'
import Tarefa from '../../model/Tarefa'

interface FormularioProps {
  novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {
  const [descricao, setDescricao] = useState('')

  function criarNovaTarefa() {
    if (descricao?.trim().length > 0) {
      const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
      props.novaTarefaCriada(novaTarefa)
      setDescricao('')
    }
  }

  return (
    <div className="flex flex-1 justify-center">
      <input
        type="text"
        value={descricao}
        placeholder="Informe sua próxima tarefa"
        onChange={e => setDescricao(e.target.value)}
        onKeyDown={e => (e.key === 'Enter' ? criarNovaTarefa() : false)}
        className={`
                    w-1/2 rounded-lg border-2 border-purple-300 py-2 px-3
                    text-2xl focus:outline-none
                    focus:ring-2 focus:ring-purple-600
                `}
      />
      <button
        onClick={criarNovaTarefa}
        className={`
                ml-3 rounded-lg bg-purple-600 px-5 py-4
                text-xl text-white focus:outline-none
            `}
      >
        +
      </button>
    </div>
  )
}
