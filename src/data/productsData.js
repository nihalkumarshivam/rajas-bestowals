export const BRAND_INFO = {
  name: "Rajas Bestowals",
  tagline: "Born of Royal Passion, Bestowed for your ultimate lifestyle",
  subTagline: "Premium Indian Gifting • Heritage • Grace • Craft",
  colors: {
    terracotta: "#A7533B",
    softIvory: "#FDFEFF",
    warmCream: "#F4EEE6",
    antiqueGold: "#C6A46A",
    espresso: "#3A241D"
  },
  missionMarkers: [
    { id: "karnataka", name: "Karnataka", subtitle: "Roots & Organic Groves", desc: "Reviving local farmers, fair trade seed sourcing, and native timber wood presses." },
    { id: "india", name: "Pan-India", subtitle: "Nationwide Certified Distribution", desc: "Serving pure, lab-tested nutrition across all 28 states with zero adulteration." },
    { id: "abroad", name: "Global / Abroad", subtitle: "Exporting Royal Heritage", desc: "Introducing authentic Indian cold-pressed craftsmanship and superfoods worldwide." }
  ],
  contact: {
    phone: "+91 98450 82741",
    whatsapp: "+91 98450 82741",
    email: "concierge@rajasbestowals.com",
    exportEmail: "export@rajasbestowals.com",
    address: "Rajas Bestowals Agro & FMCG Pvt. Ltd., Royal Heritage Industrial Estate, Bengaluru Rural, Karnataka 562123, India",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
  }
};

