"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./InputsSwiper.module.css"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  relationshipToRecipient,
  giftOccasion,
  budget,
  interestsHobbies,
} from "@/data/giftingFields"

import ButtonGrid from "../ButtonGrid/ButtonGrid"
import ButtonConfirm from "@/components/ButtonConfirm/ButtonConfirm"
import SwiperButtons from "@/components/SwiperButtons/SwiperButtons"
import SlidingInput from "../SlidingInput/SlidingInput"

export default function InputsSwiper(props) {
  const personality = {
    practicalVsSentimental: 50,
    minimalistVsCollector: 50,
    luxuryVsFunctional: 50,
    trendyVsClassic: 50,
    experiencesVsPhysical: 50,
    funnyVsSerious: 50,
  }
  const slides = [
    {
      key: "relationship",
      input: "ButtonGrid",
      type: "replace",
      primaryData: relationshipToRecipient.options,
      heading: "Who are we buying for?",
      first: true,
      textFilter: true,
    },
    {
      key: "occasion",
      input: "ButtonGrid",
      type: "replace",
      primaryData: giftOccasion.options,
      heading: "What's the occasion?",
      textFilter: true,
    },
    {
      key: "occasionImportance",
      input: "ButtonGrid",
      type: "replace",
      primaryData: giftOccasion.intensityOptions,
      heading: "How important is it?",
    },
    {
      key: "budget",
      input: "ButtonGrid",
      type: "replace",
      primaryData: budget.options,
      heading: "How much do we have to spend?",
    },
    {
      key: "budgetFlex",
      input: "ButtonGrid",
      type: "replace",
      primaryData: ["No", "Yes"],
      heading: "Is the budget flexible?",
    },
    {
      key: "interests",
      input: "ButtonGrid",
      type: "append",
      primaryData: interestsHobbies.options,
      heading: "What are they into?",
      textFilter: true,
    },
    {
      key: "personality",
      input: "Sliders",
      primaryData: personality,
      heading: "What are they like?",
    },
    {
      key: "confirm",
      input: "ButtonConfirm",
      label: "Confirm",
      component: ButtonConfirm,
      last: true,
      heading: "Almost there, let's recap",
    },
  ]
  const total = slides.length

  return (
    <div className={styles.container}>
      <Swiper
        onSlideChange={(swiper) => {
          props.setActiveIndex(swiper.activeIndex + 1)
        }}
        onSwiper={(swiper) => {
          props.setTotalSlides(swiper.slides.length)
        }}
        className={styles.swiper_container}
        spaceBetween={20}
      >
        {slides.map(
          (
            { key, input, heading, type, primaryData, first, last, textFilter },
            i,
          ) => (
            <SwiperSlide key={key} className={styles.slide}>
              <div className={styles.slide_content}>
                <p className={styles.breadcrumb}>
                  Step {i + 1} of {total}
                </p>
                {heading ? (
                  <h1 className={styles.slide_heading}>{heading}</h1>
                ) : null}
                {input === "ButtonGrid" ? (
                  <ButtonGrid
                    options={primaryData}
                    element={key}
                    type={type}
                    textFilter={textFilter}
                  />
                ) : null}

                {input === "Sliders" ? (
                  <div className={styles.slider_container}>
                    {Object.entries(primaryData).map((scale, index) => (
                      <SlidingInput key={index} scale={scale} />
                    ))}
                  </div>
                ) : null}

                {input === "ButtonConfirm" ? <ButtonConfirm /> : null}

                <SwiperButtons parent={key} first={first} last={last} />
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  )
}
