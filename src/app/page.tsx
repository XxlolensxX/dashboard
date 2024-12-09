import { Navigation } from "@/components/Navigation/Navigation";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { CardProject } from "@/components/CardProject/CardProject";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Navigation />
      <section>
        <PageHeader pageTitle=""/>
        <section>
          <div className="filter">
            <h3>Filtros</h3>
            <div className="filter-actions">
              <button>Fecha</button>
              <button>Nobre</button>
              <button>Pendients</button>
            </div>
          </div>
          <div className="grid">
            <CardProject />
          </div>
        </section>
      </section>
    </main>
  );
}
