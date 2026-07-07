"use client"

import styles from "./SwiperButtons.module.css"
import { useStore } from "@/store/useStore"
import { useSwiper } from "swiper/react"

export default function SwiperButtons(props) {
  const { filters } = useStore()
  const swiper = useSwiper()

  const isEmpty = (value) => {
    // null or undefined
    if (value === null) return true

    if (value === false) return true

    // String
    if (typeof value === "string") {
      return value.trim().length === 0
    }

    // Array
    if (Array.isArray(value)) {
      return value.length === 0
    }

    // Object
    if (typeof value === "object") {
      return Object.keys(value).length === 0
    }

    return false
  }

  const showNext = props.last ? false : isEmpty(filters[props.parent])

  return (
    <div className={styles.button_container}>
      {props.first ? null : (
        <button
          onClick={() => swiper.slidePrev()}
          className={styles.swiper_button}
        >
          Previous
        </button>
      )}
      {props.last ? null : (
        <button
          onClick={() => swiper.slideNext()}
          disabled={showNext}
          className={styles.next_button}
        >
          Next
        </button>
      )}
    </div>
  )
}
