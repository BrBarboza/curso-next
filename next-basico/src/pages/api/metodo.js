export default (req, res) => {
  if(req.method === "GET"){
    res.status(200).json({ mesage: "Usando GET"})
  } else {
    res.status(200).json({ mesage: "Diferente de GET"})
  }
}