"use client"

import styles from "./Results.module.css"
import Loading from "@/components/Loading/Loading"
import { useStore } from "@/store/useStore"

export default function Card(props) {
  const { error, errorText } = useStore()
  const isEmpty = Object.keys(props).length === 0
  return (
    <div className={styles.card}>
      {error ? (
        errorText
      ) : isEmpty ? (
        <Loading />
      ) : (
        <div className={styles.content}>
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
          <a
            href={`https://www.google.com/search?q=${props.name.replace(/ /g, "-")}`}
            className={styles.lets_go}
          >
            Check it out on Google
          </a>
        </div>
      )}
    </div>
  )
}
