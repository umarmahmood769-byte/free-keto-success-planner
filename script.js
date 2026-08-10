// ============================================================
// KETO APP - FINAL CLEAN SCRIPT
// ============================================================

// ================================
// KETO GROCERY ITEMS
// ================================

const ketoItems = [
  "Almond butter", "Avocado", "Avocados", "Bacon", "Beef broth",
  "Beef steak", "Blackberries", "Blue cheese", "Bok choy", "Bone broth",
  "Brie", "Broccoli", "Brussels sprouts", "Butter", "Cabbage",
  "Cauliflower", "Cashew butter", "Celery", "Cheddar cheese",
  "Chicken broth", "Chicken thighs", "Chicken wings", "Chia seeds",
  "Chili flakes", "Chorizo", "Cocoa powder", "Coconut cream",
  "Coconut flour", "Coconut milk", "Coconut oil", "Cod", "Collard greens",
  "Cream cheese", "Cucumber", "Cumin", "Dijon mustard", "Dill pickles",
  "Eggplant", "Eggs", "Erythritol", "Feta", "Flaxseed", "Garlic", "Ghee",
  "Greek yogurt", "Green beans", "Ground beef", "Ground turkey", "Ham",
  "Heavy cream", "Hemp hearts", "Herbs", "Horseradish", "Kale", "Kimchi",
  "Lamb", "Leeks", "Lemon", "Lettuce", "Lime", "Macadamia nuts", "Mayo",
  "Meatballs", "Mozzarella", "Mushrooms", "Mustard", "Nori sheets",
  "Olive oil", "Olives", "Onion", "Oregano", "Paprika", "Parmesan",
  "Pecans", "Peanuts", "Pistachios", "Pork belly", "Pork chops",
  "Prosciutto", "Psyllium husk", "Pumpkin seeds", "Radishes",
  "Raspberries", "Romaine", "Rosemary", "Salami", "Salmon", "Sardines",
  "Sausage", "Sea salt", "Seaweed", "Shrimp", "Sour cream", "Spinach",
  "Stevia", "Strawberries", "Sunflower seeds", "Tahini", "Tallow",
  "Thyme", "Turkey", "Turkey bacon", "Tuna", "Unsweetened almond milk",
  "Walnuts", "White fish", "Xanthan gum", "Zucchini", "Anchovies",
  "Arugula", "Asparagus", "Basil", "Bell peppers", "Black pepper",
  "Berries", "Brussels sprouts", "Butterhead lettuce", "Coconut flakes",
  "Coconut yogurt", "Cottage cheese", "Cranberries", "Cranberry sauce",
  "Crimini mushrooms", "Curry powder", "Edamame", "Fennel", "Miso paste",
  "Monk fruit sweetener", "Mushroom broth", "Nutritional yeast", "Okra",
  "Palm oil", "Peanut butter", "Pepperoni", "Pine nuts", "Pork rinds",
  "Poultry seasoning", "Pumpkin puree", "Red pepper flakes", "Salsa verde",
  "Scallions", "Sesame seeds", "Smoked salmon", "Sugar-free syrup",
  "Swiss cheese", "Taco seasoning", "Tomato sauce", "Walnut butter",
  "Watercress", "Worcestershire sauce", "Yellow squash"
];

const plannerDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

// ================================
// QUIZ QUESTIONS
// ================================

const quizQuestions = [
  {
    question: "What feels best for your current routine?",
    options: [
      { text: "Meal prep and structure", value: "plan" },
      { text: "Treats and desserts", value: "dessert" },
      { text: "Tracking and wellness data", value: "dna" }
    ]
  },
  {
    question: "Which kitchen tool would you use most?",
    options: [
      { text: "A pressure cooker", value: "pot" },
      { text: "A baking tray", value: "baking" },
      { text: "A meal planner app", value: "plan" }
    ]
  },
  {
    question: "Which outcome matters most right now?",
    options: [
      { text: "Quick wins and simplicity", value: "plan" },
      { text: "Sweet cravings support", value: "dessert" },
      { text: "Biometric-backed guidance", value: "dna" }
    ]
  },
  {
    question: "How do you want to feel after your next meal?",
    options: [
      { text: "Comforted and satisfied", value: "pot" },
      { text: "Happy and indulgent", value: "dessert" },
      { text: "Balanced and informed", value: "dna" }
    ]
  },
  {
    question: "What would make you stick to keto longer?",
    options: [
      { text: "A complete plan", value: "plan" },
      { text: "Easy baking recipes", value: "baking" },
      { text: "Smart coaching", value: "dna" }
    ]
  }
];

// ================================
// PRODUCT MAP
// ================================

const productMap = {
  plan: "The Keto Meal Plan",
  dessert: "Keto Desserts",
  dna: "Keto DNA",
  pot: "Instant Pot Keto",
  baking: "Keto Baking Bundle"
};

// ================================
// PRODUCT CARDS
// ================================

