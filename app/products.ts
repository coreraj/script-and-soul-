export type Product = {
  slug: string;
  code: string;
  sku: string;
  name: string;
  mood: string;
  notes: string;
  line: string;
  aura: string;
  price: string;
  mrp: number;
  sellingPrice: number;
  discountPercent: number;
  size: string;
  concentration: string;
  accent: string;
  image?: string;
  productImage?: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  emotion: string;
  ritual: string;
  persona: string;
  character: string;
  description: string;
  audience: string;
  vibe: string;
  fragranceFamily: string;
  oilConcentration: string;
  longevity: string;
  netContentLabel: string;
  playlistLink?: string;
};

export const BRAND_TAGLINE = "Same Scent, Different Story.";

export const KEY_FEATURES = [
  { icon: "🌿", label: "Crafted with Premium Fragrance Oils" },
  { icon: "🌱", label: "Vegan" },
  { icon: "🛡️", label: "IFRA Compliant" },
  { icon: "🏭", label: "GMP Certified" },
  { icon: "✨", label: "Skin-Friendly Formula" },
  { icon: "🐰", label: "Cruelty Free" },
  { icon: "☀️", label: "Optimized for the Indian Climate" },
];

export const TRUST_BADGES = [
  "🚚 Free Shipping",
  "💳 Secure Payments",
  "🔒 Safe Checkout",
  "Premium Packaging",
];

export const HOW_TO_USE = `Because every fragrance deserves the chance to unfold beautifully.

1. Spray lightly - 2 to 3 mists are all your story requires.
2. Apply to warm pulse points where your natural heat brings the scent to life.
3. Mist over freshly moisturized skin to enhance longevity and create a lasting scent trail.
4. Resist rubbing your wrists. Let the notes evolve exactly as intended.
5. Allow the scent to dry naturally, allowing the plot to twist over time.
6. Store your bottle in a cool, dry library space away from direct sunlight.`;

export const INGREDIENTS =
  "Alcohol Denat., Parfum (Fragrance), Propylene Glycol, Glycerin, Diethyl Phthalate, Isopropyl Myristate.";

export const MADE_IN_INDIA_TAGLINE = "Born in India. Crafted for Every Chapter";

function buildLegalNotice(netContentLabel: string) {
  return `NET CONTENT: ${netContentLabel}

BEST BEFORE 36 MONTHS FROM THE DATE OF MANUFACTURE

MANUFACTURED BY -
Swadesh Lifescience
Plot No 25, Shree Hari Industrial Estate, Zak-Kadadara Road, Dahegam, Dist. - Gandhinagar, Gujarat - 382305, INDIA
Mfd. Lic. No.: GC/2043

MARKETED BY:
RMP Ventures
131, Heera Nagar, DCM, Ajmer Road, Jaipur, Rajasthan - 302021, INDIA

CAUTION:
FOR EXTERNAL USE ONLY. Avoid spraying near the eyes or on irritated skin. In case of contact with eyes, rinse thoroughly with water. Do not use near fire, heat, or sources of ignition. Keep out of reach of children. FLAMMABLE.

VISUAL DISCLAIMER:
Product imagery utilizes soft color filtering to mirror the emotion of the scent. The actual fine fragrance blend is intentionally colorless and pure, ensuring the highest quality, safety, and performance on your skin without staining your clothes.

CUSTOMER CARE:
For consumer complaints or feedback, contact our Customer Care Cell at the Marketed By address.
📞 Call / WhatsApp: +91 9352682098
📧 Email: hello@thescriptandsoul.com

${MADE_IN_INDIA_TAGLINE}`;
}

