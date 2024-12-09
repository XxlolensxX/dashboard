import styles from './dataCardMin.module.scss'

export const DataCardMini = () => {
  return (
    <article className={styles.dataCardMini}>
      <figure className={styles.dataCardMiniHeader}>
        <img src="https://picsum.photos/56/56" alt="lorem ipsum" />
      </figure>
      <div className={styles.dataCardMiniBody}>
        <span>Proyectos</span>
        <p>1000</p>
      </div>
    </article>
  )
}
