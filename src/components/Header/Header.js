import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/niftygiftyai.png" className={styles.logo} />
      <h2 className={styles.header_text}>
        Thoughtful gifting, powered by <span className={styles.accent}>AI</span>
      </h2>
    </div>
  )
}
