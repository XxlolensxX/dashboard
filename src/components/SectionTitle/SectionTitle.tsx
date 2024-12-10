import styles from './sectionTitle.module.scss'

type Props = {
  title: string,
  filter: boolean
}

export const SectionTitle = ( props: Props ) => {
  return (
    <div className={styles.sectionTitle}>
      <div className="sectionTitleH">
        <h2>{props.title}</h2>
      </div>
      { props.filter 
        ?
        <div className={styles.sectionTitleFilter}>
          <button className={styles.active}>Arte</button>
          <button>Music</button>
          <button>Collectibles</button>
          <button>Todos</button>
        </div>
        :
        <></>
      }
    </div>
  )
}
