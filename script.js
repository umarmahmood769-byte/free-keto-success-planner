const storageKeys = {
  theme: "keto-theme",
  xp: "keto-xp",
  quiz: "keto-quiz",
  planner: "keto-planner",
  checklist: "keto-checklist"
};

const body = document.body;

const themeToggle =
  document.getElementById("themeToggle");

const printBtn =
  document.getElementById("printBtn");

const searchInput =
  document.getElementById("searchInput");

const groceryList =
  document.getElementById("groceryList");

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

const recommendationCards =
  document.getElementById("recommendationCards");

const recommendationText =
  document.getElementById("recommendationText");

const recommendationCTA =
  document.getElementById("recommendationCTA");

const mealPlanner =
  document.getElementById("mealPlanner");

const mealPlanResult =
  document.getElementById("mealPlanResult");

const xpBoostBtn =
  document.getElementById("xpBoostBtn");

const scoreValue =
  document.getElementById("scoreValue");

const progressValue =
  document.getElementById("progressValue");

const milestoneModal =
  document.getElementById("milestoneModal");

const progressModal =
  document.getElementById("progressModal");

const exitModal =
  document.getElementById("exitModal");

const closeModalBtn =
  document.getElementById("closeModalBtn");

const closeProgressModalBtn =
  document.getElementById("closeProgressModalBtn");

const closeExitModalBtn =
  document.getElementById("closeExitModalBtn");

const confettiLayer =
  document.getElementById("confettiLayer");

let xpState = {
  points: 0
};

let quizState = {
  completed: false,
  score: 0,
  recommendation: ""
};

let plannerState = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sunday: ""
};

let checklistState = [];

function loadXp() {
  try {
    const saved =
      localStorage.getItem(
        storageKeys.xp
      );

    if (saved) {
      const parsed =
        JSON.parse(saved);

      if (
        parsed &&
        Number.isFinite(parsed.points)
      ) {
        xpState = parsed;
      }
    }
  } catch (error) {
    console.error(
      "Unable to load XP:",
      error
    );
  }
}

function saveXp() {
  try {
    localStorage.setItem(
      storageKeys.xp,
      JSON.stringify(xpState)
    );
  } catch (error) {
    console.error(
      "Unable to save XP:",
      error
    );
  }
}

function loadQuiz() {
  try {
    const saved =
      localStorage.getItem(
        storageKeys.quiz
      );

    if (saved) {
      const parsed =
        JSON.parse(saved);

      if (parsed) {
        quizState = {
          ...quizState,
          ...parsed
        };
      }
    }
  } catch (error) {
    console.error(
      "Unable to load quiz:",
      error
    );
  }
}

function saveQuiz() {
  try {
    localStorage.setItem(
      storageKeys.quiz,
      JSON.stringify(quizState)
    );
  } catch (error) {
    console.error(
      "Unable to save quiz:",
      error
    );
  }
}

function loadPlanner() {
  try {
    const saved =
      localStorage.getItem(
        storageKeys.planner
      );

    if (saved) {
      const parsed =
        JSON.parse(saved);

      if (parsed) {
        plannerState = {
          ...plannerState,
          ...parsed
        };
      }
    }
  } catch (error) {
    console.error(
      "Unable to load planner:",
      error
    );
  }
}

function savePlanner() {
  try {
    localStorage.setItem(
      storageKeys.planner,
      JSON.stringify(plannerState)
    );
  } catch (error) {
    console.error(
      "Unable to save planner:",
      error
    );
  }
}

function loadChecklist() {
  try {
    const saved =
      localStorage.getItem(
        storageKeys.checklist
      );

    if (saved) {
      const parsed =
        JSON.parse(saved);

      if (Array.isArray(parsed)) {
        checklistState = parsed;
      }
    }
  } catch (error) {
    console.error(
      "Unable to load checklist:",
      error
    );
  }
}

function saveChecklist() {
  try {
    localStorage.setItem(
      storageKeys.checklist,
      JSON.stringify(
        checklistState
      )
    );
  } catch (error) {
    console.error(
      "Unable to save checklist:",
      error
    );
  }
}

