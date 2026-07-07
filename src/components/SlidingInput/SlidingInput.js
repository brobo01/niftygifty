"use client"

import styles from "./SlidingInput.module.css"
import { useStore } from "@/store/useStore"
import { personalityStyle } from "@/data/giftingFields"

export default function SlidingInput(props) {
  const { filters } = useStore()
  const sliderContent = personalityStyle.scales[props.scale[0]]
  let sliderValue = props.scale[1]
  if (filters.personality[props.scale[0]]) {
    sliderValue = filters.personality[props.scale[0]]
  }
  const promptText = sliderContent[sliderValue]
  const handleSlide = useStore((state) => state.updatePersonality)

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span>{sliderContent.left}</span>
        <span>{sliderContent.right}</span>
      </div>
      <input
        type="range"
        min={10}
        max={100}
        step={10}
        value={sliderValue}
        onChange={(e) => handleSlide(props.scale[0], Number(e.target.value))}
        className={styles.sliding_input}
      />
      <span className={styles.description}>{sliderContent[sliderValue]}</span>
    </div>
  )
}
