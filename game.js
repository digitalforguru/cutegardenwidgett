// --- DOM Elements ---
const gardenContainer = document.getElementById("garden-section");
const lotusPointsDisplay = document.getElementById("lotus-points-value");
const seedInventory = document.getElementById("seed-inventory");
const seedJournalContainer = document.getElementById("seed-journal-card");
const streakDisplay = document.getElementById("streak-count");

const waterBtn = document.getElementById("water-btn");
const harvestBtn = document.getElementById("harvest-btn");

// --- Game State ---
let lotusPoints = 0;
let garden = []; // planted flowers
let inventory = []; // seed names
let dailyStreak = 0;
let lastLogin = null;
const STORAGE_KEY = "cuteGardenState";

// --- Load/Save ---
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    lotusPoints,
    garden,
    inventory,
    dailyStreak,
    lastLogin
  }));
}

function loadState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved) {
    lotusPoints = saved.lotusPoints || 0;
    garden = saved.garden || [];
    inventory = saved.inventory || [];
    dailyStreak = saved.dailyStreak || 0;
    lastLogin = saved.lastLogin || null;
  }
}

// --- Utility Functions ---
function getRarityColor(rarity) {
  switch (rarity) {
    case "common": return "#A8D5BA";
    case "uncommon": return "#CBA6F7";
    case "rare": return "#F28DAA";
    case "epic": return "#FCD34D";
    case "legendary": return "#FFD700";
    default: return "#FFF";
  }
}

function getExtraPoints(rarity) {
  switch(rarity) {
    case "common": return 10;
    case "uncommon": return 25;
    case "rare": return 50;
    case "epic": return 75;
    case "legendary": return 100;
    default: return 0;
  }
}

function updateLotusPoints() {
  lotusPointsDisplay.textContent = lotusPoints;
  saveState();
}

function showPopup(message) {
  const popup = document.getElementById("popup-message");
  popup.textContent = message;
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 2000);
}

// --- Garden Functions ---
function createFlowerElement(flowerObj) {
  const container = document.createElement("div");
  container.classList.add("flower");
  container.dataset.name = flowerObj.name;

  let stageKeys = ["seedStage", "sproutStage", "midGrowthStage", "matureFlowerStage"];
  let currentStage = 0;

  const img = document.createElement("img");
  img.src = flowerObj.stages[stageKeys[currentStage]];
  img.alt = flowerObj.name;
  container.appendChild(img);

  // Rarity badge
  const badge = document.createElement("div");
  badge.textContent = flowerObj.rarity.toUpperCase();
  badge.style.position = "absolute";
  badge.style.top = "2px";
  badge.style.left = "2px";
  badge.style.backgroundColor = getRarityColor(flowerObj.rarity);
  badge.style.color = "#000";
  badge.style.fontSize = "10px";
  badge.style.padding = "2px";
  badge.style.borderRadius = "3px";
  container.appendChild(badge);

  const watersLeft = document.createElement("span");
  watersLeft.textContent = `Waters left: ${flowerObj.waters}`;
  watersLeft.classList.add("waters-left");
  container.appendChild(watersLeft);

  container.addEventListener("click", () => {
    if (flowerObj.waters > 0) {
      flowerObj.waters--;
      watersLeft.textContent = `Waters left: ${flowerObj.waters}`;
      if (flowerObj.waters === 0 && currentStage < stageKeys.length - 1) {
        currentStage++;
        img.src = flowerObj.stages[stageKeys[currentStage]];
        flowerObj.waters = flowerObj.waters === 0 ? flowerObj.waters : flowerObj.waters; // keep waters if not finished
      }
      if (currentStage === stageKeys.length - 1 && flowerObj.waters === 0) {
        lotusPoints += flowerObj.cost + getExtraPoints(flowerObj.rarity);
        updateLotusPoints();
        container.classList.add("harvested");
        watersLeft.textContent = "Harvested!";
        showPopup(`You harvested ${flowerObj.name} (+${flowerObj.cost + getExtraPoints(flowerObj.rarity)} lotus points)`);
      }
      saveState();
    }
  });

  return container;
}

function renderGarden() {
  gardenContainer.innerHTML = "";
  garden.forEach(flower => {
    const el = createFlowerElement(flower);
    gardenContainer.appendChild(el);
  });
}

// --- Seed Inventory Functions ---
function renderSeedInventory() {
  seedInventory.innerHTML = "";
  if (inventory.length === 0) {
    seedInventory.textContent = "No seeds yet";
    return;
  }
  inventory.forEach(seedName => {
    const seed = flowers.find(f => f.name === seedName);
    const btn = document.createElement("button");
    btn.classList.add("seed-btn");
    btn.style.borderColor = getRarityColor(seed.rarity);
    btn.innerHTML = `<img src="${seed.seedbag}" alt="${seed.name}">`;
    btn.addEventListener("click", () => {
      plantFlower(seedName);
      showPopup(`Planted ${seedName}`);
    });
    seedInventory.appendChild(btn);
  });
}

// --- Planting ---
function plantFlower(name) {
  const flowerData = flowers.find(f => f.name === name);
  if (!flowerData) return;

  const flowerClone = { ...flowerData, waters: flowerData.waters };
  garden.push(flowerClone);
  renderGarden();
  saveState();
}

// --- Seed Journal ---
function renderSeedJournal() {
  seedJournalContainer.innerHTML = "";
  flowers.forEach(flower => {
    const card = document.createElement("div");
    card.classList.add("seed-card");
    card.style.borderColor = getRarityColor(flower.rarity);
    card.innerHTML = `
      <img src="${flower.seedbag}" alt="${flower.name} seedbag">
      <h3>${flower.name}</h3>
      <p>Water me ${flower.waters} times / ${flower.cost} lotus points</p>
      <p>Fact: ${flower.fact}</p>
      <p>Quote: "${flower.quote}"</p>
    `;
    seedJournalContainer.appendChild(card);
  });
}

// --- Daily Streak ---
function updateDailyStreak() {
  const today = new Date().toDateString();
  if (lastLogin !== today) {
    if (lastLogin === new Date(Date.now() - 86400000).toDateString()) {
      dailyStreak++;
    } else {
      dailyStreak = 1;
    }
    lastLogin = today;
    saveState();
  }
  streakDisplay.textContent = dailyStreak;
}

// --- Initialize Game ---
function initGame() {
  loadState();
  updateLotusPoints();
  renderGarden();
  renderSeedInventory();
  renderSeedJournal();
  updateDailyStreak();
}

initGame();