const productCards = [
  {
    name: "The Keto Meal Plan",
    tag: "Structured roadmap",
    description: "A polished weekly plan for calm, repeatable success.",
    accent: "Daily structure",
    image: "🥗",
    rating: "★★★★★",
    bestFor: "Best for: consistent weekly meal prep"
  },
  {
    name: "Keto Desserts",
    tag: "Sweet satisfaction",
    description: "Beautiful low-carb treats that keep cravings in check.",
    accent: "Dessert support",
    image: "🍰",
    rating: "★★★★★",
    bestFor: "Best for: sweet cravings without guilt"
  },
  {
    name: "Keto DNA",
    tag: "Bio-backed guidance",
    description: "Personalized insights that make your plan feel premium.",
    accent: "Smart coaching",
    image: "🧬",
    rating: "★★★★★",
    bestFor: "Best for: data-driven keto support"
  },
  {
    name: "Instant Pot Keto",
    tag: "Fast weeknight meals",
    description: "Quick, easy recipes for your busiest days.",
    accent: "Kitchen speed",
    image: "🍲",
    rating: "★★★★★",
    bestFor: "Best for: fast keto dinners"
  },
  {
    name: "Keto Baking Bundle",
    tag: "Baking confidence",
    description: "Everything you need for indulgent, keto-friendly baking.",
    accent: "Bakery-style results",
    image: "🥐",
    rating: "★★★★★",
    bestFor: "Best for: keto baking success"
  },
  {
    name: "Keto Journey",
    tag: "Shared progress",
    description: "A supportive companion for every milestone in your transformation.",
    accent: "Long-term momentum",
    image: "🌿",
    rating: "★★★★★",
    bestFor: "Best for: staying motivated long-term"
  }
];

// ================================
// STORAGE KEYS
// ================================

const storageKeys = {
  checklist: "keto-checklist-state",
  planner: "keto-planner-state",
  theme: "keto-theme",
  xp: "keto-xp-state",
  quiz: "keto-quiz-state",
  milestone: "keto-milestone-shown"
};

// ================================
// LOCAL STORAGE STATE
// ================================

let checklistState = JSON.parse(
  localStorage.getItem(storageKeys.checklist) || "null"
);

if (!checklistState) {
  checklistState = ketoItems.map((item) => ({
    name: item,
    checked: false
  }));
}

let plannerState = JSON.parse(
  localStorage.getItem(storageKeys.planner) || "null"
);

if (!plannerState) {
  plannerState = Object.fromEntries(
    plannerDays.map((day) => [day, ""])
  );
}

let xpState = JSON.parse(
  localStorage.getItem(storageKeys.xp) || "null"
);

if (!xpState) {
  xpState = {
    points: 0
  };
}

let quizState = JSON.parse(
  localStorage.getItem(storageKeys.quiz) || "null"
);

if (!quizState) {
  quizState = {
    completed: false,
    score: 0,
    recommendation: "Keto Journey"
  };
}

let milestoneShown =
  localStorage.getItem(storageKeys.milestone) === "true";

let progressPopupShown =
  localStorage.getItem("keto-progress-popup-shown") === "true";

let exitPopupShown = false;

// ================================
// DOM ELEMENTS
// ================================

const groceryList = document.getElementById("groceryList");
const searchInput = document.getElementById("searchInput");
const checklistSummary = document.getElementById("checklistSummary");
const progressBar = document.getElementById("progressBar");

const scoreBadge = document.getElementById("scoreBadge");
const heroScore = document.getElementById("heroScore");
const heroXp = document.getElementById("heroXp");
const heroLevel = document.getElementById("heroLevel");
const heroLevelMini = document.getElementById("heroLevelMini");
const heroRingPercent = document.getElementById("heroRingPercent");
const heroProgressRing = document.getElementById("heroProgressRing");
const heroSubtitle = document.getElementById("heroSubtitle");

const xpPercent = document.getElementById("xpPercent");
const xpValue = document.getElementById("xpValue");
const xpLevelValue = document.getElementById("xpLevelValue");
const levelLabel = document.getElementById("levelLabel");
const xpDescription = document.getElementById("xpDescription");
const xpRing = document.getElementById("xpRing");
const xpBoostBtn = document.getElementById("xpBoostBtn");

const achievementBadges =
  document.getElementById("achievementBadges");

const achievementMini =
  document.getElementById("achievementMini");

const themeToggle =
  document.getElementById("themeToggle");

const printBtn =
  document.getElementById("printBtn");

const mealPlanner =
  document.getElementById("mealPlanner");

const calculatorForm =
  document.getElementById("calculatorForm");

const bmiResult =
  document.getElementById("bmiResult");

const calorieResult =
  document.getElementById("calorieResult");

const waterResult =
  document.getElementById("waterResult");

const macroResult =
  document.getElementById("macroResult");

const quizForm =
  document.getElementById("quizForm");

const quizContainer =
  document.getElementById("quizContainer");

const quizResult =
  document.getElementById("quizResult");

const recommendationText =
  document.getElementById("recommendationText");

const recommendationCTA =
  document.getElementById("recommendationCTA");

const recommendationCards =
  document.getElementById("recommendationCards");

const milestoneModal =
  document.getElementById("milestoneModal");

const progressModal =
  document.getElementById("progressModal");

const exitModal =
  document.getElementById("exitModal");

const closeModalBtn =
  document.getElementById("closeModal");

const closeProgressModalBtn =
  document.getElementById("closeProgressModal");

const closeExitModalBtn =
  document.getElementById("closeExitModal");

const confettiLayer =
  document.getElementById("confettiLayer");

// ================================
// SAVE FUNCTIONS
// ================================

function saveChecklist() {
  localStorage.setItem(
    storageKeys.checklist,
    JSON.stringify(checklistState)
  );
}

function savePlanner() {
  localStorage.setItem(
    storageKeys.planner,
    JSON.stringify(plannerState)
  );
}

function saveXp() {
  localStorage.setItem(
    storageKeys.xp,
    JSON.stringify(xpState)
  );
}

function saveQuiz() {
  localStorage.setItem(
    storageKeys.quiz,
    JSON.stringify(quizState)
  );
}

// ================================
// THEME
// ================================

