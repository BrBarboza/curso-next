/* eslint-disable tailwindcss/no-custom-classname */
export default function Cabecalho(props) {
  return (
    <div className="flex h-1/3 bg-img-tarefas bg-cover bg-no-repeat">
      <div
        className={`
                flex h-full flex-1 items-center justify-center
                bg-gradient-to-r from-purple-600 via-transparent to-blue-600
            `}
      >
        {props.children}
      </div>
    </div>
  )
}
