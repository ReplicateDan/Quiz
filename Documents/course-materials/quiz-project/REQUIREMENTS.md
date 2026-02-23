# Coffee Personality Quiz — Requirements

## Personality → Coffee Pairings

| Personality | Coffee | Tagline | Image |
|---|---|---|---|
| **Bold Adventurer** | Double Espresso | "You live for intensity" | `public/espresso.jpg` |
| **Cozy Classic** | Medium Roast Drip | "Comfort in every cup" | `public/drip-coffee.jpg` |
| **Zen Minimalist** | Black Coffee, Single Origin | "Simple. Clean. Perfect." | `public/black-coffee.jpg` |
| **Artisan Snob** | Pour-Over, Single Origin | "You know what you like" | `public/pour-over.jpg` |

---

## Result Display Style

**Show all percentages (Option B)**

At the end of the quiz, show the full breakdown:
- Primary result highlighted (e.g., "You're 50% Bold Adventurer")
- All 4 personalities shown with their % score
- Each result includes the coffee recommendation and tagline
- Each result shows the corresponding image

---

## Visual Style

**Minimal & Clean (Style 2)**
- Lots of whitespace
- Simple, elegant typography (Inter font)
- Thin progress bar at top
- Clean list-style answer options with hover/selected states
- Muted color palette — black, white, light grays
- Small checkmark or arrow to indicate selected answer
- Dark "Continue" button

---

## Images

Downloaded to `public/` folder:
- `espresso.jpg` — Bold Adventurer
- `drip-coffee.jpg` — Cozy Classic
- `black-coffee.jpg` — Zen Minimalist
- `pour-over.jpg` — Artisan Snob

---

## Icons

**Yes — emoji icons next to each answer option**

Each answer option should have a leading emoji that matches the vibe of the answer.

---

## Quiz Questions

**Style:** Lifestyle & preferences

### Q1: Your ideal Saturday morning looks like...
- 🏔️ Up early, out the door — there's always somewhere to explore → **Bold Adventurer**
- 🛋️ Slow start, no plans, nowhere to be → **Cozy Classic**
- 📖 Quiet corner, book or journal, total stillness → **Zen Minimalist**
- 🔍 Checking out that new coffee spot you've been researching → **Artisan Snob**

### Q2: When you travel, you're most likely to...
- 🎒 Book a one-way ticket and figure it out → **Bold Adventurer**
- 🏡 Rent a cozy cottage and never leave it → **Cozy Classic**
- 🧘 Find one beautiful place and stay there → **Zen Minimalist**
- 🗺️ Plan an itinerary around the best local food & coffee → **Artisan Snob**

### Q3: Your friends would describe you as...
- ⚡ The one who suggests spontaneous road trips → **Bold Adventurer**
- 🤗 The one whose house everyone ends up at → **Cozy Classic**
- 🌿 The calm one who always seems at peace → **Zen Minimalist**
- 🎯 The one with opinions about everything → **Artisan Snob**

### Q4: Your relationship with your phone is...
- 📸 Always out, capturing everything → **Bold Adventurer**
- 📵 Face-down, don't bother me → **Cozy Classic**
- 🔕 On silent, obviously → **Zen Minimalist**
- 📱 Full of niche apps and newsletters → **Artisan Snob**

### Q5: When you eat out, you...
- 🌶️ Order the most adventurous thing on the menu → **Bold Adventurer**
- 🍝 Get your usual — you know what you like → **Cozy Classic**
- 🥗 Keep it simple and clean → **Zen Minimalist**
- 🧐 Ask the server three questions before ordering → **Artisan Snob**

### Q6: Your work style is...
- 🚀 Dive in, figure it out as you go → **Bold Adventurer**
- ☕ Best with snacks, good music, no interruptions → **Cozy Classic**
- 🎧 Deep focus, one thing at a time → **Zen Minimalist**
- 📋 Researched, deliberate, done right → **Artisan Snob**

---

## Scoring Logic

Each answer maps to one personality. At the end:
1. Count how many answers mapped to each personality
2. Convert to percentages (out of 6 questions)
3. Sort by highest percentage
4. Display all 4 results with percentages, coffee recommendation, tagline, and image
5. Top result is visually highlighted as the primary result
