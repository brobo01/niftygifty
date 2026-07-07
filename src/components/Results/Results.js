"use client"

import styles from "./Results.module.css"
import { useStore } from "@/store/useStore"
import Card from "./Card"
import data from "@/data/sampleIdeas.json"

export default function Results() {
  const { ideas } = useStore()

  const content = ideas.length > 0 ? ideas : data

  return (
    <div>
      <h2 className={styles.heading}>Results</h2>
      <div className={styles.card_grid}>
        {content
          ? content.map((element, index) => <Card key={index} {...element} />)
          : null}
      </div>
    </div>
  )
}
