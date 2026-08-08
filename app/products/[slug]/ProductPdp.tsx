"use client";

import { useMemo, useState } from "react";
import {
  HOW_TO_USE,
  INGREDIENTS,
  KEY_FEATURES,
  legalNoticeFor,
  type Product,
} from "../../products";
import { AudioPlayer } from "./AudioPlayer";

type ProductPdpProps = {
  product: Product;
  relatedProducts: Product[];
};

const offers = [
  ["FREEBIES", "FREE SAMPLERS", "Get a free sampler with your 50ml"],
  ["WELCOME", "10% OFF", "Enjoy 10% off on your first full-size fragrance"],
  ["SHIPPING", "FREE DELIVERY", "Free shipping automatically applied across India"],
];

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

function getNoteImage(note: string, fallbackImage?: string) {
  const noteImages: Record<string, string> = {
    "aged paper": "/note-icons/wood.png",
    amber: "/note-icons/spice.png",
    "amber resin": "/note-icons/spice.png",
    basil: "/note-icons/basil.avif",
    bergamot: "/note-icons/basil.avif",
    "bergamot peel": "/note-icons/basil.avif",
    "black tea": "/note-icons/basil.avif",
    cardamom: "/note-icons/salt.webp",
    cedar: "/note-icons/wood.png",
    ginger: "/note-icons/spice.png",
    "ginger flash": "/note-icons/spice.png",
    iris: "/note-icons/basil.avif",
    "iris linen": "/note-icons/basil.avif",
    pear: "/note-icons/basil.avif",
    "pear skin": "/note-icons/basil.avif",
    "pink pepper": "/note-icons/spice.png",
    saffron: "/note-icons/spice.png",
    salt: "/note-icons/salt.webp",
    "sea salt": "/note-icons/salt.webp",
    suede: "/note-icons/wood.png",
    "white tea": "/note-icons/basil.avif",
  };

  return noteImages[note.toLowerCase()] || fallbackImage || "/note-icons/citrus.png";
}

