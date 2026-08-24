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

const GOOGLE_DRIVE_PDF_LINK = "https://drive.google.com/file/d/14Eb9INTTOEIRIDJQswKarruQsqklwF8l/view?usp=sharing";
const plannerPopupStorageKey = "free-7-day-planner-popup-dismissed";

// ================================
// POPUP HANDLERS
// ================================

const plannerPopup = document.getElementById("plannerPopup");
const plannerPopupClose = document.getElementById("plannerPopupClose");
const plannerPopupDownload = document.getElementById("plannerPopupDownload");

function openPlannerPopup() {
  if (!plannerPopup) {
    return;
  }

  plannerPopup.classList.add("is-open");
  plannerPopup.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlannerPopup() {
  if (!plannerPopup) {
    return;
  }

  plannerPopup.classList.remove("is-open");
  plannerPopup.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  localStorage.setItem(plannerPopupStorageKey, "true");
}

if (plannerPopup && plannerPopupDownload) {
  plannerPopupDownload.setAttribute("href", GOOGLE_DRIVE_PDF_LINK);

  const shouldShowPopup = !localStorage.getItem(plannerPopupStorageKey);
  const showPopupAfterDelay = () => {
    if (!plannerPopup.classList.contains("is-open") && !localStorage.getItem(plannerPopupStorageKey)) {
      window.setTimeout(() => {
        openPlannerPopup();
      }, 700);
    }
  };

  if (shouldShowPopup) {
    showPopupAfterDelay();
  }

  if (plannerPopupClose) {
    plannerPopupClose.addEventListener("click", closePlannerPopup);
  }

  plannerPopup.addEventListener("click", (event) => {
    if (event.target === plannerPopup) {
      closePlannerPopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePlannerPopup();
    }
  });

  window.addEventListener("load", showPopupAfterDelay);
}

// ================================
// KETO SUCCESS PLANNER - EMAIL OPT-IN
// ================================

const KETO_OPTIN_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyh4Lg7vuzgYSBeVeoJJgEHZohb1PJj7ts2iasNDRS7FF2sX8gtXCdqdZGgEcUUnhNG/exec";

const ketoOptinForm = document.getElementById("ketoOptinForm");
const ketoOptinEmail = document.getElementById("ketoOptinEmail");
const ketoOptinButton = document.getElementById("ketoOptinButton");
const ketoOptinStatus = document.getElementById("ketoOptinStatus");

function isValidKetoEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setKetoOptinStatus(message, type) {
  if (!ketoOptinStatus) {
    return;
  }

  ketoOptinStatus.textContent = message;
  ketoOptinStatus.classList.remove("is-loading", "is-success", "is-error");

  if (type) {
    ketoOptinStatus.classList.add("is-" + type);
  }
}

if (ketoOptinForm && ketoOptinEmail && ketoOptinButton) {
  let ketoOptinSubmitting = false;

  ketoOptinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (ketoOptinSubmitting) {
      return;
    }

    const email = ketoOptinEmail.value.trim();

    if (!email) {
      setKetoOptinStatus("Please enter your email address.", "error");
      return;
    }

    if (!isValidKetoEmail(email)) {
      setKetoOptinStatus("Please enter a valid email address.", "error");
      return;
    }

    ketoOptinSubmitting = true;
    ketoOptinButton.disabled = true;
    const originalButtonText = ketoOptinButton.textContent;
    ketoOptinButton.textContent = "Sending...";
    setKetoOptinStatus("Sending your FREE Keto Planner...", "loading");

    const payload = new URLSearchParams();
    payload.append("email", email);

    fetch(KETO_OPTIN_ENDPOINT, {
      method: "POST",
      body: payload,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }
        return response.text();
      })
      .then((result) => {
        if (result && result.indexOf("SUCCESS") !== -1) {
          setKetoOptinStatus(
            "\u2705 Success! Your FREE Keto Success Planner has been sent to your email. Please check your inbox.",
            "success"
          );
          ketoOptinForm.reset();
        } else {
          throw new Error(result || "Unknown response from server");
        }
      })
      .catch(() => {
        setKetoOptinStatus(
          "\u274c Something went wrong. Please try again.",
          "error"
        );
      })
      .finally(() => {
        ketoOptinSubmitting = false;
        ketoOptinButton.disabled = false;
        ketoOptinButton.textContent = originalButtonText;
      });
  });
}

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
    url: "https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=umarmahmood",
    tag: "Structured roadmap",
    description: "A polished weekly plan for calm, repeatable success.",
    accent: "Daily structure",
    image: "🥗",
    rating: "★★★★★",
    bestFor: "Best for: consistent weekly meal prep"
  },
  {
    name: "Keto Desserts",
    url: "https://www.ketoafter50desserts.com/digi/?aff=umarmahmood",
    tag: "Sweet satisfaction",
    description: "Beautiful low-carb treats that keep cravings in check.",
    accent: "Dessert support",
    image: "🍰",
    rating: "★★★★★",
    bestFor: "Best for: sweet cravings without guilt"
  },
  {
    name: "Keto DNA",
    url: "https://ketodna.app/d#aff=umarmahmood",
    tag: "Bio-backed guidance",
    description: "Personalized insights that make your plan feel premium.",
    accent: "Smart coaching",
    image: "🧬",
    rating: "★★★★★",
    bestFor: "Best for: data-driven keto support"
  },
  {
    name: "Instant Pot Keto",
    url: "https://ketosolution.net/ds/#aff=umarmahmood",
    tag: "Fast weeknight meals",
    description: "Quick, easy recipes for your busiest days.",
    accent: "Kitchen speed",
    image: "🍲",
    rating: "★★★★★",
    bestFor: "Best for: fast keto dinners"
  },
  {
    name: "Keto Baking Bundle",
    url: "https://ketobreads.net/ds/bakery-bundle/#aff=umarmahmood",
    tag: "Baking confidence",
    description: "Everything you need for indulgent, keto-friendly baking.",
    accent: "Bakery-style results",
    image: "🥐",
    rating: "★★★★★",
    bestFor: "Best for: keto baking success"
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

      // ============================
      // VALIDATION
      // ============================

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

      // ============================
      // BMI
      // ============================

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

      // ============================
      // BMR
      // ============================

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

      // ============================
      // DAILY CALORIES
      // ============================

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

      // ============================
      // WATER
      // ============================

      const waterMl =
        Math.round(weight * 35);

      const waterLiters =
        (waterMl / 1000).toFixed(1);

      if (waterResult) {
        waterResult.textContent =
          `${waterLiters} L/day`;
      }

      // ============================
      // KETO MACROS
      // ============================

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
          `${proteinGrams}g protein • ${carbGrams}g net carbs • ${fatGrams}g fat`;
      }

      // ============================
      // XP
      // ============================

      addXp(25);
    }
  );
}
// ================================
// PREDEFINED KETO QUESTION HELPER
// ================================