function applyTheme(theme) {
  document.body.dataset.theme = theme;

  localStorage.setItem(
    storageKeys.theme,
    theme
  );

  if (themeToggle) {
    themeToggle.textContent =
      theme === "dark"
        ? "☀️ Light mode"
        : "🌙 Dark mode";
  }
}

// ================================
// GROCERY ITEM META
// ================================

function getItemMeta(itemName) {
  const value = itemName.toLowerCase();

  if (
    /(bacon|beef|chicken|salmon|shrimp|turkey|tuna|ham|sausage|meatballs|prosciutto|salami|pork|lamb|egg|anchovies|pepperoni|chorizo|ground beef|ground turkey|white fish|smoked salmon)/.test(
      value
    )
  ) {
    return {
      icon: "🥩",
      category: "Proteins"
    };
  }

  if (
    /(butter|cream|cheese|ghee|mayo|olive oil|coconut cream|coconut milk|coconut oil|avocado|olives|tallow|feta|parmesan|mozzarella|brie|blue cheese|cheddar|swiss|cream cheese|cottage cheese|greek yogurt|sour cream)/.test(
      value
    )
  ) {
    return {
      icon: "🧈",
      category: "Fats & Dairy"
    };
  }

  if (
    /(spinach|kale|lettuce|cabbage|broccoli|cauliflower|zucchini|cucumber|pepper|radish|carrot|asparagus|mushroom|celery|bok choy|arugula|watercress|sprouts|green beans|eggplant|collard|okra|leek|onion)/.test(
      value
    )
  ) {
    return {
      icon: "🥬",
      category: "Vegetables"
    };
  }

  if (
    /(almond|cashew|pecan|walnut|pistachio|peanut|sunflower|pumpkin|chia|flax|hemp|sesame|macadamia|pine|nut|seed)/.test(
      value
    )
  ) {
    return {
      icon: "🥜",
      category: "Nuts & Seeds"
    };
  }

  if (
    /(broth|sauce|seasoning|mustard|pickle|syrup|sweetener|spice|herb|paprika|oregano|cumin|curry|dijon|worcestershire|salsa|taco|tomato|miso|nori|seaweed|kimchi|cocoa|coconut flour|xanthan|psyllium|yeast)/.test(
      value
    )
  ) {
    return {
      icon: "🧂",
      category: "Pantry"
    };
  }

  return {
    icon: "🛒",
    category: "Pantry"
  };
}

// ================================
// RENDER CHECKLIST
// ================================

function renderChecklist() {
  if (!groceryList || !searchInput) return;

  const query =
    searchInput.value.trim().toLowerCase();

  const filtered = checklistState.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  groceryList.innerHTML = filtered
    .map((item) => {
      const checked =
        item.checked ? "is-checked" : "";

      const meta =
        getItemMeta(item.name);

      return `
        <li>
          <label class="grocery-item ${checked}">
            <input
              type="checkbox"
              data-name="${item.name}"
              ${item.checked ? "checked" : ""}
            />

            <span class="item-meta">
              <span class="item-name">
                ${meta.icon} ${item.name}
              </span>

              <span class="item-category">
                ${meta.category}
              </span>
            </span>
          </label>
        </li>
      `;
    })
    .join("");
}

// ================================
// ACHIEVEMENTS
// ================================

function renderAchievements() {
  if (!achievementBadges || !achievementMini) return;

  const checkedCount =
    checklistState.filter(
      (item) => item.checked
    ).length;

  const total =
    checklistState.length;

  const progressPercent =
    total > 0
      ? Math.round(
          (checkedCount / total) * 100
        )
      : 0;

  const level =
    Math.floor(xpState.points / 250) + 1;

  const badges = [];

  if (progressPercent >= 25) {
    badges.push({
      icon: "🥑",
      title: "Pantry Explorer",
      note: "Your keto foundation is taking shape."
    });
  }

  if (progressPercent >= 75) {
    badges.push({
      icon: "✨",
      title: "Momentum Master",
      note: "A serious keto rhythm is in motion."
    });
  }

  if (xpState.points >= 100) {
    badges.push({
      icon: "⚡",
      title: "Streak Builder",
      note: "Your consistency is compounding."
    });
  }

  if (quizState.completed) {
    badges.push({
      icon: "🧠",
      title: "Insight Seeker",
      note: "Your quiz profile is live."
    });
  }

  if (level >= 3) {
    badges.push({
      icon: "🏆",
      title: "Keto Level Up",
      note: "You are entering premium territory."
    });
  }

  const markup = badges
    .map(
      (badge) => `
        <div class="achievement-badge">
          <div>${badge.icon}</div>
          <strong>${badge.title}</strong>
          <span>${badge.note}</span>
        </div>
      `
    )
    .join("");

  achievementBadges.innerHTML =
    markup ||
    "🌿 Starter mode — Your first wins unlock special badges.";

  achievementMini.innerHTML =
    markup || "🌿 Starter mode";
}

// ================================
// SCOREBOARD
// ================================