export const PRODUCTS = [
  // Division 1: Cooking Oil
  {
    id: "rajas-signature-cooking-oil",
    division: "cooking-oil",
    divisionTitle: "Cooking Oil",
    name: "Rajas Signature Blended Cooking Oil",
    subtitle: "Cold-Pressed Heart-Healthy Culinary Blend",
    shortDesc: "Low in SFA, naturally enriched with PUFA & MUFA for everyday royal wellness.",
    fullDesc: "Crafted through a proprietary low-temperature blend of cold-pressed edible oils. Rajas Cooking Oil is formulated specifically to maintain a pristine lipid balance, smoke stability for Indian tempering, and complete freedom from chemical solvents.",
    price: 385,
    volume: "1 Liter Bottle",
    volumeOptions: [
      { label: "1 Liter Glass Bottle", price: 385 },
      { label: "2 Liter Ceramic Jar", price: 740 },
      { label: "5 Liter Royal Tin", price: 1750 }
    ],
    rating: 4.9,
    reviewsCount: 148,
    badge: "Signature Blend",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    benefits: [
      { key: "Low SFA", label: "Low Saturated Fat", desc: "Under 14% SFA, heart-conscious daily cooking" },
      { key: "High PUFA", label: "Rich in PUFA", desc: "Omega-3 & Omega-6 essential fatty acids" },
      { key: "Balanced MUFA", label: "Rich in MUFA", desc: "Supports cardiovascular vitality and good HDL" },
      { key: "Cold-Pressed", label: "Zero Solvents", desc: "No chemical deodorization, no hexane extraction" }
    ],
    nutrition: {
      servingSize: "100g",
      energy: "898 kcal",
      totalFat: "99.8 g",
      saturatedFat: "12.8 g",
      mufa: "48.2 g",
      pufa: "38.8 g",
      transFat: "0.0 g",
      cholesterol: "0 mg",
      vitaminE: "32 mg"
    }
  },

  // Division 2: Cold Pressed Oils
  {
    id: "wood-pressed-coconut-oil",
    division: "cold-pressed",
    divisionTitle: "Cold Pressed Oils",
    type: "coconut",
    name: "Wood-Pressed Virgin Coconut Oil",
    subtitle: "Traditional Wooden Kolhu • Native Karnataka Coconuts",
    shortDesc: "Extracted slowly from sun-dried sulphur-free copra under 38°C for pure floral coconut sweetness.",
    fullDesc: "Cold-pressed using ancient Vaagai wooden churns. Unbleached, unrefined, and rich in medium-chain triglycerides (MCTs) and Lauric Acid. Perfect for coastal cooking, bulletproof morning brew, and deep holistic nourishment.",
    price: 440,
    volume: "1 Liter",
    volumeOptions: [
      { label: "500 ml Glass Decanter", price: 235 },
      { label: "1 Liter Glass Decanter", price: 440 },
      { label: "5 Liter Cold-Storage Can", price: 2050 }
    ],
    rating: 4.95,
    reviewsCount: 312,
    badge: "100% Raw Kolhu",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    smokePoint: "177°C",
    flavorProfile: "Silky, sweet tropical aroma with pristine clarity"
  },
  {
    id: "wood-pressed-groundnut-oil",
    division: "cold-pressed",
    divisionTitle: "Cold Pressed Oils",
    type: "groundnut",
    name: "Wood-Pressed Native Peanut Oil",
    subtitle: "Stone Ground • Saurashtra & Karnataka Heirloom Nuts",
    shortDesc: "Golden, nutty and fragrant oil extracted from unbleached peanuts for high-heat royal crispness.",
    fullDesc: "Slow wooden churned to retain plant sterols and natural Vitamin E. Gives authentic aroma to daily tadka, traditional frying, and gravies without smoking or foaming.",
    price: 360,
    volume: "1 Liter",
    volumeOptions: [
      { label: "1 Liter", price: 360 },
      { label: "2 Liter", price: 690 },
      { label: "5 Liter", price: 1650 }
    ],
    rating: 4.88,
    reviewsCount: 220,
    badge: "Best for Tadka",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    smokePoint: "230°C",
    flavorProfile: "Earthy, roasted peanut richness with golden transparency"
  },
  {
    id: "wood-pressed-sesame-oil",
    division: "cold-pressed",
    divisionTitle: "Cold Pressed Oils",
    type: "sesame",
    name: "Wood-Pressed Black Sesame Gingelly Oil",
    subtitle: "With Organic Palm Jaggery • Traditional Kolhu Method",
    shortDesc: "Crushed with heirloom palm jaggery in traditional stone-and-wood pestles for immune strength.",
    fullDesc: "A timeless Ayurvedic treasure known as Til Taila. Cold-pressed using native black sesame seeds and natural palm jaggery to moderate bitterness and infuse copper, calcium, and zinc.",
    price: 520,
    volume: "1 Liter",
    volumeOptions: [
      { label: "500 ml", price: 280 },
      { label: "1 Liter", price: 520 },
      { label: "3 Liter", price: 1480 }
    ],
    rating: 4.92,
    reviewsCount: 184,
    badge: "Ayurvedic Heritage",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    smokePoint: "210°C",
    flavorProfile: "Deep nutty bouquet with delicate notes of palm caramel"
  },
  {
    id: "wood-pressed-mustard-oil",
    division: "cold-pressed",
    divisionTitle: "Cold Pressed Oils",
    type: "mustard",
    name: "Wood-Pressed Kacchi Ghani Mustard Oil",
    subtitle: "Pungent Yellow Mustard • Cold Centrifuged",
    shortDesc: "Pungent, authentic aroma with high natural allyl isothiocyanate for immunity and digestion.",
    fullDesc: "Crushed from select Grade-A mustard seeds. 100% pure without adulteration by argemone or artificial pungency enhancers. The benchmark for North Indian pickling and pan-searing.",
    price: 340,
    volume: "1 Liter",
    volumeOptions: [
      { label: "1 Liter", price: 340 },
      { label: "5 Liter Tin", price: 1590 }
    ],
    rating: 4.85,
    reviewsCount: 140,
    badge: "High Pungency",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    smokePoint: "250°C",
    flavorProfile: "Crisp, robust pungent kick with clean golden clarity"
  },

  // Division 3: Superfoods
  {
    id: "royal-nutri-bombs-bars",
    division: "superfoods",
    divisionTitle: "Superfoods",
    name: "Royal Dry Fruit Nutri Bombs & Bars",
    subtitle: "Zero Added Sugar • Pure Kashmiri Almonds, Dates & Figs",
    shortDesc: "Slow-pressed dry fruit rounds infused with saffron, chia seeds, and raw forest honey for athlete & gym stamina.",
    fullDesc: "Handcrafted energy elixir rounds packed with California raw almonds, Afghan figs (anjeer), Medjool dates, pistachios, and organic chia seeds. 100% natural fuel for workout recovery, mindful gifting, and clean midday vitality.",
    price: 490,
    volume: "Box of 12 Bars (480g)",
    volumeOptions: [
      { label: "6 Bars Tasting Box", price: 260 },
      { label: "12 Bars Luxury Box", price: 490 },
      { label: "24 Bars Royal Gift Hamper", price: 920 }
    ],
    rating: 4.97,
    reviewsCount: 420,
    badge: "Athlete Favorite",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    targetAudience: "Health-conscious buyers, gym-goers, sports people, clean eaters",
    nutrition: {
      servingSize: "40g bar",
      energy: "186 kcal",
      protein: "6.8 g",
      dietaryFiber: "4.2 g",
      naturalSugars: "11.0 g",
      addedSugar: "0.0 g",
      healthyFats: "11.4 g",
      iron: "18% RDA",
      potassium: "240 mg"
    }
  },
  {
    id: "organic-moringa-leaf-powder",
    division: "superfoods",
    divisionTitle: "Superfoods",
    name: "Single-Estate Organic Moringa Powder",
    subtitle: "Shade-Dried Karnataka Moringa • 92 Micronutrients",
    shortDesc: "Vibrant emerald green leaf powder containing 7x more Vitamin C than oranges and 4x calcium of milk.",
    fullDesc: "Harvested at dawn from certified pesticide-free moringa groves in Karnataka. Dehydrated in solar shade dryers below 35°C to preserve chlorophyll, bioflavonoids, and live plant enzymes.",
    price: 320,
    volume: "250g Glass Jar",
    volumeOptions: [
      { label: "250g Luxury Jar", price: 320 },
      { label: "500g Value Pouch", price: 580 },
      { label: "1kg Wellness Pack", price: 1050 }
    ],
    rating: 4.91,
    reviewsCount: 265,
    badge: "Single Estate",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    targetAudience: "Daily morning smoothie ritual, cellular rejuvenation & immunity",
    nutrition: {
      servingSize: "10g (1 tbsp)",
      energy: "34 kcal",
      protein: "2.9 g",
      dietaryFiber: "2.1 g",
      calcium: "185 mg",
      vitaminC: "16 mg",
      iron: "3.2 mg",
      antioxidants: "ORAC 157,000"
    }
  },

  // Division 4: Hair Oil & Cosmetics
  {
    id: "rajas-royal-kesh-amrit",
    division: "hair-oil",
    divisionTitle: "Hair Oil & Cosmetics",
    name: "Rajas Royal Kesh Amrit Hair Nectar",
    subtitle: "16 Botanical Herbs • Cold-Pressed Virgin Coconut & Sesame Base",
    shortDesc: "Infused with Bhringraj, Brahmi, Hibiscus petals, Vetiver, and Nagarmotha for royal hair density.",
    fullDesc: "Slow cooked over copper vessels with pure cold-pressed coconut oil and fresh herbal juices according to traditional Kshira Paka texts. Formulated to calm stress, promote hair follicle revitalization, and seal in luminous gloss.",
    price: 650,
    volume: "200 ml Amber Dropper",
    volumeOptions: [
      { label: "100 ml Travel Dropper", price: 360 },
      { label: "200 ml Amber Dropper", price: 650 }
    ],
    rating: 5.0,
    reviewsCount: "Coming Soon",
    badge: "Waitlist Open",
    isComingSoon: true,
    image: "https://images.unsplash.com/photo-1608248597359-598d9e2b1090?auto=format&fit=crop&w=800&q=80",
    ritual: "Warm 8-10 drops in palms, gently massage scalp in circular motions before sleep or 1 hour prior to cleansing."
  }
];

