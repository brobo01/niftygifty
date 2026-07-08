"use client"
import { useMemo } from "react"
import styles from "./Results.module.css"
import { useStore } from "@/store/useStore"
import Card from "./Card"
import EmptyState from "@/components/EmptyState/EmptyState"

export default function Results() {
  const { ideas, loading } = useStore()

  const displayIdeas = useMemo(() => {
    if (loading) {
      return [{}, ...ideas]
    }
    return ideas
  }, [loading, ideas])

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Gift <span className={styles.heading_pink}>Ideas</span>
      </h2>
      {displayIdeas.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={styles.card_grid}>
          {displayIdeas.map((element, index) => (
            <Card key={index} {...element} />
          ))}
        </div>
      )}
    </div>
  )
}