function applyTheme(theme) {
  if (!body) return;

  body.dataset.theme = theme;

  try {
    localStorage.setItem(
      storageKeys.theme,
      theme
    );
  } catch (error) {
    console.error(
      "Unable to save theme:",
      error
    );
  }
}

function updateScoreboard() {
  if (scoreValue) {
    scoreValue.textContent =
      xpState.points;
  }

  if (progressValue) {
    progressValue.textContent =
      `${xpState.points} XP`;
  }
}

loadXp();
loadQuiz();
loadPlanner();
loadChecklist();

const groceryItems = [
  {
    name: "Avocado",
    category: "Produce"
  },
  {
    name: "Spinach",
    category: "Produce"
  },
  {
    name: "Broccoli",
    category: "Produce"
  },
  {
    name: "Cauliflower",
    category: "Produce"
  },
  {
    name: "Zucchini",
    category: "Produce"
  },
  {
    name: "Chicken",
    category: "Protein"
  },
  {
    name: "Salmon",
    category: "Protein"
  },
  {
    name: "Eggs",
    category: "Protein"
  },
  {
    name: "Ground Beef",
    category: "Protein"
  },
  {
    name: "Greek Yogurt",
    category: "Dairy"
  },
  {
    name: "Cheddar Cheese",
    category: "Dairy"
  },
  {
    name: "Butter",
    category: "Dairy"
  },
  {
    name: "Almonds",
    category: "Pantry"
  },
  {
    name: "Olive Oil",
    category: "Pantry"
  },
  {
    name: "Coconut Oil",
    category: "Pantry"
  }
];

if (!checklistState.length) {
  checklistState =
    groceryItems.map(
      (item) => ({
        ...item,
        checked: false
      })
    );
}

function renderChecklist() {
  if (!groceryList) return;

  const query =
    searchInput?.value
      ?.trim()
      .toLowerCase() || "";

  const filtered =
    checklistState.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(query)
    );

  groceryList.innerHTML =
    filtered
      .map(
        (item) => `
          <label class="grocery-item">
            <input
              type="checkbox"
              data-name="${item.name}"
              ${item.checked ? "checked" : ""}
            />
            <span>
              <strong>${item.name}</strong>
              <small>${item.category}</small>
            </span>
          </label>
        `
      )
      .join("");
}

const quizQuestions = [
  {
    question:
      "What is your main keto goal?",
    options: [
      {
        value: "plan",
        text: "Build a simple keto plan"
      },
      {
        value: "dessert",
        text: "Find keto-friendly treats"
      },
      {
        value: "dna",
        text: "Understand my keto style"
      },
      {
        value: "pot",
        text: "Make easy keto meals"
      },
      {
        value: "baking",
        text: "Make keto baked foods"
      }
    ]
  },
  {
    question:
      "What type of food do you enjoy most?",
    options: [
      {
        value: "plan",
        text: "Balanced meals"
      },
      {
        value: "dessert",
        text: "Sweet foods"
      },
      {
        value: "dna",
        text: "Different foods"
      },
      {
        value: "pot",
        text: "Comfort foods"
      },
      {
        value: "baking",
        text: "Baked foods"
      }
    ]
  },
  {
    question:
      "How much time do you have for cooking?",
    options: [
      {
        value: "plan",
        text: "I like planning"
      },
      {
        value: "dessert",
        text: "Quick recipes"
      },
      {
        value: "dna",
        text: "I experiment"
      },
      {
        value: "pot",
        text: "Easy one-pot meals"
      },
      {
        value: "baking",
        text: "I enjoy baking"
      }
    ]
  },
  {
    question:
      "What sounds most useful to you?",
    options: [
      {
        value: "plan",
        text: "Meal planning"
      },
      {
        value: "dessert",
        text: "Keto desserts"
      },
      {
        value: "dna",
        text: "Personalized choices"
      },
      {
        value: "pot",
        text: "Simple recipes"
      },
      {
        value: "baking",
        text: "Keto baking"
      }
    ]
  },
  {
    question:
      "Which description fits you best?",
    options: [
      {
        value: "plan",
        text: "I like structure"
      },
      {
        value: "dessert",
        text: "I have a sweet tooth"
      },
      {
        value: "dna",
        text: "I like variety"
      },
      {
        value: "pot",
        text: "I like convenience"
      },
      {
        value: "baking",
        text: "I love baking"
      }
    ]
  }
];

