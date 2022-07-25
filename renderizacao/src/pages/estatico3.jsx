export function getStaticProps() {
  return {
    //  NOTE - USANDO DESTA MANEIRA POSSO CRIAR UM VALOR DINAMICO MAS COM UMA PAGINA ESTATICA POREM APENAS EM MODO DE DESENVOLVIMENTO.
    revalidate: 7,
    props: {
      numero: Math.random()
    }
  }
}

export default function estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}

//  FIXME - A OPCAO REVALIDATE É PASSADA EM SEGUNDOS E DIA AO NEXT UM TEMPO PARA ELE FAZER UMA NOVA REQUISICAO, NO MODO DE BUILD.
