"use client"

import styles from "./ButtonGrid.module.css"
import { useState, useMemo, useRef, useLayoutEffect } from "react"
import ButtonInput from "../ButtonInput/ButtonInput"
import gsap from "gsap"
import { Flip } from "gsap/dist/Flip"

export default function ButtonGrid(props) {
  const { options, element, type, textFilter } = props
  const [query, setQuery] = useState("")

  // Keep a ref map: card id → DOM element
  const cardRefs = useRef({})

  const matchSet = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return new Set(options.map((c) => c))
    return new Set(
      options.filter((c) => c.toLowerCase().includes(q)).map((c) => c),
    )
  }, [options, query])

  const visibleCount = matchSet.size

  const prevMatchSet = useRef(matchSet)

  useLayoutEffect(() => {
    gsap.registerPlugin(Flip)
    const wrappers = Object.values(cardRefs.current).filter(Boolean)
    if (!wrappers.length) return

    // 1. Snapshot positions BEFORE any DOM changes
    const state = Flip.getState(wrappers)

    // 2. Show/hide elements — Flip detects display:none as "leaving"
    wrappers.forEach((el) => {
      const id = el.dataset.flipId.replace("card-", "")
      const isVisible = matchSet.has(id)
      el.style.display = isVisible ? "" : "none"
    })

    // 3. Animate from the snapshot to the new state
    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.04,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" },
        ),
      onLeave: (els) =>
        gsap.to(els, {
          opacity: 0,
          scale: 0.88,
          duration: 0.3,
          ease: "power2.in",
        }),
      absolute: true,
    })

    prevMatchSet.current = matchSet
  }, [matchSet])

  const clear = () => {
    setQuery("")
  }

  return (
    <div className={styles.container}>
      {textFilter ? (
        <div className={styles.search_wrapper}>
          <span className={styles.search_icon}>⌕</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className={styles.clearButton}
              onClick={clear}
              aria-label="Clear filter"
            >
              ×
            </button>
          )}
        </div>
      ) : null}
      <div className={styles.grid}>
        {options.map((option, index) => (
          <ButtonInput
            key={index}
            text={option}
            parentElement={element}
            type={type}
            visible={matchSet.has(option)}
            innerRef={(el) => {
              cardRefs.current[option] = el
            }}
          />
        ))}
        {visibleCount === 0 ? (
          <h4>
            No results
            <button onClick={clear}>clear</button>
          </h4>
        ) : null}
      </div>
    </div>
  )
}
