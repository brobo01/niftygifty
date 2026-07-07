import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading_black}>Thoughtful gifts,</h1>
        <h1 className={styles.heading_pink}>made Simple</h1>
        <p className={styles.subheading}>
          Tell us about the person and our AI <br />
          will find gifts that they&rsquo;ll truly love
        </p>
      </div>
      <div className={styles.right}>
        <img src="/niftygiftyheroimage.png" className={styles.hero_image} />
      </div>
    </div>
  )
}
