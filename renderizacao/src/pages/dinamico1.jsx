export function getServerSideProps() {
  console.log('[Server] gerendo props para o componente')
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function dinamico1(props) {
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}