function updateScoreboard() {
  const checkedCount =
    checklistState.filter(
      (item) => item.checked
    ).length;

  const total =
    checklistState.length;

  const progressPercent =
    total > 0
      ? Math.round(
          (checkedCount / total) * 100
        )
      : 0;

  const quizScore =
    quizState.completed
      ? quizState.score
      : 0;

  const overallScore =
    Math.min(
      100,
      Math.round(
        progressPercent * 0.7 +
        quizScore * 0.3
      )
    );

  if (checklistSummary) {
    checklistSummary.textContent =
      `${checkedCount} of ${total} items checked`;
  }

  if (progressBar) {
    progressBar.style.width =
      `${progressPercent}%`;
  }

  if (scoreBadge) {
    scoreBadge.textContent =
      `Keto score ${overallScore}/100`;
  }

  if (heroScore) {
    heroScore.textContent =
      overallScore;
  }

  if (heroXp) {
    heroXp.textContent =
      xpState.points;
  }

  const level =
    Math.floor(xpState.points / 250) + 1;

  if (heroLevel) {
    heroLevel.textContent = level;
  }

  if (heroLevelMini) {
    heroLevelMini.textContent = level;
  }

  if (heroRingPercent) {
    heroRingPercent.textContent =
      `${progressPercent}%`;
  }

  if (heroProgressRing) {
    heroProgressRing.style.background =
      `conic-gradient(
        var(--accent)
        ${progressPercent}%,
        rgba(124, 58, 237, 0.15)
        ${progressPercent}% 100%
      )`;
  }

  const nextGoal =
    level * 250;

  const percentToNext =
    Math.min(
      100,
      Math.round(
        (xpState.points % 250) /
          250 *
          100
      )
    );

  if (levelLabel) {
    levelLabel.textContent =
      `Level ${level} • Next goal: ${nextGoal} XP`;
  }

  if (xpValue) {
    xpValue.textContent =
      xpState.points;
  }

  if (xpLevelValue) {
    xpLevelValue.textContent =
      level;
  }

  if (heroSubtitle) {
    heroSubtitle.textContent =
      progressPercent >= 75
        ? "Your system is operating at premium speed."
        : "Your keto journey is building momentum.";
  }

  if (xpDescription) {
    xpDescription.textContent =
      checkedCount > 0
        ? `You are ${checkedCount} items away from a full pantry reset.`
        : "Every checked item sharpens your streak.";
  }

  if (xpPercent) {
    xpPercent.textContent =
      `${percentToNext}%`;
  }

  if (xpRing) {
    xpRing.style.background =
      `conic-gradient(
        var(--accent)
        ${percentToNext}%,
        rgba(124, 58, 237, 0.16) 0%
      )`;
  }

  renderAchievements();

  if (
    progressPercent >= 75 &&
    !milestoneShown &&
    milestoneModal
  ) {
    milestoneShown = true;

    localStorage.setItem(
      storageKeys.milestone,
      "true"
    );

    milestoneModal.classList.remove("hidden");
    milestoneModal.setAttribute(
      "aria-hidden",
      "false"
    );

    launchConfetti();
  }

  if (
    progressPercent >= 80 &&
    !progressPopupShown &&
    progressModal
  ) {
    progressPopupShown = true;

    localStorage.setItem(
      "keto-progress-popup-shown",
      "true"
    );

    progressModal.classList.remove("hidden");
    progressModal.setAttribute(
      "aria-hidden",
      "false"
    );
  }

  if (
    checkedCount === total &&
    !quizState.completed
  ) {
    launchConfetti();
  }
}

// ================================
// MEAL PLANNER
// ================================

function renderPlanner() {
  if (!mealPlanner) return;

  mealPlanner.innerHTML =
    plannerDays
      .map(
        (day) => `
          <button
            type="button"
            class="planner-day"
            data-day="${day}"
          >
            <strong>${day}</strong>
            <span>
              ${plannerState[day] ||
                "Click to choose a meal"}
            </span>
          </button>
        `
      )
      .join("");
}

const mealPlanResult =
  document.getElementById(
    "mealPlanResult"
  );

const ketoMealOptions = {
  Monday: {
    breakfast: "🥑 Avocado & Egg Breakfast",
    lunch: "🥗 Grilled Chicken Salad",
    dinner: "🐟 Garlic Butter Salmon with Broccoli"
  },

  Tuesday: {
    breakfast: "🍳 Cheese & Spinach Omelet",
    lunch: "🥩 Beef Lettuce Wraps",
    dinner: "🍗 Creamy Garlic Chicken"
  },

  Wednesday: {
    breakfast: "🥓 Bacon & Eggs with Avocado",
    lunch: "🥗 Tuna Avocado Salad",
    dinner: "🍖 Herb-Roasted Chicken with Vegetables"
  },

  Thursday: {
    breakfast: "🧀 Greek Yogurt with Berries",
    lunch: "🥩 Ground Beef Keto Bowl",
    dinner: "🐟 Lemon Butter Cod with Asparagus"
  },

  Friday: {
    breakfast: "🍳 Mushroom & Cheese Omelet",
    lunch: "🍗 Chicken Caesar Salad",
    dinner: "🥩 Steak with Garlic Butter & Greens"
  },

  Saturday: {
    breakfast: "🥑 Avocado Egg Bowl",
    lunch: "🍤 Shrimp & Vegetable Bowl",
    dinner: "🍗 Crispy Chicken with Cauliflower"
  },

  Sunday: {
    breakfast: "🥓 Bacon, Eggs & Cheese",
    lunch: "🥗 Salmon Avocado Salad",
    dinner: "🍖 Roast Beef with Broccoli"
  }
};

