// The app stores planner content, checklist progress, theme choice, quiz state, XP, and milestone state locally.
const ketoItems = [
  "Almond butter","Avocado","Avocados","Bacon","Beef broth","Beef steak","Blackberries","Blue cheese","Bok choy","Bone broth","Brie","Broccoli","Brussels sprouts","Butter","Cabbage","Cauliflower","Cashew butter","Celery","Cheddar cheese","Chicken broth","Chicken thighs","Chicken wings","Chia seeds","Chili flakes","Chorizo","Cocoa powder","Coconut cream","Coconut flour","Coconut milk","Coconut oil","Cod","Collard greens","Cream cheese","Cucumber","Cumin","Dijon mustard","Dill pickles","Eggplant","Eggs","Erythritol","Feta","Flaxseed","Garlic","Ghee","Greek yogurt","Green beans","Ground beef","Ground turkey","Ham","Heavy cream","Hemp hearts","Herbs","Horseradish","Kale","Kimchi","Lamb","Leeks","Lemon","Lettuce","Lime","Macadamia nuts","Mayo","Meatballs","Mozzarella","Mushrooms","Mustard","Nori sheets","Olive oil","Olives","Onion","Oregano","Paprika","Parmesan","Pecans","Peanuts","Pistachios","Pork belly","Pork chops","Prosciutto","Psyllium husk","Pumpkin seeds","Radishes","Raspberries","Romaine","Rosemary","Salami","Salmon","Sardines","Sausage","Sea salt","Seaweed","Shrimp","Sour cream","Spinach","Stevia","Strawberries","Sunflower seeds","Tahini","Tallow","Thyme","Turkey","Turkey bacon","Tuna","Unsweetened almond milk","Walnuts","White fish","Xanthan gum","Zucchini","Anchovies","Arugula","Asparagus","Basil","Bell peppers","Black pepper","Berries","Brussels sprouts","Butterhead lettuce","Coconut flakes","Coconut yogurt","Cottage cheese","Cranberries","Cranberry sauce","Crimini mushrooms","Curry powder","Edamame","Fennel","Miso paste","Monk fruit sweetener","Mushroom broth","Nutritional yeast","Okra","Palm oil","Peanut butter","Pepperoni","Pine nuts","Pork rinds","Poultry seasoning","Pumpkin puree","Red pepper flakes","Salsa verde","Scallions","Sesame seeds","Smoked salmon","Sugar-free syrup","Swiss cheese","Taco seasoning","Tomato sauce","Walnut butter","Watercress","Worcestershire sauce","Yellow squash"
];

const plannerDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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

const productMap = {
  plan: "The Keto Meal Plan",
  dessert: "Keto Desserts",
  dna: "Keto DNA",
  pot: "Instant Pot Keto",
  baking: "Keto Baking Bundle"
};

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

const storageKeys = {
  checklist: "keto-checklist-state",
  planner: "keto-planner-state",
  theme: "keto-theme",
  xp: "keto-xp-state",
  quiz: "keto-quiz-state",
  milestone: "keto-milestone-shown"
};

let checklistState = JSON.parse(localStorage.getItem(storageKeys.checklist) || "null");
if (!checklistState) {
  checklistState = ketoItems.map((item) => ({ name: item, checked: false }));
}

let plannerState = JSON.parse(localStorage.getItem(storageKeys.planner) || "null");
if (!plannerState) {
  plannerState = Object.fromEntries(plannerDays.map((day) => [day, ""]));
}

let xpState = JSON.parse(localStorage.getItem(storageKeys.xp) || "null");
if (!xpState) {
  xpState = { points: 0 };
}

let quizState = JSON.parse(localStorage.getItem(storageKeys.quiz) || "null");
if (!quizState) {
  quizState = { completed: false, score: 0, recommendation: "Keto Journey" };
}