export const products: Product[] = [
  {
    slug: "first-blush",
    code: "01",
    sku: "SS-FB-EX-050",
    name: "First Blush",
    mood: "Hopeful, Radiant, Optimistic",
    notes: "Excitement, Curiosity, Confidence",
    line: "Aromatic Dew & Sun-Bleached Woods",
    aura: "The First Version of You.",
    price: "₹2,000",
    mrp: 2600,
    sellingPrice: 2000,
    discountPercent: 23,
    size: "50 mL",
    concentration: "Extrait de Parfum",
    accent: "#F4F2DF",
    image: "/products/first-blush/hero.png",
    productImage: "/products/first-blush/hero.png",
    topNotes: ["Bergamot", "Mint", "Aquatic Notes"],
    heartNotes: ["Geranium", "Rosemary", "Lavender", "Green Florals"],
    baseNotes: ["Cedarwood", "Amber", "Oakmoss", "Musk"],
    emotion: "Excitement, Curiosity, Confidence",
    ritual: "Morning Ritual / The Awakening",
    persona:
      "The Dreamer – Optimistic, open-minded, and creative. They thrive on blank canvases and the quiet hope of early mornings.",
    character: `The one starting something new (Dreamer)
1. Starting college or a new job
2. Moving to a new city
3. Falling in love for the first time
4. Rediscovering self after a major life change`,
    description: `Every story begins with a single morning. First Blush captures the quiet excitement of a new beginning. It is the invisible confidence of a clean slate.

As it unfolds:

It opens like morning sunlight cutting through sheer curtains, with a bright spark of bergamot, cool mint leaves, and a crisp ocean breeze. As the day moves forward, the scent softens into clean lavender, geranium, rosemary, and green petals that bring a sporty, airy confidence. Finally, it settles into a lasting, smooth signature of dry cedarwood, soft skin-musk, amber, and warm oakmoss.

Created for curious minds, open hearts, and those who find beauty in every new beginning.`,
    audience: "Crafted for Everyone",
    vibe: "Early morning shadows on a concrete floor. Clean white linen shirts hanging by an open window. A cold ceramic mug of water. High-contrast, sharp morning sunlight. A cinematic shot of a metro train doors opening into a new station.",
    fragranceFamily: "Aromatic Dew & Sun-Bleached Woods",
    oilConcentration: "25%",
    longevity: "Long Lasting",
    netContentLabel: "50 mL (1.7fl oz.)",
  },
  {
    slug: "library-date",
    code: "02",
    sku: "SS-LD-EX-050",
    name: "Library Date",
    mood: "Comforting, Nostalgic, Intimate",
    notes: "Connection, Belonging, Warmth",
    line: "Roasted Espresso, Amber & Bound Leather",
    aura: "Like Finding Your Favorite Page in Someone Else.",
    price: "₹2,000",
    mrp: 2600,
    sellingPrice: 2000,
    discountPercent: 23,
    size: "50 mL",
    concentration: "Extrait de Parfum",
    accent: "#DDD2C8",
    image: "/products/library-date/hero.png",
    productImage: "/products/library-date/hero.png",
    topNotes: ["Bergamot", "Lavender"],
    heartNotes: ["Creamy Hazelnut", "Dark Chocolate", "Roasted Coffee"],
    baseNotes: ["Vanilla", "Leather", "Cedarwood", "Tonka Bean"],
    emotion: "Connection, Belonging, Warmth",
    ritual: "Afternoon & Evening Ritual / The Connection",
    persona:
      "Introspective, deep, and highly observant. They value meaningful energy and true emotional connection over small talk.",
    character: `The one seeking meaningful connections (Thinker)
1. The book lover who loses track of time in conversations
2. The friend who hosts intimate coffee catch-ups
3. The thoughtful partner who values emotional intimacy
4. Someone who chooses meaningful conversations over small talk
5. A person who collects memories rather than possessions`,
    description: `The chapter where strangers become familiar, and time slows down between old book spines, warm coffee cups, and lingering smiles. Library Date captures the rare comfort of being deeply understood, the warmth of shared stories, quiet conversations, and the comfort of true connection.

As it unfolds:

It begins with a quiet, inviting greeting of bright bergamot and smooth lavender to set a relaxed, calming mood. As the conversation deepens, the scent reveals a cozy heart of rich roasted coffee, creamy hazelnut, and dark chocolate. Finally, it settles into a lasting, intimate memory, wrapping sweet vanilla and tonka bean around smooth leather and cedarwood.

Created for deep feelers, quiet observers, and those who value true connection.`,
    audience: "Crafted for Everyone",
    vibe: "Deep amber lighting from a vintage desk lamp. The texture of heavy, grainy book pages. The steam rising off a dark espresso. Shared glances across a wooden table. A slow-motion shot of a vintage leather watch ticking in a quiet room.",
    fragranceFamily: "Roasted Espresso, Amber & Bound Leather",
    oilConcentration: "25%",
    longevity: "Long Lasting",
    netContentLabel: "50 mL (1.7fl oz.)",
  },
  {
    slug: "the-unwritten",
    code: "03",
    sku: "SS-UW-EX-050",
    name: "The Unwritten",
    mood: "Bold, Adventurous, Liberating",
    notes: "Courage, Empowerment, Determination",
    line: "Electric Spice & Crisp Midnight Amber",
    aura: "For the Chapters Still Unwritten and the Dreams Still Unfolding.",
    price: "₹2,000",
    mrp: 2600,
    sellingPrice: 2000,
    discountPercent: 23,
    size: "50 mL",
    concentration: "Extrait de Parfum",
    accent: "#1D1816",
    image: "/products/the-unwritten/hero.png",
    productImage: "/products/the-unwritten/hero.png",
    topNotes: ["Lemon", "Ginger", "Mint"],
    heartNotes: ["Sage", "Geranium", "Violet Leaf"],
    baseNotes: ["Cedarwood", "Amberwood", "Tonka Bean", "Soft Musk"],
    emotion: "Courage, Empowerment, Determination",
    ritual: "Night Ritual / The Midnight Horizon",
    persona:
      "Bold, independent, and ambitious. They trust their instincts and are constantly reinventing their own boundaries.",
    character: `The one creating their own path (Explorer)
1. The solo traveler
2. The founder, creator, or visionary
3. The adventurer who follows curiosity over certainty
4. Someone constantly reinventing themselves
5. Someone ready to take bold decisions`,
    description: `The story that belongs entirely to the future, where the road ahead is unfamiliar and beautifully unknown. The Unwritten celebrates the raw courage to follow your curiosity into the dark, turning a clean slate into a bold path.

As it unfolds:

It hits with a sharp, modern energy of bright ginger, lemon, juicy citrus, and a clean, white T-shirt freshness. As you step into the unknown, clear aromatic sage and crisp geranium deepen into a sophisticated, timeless core. Finally, it settles into a lasting, addictive statement as heavy cedarwood and warm amber wrap around smooth tonka bean.

Created for independent spirits, boundary breakers, and those who trust their instincts.`,
    audience: "Crafted for Everyone",
    vibe: "A24 night-cinema aesthetic. Neon light reflection on rainy streets. A blur of city car lights from a fast window. An open passport book. Walking alone into a dark, high-end gallery space with confidence.",
    fragranceFamily: "Electric Spice & Crisp Midnight Amber",
    oilConcentration: "25%",
    longevity: "Long Lasting",
    netContentLabel: "50 mL (1.7fl oz.)",
  },
  {
    slug: "discovery-set",
    code: "00",
    sku: "SS-DS01-EX-3X10",
    name: "Discovery Set",
    mood: "Hopeful, Comforting, Bold",
    notes: "Excitement, Connection, Courage",
    line: "First Blush, Library Date & The Unwritten",
    aura: "From First Blush to Unwritten — wear every chapter of your story.",
    price: "₹1,500",
    mrp: 2000,
    sellingPrice: 1500,
    discountPercent: 25,
    size: "3 x 10 mL",
    concentration: "Extrait de Parfum",
    accent: "#D06037",
    image: "/products/discovery-set/hero.png",
    productImage: "/products/discovery-set/hero.png",
    topNotes: ["First Blush", "Library Date", "The Unwritten"],
    heartNotes: ["Mood Mapping", "Layering Trials", "Signature Discovery"],
    baseNotes: ["Everyday Ritual", "Travel Format", "Gift Box"],
    emotion: "Excitement, Connection, Courage",
    ritual: "Every Ritual / The Full Story",
    persona: "One archetype from each fragrance — the Dreamer, the Thinker, and the Explorer.",
    character: `Three archetypes, one story
1. The Dreamer, chasing new beginnings
2. The Thinker, seeking real connection
3. The Explorer, writing the unwritten`,
    description: `Discover Your Next Chapter

A curated bundle of three fragrances inspired by the moments that define us. The excitement of a new beginning, the comfort of a genuine connection, and the promise of an unwritten future.

Wear them individually or let them accompany you through every chapter of your story.

Three Scents. Three Chapters. One Unforgettable Journey.`,
    audience: "Crafted for Everyone",
    vibe: "Three moodboards, one shelf: sunlit mornings, amber-lit libraries, and neon midnight streets — every scene from every chapter, side by side.",
    fragranceFamily: "First Blush, Library Date & The Unwritten",
    oilConcentration: "25%",
    longevity: "Long Lasting",
    netContentLabel: "3 x 10 mL (1.01 fl. oz.)",
  },
];

export const legalNoticeFor = (product: Product) => buildLegalNotice(product.netContentLabel);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
