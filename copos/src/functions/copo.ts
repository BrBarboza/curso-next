import CopoModel from '../model/copo'

export function criarCopos(qtde: number, copoPremiado: number): CopoModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1
    const premiado = numero === copoPremiado
    return new CopoModel(numero, premiado)
  })
}

export function attCopos(copos: CopoModel[], copoMod: CopoModel): CopoModel[] {
  return copos.map(copoAtual => {
    const mod = copoAtual.numero === copoMod.numero

    if (mod) {
      return copoMod
    } else {
      return copoMod.virado ? copoAtual : copoAtual.desselecionar()
    }
  })
}
