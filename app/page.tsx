"use client";

import { useMemo, useState } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { products } from "./products";

const stories = [
  {
    title: "The Dreamer",
    match: "Matched with First Blush",
    body: "Fresh. Luminous. Effortlessly inviting.",
    link: "Witness The Beginning",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Intellectual",
    match: "Matched with Library Date",
    body: "Warm. Deep. Comforting.",
    link: "Revisit The Connection",
    image:
      "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Explorer",
    match: "Matched with The Unwritten",
    body: "Bold. Mysterious. Magnetic.",
    link: "Command The Future",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85",
  },
];

const craft = [
  ["25%", "8-Hour Storytelling", "Rich Extrait de Parfum with premium oils made to stay through the daily hustle."],
  ["IFRA", "Trust in Every Drop", "FDA-approved, skin-safe, and IFRA-compliant chemistry that respects your body."],
  ["ALL", "Beyond Labels", "Cruelty-free, vegan, genderless blends for anyone who loves a great story."],
  ["IND", "Climate-Proof Scents", "Balanced for Indian heat, humidity, long commutes, and active city days."],
];

const reviews = [
  ["Ava M.", "First Blush felt like a fresh white shirt on a very good morning. Bright, clean, and still intimate."],
  ["Sara K.", "Library Date is cozy without being heavy. It feels like old pages, amber, and a warm table lamp."],
  ["Chloe R.", "The Unwritten is sharp and magnetic. I wore it to a pitch and it stayed with me all night."],
];

const personaMap = {
  hopeful: products[0],
  warm: products[1],
  bold: products[2],
};

const chapterLabels = [
  {
    name: "First Blush label",
    image: "/products/labels/first-blush-label.png",
  },
  {
    name: "Library Date label",
    image: "/products/labels/library-date-label.png",
  },
  {
    name: "The Unwritten label",
    image: "/products/labels/the-unwritten-label.png",
  },
];

type PersonaKey = keyof typeof personaMap;

function renderHeading(text: string) {
  const [firstWord, ...restWords] = text.split(" ");

  return (
    <>
      <span className="heading-lead">{firstWord}</span>
      {restWords.length > 0 ? (
        <>
          {" "}
          <span className="heading-script">{restWords.join(" ")}</span>
        </>
      ) : null}
    </>
  );
}

