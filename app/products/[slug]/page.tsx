import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getProductBySlug, products } from "../../products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
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

function NoteColumn({
  title,
  notes,
}: {
  title: string;
  notes: string[];
}) {
  return (
    <article>
      <span>{title}</span>
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </article>
  );
}

function DetailPill({ children }: { children: ReactNode }) {
  return <span className="pdp-pill">{children}</span>;
}

const trustBadges = ["Secure checkout", "Ships in 24 hours", "Free delivery", "Easy returns"];
const reviewRows = [
  ["Aarav S.", "Good projection for the first few hours and then it sits close to the skin."],
  ["Misha R.", "Packaging felt solid. The scent is warm, clean, and easy to wear."],
  ["Priya K.", "Lasted through my workday without becoming too strong."],
];

const accordPanels = [
  ["Description", "A 50 ml extrait de parfum made for everyday wear with a warm, lasting drydown."],
  ["Fragrance Notes", "Top, heart, and base notes are listed below so you can understand how it develops."],
  ["Best For", "Daily wear, evenings, gifting, and days when you want a polished scent."],
  ["Shipping & Return", "Packed carefully and shipped from Jaipur. Returns are accepted on unused, sealed products."],
];

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Script & Soul",
    };
  }

  return {
    title: `${product.name} | Script & Soul`,
    description: `${product.concentration}. ${product.notes}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const productImages = Array.from(
    new Set(
      [product.productImage, product.image, ...product.gallery].filter(
        (image): image is string => Boolean(image),
      ),
    ),
  );
  const heroSideImages = productImages.slice(1, 3);
  const storyImages = productImages.slice(3);

  return (
    <main className="pdp-page" style={{ "--pdp-accent": product.accent } as CSSProperties}>
      <AnnouncementBar />
      <SiteHeader />

      <section className="pdp-breadcrumbs" aria-label="Breadcrumbs">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/#shop">Collection</a>
        <span>/</span>
        <strong>{product.name}</strong>
      </section>

      <section className={`pdp-hero ${productImages.length === 0 ? "pdp-hero-text-only" : ""}`}>
        <div className="pdp-media-column">
          {productImages.length > 0 ? (
            <div className="pdp-gallery">
              <div className="pdp-main-image">
                <img src={productImages[0]} alt={`${product.name} bottle`} />
                <span>{product.code}</span>
              </div>
              {heroSideImages.length > 0 ? (
                <div className="pdp-side-images">
                  {heroSideImages.map((image, index) => (
                    <img src={image} alt={`${product.name} mood ${index + 1}`} key={image} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="pdp-mini-proof">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <aside className="pdp-summary">
          <div className="pdp-title-block">
            <span className="pdp-kicker">{product.concentration}</span>
            <h1>{renderHeading(product.name)}</h1>
            <div className="pdp-rating" aria-label="Customer rating 4.8 out of 5">
              <span>★★★★★</span>
              <small>4.8 / 5 based on 25 reviews</small>
            </div>
            <p>{product.aura}</p>
          </div>

          <div className="pdp-note-row" aria-label="Primary accords">
            {product.accords.slice(0, 4).map((accord) => (
              <span key={accord}>{accord}</span>
            ))}
          </div>

          <div className="pdp-pills">
            <DetailPill>{product.concentration}</DetailPill>
            <DetailPill>{product.size}</DetailPill>
            <DetailPill>{product.longevity}</DetailPill>
          </div>

          <div className="pdp-price-row">
            <div>
              <strong>{product.price}</strong>
              <span>Inclusive of taxes. Shipping calculated at checkout.</span>
            </div>
          </div>

          <div className="pdp-cart-box">
            <span>Quantity</span>
            <div className="pdp-quantity" aria-label="Quantity selector">
              <button type="button" aria-label="Decrease quantity">-</button>
              <strong>1</strong>
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
            <a className="pdp-add" href="/#shop">Add To Cart</a>
            <a className="pdp-buy" href="/#shop">Buy It Now</a>
          </div>

          <div className="pdp-panel-list">
            {accordPanels.map(([title, body]) => (
              <details key={title} open={title === "Fragrance Notes"}>
                <summary>{title}</summary>
                <p>{body}</p>
              </details>
            ))}
          </div>
        </aside>
      </section>

      {storyImages.length > 0 ? (
        <section className="pdp-image-story" aria-label={`${product.name} product gallery`}>
          {storyImages.map((image, index) => (
            <img src={image} alt={`${product.name} product detail ${index + 1}`} key={image} />
          ))}
        </section>
      ) : null}

      <section className="pdp-accords">
        <div>
          <span className="pdp-kicker">Scent profile</span>
          <h2>{renderHeading(product.line)}</h2>
        </div>
        <div className="pdp-accord-list">
          {product.accords.map((accord) => (
            <span key={accord}>{accord}</span>
          ))}
        </div>
      </section>

      <section className="pdp-notes">
        <NoteColumn title="Top" notes={product.topNotes} />
        <NoteColumn title="Heart" notes={product.heartNotes} />
        <NoteColumn title="Base" notes={product.baseNotes} />
      </section>

      <section className="pdp-ritual">
        <div>
          <span className="pdp-kicker">How to use</span>
          <h2>{renderHeading("Wear it your way.")}</h2>
        </div>
        <p>{product.ritual}</p>
      </section>

      <section className="pdp-story-band">
        <span className="pdp-kicker">About the product</span>
        <h2>{renderHeading("Made for regular use, not just display.")}</h2>
        <p>
          Script & Soul fragrances are built for Indian routines: warm weather,
          long days, commutes, meetings, and evenings out. Use a light spray for
          work or build it up when you want a stronger trail.
        </p>
      </section>

      <section className="pdp-related">
        <div className="pdp-section-head">
          <span className="pdp-kicker">You may also like</span>
          <h2>{renderHeading("More from Script & Soul")}</h2>
        </div>
        <div className="pdp-related-grid">
          {relatedProducts.map((item) => (
            <a
              className="pdp-related-card"
              href={`/products/${item.slug}`}
              key={item.slug}
              style={{ "--pdp-card-accent": item.accent } as CSSProperties}
            >
              {item.productImage ? <img src={item.productImage} alt={`${item.name} bottle`} /> : null}
              <span>{item.mood}</span>
              <strong>{renderHeading(item.name)}</strong>
              <small>{item.price}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="pdp-reviews">
        <div className="pdp-section-head">
          <span className="pdp-kicker">Customer Reviews</span>
          <h2>{renderHeading("Customer reviews")}</h2>
        </div>
        <div className="pdp-review-summary">
          <strong>4.8</strong>
          <span>★★★★★</span>
          <p>Based on 25 reviews</p>
          <a href="/#shop">Write a review</a>
        </div>
        <div className="pdp-review-list">
          {reviewRows.map(([name, body]) => (
            <article key={name}>
              <span>★★★★★</span>
              <strong>{name}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
