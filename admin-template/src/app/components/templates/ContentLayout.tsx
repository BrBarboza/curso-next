import Content from './Content'
import TopBar from './TopBar'

interface ContentLayoutProps {
  title: string
  subtitle: string
  children?: any
}

export default function ContentLayout(props: ContentLayoutProps) {
  return (
    <div>
      <TopBar title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  )
}
