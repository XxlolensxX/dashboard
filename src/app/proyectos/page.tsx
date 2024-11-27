import { PageHeader } from "@/components/PageHeader/PageHeader";
import { CardProject } from "@/components/CardProject/CardProject";

export default function Proyectos  ()  {
  return (
    <main>
      <section>
        <PageHeader />
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
  )
}