"use client"

import styles from "./Results.module.css"

export default function Card(props) {
  const googleSearch = `https://www.google.com/search?q=${props.name.replace(/ /g, "-")}`
  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>
      <p className={styles.category_pill}>{props.category}</p>
      <div className={styles.card_item}>
        <div className={styles.card_subheading}>Description</div>
        <div className={styles.card_text}>{props.description}</div>
      </div>
      <div className={styles.card_item}>
        <div className={styles.card_subheading}>Why it fits</div>
        <div className={styles.card_text}>{props.why_it_fits}</div>
      </div>
      <div className={styles.card_item}>
        <div className={styles.card_subheading}>Price</div>
        <div className={styles.card_text}>{props.price}</div>
      </div>
      {/* <a href={props.url}>Check it out here</a> */}
      <a href={googleSearch} className={styles.lets_go}>
        Check it out on Google
      </a>
    </div>
  )
}
