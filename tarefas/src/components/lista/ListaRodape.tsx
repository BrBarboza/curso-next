import ListaTarefas from '../../model/ListaTarefas'
import ListaBotao from './ListaBotao'

interface ListaRodapeProps {
  tarefas: ListaTarefas
  mudou: (tarefas: ListaTarefas) => void
}

export default function ListaRodape(props: ListaRodapeProps) {
  const { tarefas, mudou } = props

  function renderizarQtdeDeItens() {
    return (
      <>
        <span className="hidden text-gray-300 lg:inline">
          {tarefas.quantidade}
          {tarefas.quantidade === 0
            ? ' Nenhuma Tarefa Encontrada'
            : tarefas.quantidade === 1
            ? ' Tarefa Encontrada'
            : ' Tarefas Encontradas'}
        </span>
        <span className="hidden flex-1 lg:inline"></span>
      </>
    )
  }

  function renderizarBotoesFiltro() {
    return (
      <>
        <ListaBotao
          selecionado={tarefas.exibindoTodas()}
          onClick={() => mudou(tarefas.removerFiltro())}
          className="hidden md:inline"
        >
          Todas
        </ListaBotao>
        <ListaBotao
          selecionado={tarefas.exibindoSomenteAtivas()}
          onClick={() => mudou(tarefas.filtrarAtivas())}
          className="mx-4"
        >
          Ativas
        </ListaBotao>
        <ListaBotao
          selecionado={tarefas.exibindoSomenteConcluidas()}
          onClick={() => mudou(tarefas.filtrarConcluidas())}
        >
          Concluídas
        </ListaBotao>
      </>
    )
  }

  function renderizarExcluirConcluidas() {
    return (
      <>
        <span className="grow"></span>
        <ListaBotao onClick={() => mudou(tarefas.excluirConcluidas())}>
          Excluir <span className="hidden md:inline">Concluídas</span>
        </ListaBotao>
      </>
    )
  }

  return (
    <li className="flex p-5">
      {renderizarQtdeDeItens()}
      {renderizarBotoesFiltro()}
      {renderizarExcluirConcluidas()}
    </li>
  )
}
