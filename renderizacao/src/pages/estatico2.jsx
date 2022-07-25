export function getStaticProps() {
  //  NOTE - USANDO DESTA MANEIRA POSSO CRIAR UM VALOR DINAMICO MAS COM UMA PAGINA ESTATICA POREM APENAS EM MODO DE DESENVOLVIMENTO
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function estatico2(props) {
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}
