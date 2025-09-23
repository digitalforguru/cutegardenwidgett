// --- DOM Elements ---
const gardenContainer = document.getElementById("garden-container");
const seedInventoryContainer = document.getElementById("seed-inventory");
const seedJournalContainer = document.getElementById("seed-journal");
const lotusPointsDisplay = document.getElementById("lotus-points-value");
const streakDisplay = document.getElementById("streak-display");
const vaseCollection = document.getElementById("vase-collection");

// --- Game State ---
let lotusPoints = 0;
let garden = []; // array of planted flower objects
let streakCount = 0;

const STORAGE_KEY = "cuteGardenState";

// --- Utility Functions ---
function saveState() {
    const state = { lotusPoints, garden, streakCount };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        lotusPoints = parsed.lotusPoints || 0;
        garden = parsed.garden || [];
        streakCount = parsed.streakCount || 0;
    }
}

function updateLotusPoints() {
    lotusPointsDisplay.textContent = lotusPoints;
    saveState();
}

function updateStreak() {
    streakDisplay.textContent = streakCount;
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

// --- Garden Functions ---
function createFlowerElement(flower) {
    const flowerEl = document.createElement("div");
    flowerEl.classList.add("flower");

    let stageIndex = 0;

    const img = document.createElement("img");
    img.src = flower.stages[stageIndex];
    img.alt = flower.name;

    const badge = document.createElement("span");
    badge.textContent = flower.rarity.toUpperCase();
    badge.style.backgroundColor = getRarityColor(flower.rarity);
    badge.classList.add("rarity-badge");

    const watersLeft = document.createElement("span");
    watersLeft.textContent = `Waters left: ${flower.waters}`;
    watersLeft.classList.add("waters-left");

    flowerEl.appendChild(img);
    flowerEl.appendChild(badge);
    flowerEl.appendChild(watersLeft);

    flowerEl.addEventListener("click", () => {
        if (flower.waters > 0) {
            flower.waters--;
            watersLeft.textContent = `Waters left: ${flower.waters}`;

            if (flower.waters === 0 && stageIndex < flower.stages.length - 1) {
                stageIndex++;
                img.src = flower.stages[stageIndex];
            }

            if (stageIndex === flower.stages.length - 1 && flower.waters === 0) {
                // Reward lotus points including bonus
                let bonus = 0;
                switch (flower.rarity) {
                    case "common": bonus = 10; break;
                    case "uncommon": bonus = 25; break;
                    case "rare": bonus = 50; break;
                    case "epic": bonus = 75; break;
                    case "legendary": bonus = 100; break;
                }
                lotusPoints += flower.cost + bonus;
                updateLotusPoints();

                flowerEl.classList.add("harvested");
                watersLeft.textContent = "Harvested!";
                addToVase(flower);
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

function addToVase(flower) {
    const vaseEl = document.createElement("img");
    vaseEl.src = flower.harvested;
    vaseEl.alt = flower.name;
    vaseEl.classList.add("vase-flower");
    vaseCollection.appendChild(vaseEl);
}

// --- Plant Flower ---
function plantFlower(flowerName) {
    const flowerData = flowers.find(f => f.name === flowerName);
    if (!flowerData) return;

    const flowerClone = {
        ...flowerData,
        waters: flowerData.waters
    };
    garden.push(flowerClone);
    renderGarden();
    saveState();
}

// --- Seed Inventory ---
function renderSeedInventory() {
    seedInventoryContainer.innerHTML = "";
    flowers.forEach(flower => {
        const btn = document.createElement("button");
        btn.classList.add("plant-btn");
        btn.textContent = flower.name;
        btn.style.borderColor = getRarityColor(flower.rarity);
        btn.dataset.flower = flower.name;

        btn.addEventListener("click", () => {
            plantFlower(flower.name);
        });

        seedInventoryContainer.appendChild(btn);
    });
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

// --- Initialize Game ---
function initGame() {
    loadState();
    updateLotusPoints();
    updateStreak();
    renderSeedInventory();
    renderGarden();
    renderSeedJournal();
}

initGame();
