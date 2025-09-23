// data.js

const flowers = [
  // --- COMMON FLOWERS ---
  {
    name: "Daisy",
    rarity: "common",
    waters: 15,
    cost: 50,
    fact: "Daisies are edible and often used in salads.",
    quote: "Happiness blooms from within.",
    stages: {
      seedStage: "assets/flowers/daisy-seedstage.png",
      sproutStage: "assets/flowers/daisy-sproutstage.png",
      midGrowthStage: "assets/flowers/daisy-midgrowth.png",
      matureFlowerStage: "assets/flowers/daisy-matureflower.png"
    },
    seedbag: "assets/seedbags/daisy-seedbag.png"
  },
  {
    name: "Marigold",
    rarity: "common",
    waters: 20,
    cost: 75,
    fact: "Marigolds repel pests and are great for companion planting.",
    quote: "Even the tiniest flowers can brighten the darkest day.",
    stages: {
      seedStage: "assets/flowers/marigold-seedstage.png",
      sproutStage: "assets/flowers/marigold-sproutstage.png",
      midGrowthStage: "assets/flowers/marigold-midgrowth.png",
      matureFlowerStage: "assets/flowers/marigold-matureflower.png"
    },
    seedbag: "assets/seedbags/marigold-seedbag.png"
  },
  {
    name: "Pansies",
    rarity: "common",
    waters: 25,
    cost: 100,
    fact: "Pansies come in many colors and symbolize loving thoughts.",
    quote: "Colors of joy grow in every corner.",
    stages: {
      seedStage: "assets/flowers/pansies-seedstage.png",
      sproutStage: "assets/flowers/pansies-sproutstage.png",
      midGrowthStage: "assets/flowers/pansies-midgrowth.png",
      matureFlowerStage: "assets/flowers/pansies-matureflower.png"
    },
    seedbag: "assets/seedbags/pansies-seedbag.png"
  },
  {
    name: "Nasturtium",
    rarity: "common",
    waters: 30,
    cost: 125,
    fact: "Nasturtium flowers are edible and peppery in flavor.",
    quote: "Adventure blooms where you least expect it.",
    stages: {
      seedStage: "assets/flowers/nasturtium-seedstage.png",
      sproutStage: "assets/flowers/nasturtium-sproutstage.png",
      midGrowthStage: "assets/flowers/nasturtium-midgrowth.png",
      matureFlowerStage: "assets/flowers/nasturtium-matureflower.png"
    },
    seedbag: "assets/seedbags/nasturtium-seedbag.png"
  },
  {
    name: "Geranium",
    rarity: "common",
    waters: 35,
    cost: 150,
    fact: "Geraniums are fragrant and can deter mosquitoes.",
    quote: "A gentle bloom makes a happy room.",
    stages: {
      seedStage: "assets/flowers/geranium-seedstage.png",
      sproutStage: "assets/flowers/geranium-sproutstage.png",
      midGrowthStage: "assets/flowers/geranium-midgrowth.png",
      matureFlowerStage: "assets/flowers/geranium-matureflower.png"
    },
    seedbag: "assets/seedbags/geranium-seedbag.png"
  },
  {
    name: "Begonia",
    rarity: "common",
    waters: 40,
    cost: 175,
    fact: "Begonias thrive in shade and are known for vibrant colors.",
    quote: "Beauty grows in quiet corners.",
    stages: {
      seedStage: "assets/flowers/begonia-seedstage.png",
      sproutStage: "assets/flowers/begonia-sproutstage.png",
      midGrowthStage: "assets/flowers/begonia-midgrowth.png",
      matureFlowerStage: "assets/flowers/begonia-matureflower.png"
    },
    seedbag: "assets/seedbags/begonia-seedbag.png"
  },
  {
    name: "Sunflowers",
    rarity: "common",
    waters: 45,
    cost: 200,
    fact: "Sunflowers track the sun to maximize photosynthesis.",
    quote: "Stand tall and face the light.",
    stages: {
      seedStage: "assets/flowers/sunflower-seedstage.png",
      sproutStage: "assets/flowers/sunflower-sproutstage.png",
      midGrowthStage: "assets/flowers/sunflower-midgrowth.png",
      matureFlowerStage: "assets/flowers/sunflower-matureflower.png"
    },
    seedbag: "assets/seedbags/sunflower-seedbag.png"
  },
  {
    name: "Cosmos",
    rarity: "common",
    waters: 50,
    cost: 225,
    fact: "Cosmos are easy to grow and attract butterflies.",
    quote: "Let your dreams float like petals in the wind.",
    stages: {
      seedStage: "assets/flowers/cosmos-seedstage.png",
      sproutStage: "assets/flowers/cosmos-sproutstage.png",
      midGrowthStage: "assets/flowers/cosmos-midgrowth.png",
      matureFlowerStage: "assets/flowers/cosmos-matureflower.png"
    },
    seedbag: "assets/seedbags/cosmos-seedbag.png"
  },

  // --- UNCOMMON FLOWERS ---
  {
    name: "Bluebells",
    rarity: "uncommon",
    waters: 55,
    cost: 300,
    fact: "Bluebells signal the arrival of spring in woodlands.",
    quote: "Magic hides in quiet blue corners.",
    stages: {
      seedStage: "assets/flowers/bluebells-seedstage.png",
      sproutStage: "assets/flowers/bluebells-sproutstage.png",
      midGrowthStage: "assets/flowers/bluebells-midgrowth.png",
      matureFlowerStage: "assets/flowers/bluebells-matureflower.png"
    },
    seedbag: "assets/seedbags/bluebells-seedbag.png"
  },
  {
    name: "Snapdragons",
    rarity: "uncommon",
    waters: 60,
    cost: 350,
    fact: "Snapdragons can bloom in many colors, attracting bees.",
    quote: "Courage blooms in unexpected shapes.",
    stages: {
      seedStage: "assets/flowers/snapdragon-seedstage.png",
      sproutStage: "assets/flowers/snapdragon-sproutstage.png",
      midGrowthStage: "assets/flowers/snapdragon-midgrowth.png",
      matureFlowerStage: "assets/flowers/snapdragon-matureflower.png"
    },
    seedbag: "assets/seedbags/snapdragons-seedbags.png"
  },
  {
    name: "Morning Glory",
    rarity: "uncommon",
    waters: 65,
    cost: 400,
    fact: "Morning glories open at dawn and close by afternoon.",
    quote: "Every day is a new beginning.",
    stages: {
      seedStage: "assets/flowers/morningglory-seedstage.png",
      sproutStage: "assets/flowers/morningglory-sproutstage.png",
      midGrowthStage: "assets/flowers/morningglory-midgrowth.png",
      matureFlowerStage: "assets/flowers/morningglory-matureflower.png"
    },
    seedbag: "assets/seedbags/morningglory-seedbag.png"
  },
  {
    name: "Tulips",
    rarity: "uncommon",
    waters: 70,
    cost: 450,
    fact: "Tulips were once more valuable than gold in the Netherlands.",
    quote: "Elegance grows quietly from the soil.",
    stages: {
      seedStage: "assets/flowers/tulip-seedstage.png",
      sproutStage: "assets/flowers/tulip-sproutstage.png",
      midGrowthStage: "assets/flowers/tulip-midgrowth.png",
      matureFlowerStage: "assets/flowers/tulip-matureflower.png"
    },
    seedbag: "assets/seedbags/tulip-seedbag.png"
  },
  {
    name: "Freesia",
    rarity: "uncommon",
    waters: 75,
    cost: 500,
    fact: "Freesias are fragrant and symbolize innocence.",
    quote: "Gentle beauty whispers softly.",
    stages: {
      seedStage: "assets/flowers/freesia-seedstage.png",
      sproutStage: "assets/flowers/freesia-sproutstage.png",
      midGrowthStage: "assets/flowers/freesia-midgrowth.png",
      matureFlowerStage: "assets/flowers/freesia-matureflower.png"
    },
    seedbag: "assets/seedbags/freesia-seedbag.png"
  },
  {
    name: "Anemone",
    rarity: "uncommon",
    waters: 80,
    cost: 550,
    fact: "Anemones are also called windflowers because they sway with the wind.",
    quote: "Life dances in delicate rhythms.",
    stages: {
      seedStage: "assets/flowers/anemone-seedstage.png",
      sproutStage: "assets/flowers/anemone-sproutstage.png",
      midGrowthStage: "assets/flowers/anemone-midgrowth.png",
      matureFlowerStage: "assets/flowers/anemone-matureflower.png"
    },
    seedbag: "assets/seedbags/anemone-seedbag.png"
  },
  {
    name: "Lavender",
    rarity: "uncommon",
    waters: 90,
    cost: 600,
    fact: "Lavender is used for relaxation, essential oils, and culinary purposes.",
    quote: "Calmness blooms where you nurture it.",
    stages: {
      seedStage: "assets/flowers/lavender-seedstage.png",
      sproutStage: "assets/flowers/lavender-sproutstage.png",
      midGrowthStage: "assets/flowers/lavender-midgrowth.png",
      matureFlowerStage: "assets/flowers/lavender-matureflower.png"
    },
    seedbag: "assets/seedbags/lavender-seedbag.png"
  },
  {
    name: "Daffodils",
    rarity: "uncommon",
    waters: 100,
    cost: 650,
    fact: "Daffodils are one of the first signs of spring.",
    quote: "Every ending brings a new beginning.",
    stages: {
      seedStage: "assets/flowers/daffodil-seedstage.png",
      sproutStage: "assets/flowers/daffodil-sproutstage.png",
      midGrowthStage: "assets/flowers/daffodil-midgrowth.png",
      matureFlowerStage: "assets/flowers/daffodil-matureflower.png"
    },
    seedbag: "assets/seedbags/daffodil-seedbag.png"
  },
// --- RARE FLOWERS ---
{
  name: "Cherry Blossom",
  rarity: "rare",
  waters: 90,
  cost: 800,
  fact: "Cherry blossoms bloom for a very short time, symbolizing the beauty of fleeting moments.",
  quote: "Life is delicate, enjoy the bloom.",
  stages: {
    seedStage: "assets/flowers/cherryblossom-seedstage.png",
    sproutStage: "assets/flowers/cherryblossom-sproutstage.png",
    midGrowthStage: "assets/flowers/cherryblossom-midgrowth.png",
    matureFlowerStage: "assets/flowers/cherryblossom-matureflower.png"
  },
  seedbag: "assets/seedbags/cherryblossom-seedbag.png"
},
{
  name: "Lily",
  rarity: "rare",
  waters: 100,
  cost: 900,
  fact: "Lilies are symbols of purity and refined beauty.",
  quote: "Elegance grows quietly from the earth.",
  stages: {
    seedStage: "assets/flowers/lily-seedstage.png",
    sproutStage: "assets/flowers/lily-sproutstage.png",
    midGrowthStage: "assets/flowers/lily-midgrowth.png",
    matureFlowerStage: "assets/flowers/lily-matureflower.png"
  },
  seedbag: "assets/seedbags/lily-seedbag.png"
},
{
  name: "Rose",
  rarity: "rare",
  waters: 110,
  cost: 1000,
  fact: "Roses have been cultivated for thousands of years for their beauty and fragrance.",
  quote: "Love grows with care and patience.",
  stages: {
    seedStage: "assets/flowers/rose-seedstage.png",
    sproutStage: "assets/flowers/rose-sproutstage.png",
    midGrowthStage: "assets/flowers/rose-midgrowth.png",
    matureFlowerStage: "assets/flowers/rose-matureflower.png"
  },
  seedbag: "assets/seedbags/rose-seedbag.png"
},
{
  name: "Dahlia",
  rarity: "rare",
  waters: 120,
  cost: 1100,
  fact: "Dahlias come in many colors and represent elegance and dignity.",
  quote: "Stand tall and show your colors.",
  stages: {
    seedStage: "assets/flowers/dahlia-seedstage.png",
    sproutStage: "assets/flowers/dahlia-sproutstage.png",
    midGrowthStage: "assets/flowers/dahlia-midgrowth.png",
    matureFlowerStage: "assets/flowers/dahlia-matureflower.png"
  },
  seedbag: "assets/seedbags/dahlia-seedbag.png"
},
{
  name: "Hibiscus",
  rarity: "rare",
  waters: 130,
  cost: 1200,
  fact: "Hibiscus flowers are used to make tea and symbolize delicate beauty.",
  quote: "Bloom with confidence and grace.",
  stages: {
    seedStage: "assets/flowers/hibiscus-seedstage.png",
    sproutStage: "assets/flowers/hibiscus-sproutstage.png",
    midGrowthStage: "assets/flowers/hibiscus-midgrowth.png",
    matureFlowerStage: "assets/flowers/hibiscus-matureflower.png"
  },
  seedbag: "assets/seedbags/hibiscus-seedbag.png"
},
{
  name: "Peonies",
  rarity: "rare",
  waters: 140,
  cost: 1300,
  fact: "Peonies are long-lived and represent wealth and honor.",
  quote: "Patience brings the most beautiful blooms.",
  stages: {
    seedStage: "assets/flowers/peonies-seedstage.png",
    sproutStage: "assets/flowers/peonies-sproutstage.png",
    midGrowthStage: "assets/flowers/peonies-midgrowth.png",
    matureFlowerStage: "assets/flowers/peonies-matureflower.png"
  },
  seedbag: "assets/seedbags/peonies-seedbag.png"
},
{
  name: "Gardenia",
  rarity: "rare",
  waters: 150,
  cost: 1400,
  fact: "Gardenias have a sweet fragrance and symbolize purity and gentleness.",
  quote: "Fragrance is the poetry of flowers.",
  stages: {
    seedStage: "assets/flowers/gardenia-seedstage.png",
    sproutStage: "assets/flowers/gardenia-sproutstage.png",
    midGrowthStage: "assets/flowers/gardenia-midgrowth.png",
    matureFlowerStage: "assets/flowers/gardenia-matureflower.png"
  },
  seedbag: "assets/seedbags/gardenia-seedbag.png"
},
{
  name: "Orchid",
  rarity: "rare",
  waters: 160,
  cost: 1500,
  fact: "Orchids are exotic flowers that symbolize beauty, strength, and luxury.",
  quote: "Rare beauty requires care and patience.",
  stages: {
    seedStage: "assets/flowers/orchid-seedstage.png",
    sproutStage: "assets/flowers/orchid-sproutstage.png",
    midGrowthStage: "assets/flowers/orchid-midgrowth.png",
    matureFlowerStage: "assets/flowers/orchid-matureflower.png"
  },
  seedbag: "assets/seedbags/orchid-seedbag.png"
},

// --- EPIC / SEASONAL FLOWERS ---
{
  name: "Dandelion (Summer)",
  rarity: "epic",
  waters: 150,
  cost: 2000,
  fact: "Dandelions are resilient and symbolize wishes and hope.",
  quote: "Make a wish and watch it fly.",
  stages: {
    seedStage: "assets/flowers/dandelionsummer-seedstage.png",
    sproutStage: "assets/flowers/dandelionsummer-sproutstage.png",
    midGrowthStage: "assets/flowers/dandelionsummer-midgrowth.png",
    matureFlowerStage: "assets/flowers/dandelionsummer-matureflower.png"
  },
  seedbag: "assets/seedbags/dandelionsummer-seedbag.png"
},
{
  name: "Maple Sapling (Fall)",
  rarity: "epic",
  waters: 165,
  cost: 2200,
  fact: "Maples show stunning fall colors and are tapped for syrup.",
  quote: "Change is beautiful like autumn leaves.",
  stages: {
    seedStage: "assets/flowers/maplesaplingfall-seedstage.png",
    sproutStage: "assets/flowers/maplesaplingfall-sproutstage.png",
    midGrowthStage: "assets/flowers/maplesaplingfall-midgrowth.png",
    matureFlowerStage: "assets/flowers/maplesaplingfall-matureflower.png"
  },
  seedbag: "assets/seedbags/maplesaplingfall-seedbag.png"
},
{
  name: "Hellebore (Winter)",
  rarity: "epic",
  waters: 180,
  cost: 2400,
  fact: "Hellebores bloom in winter and are also called Christmas roses.",
  quote: "Even in frost, beauty persists.",
  stages: {
    seedStage: "assets/flowers/helleborewinter-seedstage.png",
    sproutStage: "assets/flowers/helleborewinter-sproutstage.png",
    midGrowthStage: "assets/flowers/helleborewinter-midgrowth.png",
    matureFlowerStage: "assets/flowers/helleborewinter-matureflower.png"
  },
  seedbag: "assets/seedbags/helleborewinter-seedbag.png"
},
{
  name: "Iris (Spring)",
  rarity: "epic",
  waters: 195,
  cost: 2600,
  fact: "Iris flowers symbolize hope and cherished friendship.",
  quote: "Hope blooms after every winter.",
  stages: {
    seedStage: "assets/flowers/irisflowerspring-seedstage.png",
    sproutStage: "assets/flowers/irisflowerspring-sproutstage.png",
    midGrowthStage: "assets/flowers/irisflowerspring-midgrowth.png",
    matureFlowerStage: "assets/flowers/irisflowerspring-matureflower.png"
  },
  seedbag: "assets/seedbags/irisflowerspring-seedbag.png"
},

// --- LEGENDARY / HOLIDAY FLOWERS ---
{
  name: "Bleeding Hearts (Valentine's)",
  rarity: "legendary",
  waters: 210,
  cost: 2800,
  fact: "Bleeding hearts symbolize love and compassion.",
  quote: "Love blooms in the heart.",
  stages: {
    seedStage: "assets/flowers/bleedingheartsvalentines-seedstage.png",
    sproutStage: "assets/flowers/bleedingheartsvalentines-sproutstage.png",
    midGrowthStage: "assets/flowers/bleedingheartsvalentines-midgrowth.png",
    matureFlowerStage: "assets/flowers/bleedingheartsvalentines-matureflower.png"
  },
  seedbag: "assets/seedbags/bleedingheartsvalentines-seedbag.png"
},
{
  name: "Shamrock (St. Patrick’s Day)",
  rarity: "legendary",
  waters: 225,
  cost: 3000,
  fact: "Shamrocks are symbols of luck and Ireland.",
  quote: "Luck is where your roots grow.",
  stages: {
    seedStage: "assets/flowers/shamrockcloverstp-seedstage.png",
    sproutStage: "assets/flowers/shamrockcloverstp-sproutstage.png",
    midGrowthStage: "assets/flowers/shamrockcloverstp-midgrowth.png",
    matureFlowerStage: "assets/flowers/shamrockcloverstp-matureflower.png"
  },
  seedbag: "assets/seedbags/shamrockcloverstp-seedbag.png"
},
{
  name: "Ipheion (4th of July)",
  rarity: "legendary",
  waters: 250,
  cost: 5000,
  fact: "Ipheion flowers are star-shaped and celebrate independence and freedom.",
  quote: "Shine bright like fireworks in the sky.",
  stages: {
    seedStage: "assets/flowers/ipheionstarflower4th-seedstage.png",
    sproutStage: "assets/flowers/ipheionstarflower4th-sproutstage.png",
    midGrowthStage: "assets/flowers/ipheionstarflower4th-midgrowth.png",
    matureFlowerStage: "assets/flowers/ipheionstarflower4th-matureflower.png"
  },
  seedbag: "assets/seedbags/ipheionstarflower4th-seedbag.png"
},
{
  name: "Poinsettia (Christmas)",
  rarity: "legendary",
  waters: 300,
  cost: 5500,
  fact: "Poinsettias are classic Christmas flowers symbolizing good cheer.",
  quote: "Joy blooms in festive hearts.",
  stages: {
    seedStage: "assets/flowers/poinsettiachristmas-seedstage.png",
    sproutStage: "assets/flowers/poinsettiachristmas-sproutstage.png",
    midGrowthStage: "assets/flowers/poinsettiachristmas-midgrowth.png",
    matureFlowerStage: "assets/flowers/poinsettiachristmas-matureflower.png"
  },
  seedbag: "assets/seedbags/poinsettiachristmas-seedbag.png"
},
{
  name: "Tacca Bat (Halloween)",
  rarity: "legendary",
  waters: 350,
  cost: 6000,
  fact: "Tacca bats are exotic flowers resembling bats, perfect for spooky vibes.",
  quote: "Even in darkness, there is beauty.",
  stages: {
    seedStage: "assets/flowers/taccabathalloween-seedstage.png",
    sproutStage: "assets/flowers/taccabathalloween-sproutstage.png",
    midGrowthStage: "assets/flowers/taccabathalloween-midgrowth.png",
    matureFlowerStage: "assets/flowers/taccabathalloween-matureflower.png"
  },
  seedbag: "assets/seedbags/taccabathalloween-seedbag.png"
}
