"use client"

import styles from "./Results.module.css"
import { useStore } from "@/store/useStore"
import Card from "./Card"
import data from "@/data/sampleIdeas.json"

export default function Results() {
  const { ideas } = useStore()

  const content = ideas.length > 0 ? ideas : []
  const loading = useStore((state) => state.loading)

  console.log(loading)
  return (
    <div className={styles.container}>
      {content.length > 0 ? (
        <div>
          <h2 className={styles.heading}>
            Gift <span className={styles.heading_pink}>Ideas</span>
          </h2>
          <div className={styles.card_grid}>
            <div className={loading ? styles.active : styles.inactive}>
              <div className={styles.loader}></div>
            </div>
            {content
              ? content.map((element, index) => (
                  <Card key={index} {...element} />
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
