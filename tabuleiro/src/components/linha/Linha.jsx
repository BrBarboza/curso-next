import styles from './linha.module.css'
import Subdivisao from "../subdivisao/Subdivisao";

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
    </div>
  )
}