function showMealPlan(day) {
  if (!mealPlanResult) return;

  const meals =
    ketoMealOptions[day];

  if (!meals) return;

  mealPlanResult.innerHTML = `
    <div class="meal-result">
      <h3>${day} Keto Plan</h3>

      <p>Your Meal Plan for ${day}</p>

      <div class="meal-result-grid">

        <button
          type="button"
          class="meal-option"
          data-meal="${meals.breakfast}"
        >
          <span class="meal-icon">🌅</span>
          <strong>Breakfast</strong>
          <span>${meals.breakfast}</span>
        </button>

        <button
          type="button"
          class="meal-option"
          data-meal="${meals.lunch}"
        >
          <span class="meal-icon">☀️</span>
          <strong>Lunch</strong>
          <span>${meals.lunch}</span>
        </button>

        <button
          type="button"
          class="meal-option"
          data-meal="${meals.dinner}"
        >
          <span class="meal-icon">🌙</span>
          <strong>Dinner</strong>
          <span>${meals.dinner}</span>
        </button>

      </div>

      <p
        class="meal-selection-message"
        id="mealSelectionMessage"
      >
        Click a meal to add it to your ${day} planner.
      </p>
    </div>
  `;
}

if (mealPlanner) {
  mealPlanner.addEventListener(
    "click",
    (event) => {
      const dayButton =
        event.target.closest(
          ".planner-day"
        );

      if (!dayButton) return;

      document
        .querySelectorAll(".planner-day")
        .forEach((button) =>
          button.classList.remove("active")
        );

      dayButton.classList.add("active");

      const day =
        dayButton.dataset.day;

      showMealPlan(day);
    }
  );
}

if (mealPlanResult) {
  mealPlanResult.addEventListener(
    "click",
    (event) => {
      const mealButton =
        event.target.closest(
          ".meal-option"
        );

      if (!mealButton) return;

      const meal =
        mealButton.dataset.meal;

      const activeDay =
        document.querySelector(
          ".planner-day.active"
        );

      if (!activeDay) return;

      const day =
        activeDay.dataset.day;

      plannerState[day] = meal;

      savePlanner();
      renderPlanner();
      showMealPlan(day);

      const message =
        document.getElementById(
          "mealSelectionMessage"
        );

      if (message) {
        message.textContent =
          `✅ ${meal} added to your ${day} plan!`;
      }
    }
  );
}

// ================================
// QUIZ RENDER
// ================================

function renderQuiz() {
  if (!quizContainer) return;

  quizContainer.innerHTML =
    quizQuestions
      .map((item, index) => {
        const options =
          item.options
            .map(
              (option) => `
                <label class="quiz-option">
                  <input
                    type="radio"
                    name="q${index + 1}"
                    value="${option.value}"
                    required
                  />
                  <span>${option.text}</span>
                </label>
              `
            )
            .join("");

        return `
          <div class="quiz-question">
            <h3>
              ${index + 1}. ${item.question}
            </h3>

            ${options}
          </div>
        `;
      })
      .join("");
}

// ================================
// RECOMMENDATION CARDS
// ================================

function renderRecommendationCards() {
  if (!recommendationCards) return;

  recommendationCards.innerHTML =
    productCards
      .map((card) => {
        const isActive =
          quizState.completed &&
          card.name ===
            quizState.recommendation;

        return `
          <article
            class="product-card ${isActive ? "active" : ""}"
          >
            <div class="product-image">
              ${card.image}
            </div>

            <span class="tag">
              ${card.tag}
            </span>

            <strong>
              ${card.name}
            </strong>

            <div class="rating">
              ${card.rating}
            </div>

            <p>
              ${card.description}
            </p>

            <div class="best-for">
              ${card.bestFor}
            </div>

            <span class="pill">
              ${card.accent}
            </span>

            <a
              class="product-cta"
              href="http://bit.ly/4aIbQci"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now
            </a>
          </article>
        `;
      })
      .join("");
}

// ================================
// UPDATE RECOMMENDATION
// ================================

function updateRecommendation() {
  if (recommendationText) {
    recommendationText.textContent =
      quizState.completed
        ? `Your tailored pick is ${quizState.recommendation}.`
        : "Complete the quiz to unlock your next favorite keto companion.";
  }

  if (recommendationCTA) {
    recommendationCTA.textContent =
      quizState.completed
        ? `Claim ${quizState.recommendation}`
        : "Claim your match";
  }

  renderRecommendationCards();
}

// ================================
// XP
// ================================

function addXp(amount) {
  xpState.points =
    Math.max(
      0,
      xpState.points + amount
    );

  saveXp();
  updateScoreboard();
}

// ================================
// CONFETTI
// ================================

function launchConfetti() {
  if (!confettiLayer) return;

  confettiLayer.innerHTML = "";

  for (let i = 0; i < 60; i += 1) {
    const piece =
      document.createElement("span");

    piece.className =
      "confetti-piece";

    piece.style.left =
      `${Math.random() * 100}%`;

    const confettiColors = [
      "#7c3aed",
      "#38bdf8",
      "#f59e0b",
      "#f43f5e",
      "#34d399"
    ];

    piece.style.background =
      confettiColors[
        Math.floor(
          Math.random() *
            confettiColors.length
        )
      ];

    piece.style.setProperty(
      "--drift",
      `${Math.random() * 120 - 60}px`
    );

    piece.style.animationDuration =
      `${2 + Math.random() * 1.5}s`;

    confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 2200);
}

// ============================================================
// SMART DAILY KETO CHALLENGE
// ============================================================

const dailyChallenge =
  document.getElementById(
    "dailyChallenge"
  );

const challengeText =
  document.getElementById(
    "challengeText"
  );

const challengeBtn =
  document.getElementById(
    "challengeBtn"
  );