const ketoQuestionForm =
  document.getElementById("ketoQuestionForm");

const ketoQuestionInput =
  document.getElementById("ketoQuestionInput");

const ketoQuestionResult =
  document.getElementById("ketoQuestionResult");

const ketoQuestionCount =
  document.getElementById("ketoQuestionCount");

const ketoQuestionRules = [
  {
    keys: ["breakfast", "morning", "first meal", "nashta"],
    title: "Keto breakfast ideas",
    answer: "Try eggs with avocado and spinach, an omelet with cheese and vegetables, or unsweetened full-fat Greek yogurt with a small serving of berries. Keep sugary cereals, bread and sweetened drinks out of the meal.",
    tip: "Build breakfast around protein plus low-carb vegetables or healthy fats.",
    product: "The Keto Meal Plan"
  },
  {
    keys: ["lunch", "dinner", "meal", "recipe", "recipes", "what should i eat", "what can i eat"],
    title: "Simple keto meal idea",
    answer: "A simple plate is grilled chicken or salmon, a generous serving of low-carb vegetables and a sensible portion of healthy fat such as olive oil or avocado. Rotate proteins and vegetables so your meals stay practical.",
    tip: "Planning a few repeatable meals can make keto easier to follow consistently.",
    product: "The Keto Meal Plan"
  },
  {
    keys: ["snack", "snacks", "hungry", "hunger", "craving", "cravings"],
    title: "Keto-friendly snack ideas",
    answer: "Good options include boiled eggs, cheese, olives, avocado, a small handful of nuts, or unsweetened Greek yogurt. If cravings are frequent, first check whether your main meals contain enough protein and satisfying foods.",
    tip: "Keep one or two ready-to-eat keto options available so you are less likely to reach for high-carb snacks.",
    product: "Keto Desserts"
  },
  {
    keys: ["sweet", "dessert", "desserts", "chocolate", "cake", "cookie", "cookies"],
    title: "Handling sweet cravings on keto",
    answer: "Choose lower-carb alternatives and watch portions. Unsweetened cocoa, berries in moderation, or a keto-style dessert can fit better than regular sugary desserts. Check labels because products marketed as keto can still contain significant carbs.",
    tip: "If you want a planned treat, portion it before eating instead of eating directly from the package.",
    product: "Keto Desserts"
  },
  {
    keys: ["carb", "carbs", "net carb", "net carbs", "low carb"],
    title: "Understanding carbs on keto",
    answer: "Keto generally emphasizes very low carbohydrate intake, but the exact amount varies by person and approach. Focus on whole foods such as meat, fish, eggs, leafy vegetables, avocado and healthy fats, while limiting sugar and high-carb grains and starches.",
    tip: "Read nutrition labels and compare total carbohydrates, fiber and serving size rather than relying only on a 'keto' label.",
    product: "The Keto Meal Plan"
  },
  {
    keys: ["weight loss", "lose weight", "lose fat", "fat loss", "weight", "belly fat", "lose 15", "15 lbs"],
    title: "Keto and weight loss",
    answer: "Weight loss usually depends on your overall energy intake, food quality, activity and consistency—not simply removing carbohydrates. Build meals around protein, non-starchy vegetables and satisfying fats, and keep portions appropriate for your goal.",
    tip: "Avoid extreme promises or crash diets. A steady, sustainable routine is usually easier to maintain.",
    product: "Mindful Weight Loss"
  },
  {
    keys: ["water", "hydration", "drink", "drinks", "thirst"],
    title: "Hydration on keto",
    answer: "Drink water regularly and pay attention to thirst, urine color and your activity level. Keto can change fluid balance for some people, especially early on, so staying hydrated is important.",
    tip: "If you have a medical condition or take medicines that affect fluids or electrolytes, ask a qualified healthcare professional about your individual needs.",
    product: "The Keto Meal Plan"
  },
  {
    keys: ["electrolyte", "electrolytes", "salt", "sodium", "potassium", "magnesium"],
    title: "Electrolytes and keto",
    answer: "Electrolytes are minerals involved in fluid balance and normal body function. Some people notice changes in fluid and sodium balance when reducing carbohydrates. Food sources and adequate hydration matter, but individual needs vary.",
    tip: "Do not take large amounts of electrolyte supplements without considering your health, medicines and clinician's advice.",
    product: "The Keto Meal Plan"
  },
  {
    keys: ["exercise", "workout", "gym", "training", "walking", "exercise"],
    title: "Keto and exercise",
    answer: "Start with an activity level you can maintain, such as walking and basic strength training. If you are new to keto, give yourself time to adapt and pay attention to energy, hydration and recovery.",
    tip: "Increase exercise gradually rather than trying to combine a very restrictive diet with a sudden intense workout routine.",
    product: "Mindful Weight Loss"
  },
  {
    keys: ["quick", "fast", "busy", "10 minute", "10-minute", "instant pot", "pressure cooker"],
    title: "Quick keto meals",
    answer: "For busy days, keep eggs, canned tuna, cooked chicken, cheese, avocado, salad greens and frozen low-carb vegetables available. These ingredients can become quick meals without complicated preparation.",
    tip: "A small emergency keto food list can help you stay consistent when you have little time.",
    product: "Instant Pot Keto"
  },
  {
    keys: ["bake", "baking", "bread", "flour", "muffin", "muffins"],
    title: "Keto baking",
    answer: "Keto baking often uses lower-carb ingredients such as almond or coconut flour and sugar alternatives. Portions still matter, and recipes can vary considerably in their carbohydrate content.",
    tip: "Check the nutrition information for the complete recipe rather than assuming every low-carb baked item is automatically low-calorie.",
    product: "Keto Baking Bundle"
  },
  {
    keys: ["smoothie", "smoothies", "shake", "shakes"],
    title: "Keto smoothies",
    answer: "A keto-friendly smoothie can use unsweetened almond milk, a protein source, leafy greens, avocado and a small amount of berries. Avoid fruit juice, added sugar and large amounts of high-sugar fruit.",
    tip: "Measure ingredients because liquid calories and carbohydrates can add up quickly.",
    product: "The Smoothie Diet"
  },
  {
    keys: ["mindful", "mindfulness", "habit", "habits", "consistency", "motivation", "motivate"],
    title: "Making keto easier to maintain",
    answer: "Focus on simple habits: plan meals, keep useful foods available, eat without distractions when possible, and track what works for you. Sustainable routines are usually more useful than trying to be perfect.",
    tip: "Choose one or two habits to improve this week instead of changing everything at once.",
    product: "Mindful Weight Loss"
  },
  {
    keys: ["supplement", "supplements", "leptozan"],
    title: "About keto supplements",
    answer: "Supplements are not a replacement for a balanced diet, appropriate calorie intake, sleep and activity. If you are considering a supplement, check its ingredients and discuss it with a healthcare professional if you take medicines or have health conditions.",
    tip: "Treat supplement claims carefully and do not assume a product will cause weight loss by itself.",
    product: "Leptozan – Natural Weight Support"
  }
];