let milestoneShown = localStorage.getItem(storageKeys.milestone) === "true";
let progressPopupShown = localStorage.getItem("keto-progress-popup-shown") === "true";
let exitPopupShown = false;

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
const achievementBadges = document.getElementById("achievementBadges");
const achievementMini = document.getElementById("achievementMini");
const themeToggle = document.getElementById("themeToggle");
const printBtn = document.getElementById("printBtn");
const mealPlanner = document.getElementById("mealPlanner");
const calculatorForm = document.getElementById("calculatorForm");
const bmiResult = document.getElementById("bmiResult");
const calorieResult = document.getElementById("calorieResult");
const waterResult = document.getElementById("waterResult");
const macroResult = document.getElementById("macroResult");
const quizForm = document.getElementById("quizForm");
const quizContainer = document.getElementById("quizContainer");
const quizResult = document.getElementById("quizResult");
const recommendationText = document.getElementById("recommendationText");
const recommendationCTA = document.getElementById("recommendationCTA");
const recommendationCards = document.getElementById("recommendationCards");
const milestoneModal = document.getElementById("milestoneModal");
const progressModal = document.getElementById("progressModal");
const exitModal = document.getElementById("exitModal");
const closeModalBtn = document.getElementById("closeModal");
const closeProgressModalBtn = document.getElementById("closeProgressModal");
const closeExitModalBtn = document.getElementById("closeExitModal");
const confettiLayer = document.getElementById("confettiLayer");

function saveChecklist() {
  localStorage.setItem(storageKeys.checklist, JSON.stringify(checklistState));
}

function savePlanner() {
  localStorage.setItem(storageKeys.planner, JSON.stringify(plannerState));
}

function saveXp() {
  localStorage.setItem(storageKeys.xp, JSON.stringify(xpState));
}

function saveQuiz() {
  localStorage.setItem(storageKeys.quiz, JSON.stringify(quizState));
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem(storageKeys.theme, theme);
  themeToggle.textContent = theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
}

function getItemMeta(itemName) {
  const value = itemName.toLowerCase();

  if (/(bacon|beef|chicken|salmon|shrimp|turkey|tuna|ham|sausage|meatballs|prosciutto|salami|pork|lamb|egg|anchovies|pepperoni|chorizo|ground beef|ground turkey|white fish|smoked salmon)/.test(value)) {
    return { icon: "🥩", category: "Proteins" };
  }

  if (/(butter|cream|cheese|ghee|mayo|olive oil|coconut cream|coconut milk|coconut oil|avocado|olives|tallow|feta|parmesan|mozzarella|brie|blue cheese|cheddar|swiss|cream cheese|cottage cheese|greek yogurt|sour cream)/.test(value)) {
    return { icon: "🧈", category: "Fats & Dairy" };
  }

  if (/(spinach|kale|lettuce|cabbage|broccoli|cauliflower|zucchini|cucumber|pepper|radish|carrot|asparagus|mushroom|celery|bok choy|arugula|watercress|sprouts|green beans|eggplant|collard|okra|leek|onion)/.test(value)) {
    return { icon: "🥬", category: "Vegetables" };
  }

  if (/(almond|cashew|pecan|walnut|pistachio|peanut|sunflower|pumpkin|chia|flax|hemp|sesame|macadamia|pine|nut|seed)/.test(value)) {
    return { icon: "🥜", category: "Nuts & Seeds" };
  }

  if (/(broth|sauce|seasoning|mustard|pickle|syrup|sweetener|spice|herb|paprika|oregano|cumin|curry|dijon|worcestershire|salsa|taco|tomato|miso|nori|seaweed|kimchi|cocoa|coconut flour|xanthan|psyllium|yeast)/.test(value)) {
    return { icon: "🧂", category: "Pantry" };
  }

  return { icon: "🛒", category: "Pantry" };
}

function renderChecklist() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = checklistState.filter((item) => item.name.toLowerCase().includes(query));

  groceryList.innerHTML = filtered
    .map((item) => {
      const checked = item.checked ? "is-checked" : "";
      const meta = getItemMeta(item.name);
      return `
        <li>
          <label class="grocery-item ${checked}">
            <input type="checkbox" data-name="${item.name}" ${item.checked ? "checked" : ""} />
            <span class="item-meta">
              <span class="item-name">${meta.icon} ${item.name}</span>
              <span class="item-category">${meta.category}</span>
            </span>
          </label>
        </li>
      `;
    })
    .join("");
}

function renderAchievements() {
  const checkedCount = checklistState.filter((item) => item.checked).length;
  const total = checklistState.length;
  const progressPercent = Math.round((checkedCount / total) * 100);
  const level = Math.floor(xpState.points / 250) + 1;
  const badges = [];

  if (progressPercent >= 25) badges.push({ icon: "🥑", title: "Pantry Explorer", note: "Your keto foundation is taking shape." });
  if (progressPercent >= 75) badges.push({ icon: "✨", title: "Momentum Master", note: "A serious keto rhythm is in motion." });
  if (xpState.points >= 100) badges.push({ icon: "⚡", title: "Streak Builder", note: "Your consistency is compounding." });
  if (quizState.completed) badges.push({ icon: "🧠", title: "Insight Seeker", note: "Your quiz profile is live." });
  if (level >= 3) badges.push({ icon: "🏆", title: "Keto Level Up", note: "You are entering premium territory." });

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

  achievementBadges.innerHTML = markup || '<div class="achievement-badge"><div>🌿</div><strong>Starter mode</strong><span>Your first wins unlock special badges.</span></div>';
  achievementMini.innerHTML = markup || '<span class="pill">🌿 Starter mode</span>';
}

