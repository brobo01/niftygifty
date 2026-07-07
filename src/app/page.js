"use client"

import styles from "./page.module.css"
import { useState } from "react"

import Results from "@/components/Results/Results"
import ProgressBar from "@/components/ProgressBar/ProgressBar"
import InputsSwiper from "@/components/InputsSwiper/InputsSwiper"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [totalSlides, setTotalSlides] = useState(0)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <Hero />
        <InputsSwiper
          setActiveIndex={setActiveIndex}
          setTotalSlides={setTotalSlides}
        />
        <ProgressBar activeIndex={activeIndex} totalSlides={totalSlides} />
        <Results />
      </div>
    </div>
  )
}
