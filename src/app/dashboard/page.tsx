import { DataCardMini } from "@/components/DataCardMini/DataCardMini"
import { PageHeader } from "@/components/PageHeader/PageHeader"

import styles from './page.module.scss'
import { CardProject } from "@/components/CardProject/CardProject"

type Props = {}

export default function Dashboard (props: Props) {
  return (
    <>
      <section>
        <div className="inner-container">
          <PageHeader 
            pageTitle={ 'Dashboard'} 
          />
        </div>
      </section>

      <section>
        <div className="inner-container">
          <div className={styles.dashbordarData}>
            <div className={styles.dashboardDataGrid}>
              <DataCardMini />
              <DataCardMini />
              <DataCardMini />
              <DataCardMini />
              <DataCardMini />
              <DataCardMini />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inner-container">
          <div className={styles.dashboardProjects}>
            <div className={styles.dashboardProjectsGrid}>
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}