function updateScoreboard() {
  const checkedCount = checklistState.filter((item) => item.checked).length;
  const total = checklistState.length;
  const progressPercent = Math.round((checkedCount / total) * 100);
  const quizScore = quizState.completed ? quizState.score : 0;
  const overallScore = Math.min(100, Math.round(progressPercent * 0.7 + quizScore * 0.3));

  checklistSummary.textContent = `${checkedCount} of ${total} items checked`;
  progressBar.style.width = `${progressPercent}%`;
  scoreBadge.textContent = `Keto score ${overallScore}/100`;
  heroScore.textContent = overallScore;
  heroXp.textContent = xpState.points;
  heroLevel.textContent = Math.floor(xpState.points / 250) + 1;
  heroLevelMini.textContent = Math.floor(xpState.points / 250) + 1;
  heroRingPercent.textContent = `${progressPercent}%`;
  heroProgressRing.style.background = `conic-gradient(var(--accent) ${progressPercent}%, rgba(124, 58, 237, 0.15) ${progressPercent}% 100%)`;

  const level = Math.floor(xpState.points / 250) + 1;
  const nextGoal = level * 250;
  const percentToNext = Math.min(100, Math.round((xpState.points % 250) / 250 * 100));
  levelLabel.textContent = `Level ${level} • Next goal: ${nextGoal} XP`;
  xpValue.textContent = xpState.points;
  xpLevelValue.textContent = level;
  heroSubtitle.textContent = progressPercent >= 75 ? "Your system is operating at premium speed." : "Your keto journey is building momentum.";
  xpDescription.textContent = checkedCount > 0
    ? `You are ${checkedCount} items away from a full pantry reset.`
    : "Every checked item sharpens your streak.";
  xpPercent.textContent = `${percentToNext}%`;
  xpRing.style.background = `conic-gradient(var(--accent) ${percentToNext}%, rgba(124, 58, 237, 0.16) 0%)`;

  renderAchievements();

  if (progressPercent >= 75 && !milestoneShown) {
    milestoneShown = true;
    localStorage.setItem(storageKeys.milestone, "true");
    milestoneModal.classList.remove("hidden");
    milestoneModal.setAttribute("aria-hidden", "false");
    launchConfetti();
  }

  if (progressPercent >= 80 && !progressPopupShown) {
    progressPopupShown = true;
    localStorage.setItem("keto-progress-popup-shown", "true");
    progressModal.classList.remove("hidden");
    progressModal.setAttribute("aria-hidden", "false");
  }

  if (checkedCount === total && !quizState.completed) {
    launchConfetti();
  }
}

function renderPlanner() {
  mealPlanner.innerHTML = plannerDays
    .map(
      (day) => `
        <label class="planner-day">
          <span>${day}</span>
          <textarea data-day="${day}" placeholder="Add a keto plan for ${day.toLowerCase()}...">${plannerState[day] || ""}</textarea>
        </label>
      `
    )
    .join("");
}

function renderQuiz() {
  quizContainer.innerHTML = quizQuestions
    .map((item, index) => {
      const options = item.options
        .map(
          (option) => `
            <label class="quiz-option">
              <input type="radio" name="q${index + 1}" value="${option.value}" required />
              <span>${option.text}</span>
            </label>
          `
        )
        .join("");

      return `
        <div class="quiz-question">
          <h3>${index + 1}. ${item.question}</h3>
          ${options}
        </div>
      `;
    })
    .join("");
}

function renderRecommendationCards() {
  recommendationCards.innerHTML = productCards
    .map((card) => {
      const isActive = quizState.completed && card.name === quizState.recommendation;
      return `
        <article class="product-card ${isActive ? "active" : ""}">
          <div class="product-image">${card.image}</div>
          <span class="tag">${card.tag}</span>
          <strong>${card.name}</strong>
          <div class="rating">${card.rating}</div>
          <p>${card.description}</p>
          <div class="best-for">${card.bestFor}</div>
          <span class="pill">${card.accent}</span>
          <a class="product-cta" href="http://bit.ly/4aIbQci" target="_blank" rel="noreferrer">Buy Now</a>
        </article>
      `;
    })
    .join("");
}

