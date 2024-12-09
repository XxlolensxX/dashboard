import styles from './cardProject.module.scss'

export const CardProject = () => {
  return (
    <article className={styles.cardProject}>
      <figure className={styles.cardProjectHeader}>
        <img src="https://placecats.com/308/205" alt="lorem ipsum" />
      </figure>
      <div className={styles.cardProjectBody}>
        <div className={styles.cardProjectBodyInformation}>
          <h3>Nombre del proyecto</h3>
          <p>Crado por Nombre DEV</p>
        </div>
        <img src="https://placehold.co/16x16" alt="lorem ipsum" />
      </div>
      <div className={styles.cardProjectFooter}>
        <a href="#">
          Ver más
        </a>
      </div>
    </article>
  )
}