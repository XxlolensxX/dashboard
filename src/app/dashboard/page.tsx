import { PageHeader } from "@/components/PageHeader/PageHeader"

type Props = {}

export default function Dashboard (props: Props) {
  return (
    <section>
      <PageHeader 
        pageTitle={ 'Dashboard'} 
      />
    </section>
  )
}