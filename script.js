// --- DOM Elements ---
const gardenContainer = document.getElementById("garden-container");
const seedJournalContainer = document.getElementById("seed-journal");
const lotusPointsDisplay = document.getElementById("lotus-points");
const streakDisplay = document.getElementById("streak-display");

// --- Game State ---
let lotusPoints = 0;
let garden = []; // array of planted flower objects
let streak = 0;
let lastLogin = null;

const STORAGE_KEY = "cuteGardenState";

// --- Utility Functions ---

function saveState() {
    const state = { lotusPoints, garden, streak, lastLogin };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        lotusPoints = parsed.lotusPoints || 0;
        garden = parsed.garden || [];
        streak = parsed.streak || 0;
        lastLogin = parsed.lastLogin || null;
    }
}

function updateLotusPoints() {
    lotusPointsDisplay.textContent = `Lotus Points: ${lotusPoints}`;
    saveState();
}

function updateStreak() {
    streakDisplay.textContent = `Streak: ${streak} 🌸`;
    saveState();
}

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

// Extra lotus points per rarity
function getExtraPoints(rarity) {
    switch (rarity) {
        case "common": return 10;
        case "uncommon": return 25;
        case "rare": return 50;
        case "epic": return 75;
        case "legendary": return 100;
        default: return 0;
    }
}

// Check daily login bonus
function checkDailyBonus() {
    const today = new Date().toDateString();
    if (lastLogin !== today) {
        streak++;
        lotusPoints += 20 + streak * 5; // daily bonus + streak multiplier
        lastLogin = today;
        updateLotusPoints();
        updateStreak();
    }
}

// --- Garden Functions ---
function createFlowerElement(flower) {
    const flowerEl = document.createElement("div");
    flowerEl.classList.add("flower");

    // Add rarity badge
    const badge = document.createElement("span");
    badge.classList.add("rarity-badge");
    badge.style.backgroundColor = getRarityColor(flower.rarity);
    badge.textContent = flower.rarity.toUpperCase();
    flowerEl.appendChild(badge);

    let stageIndex = flower.stageIndex || 0;

    const img = document.createElement("img");
    img.src = flower.stages[stageIndex];
    img.alt = flower.name;

    const watersLeft = document.createElement("span");
    watersLeft.textContent = `Waters left: ${flower.waters}`;
    watersLeft.classList.add("waters-left");

    flowerEl.appendChild(img);
    flowerEl.appendChild(watersLeft);

    flowerEl.addEventListener("click", () => {
        if (flower.waters > 0) {
            flower.waters--;
            watersLeft.textContent = `Waters left: ${flower.waters}`;

            if (flower.waters === 0 && stageIndex < Object.keys(flower.stages).length - 1) {
                stageIndex++;
                flower.stageIndex = stageIndex;
                img.src = flower.stages[stageIndex];
            }

            // Harvest
            if (stageIndex === Object.keys(flower.stages).length - 1 && flower.waters === 0) {
                const reward = flower.cost + getExtraPoints(flower.rarity);
                lotusPoints += reward;
                updateLotusPoints();
                flowerEl.classList.add("harvested");
                watersLeft.textContent = "Harvested!";
            }

            saveState();
        }
    });

    return flowerEl;
}

function renderGarden() {
    gardenContainer.innerHTML = "";
    garden.forEach(flower => {
        const flowerEl = createFlowerElement(flower);
        gardenContainer.appendChild(flowerEl);
    });
}

// --- Plant Flower ---
function plantFlower(flowerName) {
    const flowerData = flowers.find(f => f.name === flowerName);
    if (!flowerData) return;

    const flowerClone = {
        ...flowerData,
        waters: flowerData.waters,
        stageIndex: 0
    };
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

        const seedbagImg = document.createElement("img");
        seedbagImg.src = flower.seedbag;
        seedbagImg.alt = `${flower.name} Seedbag`;

        const nameEl = document.createElement("h3");
        nameEl.textContent = flower.name;

        const costEl = document.createElement("p");
        costEl.textContent = `Water me ${flower.waters} times / ${flower.cost} lotus points`;

        const factEl = document.createElement("p");
        factEl.textContent = `Fact: ${flower.fact}`;

        const quoteEl = document.createElement("p");
        quoteEl.textContent = `Quote: "${flower.quote}"`;

        card.appendChild(seedbagImg);
        card.appendChild(nameEl);
        card.appendChild(costEl);
        card.appendChild(factEl);
        card.appendChild(quoteEl);

        seedJournalContainer.appendChild(card);
    });
}

// --- Buttons for Planting ---
document.querySelectorAll(".plant-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const flowerName = btn.dataset.flower;
        plantFlower(flowerName);
    });
});

// --- Initialize Game ---
function initGame() {
    loadState();
    checkDailyBonus();
    updateLotusPoints();
    updateStreak();
    renderGarden();
    renderSeedJournal();
}

initGame();