function normalizeQuestionText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findKetoQuestionMatch(question) {
  const normalized = normalizeQuestionText(question);

  if (!normalized) {
    return null;
  }

  let bestRule = null;
  let bestScore = 0;

  ketoQuestionRules.forEach((rule) => {
    let score = 0;

    rule.keys.forEach((key) => {
      const normalizedKey = normalizeQuestionText(key);

      if (normalized.includes(normalizedKey)) {
        score += normalizedKey.includes(" ") ? 3 : 2;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  });

  return bestRule;
}

const ketoQuestionProducts = {
  "The Keto Meal Plan": {
    name: "The Keto Meal Plan",
    url: "https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=umarmahmood",
    image: "🥗",
    bestFor: "structured weekly meal prep"
  },
  "Keto Desserts": {
    name: "Keto Desserts",
    url: "https://www.ketoafter50desserts.com/digi/?aff=umarmahmood",
    image: "🍰",
    bestFor: "sweet-craving support"
  },
  "Instant Pot Keto": {
    name: "Instant Pot Keto",
    url: "https://ketosolution.net/ds/#aff=umarmahmood",
    image: "🍲",
    bestFor: "fast keto meals"
  },
  "Keto Baking Bundle": {
    name: "Keto Baking Bundle",
    url: "https://ketobreads.net/ds/bakery-bundle/#aff=umarmahmood",
    image: "🥐",
    bestFor: "keto baking"
  },
  "The Smoothie Diet": {
    name: "The Smoothie Diet",
    url: "smoothie-diet.html",
    image: "🥤",
    bestFor: "smoothie-based routines"
  },
  "Mindful Weight Loss": {
    name: "Mindful Weight Loss",
    url: "mindful-weight-loss.html",
    image: "🧘",
    bestFor: "sustainable habits"
  },
  "Leptozan – Natural Weight Support": {
    name: "Leptozan – Natural Weight Support",
    url: "leptozan.html",
    image: "🌿",
    bestFor: "learning about a weight-support supplement"
  }
};

function getExistingProduct(productName) {
  return ketoQuestionProducts[productName] || ketoQuestionProducts["The Keto Meal Plan"];
}

function showKetoQuestionAnswer(rule) {
  if (!ketoQuestionResult || !rule) {
    return;
  }

  const product = getExistingProduct(rule.product);

  ketoQuestionResult.innerHTML = `
    <p class="keto-answer-label">Built-in answer</p>
    <h3 class="keto-answer-title">${rule.title}</h3>
    <p class="keto-answer-text">${rule.answer}</p>
    <p class="keto-answer-tip"><strong>💡 Helpful tip:</strong> ${rule.tip}</p>

    <div class="keto-product-match">
      <div class="keto-product-match-copy">
        <strong>Recommended from this website</strong>
        <span>${product.image} ${product.name} — ${product.bestFor}</span>
      </div>
      <a
        class="btn cta-green"
        href="${product.url}"
        target="_blank"
        rel="noreferrer"
      >
        Explore Match
      </a>
    </div>

    <p class="keto-disclaimer">
      General educational information only. This tool does not provide medical advice,
      diagnosis or treatment. Individual nutrition needs vary.
    </p>
  `;

  ketoQuestionResult.classList.add("is-visible");
}

function showKetoQuestionFallback() {
  if (!ketoQuestionResult) {
    return;
  }

  ketoQuestionResult.innerHTML = `
    <p class="keto-answer-label">Try one of these topics</p>
    <h3 class="keto-answer-title">I can help with common keto questions</h3>
    <p class="keto-answer-text">
      Try asking about keto breakfast, lunch or dinner, snacks, cravings,
      carbs, weight loss, hydration, electrolytes, exercise, smoothies,
      baking, meal planning or keto supplements.
    </p>
    <p class="keto-disclaimer">
      This is a predefined website guide, not an AI chatbot or medical advice service.
    </p>
  `;

  ketoQuestionResult.classList.add("is-visible");
}

if (ketoQuestionInput && ketoQuestionCount) {
  const updateQuestionCount = () => {
    ketoQuestionCount.textContent =
      `${ketoQuestionInput.value.length}/300`;
  };

  ketoQuestionInput.addEventListener("input", updateQuestionCount);
  updateQuestionCount();
}

if (ketoQuestionForm) {
  ketoQuestionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = ketoQuestionInput?.value.trim() || "";

    if (!question) {
      if (ketoQuestionResult) {
        ketoQuestionResult.innerHTML = `
          <p class="keto-answer-label">Your question</p>
          <h3 class="keto-answer-title">Please type a question first.</h3>
          <p class="keto-answer-text">For example: “What can I eat for breakfast on keto?”</p>
        `;
        ketoQuestionResult.classList.add("is-visible");
      }
      ketoQuestionInput?.focus();
      return;
    }

    const match = findKetoQuestionMatch(question);

    if (match) {
      showKetoQuestionAnswer(match);
    } else {
      showKetoQuestionFallback();
    }

    ketoQuestionResult?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
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
              href="${card.url}"
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

applyTheme(savedTheme);
