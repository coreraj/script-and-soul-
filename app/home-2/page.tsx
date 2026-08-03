"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { products as chapters } from "../products";

const stories = [
  {
    title: "The Dreamer",
    match: "First Blush",
    copy: "Fresh. Luminous. Effortlessly inviting.",
    cta: "Witness The Beginning",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "The Intellectual",
    match: "Library Date",
    copy: "Warm. Deep. Comforting.",
    cta: "Revisit The Connection",
    image:
      "https://images.unsplash.com/photo-1535905748047-14b2415c77d5?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "The Explorer",
    match: "The Unwritten",
    copy: "Bold. Mysterious. Magnetic.",
    cta: "Command The Future",
    image:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?auto=format&fit=crop&w=1000&q=88",
  },
];

const craft = [
  ["25%", "8-hour storytelling", "Extrait strength with premium oils made for long city days."],
  ["IFRA", "Trust in every drop", "Skin-safe, FDA-approved, IFRA-compliant chemistry."],
  ["ALL", "Beyond labels", "Vegan, cruelty-free, genderless fragrances."],
  ["IND", "Climate-proof", "Balanced for heat, humidity, and Indian routines."],
];

const reviews = [
  ["Ava M.", "First Blush feels like a clean shirt before the world gets loud."],
  ["Sara K.", "Library Date is intimate without being heavy. My evening scent now."],
  ["Chloe R.", "The Unwritten stayed through a pitch, dinner, and the ride home."],
];

type ChapterName = (typeof chapters)[number]["name"];

const personaMatch: Record<string, ChapterName> = {
  hopeful: "First Blush",
  warm: "Library Date",
  bold: "The Unwritten",
};

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