function updateRecommendation() {
  recommendationText.textContent = quizState.completed
    ? `Your tailored pick is ${quizState.recommendation}.`
    : "Complete the quiz to unlock your next favorite keto companion.";
  recommendationCTA.textContent = quizState.completed ? `Claim ${quizState.recommendation}` : "Claim your match";
  renderRecommendationCards();
}

function addXp(amount) {
  xpState.points += amount;
  saveXp();
  updateScoreboard();
}

function launchConfetti() {
  confettiLayer.innerHTML = "";

  for (let i = 0; i < 60; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ["#7c3aed", "#38bdf8", "#f59e0b", "#f43f5e", "#34d399"][Math.floor(Math.random() * 5)];
    piece.style.setProperty("--drift", `${Math.random() * 120 - 60}px`);
    piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 2200);
}

searchInput.addEventListener("input", renderChecklist);

groceryList.addEventListener("change", (event) => {
  const checkbox = event.target;
  if (!(checkbox instanceof HTMLInputElement) || checkbox.type !== "checkbox") return;

  const itemName = checkbox.dataset.name;
  const target = checklistState.find((item) => item.name === itemName);
  if (!target) return;

  target.checked = checkbox.checked;
  saveChecklist();

  if (checkbox.checked) {
    addXp(12);
  } else {
    addXp(-12);
  }

  renderChecklist();
  updateScoreboard();

  if (checklistState.every((item) => item.checked)) {
    launchConfetti();
  }
});

xpBoostBtn.addEventListener("click", () => addXp(25));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

printBtn.addEventListener("click", () => window.print());

mealPlanner.addEventListener("input", (event) => {
  const textarea = event.target;
  if (!(textarea instanceof HTMLTextAreaElement)) return;

  plannerState[textarea.dataset.day] = textarea.value;
  savePlanner();
});

calculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value) / 100;
  const age = Number(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const activity = Number(document.getElementById("activity").value);

  const bmi = (weight / (height * height)).toFixed(1);
  const bmr = gender === "male"
    ? 10 * weight + 6.25 * 100 * height - 5 * age + 5
    : 10 * weight + 6.25 * 100 * height - 5 * age - 161;
  const calories = Math.round(bmr * activity);
  const water = Math.round(weight * 35);
  const protein = Math.round(weight * 1.2);
  const fat = Math.round((calories * 0.7) / 9);
  const carbs = 20;

  bmiResult.textContent = bmi;
  calorieResult.textContent = `${calories} kcal`;
  waterResult.textContent = `${water} ml`;
  macroResult.textContent = `${protein}g P / ${fat}g F / ${carbs}g C`;
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quizForm);
  const scores = { plan: 0, dessert: 0, dna: 0, pot: 0, baking: 0 };

  quizQuestions.forEach((_, index) => {
    const answer = formData.get(`q${index + 1}`);
    if (answer) {
      scores[answer] += 1;
    }
  });

  const topMatch = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const recommendation = productMap[topMatch] || "Keto Journey";
  const score = Math.min(100, Object.values(scores).reduce((sum, value) => sum + value, 0) * 20);

  quizState = { completed: true, score, recommendation };
  saveQuiz();
  updateScoreboard();
  updateRecommendation();
  quizResult.innerHTML = `<strong>${recommendation}</strong> is the strongest fit for your current cravings and pacing.`;
  launchConfetti();
});

quizContainer.addEventListener("change", (event) => {
  const option = event.target.closest(".quiz-option");
  if (!option) return;

  const allOptions = quizContainer.querySelectorAll(".quiz-option");
  allOptions.forEach((item) => item.classList.remove("selected"));
  option.classList.add("selected");
});

function closeModal(modal) {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

closeModalBtn.addEventListener("click", () => closeModal(milestoneModal));
closeProgressModalBtn.addEventListener("click", () => closeModal(progressModal));
closeExitModalBtn.addEventListener("click", () => closeModal(exitModal));

[milestoneModal, progressModal, exitModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

window.addEventListener("mouseout", (event) => {
  if (!exitPopupShown && event.relatedTarget === null) {
    exitPopupShown = true;
    
    exitModal.classList.remove("hidden");
    exitModal.setAttribute("aria-hidden", "false");
  }
});

renderChecklist();
renderPlanner();
renderQuiz();
updateScoreboard();
updateRecommendation();

const savedTheme = localStorage.getItem(storageKeys.theme) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);