export const FOUR_DIVISIONS = [
  {
    id: "cooking-oil",
    number: "01",
    title: "Cooking Oil",
    subtitle: "Rajas Cooking Oil",
    badge: "Signature Variety",
    desc: "Heart-healthy blend of cold-pressed oils. Low in saturated fat, rich in PUFA & MUFA for everyday royal culinary perfection.",
    accent: "#A7533B",
    bgClass: "bg-terracotta-soft",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    highlights: ["Single Signature Blend", "Under 14% SFA", "Rich in Omega 3 & 6", "Zero Trans Fat"]
  },
  {
    id: "cold-pressed",
    number: "02",
    title: "Cold Pressed Oils",
    subtitle: "Coconut, Groundnut, Sesame & More",
    badge: "100% Raw Kolhu",
    desc: "Traditional wooden press extraction. Slow pressed under 38°C, zero additives, zero chemical processing, pure unrefined aroma.",
    accent: "#C6A46A",
    bgClass: "bg-gold-soft",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    highlights: ["Native Seeds Only", "Traditional Wood Press", "Preserved Enzymes", "Glass Decanted"]
  },
  {
    id: "superfoods",
    number: "03",
    title: "Superfoods",
    subtitle: "Nutri Bombs, Single-Estate Moringa",
    badge: "Clean Fuel",
    desc: "Dry fruit energy rounds and nutrient-dense green powders for health-conscious individuals, gym athletes, and modern fitness.",
    accent: "#5B7553",
    bgClass: "bg-sage-soft",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    highlights: ["Zero Added Sugar", "92 Micro-nutrients", "California Nuts & Dates", "High Clean Protein"]
  },
  {
    id: "hair-oil",
    number: "04",
    title: "Hair Oil & Cosmetics",
    subtitle: "Cosmetics & Hair Elixirs Coming Soon",
    badge: "Exclusive Preview",
    desc: "Botanical hair nectars infused with 16 royal herbs, blush lotus petals, and virgin cold-pressed oils. Luxury spa ritual.",
    accent: "#8B5E66",
    bgClass: "bg-blush-soft",
    image: "https://images.unsplash.com/photo-1608248597359-598d9e2b1090?auto=format&fit=crop&w=800&q=80",
    highlights: ["Bhringraj & Brahmi Infused", "Lotus Petal Radiance", "Cold Pressed Carrier", "VIP Waitlist Open"]
  }
];