export function ProductPdp({ product, relatedProducts }: ProductPdpProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeOffer, setActiveOffer] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const notes = [...product.topNotes, ...product.heartNotes, ...product.baseNotes].slice(0, 2);
  const [message, setMessage] = useState("");

  const captionText = `${product.concentration} • ${product.oilConcentration} Oil Concentration • ${product.longevity}`;

  const timeline = [
    ["Opening", product.topNotes.join(", ")],
    ["Heart", product.heartNotes.join(", ")],
    ["Drydown", product.baseNotes.join(", ")],
  ];

  const detailPanels = [
    ["The Story", product.description],
    ["Who It's For", `${product.ritual}\n\n${product.persona}\n\n${product.character}`],
    ["The Vibe", `${product.fragranceFamily}\n\n${product.vibe}`],
    ["How to Use", HOW_TO_USE],
    ["Ingredients", INGREDIENTS],
    ["Shipping & Legal", legalNoticeFor(product)],
  ];

  const labelImage =
    product.slug === "discovery-set" ? product.productImage : `/products/labels/${product.slug}-label.png`;

  const gallery = useMemo(
    () =>
      [
        { title: "Hero", image: product.productImage || product.image || "", caption: product.mood },
        { title: "Label", image: labelImage || product.productImage || "", caption: product.concentration },
        { title: "Texture", image: product.image || product.productImage || "", caption: product.line },
        { title: "Chapter", image: product.productImage || product.image || "", caption: product.notes },
      ].filter((item) => item.image),
    [labelImage, product.image, product.productImage, product.concentration, product.line, product.mood, product.notes],
  );

  const activeGallery = gallery[activeImage] || gallery[0];

  const showcaseImages = useMemo(
    () =>
      [
        ...gallery.map((item) => item.image),
        ...relatedProducts.map((item) => item.productImage || item.image || ""),
      ].filter(Boolean),
    [gallery, relatedProducts],
  );

  const showPreviousImage = () => {
    setActiveImage((index) => (gallery.length ? (index - 1 + gallery.length) % gallery.length : 0));
  };

  const showNextImage = () => {
    setActiveImage((index) => (gallery.length ? (index + 1) % gallery.length : 0));
  };

  const addToCart = () => {
    setMessage(`${quantity} x ${product.name} added to your bag`);
  };

  return (
    <>
      <section className="pdp-ref-hero">
        <div className="pdp-ref-gallery">
          <div className="pdp-ref-main-shot">
            {activeGallery ? (
              <img
                key={activeGallery.image}
                src={activeGallery.image}
                alt={`${product.name} perfume`}
              />
            ) : null}
            <span>{product.name}</span>
            {gallery.length > 1 ? (
              <div className="pdp-ref-gallery-arrows" aria-label="Product image controls">
                <button aria-label="Previous image" onClick={showPreviousImage} type="button">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 5 8 12l7 7" />
                  </svg>
                </button>
                <button aria-label="Next image" onClick={showNextImage} type="button">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>

          <div className="pdp-ref-media-caption">
            <div className="pdp-ref-caption-marquee" aria-label={captionText}>
              <span className="pdp-ref-caption-marquee-track">
                <span>{captionText}</span>
                <span aria-hidden="true">{captionText}</span>
                <span aria-hidden="true">{captionText}</span>
                <span aria-hidden="true">{captionText}</span>
              </span>
            </div>
            <strong />
          </div>

          <div className="pdp-ref-mosaic">
            {gallery.map((item, index) => (
              <button
                className={activeImage === index ? "is-active" : ""}
                key={`${item.title}-${item.image}`}
                onClick={() => setActiveImage(index)}
                type="button"
              >
                <img src={item.image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <aside className="pdp-ref-card">
          <h1>{renderHeading(product.name)}</h1>
          <p>{product.aura}</p>

          <div className="pdp-ref-price">
            <strong>₹{product.sellingPrice.toLocaleString("en-IN")}</strong>
            <del>₹{product.mrp.toLocaleString("en-IN")}</del>
            <em>{product.discountPercent}% OFF</em>
          </div>

          <div className="pdp-ref-option-group pdp-ref-notes">
            <span>Notes</span>
            <div>
              {notes.map((note) => (
                <div className="pdp-ref-note-item" key={note}>
                  <span className="pdp-ref-note-image" aria-hidden="true">
                    <img
                      src={getNoteImage(note, product.productImage || product.image)}
                      alt=""
                    />
                  </span>
                  <span className="pdp-ref-note-label">{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pdp-ref-option-group">
            <span>Size</span>
            <div>
              <button className="is-active" type="button">
                {product.size}
              </button>
              <button type="button">Discovery Trial</button>
            </div>
          </div>

          <div className="pdp-ref-offers">
            <span>OFFERS</span>
            <div className="pdp-ref-offer-carousel">
              <div
                className="pdp-ref-offer-track"
                style={{ transform: `translateX(-${activeOffer * 40}%)` }}
              >
                {offers.map(([label, title, body]) => (
                  <article key={title}>
                    <div>
                      <strong>{label}</strong>
                      <p>{body}</p>
                    </div>
                    <b>{title}</b>
                    <footer>
                      <span>AUTO APPLIED</span>
                      <i aria-hidden="true">{"\u2713"}</i>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
            <div className="pdp-ref-offer-dots" aria-label="Offer carousel controls">
              {offers.map(([, title], index) => (
                <button
                  aria-label={`Show ${title} offer`}
                  className={activeOffer === index ? "is-active" : ""}
                  key={title}
                  onClick={() => setActiveOffer(index)}
                  type="button"
                />
              ))}
            </div>
            <article>
              <div>
                <strong>FREEBIES</strong>
                <p>Get a free sampler with your 50ml</p>
              </div>
              <b>FREE SAMPLERS</b>
              <footer>
                <span>AUTO APPLIED</span>
                <i aria-hidden="true">✓</i>
              </footer>
            </article>
          </div>

          <div className="pdp-ref-cart">
            <div className="pdp-ref-qty">
              <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} type="button">
                -
              </button>
              <strong>{quantity}</strong>
              <button onClick={() => setQuantity((value) => value + 1)} type="button">
                +
              </button>
            </div>
            <button onClick={addToCart} type="button">
              Add to Cart
            </button>
            <p aria-live="polite">{message || "In stock - delivered to your home in 2-3 days"}</p>
          </div>

          <AudioPlayer />

          <div className="pdp-ref-accordions" id="pdp-fragrance-profile">
            <details open>
              <summary>Why You&apos;ll Love It</summary>
              <ul className="pdp-ref-benefits">
                {KEY_FEATURES.map((feature) => (
                  <li key={feature.label}>
                    <span className="pdp-ref-benefit-icon" aria-hidden="true">
                      {feature.icon}
                    </span>
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </details>
            {detailPanels.map(([title, body]) => (
              <details key={title}>
                <summary>{title}</summary>
                <p>{body}</p>
              </details>
            ))}
          </div>
        </aside>
      </section>

      {product.slug !== "discovery-set" ? (
        <section className="pdp-ref-discovery-promo" aria-label="Discovery Set">
          <img
            className="pdp-ref-discovery-promo-bg"
            src="/media/discovery-set-motion-bg.webp"
            alt=""
          />
          <div className="pdp-ref-discovery-promo-overlay" />
          <div className="pdp-ref-discovery-promo-stage">
            <div className="pdp-ref-discovery-promo-marquee" aria-hidden="true">
              <div className="pdp-ref-discovery-promo-marquee-track">
                {Array.from({ length: 6 }).map((_, index) => (
                  <span key={index}>Discover Now</span>
                ))}
              </div>
            </div>
            <img
              className="pdp-ref-discovery-promo-bottle"
              src="/products/discovery-set/promo-bottle.png"
              alt="Script & Soul Discovery Set"
            />
          </div>
        </section>
      ) : null}

      <section className="pdp-ref-showcase" aria-label="Product showcase">
        <h2>{renderHeading("The Quiet Confidence of Wearing the Right Chapter.")}</h2>
        {showcaseImages.length ? (
          <div className="pdp-ref-showcase-marquee">
            <div className="pdp-ref-showcase-track">
              {[...showcaseImages, ...showcaseImages].map((image, index) => (
                <img key={`${image}-${index}`} src={image} alt="" aria-hidden={index >= showcaseImages.length} />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="pdp-ref-video-banner" aria-label="Script and Soul cinematic fragrance banner">
        <video autoPlay loop muted playsInline>
          <source src="/media/hero-banner-video.mp4" type="video/mp4" />
        </video>
        <div className="pdp-ref-video-overlay" />
        <div className="pdp-ref-video-copy">
          <h2>{renderHeading(product.aura)}</h2>
        </div>
      </section>

      <section className="pdp-ref-timeline">
        <h2>{renderHeading("A Timeline to Scent Clarity.")}</h2>
        <div className="pdp-ref-timeline-grid">
          <div className="pdp-ref-steps">
            {timeline.map(([label, body]) => (
              <article key={label}>
                <span>{label}</span>
                <h3>{body}</h3>
              </article>
            ))}
          </div>
          <div className="pdp-ref-lifestyle">
            {activeGallery ? <img src={activeGallery.image} alt={`${product.name} scent mood`} /> : null}
            <div>
              <strong>{product.concentration}</strong>
              <span>{product.mood}</span>
            </div>
          </div>
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
          {relatedProducts.map((item) => (
            <a
              className={`product-card ${item.image ? "" : "product-card-text-only"}`}
              href={`/products/${item.slug}`}
              key={item.slug}
            >
              <span className="tiny">{item.slug === "discovery-set" ? "Set" : "Extrait"}</span>
              {item.image ? <img src={item.image} alt={`${item.name} fragrance mood`} /> : null}
              <div className="product-meta">
                <h3>{renderHeading(item.name)}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.notes}</p>
              <span className="product-card-link">Shop now</span>
            </a>
          ))}
        </div>
        <div className="center">
          <a className="button ghost" href="/#shop">
            View All Products
          </a>
        </div>
      </section>

    </>
  );
}
