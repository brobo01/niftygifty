// EmptyState.jsx
"use client"
import styles from "./EmptyState.module.css"

export default function EmptyState() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.icon}
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="72" y2="72">
            <stop offset="0%" stopColor="#F0AD4E" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        {/* box body */}
        <rect
          x="10"
          y="30"
          width="52"
          height="32"
          rx="4"
          stroke="#3A2E2E"
          strokeWidth="2.5"
          fill="none"
        />
        {/* box lid */}
        <rect
          x="6"
          y="20"
          width="60"
          height="14"
          rx="3"
          stroke="#3A2E2E"
          strokeWidth="2.5"
          fill="none"
        />
        {/* vertical ribbon */}
        <rect x="32" y="20" width="8" height="42" fill="url(#ribbon)" />
        {/* bow */}
        <path
          d="M36 20 C28 8, 14 10, 20 20 C14 10, 8 22, 20 22 Z"
          fill="url(#ribbon)"
        />
        <path
          d="M36 20 C44 8, 58 10, 52 20 C58 10, 64 22, 52 22 Z"
          fill="url(#ribbon)"
        />
      </svg>
      <p className={styles.text}>
        Fill in a few details and your gift ideas will land here.
      </p>
    </div>
  )
}
