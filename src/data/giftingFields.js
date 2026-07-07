/**
 * Interests / Hobbies
 */
export const interestsHobbies = {
  field: "interests_hobbies",
  title: "Interests/Hobbies",
  options: [
    "Gaming",
    "Technology",
    "Fitness",
    "Running",
    "Cycling",
    "Yoga",
    "Cooking",
    "Baking",
    "Coffee",
    "Tea",
    "Wine",
    "Craft Beer",
    "Reading",
    "Writing",
    "Photography",
    "Videography",
    "Music",
    "Concerts",
    "Movies",
    "TV Shows",
    "Anime",
    "Fashion",
    "Beauty",
    "Skincare",
    "Travel",
    "Camping",
    "Hiking",
    "Fishing",
    "Gardening",
    "DIY",
    "Arts & Crafts",
    "Painting",
    "Drawing",
    "Pottery",
    "Home Decor",
    "Interior Design",
    "Pets",
    "Cats",
    "Dogs",
    "Board Games",
    "Collectibles",
    "Cars",
    "Motorcycles",
    "Sports",
    "Football",
    "Formula 1",
    "Golf",
    "Tennis",
    "Swimming",
    "Investing",
    "Cryptocurrency",
    "Productivity",
    "Meditation",
    "Sustainability",
    "Luxury Goods",
    "Jewelry",
    "Watches",
  ],
  intensityOptions: ["casual", "interested", "enthusiast", "obsessed"],
}

/**
 * Budget
 */
export const budget = {
  field: "budget",
  title: "Budget",
  options: [
    "Under £10",
    "£10-£25",
    "£25-£50",
    "£50-£100",
    "£100-£250",
    "£250-£500",
    "£500+",
  ],
}

/**
 * Relationship to Recipient
 */
export const relationshipToRecipient = {
  field: "relationship_to_recipient",
  title: "Relationship",

  options: [
    "Partner",
    "Wife",
    "Husband",
    "Girlfriend",
    "Boyfriend",
    "Friend",
    "Best Friend",
    "Mother",
    "Father",
    "Mum",
    "Dad",
    "Sister",
    "Brother",
    "Daughter",
    "Son",
    "Grandmother",
    "Grandfather",
    "Colleague",
    "Boss",
    "Employee",
    "Teacher",
    "Student",
    "Acquaintance",
    "Client",
  ],
}

/**
 * Personality Style
 */
export const personalityStyle = {
  field: "personality_style",
  title: "Personality",

  scales: {
    practicalVsSentimental: {
      title: "Practical vs Sentimental",
      left: "Practical",
      right: "Sentimental",
      0: "Extremely practical, prioritises usefulness above all emotional value",
      10: "Very practical, rarely values sentimental meaning in gifts",
      20: "Strongly practical, prefers functional items",
      30: "Mostly practical, occasional appreciation for sentiment",
      40: "Slightly practical, leans toward usefulness",
      50: "Balanced between practical and sentimental",
      60: "Slightly sentimental, enjoys emotional meaning",
      70: "Quite sentimental, values thoughtfulness over utility",
      80: "Very sentimental, emotional meaning is key",
      90: "Extremely sentimental, deeply values emotional significance",
      100: "Highly sentimental, gifts should be deeply meaningful and emotional",
    },

    minimalistVsCollector: {
      title: "Minimalist vs Collector",
      left: "Minimalist",
      right: "Collector",
      0: "Extremely minimalist, dislikes clutter and excess possessions",
      10: "Very minimalist, prefers simplicity",
      20: "Strongly minimalist, avoids unnecessary items",
      30: "Mostly minimalist",
      40: "Slightly minimalist",
      50: "Balanced between minimalism and collecting",
      60: "Slightly collector-minded, enjoys keeping interesting items",
      70: "Quite collector-minded, enjoys accumulating meaningful objects",
      80: "Strong collector, values building collections",
      90: "Very strong collector, enjoys many items and variety",
      100: "Extreme collector, loves expanding collections and variety",
    },

    luxuryVsFunctional: {
      title: "Luxury vs Functional",
      left: "Luxury",
      right: "Functional",
      0: "Extremely luxury-oriented, prioritises premium branding and prestige",
      10: "Very luxury-oriented",
      20: "Strongly luxury-leaning",
      30: "Mostly luxury-oriented",
      40: "Slightly luxury-leaning",
      50: "Balanced between luxury and functionality",
      60: "Slightly functional, prefers usefulness over brand prestige",
      70: "Quite functional, values practicality",
      80: "Very functional, avoids unnecessary luxury",
      90: "Extremely functional, prioritises utility above all",
      100: "Purely functional, dislikes luxury branding focus",
    },

    trendyVsClassic: {
      title: "Trendy vs Classic",
      left: "Trendy",
      right: "Classic",
      0: "Extremely trendy, loves latest fashions and new releases",
      10: "Very trendy",
      20: "Strongly trendy",
      30: "Mostly trendy",
      40: "Slightly trendy",
      50: "Balanced between trendy and classic",
      60: "Slightly classic",
      70: "Quite classic, prefers timeless items",
      80: "Very classic, avoids trends",
      90: "Extremely classic, strongly prefers timeless designs",
      100: "Purely classic, avoids anything trendy or seasonal",
    },

    experiencesVsPhysical: {
      title: "Experiences vs Physical",
      left: "Experiences",
      right: "Physical Gifts",
      0: "Strongly prefers physical gifts over experiences",
      10: "Heavily prefers physical items",
      20: "Prefers physical gifts",
      30: "Leans toward physical gifts",
      40: "Slightly prefers physical gifts",
      50: "Balanced between experiences and physical items",
      60: "Slightly prefers experiences",
      70: "Prefers experiences over physical items",
      80: "Strong preference for experiences",
      90: "Very strong preference for experiences",
      100: "Exclusively prefers experiences over physical gifts",
    },

    funnyVsSerious: {
      title: "Funny vs Serious",
      left: "Funny",
      right: "Serious",
      0: "Extremely serious, dislikes humour in gifts",
      10: "Very serious",
      20: "Strongly serious",
      30: "Mostly serious",
      40: "Slightly serious",
      50: "Balanced tone preference",
      60: "Slightly enjoys humour",
      70: "Enjoys humour in gifts",
      80: "Quite playful, appreciates funny gifts",
      90: "Very playful, enjoys humour strongly",
      100: "Extremely humorous, loves funny and playful gifts",
    },
  },
}

/**
 * Occasion
 */
export const giftOccasion = {
  field: "occasion",
  title: "Occasion",
  options: [
    "Birthday",
    "Christmas",
    "Anniversary",
    "Wedding",
    "Valentine's Day",
    "Graduation",
    "Housewarming",
    "Baby Shower",
    "Retirement",
    "Promotion",
    "Mother's Day",
    "Father's Day",
    "Engagement",
    "Thank You",
    "Just Because",
  ],

  intensityOptions: ["Casual", "Meaningful", "Major Milestone"],
}

/**
 * Free-text Description
 */
export const freeTextDescription = {
  field: "free_text_description",
  title: "Free Text",

  prompt:
    "What kind of person are they, and what would make them genuinely happy?",

  placeholder:
    "Example: She loves cozy evenings, recently got into pottery, hates clutter, and enjoys thoughtful experiences more than expensive things.",
}