export default function HomeTwo() {
  const [persona, setPersona] = useState("hopeful");
  const [activeChapter, setActiveChapter] = useState(0);
  const selected = useMemo(
    () => chapters.find((chapter) => chapter.name === personaMatch[persona]) ?? chapters[0],
    [persona],
  );
  const featuredChapter = chapters[activeChapter];

  return (
    <main className="next-home">
      <AnnouncementBar />
      <SiteHeader />

      <section className="video-hero" aria-label="Script and Soul cinematic fragrance hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88"
        >
          <source src="/media/hero-banner-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-wash" />
        <div className="video-hero-copy">
          <span>The Soul Section</span>
          <h1>{renderHeading("Discover Your Next Chapter.")}</h1>
          <p>Fine fragrances built around emotions, rituals, and your personal timeline.</p>
          <a href="#chapters">Explore The Collection</a>
        </div>
        <div className="hero-index">
          <span>Morning linen</span>
          <span>Turning pages</span>
          <span>Midnight drive</span>
        </div>
      </section>

      <section id="chapters" className="chapter-lab">
        <div className="next-section-title">
          <span>Shop all collection</span>
          <h2>{renderHeading("Choose Your Chapter")}</h2>
          <p>A scent for every mood, ritual, and immediate version of yourself.</p>
        </div>
        <div className="chapter-console">
          <div className="chapter-orbit" aria-label="Choose a fragrance chapter">
            {chapters.map((chapter, index) => (
              <button
                className={activeChapter === index ? "active" : ""}
                key={chapter.name}
                onClick={() => setActiveChapter(index)}
                style={{ "--chapter-accent": chapter.accent } as CSSProperties}
                type="button"
              >
                <span>{chapter.code}</span>
                <strong>{chapter.name}</strong>
              </button>
            ))}
          </div>
          <article className="chapter-feature" style={{ "--chapter-accent": featuredChapter.accent } as CSSProperties}>
            {featuredChapter.image ? (
              <img src={featuredChapter.image} alt={`${featuredChapter.name} fragrance mood`} />
            ) : null}
            <div className="chapter-feature-copy">
              <span>{featuredChapter.mood}</span>
              <h3>{renderHeading(featuredChapter.name)}</h3>
              <p>{featuredChapter.aura}</p>
              <a href={`/products/${featuredChapter.slug}`}>See the bottle</a>
            </div>
            <div className="chapter-notes">
              <span>{featuredChapter.code}</span>
              <p>{featuredChapter.line}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="products-two" className="product-showcase">
        <div className="next-section-title compact">
          <span>The four-piece edit</span>
          <h2>{renderHeading("Only what belongs on the shelf")}</h2>
          <p>Four clear choices, no clutter: three signatures and one discovery ritual.</p>
        </div>
        <div className="next-product-grid">
          {chapters.map((chapter) => (
            <a
              className="next-product-card"
              href={`/products/${chapter.slug}`}
              key={chapter.name}
              style={{ "--chapter-accent": chapter.accent } as CSSProperties}
            >
              <div className="product-image-wrap">
                {chapter.productImage ? (
                  <img src={chapter.productImage} alt={`${chapter.name} product bottle`} />
                ) : null}
                <span>{chapter.code}</span>
              </div>
              <div className="product-card-copy">
                <span>{chapter.mood}</span>
                <h3>{renderHeading(chapter.name)}</h3>
                <p>{chapter.line}</p>
                <div>
                  <strong>{chapter.price}</strong>
                  <span>View product</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="story-map" className="timeline-section">
        <div className="timeline-intro">
          <span>Same Scent. Different Story.</span>
          <h2>{renderHeading("It adapts to the life you are in today.")}</h2>
        </div>
        <div className="story-map">
          {stories.map((story) => (
            <article key={story.title}>
              <img src={story.image} alt={`${story.title} fragrance persona`} />
              <div>
                <span>{story.title}</span>
                <h3>{renderHeading(story.match)}</h3>
                <p>{story.copy}</p>
                <a href="#signature">{story.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="philosophy-band">
        <div>
          <span>Script</span>
          <p>The routines, ambition, creativity, and structures shaping your day.</p>
        </div>
        <h2>{renderHeading("Your Life Is Written In Chapters")}</h2>
        <div>
          <span>Soul</span>
          <p>The invisible emotional layer people remember after you leave.</p>
        </div>
      </section>

      <section id="signature" className="signature-finder">
        <div className="next-section-title">
          <span>Find your signature</span>
          <h2>{renderHeading("The scent that feels like you")}</h2>
        </div>
        <div className="finder-shell">
          <div className="finder-controls">
            {[
              ["hopeful", "Hopeful & curious"],
              ["warm", "Warm & connected"],
              ["bold", "Bold & visionary"],
            ].map(([key, label]) => (
              <button
                className={persona === key ? "active" : ""}
                key={key}
                onClick={() => setPersona(key)}
                type="button"
              >
                {label}
              </button>
            ))}
            <a href="#chapters">Living more than one story? Shop the Discovery Set</a>
          </div>
          <article className="finder-result">
            {selected.image ? <img src={selected.image} alt={`${selected.name} selected fragrance`} /> : null}
            <div>
              <span>Your chapter</span>
              <h3>{renderHeading(selected.name)}</h3>
              <p>{selected.line}</p>
              <a href={`/products/${selected.slug}`}>Shop This Scent</a>
            </div>
          </article>
        </div>
      </section>

      <section id="craft-two" className="craft-strip">
        {craft.map(([mark, title, body]) => (
          <article key={title}>
            <span>{mark}</span>
            <h3>{renderHeading(title)}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="ink-section">
        <div>
          <span>The Ink Behind Every Chapter</span>
          <h2>{renderHeading("Watch the community live their stories out loud.")}</h2>
        </div>
        <div className="reel-grid">
          {[
            "https://images.unsplash.com/photo-1512310604669-443f26c35f52?auto=format&fit=crop&w=700&q=88",
            "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?auto=format&fit=crop&w=700&q=88",
            "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=700&q=88",
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=88",
          ].map((image, index) => (
            <img src={image} alt={`Script and Soul community reel ${index + 1}`} key={image} />
          ))}
        </div>
      </section>

      <section className="review-ribbon">
        <div className="next-section-title">
          <span>Community reviews</span>
          <h2>{renderHeading("Stories written by our community")}</h2>
        </div>
        <div className="review-line">
          {reviews.map(([name, review]) => (
            <article key={name}>
              <span>★★★★★</span>
              <p>{review}</p>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
