export type Product = {
  slug: string;
  code: string;
  name: string;
  mood: string;
  tag: string;
  notes: string;
  line: string;
  aura: string;
  price: string;
  size: string;
  concentration: string;
  accent: string;
  image?: string;
  productImage?: string;
  gallery: string[];
  accords: string[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  ritual: string;
  longevity: string;
};

export const products: Product[] = [
  {
    slug: "first-blush",
    code: "01",
    name: "First Blush",
    mood: "Hopeful & curious",
    tag: "Hopeful & curious",
    notes: "Fresh. Luminous. Effortlessly inviting.",
    line: "White linen, pear skin, early light.",
    aura: "A soft opening for new days and almost-confessions.",
    price: "Rs. 2,850",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    accent: "#F4F2DF",
    image: "/products/first-blush/hero.png",
    productImage: "/products/first-blush/hero.png",
    gallery: [],
    accords: ["Pear skin", "Clean musk", "Linen iris", "Soft citrus"],
    topNotes: ["Bergamot", "Pear skin", "Morning citrus"],
    heartNotes: ["Iris linen", "White tea", "Dewed petals"],
    baseNotes: ["Clean musk", "Blonde woods", "Skin warmth"],
    ritual: "Wear it on pulse points before a morning plan, a first meeting, or any fresh start.",
    longevity: "8-hour extrait strength designed for warm, active days.",
  },
  {
    slug: "library-date",
    code: "02",
    name: "Library Date",
    mood: "Warm & connected",
    tag: "Warm & connected",
    notes: "Ambered pages, soft spice, polished woods, and skin warmth.",
    line: "Amber pages, black tea, soft spice, polished woods.",
    aura: "A warm extrait for quiet confidence, old books, late tables, and conversations that linger.",
    price: "\u20b91200",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    accent: "#DDD2C8",
    image: "/products/library-date/hero.png",
    productImage: "/products/library-date/hero.png",
    gallery: [],
    accords: ["Amber pages", "Black tea", "Soft spice", "Polished woods"],
    topNotes: ["Bergamot peel", "Cardamom", "Black tea"],
    heartNotes: ["Aged paper", "Amber resin", "Dried petals"],
    baseNotes: ["Sandalwood", "Vanilla musk", "Tonka warmth"],
    ritual: "Best after golden hour: two sprays on wrists and one near the collar before dinner, reading time, or a slow walk home.",
    longevity: "A rich 50 ml extrait with an intimate amber trail made to stay warm for hours.",
  },
  {
    slug: "the-unwritten",
    code: "03",
    name: "The Unwritten",
    mood: "Bold & visionary",
    tag: "Bold & visionary",
    notes: "Neon spice, suede air, magnetic woods.",
    line: "Neon spice, suede air, magnetic woods.",
    aura: "A darker signature for founders, exits, and midnight decisions.",
    price: "Rs. 3,100",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    accent: "#1D1816",
    image: "/products/the-unwritten/hero.png",
    productImage: "/products/the-unwritten/hero.png",
    gallery: [],
    accords: ["Neon spice", "Suede air", "Smoked woods", "Electric amber"],
    topNotes: ["Pink pepper", "Ginger flash", "Saffron"],
    heartNotes: ["Suede", "Violet leaf", "Dark rose"],
    baseNotes: ["Cedar", "Patchouli", "Mineral amber"],
    ritual: "Spray before a presentation, a late drive, or the night you want to remember clearly.",
    longevity: "A confident extrait with a long, magnetic drydown.",
  },
  {
    slug: "discovery-set",
    code: "00",
    name: "Discovery Set",
    mood: "The prologue",
    tag: "The prologue",
    notes: "All three chapters for every timeline you are living.",
    line: "All chapters for every timeline.",
    aura: "A compact prologue when one story is not enough.",
    price: "Rs. 1,250",
    size: "3 x 8 ml",
    concentration: "Extrait Discovery Trio",
    accent: "#D06037",
    image: "/products/discovery-set/hero.png",
    productImage: "/products/discovery-set/hero.png",
    gallery: [],
    accords: ["Three chapters", "Daily testing", "Travel-ready", "Giftable"],
    topNotes: ["First Blush", "Library Date", "The Unwritten"],
    heartNotes: ["Mood mapping", "Layering trials", "Signature discovery"],
    baseNotes: ["Everyday ritual", "Travel format", "Gift box"],
    ritual: "Try one scent per day, then repeat your favorite when it starts feeling like yours.",
    longevity: "Three extrait minis made for testing, travel, and gifting.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
