"use client"

import styles from "./ButtonInput.module.css"
import { useStore } from "@/store/useStore"

export default function ButtonInput(props) {
  const { parentElement, text, type, visible, innerRef } = props
  const filters = useStore((state) => state.filters)
  const filterKey = parentElement
  const updateFilter = useStore((state) => state.updateFilter)
  let value = text
  let isActive = Array.isArray(filters[filterKey])
    ? filters[filterKey].includes(value)
    : filters[filterKey] === value

  return (
    <div
      ref={innerRef}
      className={styles.cardWrapper}
      data-flip-id={`card-${text}`}
      data-hidden={!visible}
    >
      <div className={styles.cardInner}>
        <button
          className={isActive ? styles.active : styles.inactive}
          onClick={() => {
            updateFilter(parentElement, value, type)
          }}
        >
          {props.text}
        </button>
      </div>
    </div>
  )
}