export const STORY_TIMELINE = [
  {
    year: "2021",
    title: "Born of Royal Passion",
    desc: "Founded with the ambition to solve modern adulteration in grocery baskets by returning to traditional Indian cold extraction standards."
  },
  {
    year: "2023",
    title: "Revival of Karnataka Kolhu",
    desc: "Partnered directly with heirloom seed growers in Karnataka and established hygienic wooden press mills ensuring fair farmer remuneration."
  },
  {
    year: "2024",
    title: "Certified Standards & Lab Testing",
    desc: "Upgraded testing facilities with NABL-accredited protocols, ensuring zero solvents, heavy metals, or thermal degradation across all batches."
  },
  {
    year: "2026",
    title: "Pan-India Expansion & Global Bestowals",
    desc: "Rolling out the 4 primary divisions nationwide and commencing luxury export consignments to wellness seekers worldwide."
  }
];

export const CORE_VALUES = [
  {
    title: "Royal Luxury",
    subtitle: "Gifting & Elevated Living",
    desc: "Every jar, decanter, and gift box is designed to reflect royal Indian heritage, grace, and exquisite table presence."
  },
  {
    title: "Uncompromising Quality",
    desc: "Artisanal cold extraction, certified organic sourcing, rigorous moisture control, and 100% clean-label transparency.",
    subtitle: "NABL Lab Verified"
  },
  {
    title: "Pure Freshness",
    desc: "Small-batch wooden pressing and zero long warehousing. The oil you receive is as fresh as if pressed this morning.",
    subtitle: "Farm-to-Bottle Direct"
  }
];
