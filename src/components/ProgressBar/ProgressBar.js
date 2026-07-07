"use client"

import styles from "./ProgressBar.module.css"

export default function ProgressBar(props) {
  const progress = (props.activeIndex / props.totalSlides) * 100
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