const productMap = {
  plan: "Keto Starter Plan",
  dessert: "Keto Dessert Guide",
  dna: "Keto DNA Guide",
  pot: "Keto One-Pot Guide",
  baking: "Keto Baking Guide"
};

const productCards = [
  {
    name: "Keto Starter Plan",
    tag: "Planning",
    rating: "★★★★★",
    description:
      "A simple companion for building consistent keto meals.",
    bestFor:
      "Best for structured meal planning.",
    accent:
      "Easy Start",
    image: "🥑"
  },
  {
    name: "Keto Dessert Guide",
    tag: "Desserts",
    rating: "★★★★★",
    description:
      "Sweet keto-friendly ideas for satisfying cravings.",
    bestFor:
      "Best for dessert lovers.",
    accent:
      "Sweet",
    image: "🍓"
  },
  {
    name: "Keto DNA Guide",
    tag: "Personalized",
    rating: "★★★★★",
    description:
      "Explore your personal keto food preferences.",
    bestFor:
      "Best for people who like variety.",
    accent:
      "Personal",
    image: "🧬"
  },
  {
    name: "Keto One-Pot Guide",
    tag: "Easy Meals",
    rating: "★★★★★",
    description:
      "Simple recipes designed around convenience.",
    bestFor:
      "Best for busy schedules.",
    accent:
      "Simple",
    image: "🍲"
  },
  {
    name: "Keto Baking Guide",
    tag: "Baking",
    rating: "★★★★★",
    description:
      "Keto-friendly baking ideas and inspiration.",
    bestFor:
      "Best for home bakers.",
    accent:
      "Bake",
    image: "🧁"
  }
];
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
    /(bacon|beef|chicken|salmon|shrimp|turkey|tuna|ham|sausage|meatballs|prosciutto|salami|pork|lamb|egg|anchovies|pepperoni|chorizo|ground beef|ground turkey|white fish|smoked salmon)/.test(value)
  ) {
    return {
      icon: "🥩",
      category: "Proteins"
    };
  }

  if (
    /(butter|cream|cheese|ghee|mayo|olive oil|coconut cream|coconut milk|coconut oil|avocado|olives|tallow|feta|parmesan|mozzarella|brie|blue cheese|cheddar|swiss|cream cheese|cottage cheese|greek yogurt|sour cream)/.test(value)
  ) {
    return {
      icon: "🧈",
      category: "Fats & Dairy"
    };
  }

  if (
    /(spinach|kale|lettuce|cabbage|broccoli|cauliflower|zucchini|cucumber|pepper|radish|carrot|asparagus|mushroom|celery|bok choy|arugula|watercress|sprouts|green beans|eggplant|collard|okra|leek|onion)/.test(value)
  ) {
    return {
      icon: "🥬",
      category: "Vegetables"
    };
  }

  if (
    /(almond|cashew|pecan|walnut|pistachio|peanut|sunflower|pumpkin|chia|flax|hemp|sesame|macadamia|pine|nut|seed)/.test(value)
  ) {
    return {
      icon: "🥜",
      category: "Nuts & Seeds"
    };
  }

  if (
    /(broth|sauce|seasoning|mustard|pickle|syrup|sweetener|spice|herb|paprika|oregano|cumin|curry|dijon|worcestershire|salsa|taco|tomato|miso|nori|seaweed|kimchi|cocoa|coconut flour|xanthan|psyllium|yeast)/.test(value)
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

const mealPlanResult = document.getElementById(
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
    <div class="meal-result-content">
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

// ============================================================
// CALCULATOR - FIXED
// ============================================================

if (calculatorForm) {
  calculatorForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const weightInput =
        document.getElementById("weight");

      const heightInput =
        document.getElementById("height");

      const ageInput =
        document.getElementById("age");

      const genderInput =
        document.getElementById("gender");

      const activityInput =
        document.getElementById("activity");

      if (
        !weightInput ||
        !heightInput ||
        !ageInput ||
        !genderInput ||
        !activityInput
      ) {
        return;
      }

      const weight =
        parseFloat(weightInput.value);

      const height =
        parseFloat(heightInput.value);

      const age =
        parseInt(ageInput.value, 10);

      const gender =
        genderInput.value;

      const activity =
        parseFloat(activityInput.value);

      if (
        !Number.isFinite(weight) ||
        !Number.isFinite(height) ||
        !Number.isFinite(age) ||
        !Number.isFinite(activity) ||
        weight <= 0 ||
        height <= 0 ||
        age <= 0
      ) {
        if (bmiResult) {
          bmiResult.textContent = "--";
        }

        if (calorieResult) {
          calorieResult.textContent = "--";
        }

        if (waterResult) {
          waterResult.textContent = "--";
        }

        if (macroResult) {
          macroResult.textContent = "--";
        }

        return;
      }

      // ----------------------------
      // BMI
      // ----------------------------

      const heightMeters =
        height / 100;

      const bmi =
        weight /
        (heightMeters * heightMeters);

      let bmiCategory = "";

      if (bmi < 18.5) {
        bmiCategory = "Underweight";
      } else if (bmi < 25) {
        bmiCategory = "Healthy";
      } else if (bmi < 30) {
        bmiCategory = "Overweight";
      } else {
        bmiCategory = "Obesity range";
      }

      if (bmiResult) {
        bmiResult.textContent =
          `${bmi.toFixed(1)} (${bmiCategory})`;
      }

      // ----------------------------
      // BMR - Mifflin St Jeor
      // ----------------------------

      let bmr;

      if (gender === "female") {
        bmr =
          (10 * weight) +
          (6.25 * height) -
          (5 * age) -
          161;
      } else {
        bmr =
          (10 * weight) +
          (6.25 * height) -
          (5 * age) +
          5;
      }

      // ----------------------------
      // DAILY CALORIES
      // ----------------------------

      const maintenanceCalories =
        bmr * activity;

      const dailyCalories =
        Math.max(
          1200,
          Math.round(
            maintenanceCalories
          )
        );

      if (calorieResult) {
        calorieResult.textContent =
          `${dailyCalories} kcal/day`;
      }

      // ----------------------------
      // WATER
      // Approx. 35 ml per kg
      // ----------------------------

      const waterMl =
        Math.round(weight * 35);

      const waterLiters =
        (waterMl / 1000).toFixed(1);

      if (waterResult) {
        waterResult.textContent =
          `${waterLiters} L/day`;
      }

      // ----------------------------
      // KETO MACROS
      //
      // Protein = 1.6g per kg
      // Net carbs = 25g
      // Fat = remaining calories
      // ----------------------------

      const proteinGrams =
        Math.round(weight * 1.6);

      const carbGrams = 25;

      const proteinCalories =
        proteinGrams * 4;

      const carbCalories =
        carbGrams * 4;

      const remainingCalories =
        Math.max(
          0,
          dailyCalories -
          proteinCalories -
          carbCalories
        );

      const fatGrams =
        Math.round(
          remainingCalories / 9
        );

      if (macroResult) {
        macroResult.textContent =
          `P ${proteinGrams}g • C ${carbGrams}g • F ${fatGrams}g`;
      }

      // ----------------------------
      // Add XP for using calculator
      // ----------------------------

      addXp(10);
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

  const confettiColors = [
    "#7c3aed",
    "#38bdf8",
    "#f59e0b",
    "#f43f5e",
    "#34d399"
  ];

  for (let i = 0; i < 60; i += 1) {
    const piece =
      document.createElement("span");

    piece.className =
      "confetti-piece";

    piece.style.left =
      `${Math.random() * 100}%`;

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
        !(
          checkbox instanceof
          HTMLInputElement
        ) ||
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
    "❌ Not Keto Friendly<br>Net Carbs: 25g<br>🥬 Better Choice: Lettuce Wrap"
};