export default function Home() {
  const [persona, setPersona] = useState<PersonaKey>("hopeful");
  const selected = useMemo(() => personaMap[persona], [persona]);

  return (
    <main>
      <AnnouncementBar />
      <SiteHeader transparent />

      <section className="classic-video-banner" aria-label="Script and Soul cinematic fragrance banner">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=85"
        >
          <source src="/media/hero-banner-video.mp4" type="video/mp4" />
        </video>
        <div className="classic-video-overlay" />
        <div className="classic-video-copy">
          <span className="pill light">The Soul Section</span>
          <h1>
            <span className="heading-lead">Discover</span>{" "}
            <span className="heading-script">Your Next Chapter.</span>
          </h1>
          <p>
            A curated collection of fine fragrances built around emotions, rituals, and your
            personal life timeline.
          </p>
          <a className="button light" href="#shop">
            Explore The Collection
          </a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        {[
          "mood.",
          "identity.",
          "nostalgia.",
          "romance.",
          "chapters.",
          "mood.",
          "identity.",
          "nostalgia.",
          "romance.",
          "chapters.",
        ].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>

      <section className="chapter-peek" aria-label="Script and Soul fragrance chapters">
        <span className="chapter-peek-bg" aria-hidden="true">
          chapter
        </span>
        <div className="chapter-peek-intro">
          <span>Three signatures</span>
          <p>Labels for the chapters your day is already writing.</p>
        </div>
        <div className="chapter-peek-cards">
          {chapterLabels.map((label, index) => (
            <article
              className={`chapter-peek-card chapter-peek-card-${index + 1}`}
              key={label.name}
            >
              <img src={label.image} alt={label.name} />
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Shop all collection</span>
            <h2>
              <span className="heading-lead">Choose</span>{" "}
              <span className="heading-script">Your Chapter.</span>
            </h2>
          </div>
          <p>A fine fragrance for every mood, ritual, and immediate version of yourself.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <a
              className={`product-card ${product.image ? "" : "product-card-text-only"}`}
              href={`/products/${product.slug}`}
              key={product.name}
            >
              <span className="tiny">{index === 3 ? "Set" : "Extrait"}</span>
              {product.image ? <img src={product.image} alt={`${product.name} fragrance mood`} /> : null}
              <div className="product-meta">
                <h3>{renderHeading(product.name)}</h3>
                <span>{product.price}</span>
              </div>
              <p>{product.notes}</p>
              <span className="product-card-link">Shop now</span>
            </a>
          ))}
        </div>
        <div className="center">
          <a className="button ghost" href="#shop">
            View All Products
          </a>
        </div>
      </section>

      <section className="hero-grid">
        <article className="hero-main panel image-panel">
          <img
            src="/media/next-chapter-card.webp"
            alt="Gloved hand holding an unlock the next chapter card"
          />
          <div className="grain" />
          <div className="hero-copy">
            <span className="pill light">The Soul Section</span>
            <h1>
              <span className="heading-lead">Discover</span>{" "}
              <span className="heading-script">Your Next Chapter.</span>
            </h1>
            <p>
              A curated collection of fine fragrances built around emotions, rituals, and your
              personal life timeline.
            </p>
            <a className="button light" href="#shop">
              Explore The Collection
            </a>
          </div>
          <img className="seal" src="/brand/script-soul-seal.svg" alt="Script & Soul seal" />
        </article>

        <article className="panel intro-card">
          <span className="eyebrow">New ritual</span>
          <h2>
            <span className="heading-lead">The</span>{" "}
            <span className="heading-script">beauty of a scent is the story it catches.</span>
          </h2>
          <p>Morning linen, turning pages, and a midnight city drive bottled as chapters.</p>
        </article>

        <article className="panel brand-card">
          <img src="/brand/script-soul-seal-charcoal.svg" alt="Script & Soul emblem" />
          <strong>Script & Soul.</strong>
          <span className="brand-meta brand-meta-left">Est. 2026</span>
          <span className="brand-meta brand-meta-right">India</span>
        </article>
      </section>

      <section id="story" className="manifesto panel">
        <div className="manifesto-side">
          <span className="pill">Our manifesto</span>
          <span className="quote-mark" aria-hidden="true">”</span>
        </div>
        <div className="manifesto-copy">
          <blockquote>
            <span className="heading-lead">Before</span>{" "}
            <span className="heading-script">
              we launched Script & Soul, we started as Into The Soul. A fragrance community
              devoted to sharing real emotions with real people, about really memorable scents.
            </span>
          </blockquote>
          <p>It should not be built in a boardroom - it should be built by you.</p>
        </div>
        <div className="manifesto-thumbs">
          <img src="/products/first-blush/hero.png" alt="First Blush fragrance mood" />
          <img src="/products/library-date/hero.png" alt="Library Date fragrance mood" />
        </div>
      </section>

      <section className="split-band">
        <article className="image-panel panel">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85" alt="Perfume ritual on linen" />
          <span className="pill light">Behind the routine</span>
        </article>
        <article className="panel feature-red">
          <span className="eyebrow">The edit</span>
          <h2>
            <span className="heading-lead">Same</span>{" "}
            <span className="heading-script">Scent. Different Story.</span>
          </h2>
          <p>
            A fragrance does not define who you are. It adapts to your current timeline, whether
            you are creating, connecting, or leading.
          </p>
          <a className="button light" href="#persona">
            Choose The Edit
          </a>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Three lives</span>
            <h2>
              <span className="heading-lead">One</span>{" "}
              <span className="heading-script">scent, three timelines.</span>
            </h2>
          </div>
          <p>Interactive mappings for the immediate version of yourself.</p>
        </div>
        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <img src={story.image} alt={`${story.title} mood`} />
              <div>
                <span>{story.title}</span>
                <h3>{renderHeading(story.match)}</h3>
                <p>{story.body}</p>
                <a href="#">{story.link} -&gt;</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="persona" className="persona section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Find your signature</span>
            <h2>
              <span className="heading-lead">Find</span>{" "}
              <span className="heading-script">The Scent That Feels Like You.</span>
            </h2>
          </div>
          <p>Living more than one story at once? Shop the Prologue Discovery Set.</p>
        </div>
        <div className="persona-wrap">
          <div className="persona-options">
            <button className={persona === "hopeful" ? "active" : ""} onClick={() => setPersona("hopeful")}>
              <span>01</span> Hopeful & Curious
            </button>
            <button className={persona === "warm" ? "active" : ""} onClick={() => setPersona("warm")}>
              <span>02</span> Warm & Connected
            </button>
            <button className={persona === "bold" ? "active" : ""} onClick={() => setPersona("bold")}>
              <span>03</span> Bold & Visionary
            </button>
          </div>
          <article className="persona-result panel">
            {selected.image ? <img src={selected.image} alt={`${selected.name} perfume recommendation`} /> : null}
            <div>
              <span className="eyebrow">Your chapter</span>
              <h3>
                <span className="heading-lead">{selected.name.split(" ")[0]}</span>{" "}
                <span className="heading-script">{selected.name.split(" ").slice(1).join(" ")}</span>
              </h3>
              <p>{selected.notes}</p>
              <a className="button ghost" href={`/products/${selected.slug}`}>
                Shop This Scent
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="craft" className="craft section">
        <div className="section-head">
          <div>
            <span className="eyebrow">The clean script</span>
            <h2>
              <span className="heading-lead">The</span>{" "}
              <span className="heading-script">Craft Behind the Chapters.</span>
            </h2>
          </div>
          <p>Conscious, high-performance formulations designed to linger.</p>
        </div>
        <div className="craft-grid">
          {craft.map(([icon, title, body]) => (
            <article className="craft-card" key={title}>
              <span>{icon}</span>
              <h3>{renderHeading(title)}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Loved by you</span>
            <h2>
              <span className="heading-lead">Stories</span>{" "}
              <span className="heading-script">Written By Our Community.</span>
            </h2>
          </div>
          <p className="rating">★★★★★ 4.9 average</p>
        </div>
        <div className="review-grid">
          {reviews.map(([name, copy]) => (
            <article className="review-card" key={name}>
              <span>★★★★★</span>
              <p>{copy}</p>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="social section">
        <div className="social-head">
          <span>@scriptsoul</span>
          <span>Follow @scriptsoul</span>
        </div>
        <div className="social-grid">
          {[
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=85",
            "https://images.unsplash.com/photo-1512310604669-443f26c35f52?auto=format&fit=crop&w=700&q=85",
            "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=700&q=85",
            "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?auto=format&fit=crop&w=700&q=85",
          ].map((image, index) => (
            <img key={image} src={image} alt={`Script & Soul community reel ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="fragrance-band">
        <article className="panel scent-copy">
          <span className="pill">Fragrance</span>
          <h2>
            <span className="heading-lead">Script</span>{" "}
            <span className="heading-script">& Soul, You.</span>
          </h2>
          <p>
            We make products rooted in real life to enable self-discovery through beauty, memory,
            and invisible main character energy.
          </p>
          <a className="button ghost" href="#persona">
            Discover The Scent
          </a>
        </article>
        <article className="panel lip-image">
          <img src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=85" alt="Close fragrance mood portrait" />
          <span className="pill light">Signature scent</span>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
