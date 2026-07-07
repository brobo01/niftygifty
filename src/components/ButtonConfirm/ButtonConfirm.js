"use client"

import styles from "./ButtonConfirm.module.css"
import { useStore } from "@/store/useStore"
import { fetchIdeas } from "@/services/giftService"
import { generatePrompt } from "@/services/generatePrompt"
import { personalityStyle } from "@/data/giftingFields"
import data from "@/data/sampleIdeas.json"

export default function ButtonConfirm(props) {
  const { ideas, filters, updateIdeas, loading, toggleLoading } = useStore()
  const submit = async () => {
    toggleLoading()
    // console.log(ideas.length)
    // const help = data[ideas.length]
    // setTimeout(() => {
    //   updateIdeas([help])
    // }, 3000)
    const prompt = generatePrompt({ ideas, filters })
    const data = await fetchIdeas({
      prompt,
    })
    updateIdeas(data.ideas.gift_ideas)
  }

  const topFilterSelections = [
    {
      key: "relationship",
      heading: "Who",
      type: "string",
      logo: "person.svg",
    },
    {
      key: "occasion",
      heading: "Occasion",
      type: "string",
      logo: "gift.svg",
    },
    {
      key: "occasionImportance",
      heading: "Importance",
      type: "string",
      logo: "star.svg",
    },
    {
      key: "budget",
      heading: "Budget",
      type: "string",
      logo: "wallet.svg",
    },
    {
      key: "budgetFlex",
      heading: "Budget flexible",
      type: "string",
      logo: "dollar.svg",
    },
  ]

  const bottomFilterSelections = [
    {
      key: "interests",
      heading: "What are they into?",
      type: "array",
    },
    {
      key: "personality",
      heading: "What they like?",
      type: "object",
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.section_heading}>
          <img src="spark.svg" />
          <h3>Who are we shopping for</h3>
        </div>
        <div className={styles.top_content}>
          {topFilterSelections.map((selection, index) => (
            <div key={index} className={styles.filter_item}>
              <img src={selection.logo} className={styles.logo} />
              <div key={index} className={styles.filter_item_text}>
                <h6 className={styles.selection_heading}>
                  {selection.heading}
                </h6>
                {selection.type === "string" ? (
                  <p className={styles.selected_option}>
                    {filters[selection.key]}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section_heading}>
          <img src="spark.svg" />
          <h3>They&rsquo;re into</h3>
        </div>
        <div className={styles.interest_container}>
          {filters["interests"]?.map((filter, index) => (
            <div key={index} className={styles.selected_interest}>
              {filter}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section_heading}>
          <img src="spark.svg" />
          <h3>What they&rsquo;re like</h3>
        </div>
        <div className={styles.personality_container}>
          {Object.entries(filters["personality"])?.map((selection, index) => (
            <div key={index} className={styles.selected_personality}>
              {personalityStyle.scales[selection[0]][selection[1]]}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.submit_section}>
        <h3>If you are happy with that, then lets create some gift ideas!</h3>
        <button className={styles.lets_go} onClick={submit} disabled={loading}>
          <h3>{loading ? "Generating" : "Generate gift ideas"}</h3>
        </button>
      </div>
    </div>
  )
}