const dailyChallenges = [
  "Drink enough water today 💧",
  "Add a low-carb vegetable to your next meal 🥦",
  "Take a 20-minute walk today 🚶",
  "Prepare your next keto meal before you get hungry 🍳",
  "Choose whole foods instead of processed snacks 🥑",
  "Check your grocery list before shopping 🛒",
  "Plan tomorrow's meals today 📋"
];

const todayKey =
  new Date()
    .toISOString()
    .slice(0, 10);

const savedChallenge =
  localStorage.getItem(
    "keto-daily-challenge"
  );

function loadDailyChallenge() {
  if (
    !dailyChallenge ||
    !challengeText ||
    !challengeBtn
  ) {
    return;
  }

  if (savedChallenge === todayKey) {
    challengeText.textContent =
      "Today's challenge completed! 🎉";

    challengeBtn.textContent =
      "Completed ✓";

    challengeBtn.disabled = true;

    return;
  }

  const dayNumber =
    Math.floor(
      new Date().getTime() /
        86400000
    );

  challengeText.textContent =
    dailyChallenges[
      dayNumber %
        dailyChallenges.length
    ];
}

if (dailyChallenge) {
  loadDailyChallenge();
}

if (challengeBtn) {
  challengeBtn.addEventListener(
    "click",
    () => {
      localStorage.setItem(
        "keto-daily-challenge",
        todayKey
      );

      if (challengeText) {
        challengeText.textContent =
          "Challenge completed! +25 XP 🎉";
      }

      challengeBtn.textContent =
        "Completed ✓";

      challengeBtn.disabled = true;

      addXp(25);
    }
  );
}

// ================================
// SEARCH
// ================================

if (searchInput) {
  searchInput.addEventListener(
    "input",
    renderChecklist
  );
}

// ================================
// GROCERY CHECKBOX
// ================================

if (groceryList) {
  groceryList.addEventListener(
    "change",
    (event) => {
      const checkbox =
        event.target;

      if (
        !(checkbox instanceof
          HTMLInputElement) ||
        checkbox.type !==
          "checkbox"
      ) {
        return;
      }

      const itemName =
        checkbox.dataset.name;

      const target =
        checklistState.find(
          (item) =>
            item.name === itemName
        );

      if (!target) return;

      target.checked =
        checkbox.checked;

      saveChecklist();

      if (checkbox.checked) {
        addXp(12);
      } else {
        addXp(-12);
      }

      renderChecklist();
      updateScoreboard();

      if (
        checklistState.every(
          (item) => item.checked
        )
      ) {
        launchConfetti();
      }
    }
  );
}

// ================================
// XP BOOST BUTTON
// ================================

if (xpBoostBtn) {
  xpBoostBtn.addEventListener(
    "click",
    () => {
      addXp(25);
    }
  );
}

// ================================
// THEME BUTTON
// ================================

if (themeToggle) {
  themeToggle.addEventListener(
    "click",
    () => {
      const nextTheme =
        document.body.dataset.theme ===
        "dark"
          ? "light"
          : "dark";

      applyTheme(nextTheme);
    }
  );
}

// ================================
// PRINT
// ================================

if (printBtn) {
  printBtn.addEventListener(
    "click",
    () => window.print()
  );
}

// ============================================================
// KETO FOOD CHECKER
// ============================================================

