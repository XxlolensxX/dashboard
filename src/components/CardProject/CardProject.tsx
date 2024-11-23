type Props = {}

export const CardProject = (props: Props) => {
  return (
    <article className="card-project">
      <figure className="card-project-header">
        <img src="https://placehold.co/308x205" alt="lorem ipsum" />
      </figure>
      <div className="card-project-body">
        <div className="card-project-body-information">
          <h3>Nombre del proyecto</h3>
          <p>Crado por Nombre DEV</p>
        </div>
        <img src="https://placehold.co/16x16" alt="lorem ipsum" />
      </div>
      <div className="card-project-footer">
        <a href="#">
          Ver más
        </a>
      </div>
    </article>
  )
}