"use client"
import { create } from "zustand"

export const useStore = create((set) => ({
  ideas: [],
  filters: {
    budget: null,
    budgetFlex: false,
    occasion: null,
    occasionImportance: null,
    relationship: null,
    interests: [],
    personality: {},
  },

  // flexible updater
  updateFilter: (key, value, type = "replace") =>
    set((state) => {
      // replace single value
      if (type === "replace") {
        return {
          filters: {
            ...state.filters,
            [key]: value,
          },
        }
      }

      // add to array
      if (type === "append") {
        const currentArray = state.filters[key] || []

        const exists = currentArray.includes(value)

        return {
          filters: {
            ...state.filters,
            [key]: exists
              ? currentArray.filter((item) => item !== value)
              : [...currentArray, value],
          },
        }
      }

      return state
    }),
  updatePersonality: (trait, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        personality: {
          ...state.filters.personality,
          [trait]: value,
        },
      },
    })),

  updateIdeas: (ideas) => {
    set((state) => ({
      ideas: [...ideas, ...state.ideas],
    }))
  },
}))