const ketoFoods = {
  banana:
    "❌ Not Keto Friendly<br>Net Carbs: 23g<br>🥑 Better Choice: Avocado",

  rice:
    "❌ Not Keto Friendly<br>Net Carbs: 45g<br>🥦 Better Choice: Cauliflower Rice",

  bread:
    "❌ Not Keto Friendly<br>Net Carbs: 25g<br>🥬 Better Choice: Lettuce Wrap",

  apple:
    "❌ Not Keto Friendly<br>Net Carbs: 25g<br>🥑 Better Choice: Berries",

  potato:
    "❌ Not Keto Friendly<br>Net Carbs: 37g<br>🥦 Better Choice: Cauliflower",

  egg:
    "✅ Keto Friendly<br>Net Carbs: 0.6g",

  eggs:
    "✅ Keto Friendly<br>Net Carbs: 0.6g",

  chicken:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  salmon:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  beef:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  avocado:
    "✅ Keto Friendly<br>Net Carbs: 2g",

  broccoli:
    "✅ Keto Friendly<br>Net Carbs: 4g",

  cauliflower:
    "✅ Keto Friendly<br>Net Carbs: 3g",

  spinach:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  kale:
    "✅ Keto Friendly<br>Net Carbs: 5g",

  lettuce:
    "✅ Keto Friendly<br>Net Carbs: 2g",

  cabbage:
    "✅ Keto Friendly<br>Net Carbs: 3g",

  zucchini:
    "✅ Keto Friendly<br>Net Carbs: 3g",

  asparagus:
    "✅ Keto Friendly<br>Net Carbs: 2g",

  cucumber:
    "✅ Keto Friendly<br>Net Carbs: 3g",

  celery:
    "✅ Keto Friendly<br>Net Carbs: 2g",

  mushrooms:
    "✅ Keto Friendly<br>Net Carbs: 2g",

  "bell pepper":
    "⚠️ Keto Friendly in Moderation<br>Net Carbs: 6g",

  "green beans":
    "⚠️ Keto Friendly in Moderation<br>Net Carbs: 7g",

  onion:
    "⚠️ Use in Small Amounts<br>Net Carbs: 9g",

  garlic:
    "⚠️ Use in Small Amounts<br>Net Carbs: 33g",

  strawberries:
    "✅ Keto Friendly in Moderation<br>Net Carbs: 6g",

  blueberries:
    "⚠️ Limited on Keto<br>Net Carbs: 12g",

  blackberries:
    "✅ Keto Friendly<br>Net Carbs: 5g",

  raspberries:
    "✅ Keto Friendly<br>Net Carbs: 5g",

  lemon:
    "✅ Keto Friendly<br>Net Carbs: 6g",

  lime:
    "✅ Keto Friendly<br>Net Carbs: 5g",

  watermelon:
    "❌ Not Keto Friendly<br>Net Carbs: 11g<br>🥑 Better Choice: Strawberries",

  mango:
    "❌ Not Keto Friendly<br>Net Carbs: 15g<br>🥑 Better Choice: Avocado",

  grapes:
    "❌ Not Keto Friendly<br>Net Carbs: 17g<br>🥑 Better Choice: Blackberries",

  orange:
    "❌ Not Keto Friendly<br>Net Carbs: 12g<br>🥑 Better Choice: Lemon",

  pineapple:
    "❌ Not Keto Friendly<br>Net Carbs: 13g<br>🥑 Better Choice: Raspberries",

  pear:
    "❌ Not Keto Friendly<br>Net Carbs: 22g<br>🥑 Better Choice: Berries",

  peach:
    "❌ Not Keto Friendly<br>Net Carbs: 13g<br>🥑 Better Choice: Strawberries",

  kiwi:
    "⚠️ Limited on Keto<br>Net Carbs: 9g",

  coconut:
    "✅ Keto Friendly<br>Net Carbs: 6g",

  bacon:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "beef steak":
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "ground beef":
    "✅ Keto Friendly<br>Net Carbs: 0g",

  lamb:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  pork:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "pork chops":
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "pork belly":
    "✅ Keto Friendly<br>Net Carbs: 0g",

  ham:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  sausage:
    "⚠️ Check Ingredients<br>Net Carbs: 2g",

  pepperoni:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  salami:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  turkey:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "turkey bacon":
    "✅ Keto Friendly<br>Net Carbs: 0g",

  duck:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  shrimp:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  prawns:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  tuna:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  cod:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "white fish":
    "✅ Keto Friendly<br>Net Carbs: 0g",

  sardines:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  anchovies:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  crab:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  lobster:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  "cheddar cheese":
    "✅ Keto Friendly<br>Net Carbs: 1g",

  mozzarella:
    "✅ Keto Friendly<br>Net Carbs: 2g",

  parmesan:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  "cream cheese":
    "✅ Keto Friendly<br>Net Carbs: 2g",

  feta:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  "blue cheese":
    "✅ Keto Friendly<br>Net Carbs: 1g",

  brie:
    "✅ Keto Friendly<br>Net Carbs: 1g",

  "swiss cheese":
    "✅ Keto Friendly<br>Net Carbs: 1g",

  butter:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  ghee:
    "✅ Keto Friendly<br>Net Carbs: 0g",

  "heavy cream":
    "✅ Keto Friendly<br>Net Carbs: 1g",

  "sour cream":
    "✅ Keto Friendly<br>Net Carbs: 2g",

  "greek yogurt":
    "⚠️ Choose Full-Fat Unsweetened<br>Net Carbs: 4g",

  "cottage cheese":
    "⚠️ Keto Friendly in Moderation<br>Net Carbs: 4g",

  "egg yolk":
    "✅ Keto Friendly<br>Net Carbs: 0.2g",

  "egg white":
    "✅ Keto Friendly<br>Net Carbs: 0.2g"
};

const checkFoodBtn =
  document.getElementById(
    "checkFoodBtn"
  );

const foodInput =
  document.getElementById(
    "foodInput"
  );

const foodResult =
  document.getElementById(
    "foodResult"
  );

if (checkFoodBtn) {
  checkFoodBtn.addEventListener(
    "click",
    () => {
      if (!foodInput || !foodResult) {
        return;
      }

      const food =
        foodInput.value
          .trim()
          .toLowerCase();

      if (ketoFoods[food]) {
        foodResult.innerHTML =
          ketoFoods[food];
      } else {
        foodResult.innerHTML =
          "❓ Food not found.<br>We're adding more keto foods soon!";
      }
    }
  );
}

// ============================================================
// BUILD MY DAY
// ============================================================

const buildDayBtn =
  document.getElementById(
    "buildDayBtn"
  );

