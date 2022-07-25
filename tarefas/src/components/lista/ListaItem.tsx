import Selecao from './Selecao'

interface ListaItemProps {
  valor: string
  concluido: boolean
  alterarStatus: () => void
}

export default function ListaItem(props: ListaItemProps) {
  const estiloTexto = props.concluido
    ? 'line-through text-gray-300'
    : 'text-gray-500'

  return (
    <li
      onClick={props.alterarStatus}
      className={`
            flex
            cursor-pointer items-center border-b border-gray-400
            p-5 text-xl text-black
        `}
    >
      <Selecao valor={props.concluido} />
      <span className={`ml-5 font-light ${estiloTexto}`}>{props.valor}</span>
    </li>
  )
}
