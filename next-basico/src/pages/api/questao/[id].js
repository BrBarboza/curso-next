export default function questao(req, res) {
  if(req.method === "GET") {
    get(req, res)
  } else {
    res.status(405).send()
  }
}

function get(req, res) {
    const id = req.query.is
    res.status(200).json({
      id,
      enuciado: 'Qual é sua cor preferida?',
      resposta: [
        'Brtanca', 'Vermelha', 'Amarela', 'Verde'
      ]
    })
}