if (buildDayBtn) {
  buildDayBtn.addEventListener(
    "click",
    () => {
      const goal =
        document.getElementById(
          "ketoGoal"
        )?.value || "weight";

      const hunger =
        document.getElementById(
          "hungerLevel"
        )?.value || "medium";

      const activity =
        document.getElementById(
          "activityLevel"
        )?.value || "medium";

      const breakfastPlan =
        document.getElementById(
          "breakfastPlan"
        );

      const lunchPlan =
        document.getElementById(
          "lunchPlan"
        );

      const dinnerPlan =
        document.getElementById(
          "dinnerPlan"
        );

      const snackPlan =
        document.getElementById(
          "snackPlan"
        );

      const dayTip =
        document.getElementById(
          "dayTip"
        );

      if (
        !breakfastPlan ||
        !lunchPlan ||
        !dinnerPlan ||
        !snackPlan ||
        !dayTip
      ) {
        return;
      }

      let breakfast =
        "🥚 Eggs with avocado and spinach";

      let lunch =
        "🥗 Grilled chicken salad with olive oil";

      let dinner =
        "🐟 Garlic butter salmon with broccoli";

      let snack =
        "🥜 Almonds with cheese";

      let tip =
        "Plan your meals before you get hungry and keep keto-friendly foods ready.";

      if (goal === "weight") {
        breakfast =
          "🍳 Scrambled eggs with avocado and spinach";

        lunch =
          "🥗 Grilled chicken Caesar salad";

        dinner =
          "🐟 Salmon with roasted broccoli";

        snack =
          "🥚 Two boiled eggs";

        tip =
          "For weight-loss goals, focus on protein, low-carb vegetables and sensible portions.";
      }

      if (goal === "maintenance") {
        breakfast =
          "🥑 Avocado egg scramble with cheese";

        lunch =
          "🍗 Chicken lettuce wraps with avocado";

        dinner =
          "🥩 Steak with broccoli and butter";

        snack =
          "🧀 Cheese cubes with almonds";

        tip =
          "Keep your meals balanced and maintain a consistent eating routine.";
      }

      if (goal === "energy") {
        breakfast =
          "🍳 Eggs with spinach, avocado and cheese";

        lunch =
          "🐟 Tuna avocado salad";

        dinner =
          "🍗 Garlic butter chicken with vegetables";

        snack =
          "🥜 Almonds with Greek yogurt";

        tip =
          "Prioritize protein, healthy fats, vegetables and adequate hydration.";
      }

      if (hunger === "high") {
        snack =
          "🥑 Avocado with boiled eggs and a small handful of nuts";

        tip +=
          " Since you usually feel hungry, choose protein- and fiber-rich foods to improve satiety.";
      }

      if (activity === "high") {
        breakfast =
          "🍳 Eggs, avocado and Greek yogurt";

        lunch =
          "🍗 Grilled chicken salad with avocado";

        dinner =
          "🥩 Steak with broccoli and butter";

        tip +=
          " On active days, make sure your meals provide enough protein and energy.";
      }

      breakfastPlan.textContent =
        breakfast;

      lunchPlan.textContent =
        lunch;

      dinnerPlan.textContent =
        dinner;

      snackPlan.textContent =
        snack;

      dayTip.textContent =
        tip;

      const result =
        document.getElementById(
          "mealResult"
        );

      if (result) {
        result.style.display =
          "block";
      }

      addXp(25);
    }
  );
}

// ============================================================
// REVEAL MY PICK
// ============================================================
//
// IMPORTANT:
// This is the ONLY Reveal My Pick handler.
// There are NO duplicate quiz submit handlers below.
// ============================================================

const revealPickBtn =
  document.getElementById(
    "revealPickBtn"
  );

function calculateQuizResult() {
  if (!quizQuestions.length) {
    return null;
  }

  const answers = [];

  quizQuestions.forEach(
    (question, index) => {
      const selected =
        document.querySelector(
          `input[name="q${index + 1}"]:checked`
        );

      if (selected) {
        answers.push(
          selected.value
        );
      }
    }
  );

  if (
    answers.length !==
    quizQuestions.length
  ) {
    return null;
  }

  const counts = {
    plan: 0,
    dessert: 0,
    dna: 0,
    pot: 0,
    baking: 0
  };

  answers.forEach(
    (answer) => {
      if (
        counts[answer] !==
        undefined
      ) {
        counts[answer]++;
      }
    }
  );

  let winner = "plan";

  Object.keys(counts).forEach(
    (key) => {
      if (
        counts[key] >
        counts[winner]
      ) {
        winner = key;
      }
    }
  );

  return {
    winner,
    counts,
    recommendation:
      productMap[winner] ||
      "Keto Journey"
  };
}

function revealQuizPick() {
  if (!quizResult) {
    return;
  }

  const result =
    calculateQuizResult();

  if (!result) {
    quizResult.textContent =
      "Please answer all 5 questions first.";

    quizResult.style.display =
      "block";

    return;
  }

  quizState.completed =
    true;

  quizState.score =
    Math.round(
      (Math.max(
        ...Object.values(
          result.counts
        )
      ) /
        quizQuestions.length) *
        100
    );

  quizState.recommendation =
    result.recommendation;

  saveQuiz();

  updateRecommendation();
  updateScoreboard();

  quizResult.textContent =
    `🎉 Your personalized pick: ${quizState.recommendation}`;

  quizResult.style.display =
    "block";

  setTimeout(() => {
    quizResult.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);

  launchConfetti();
}

if (revealPickBtn) {
  revealPickBtn.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      revealQuizPick();
    }
  );
}

// ============================================================
// QUIZ FORM SUBMIT
// ============================================================
//
// This is intentionally ONE submit handler only.
// If the Reveal My Pick button is inside the form,
// type="button" in HTML is recommended.
// ============================================================

if (quizForm) {
  quizForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      revealQuizPick();
    }
  );
}

// ============================================================
// MODAL HELPERS
// ============================================================

function closeModal(modal) {
  if (!modal) return;

  modal.classList.add("hidden");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}

if (closeModalBtn) {
  closeModalBtn.addEventListener(
    "click",
    () => {
      closeModal(milestoneModal);
    }
  );
}

if (closeProgressModalBtn) {
  closeProgressModalBtn.addEventListener(
    "click",
    () => {
      closeModal(progressModal);
    }
  );
}

if (closeExitModalBtn) {
  closeExitModalBtn.addEventListener(
    "click",
    () => {
      closeModal(exitModal);
    }
  );
}

// ============================================================
// INITIAL RENDER
// ============================================================

renderChecklist();
renderPlanner();
renderQuiz();
updateScoreboard();
updateRecommendation();

// ============================================================
// LOAD SAVED THEME
// ============================================================

const savedTheme =
  localStorage.getItem(
    storageKeys.theme
  ) ||
  (
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light"
  );


