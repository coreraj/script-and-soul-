"use client";

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

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <h2>{renderHeading("Script & Soul.")}</h2>
        <p>Write The Next Chapter With Us</p>
        <form>
          <input aria-label="Email address" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-links">
        <div>
          <strong>Shop</strong>
          <a href="/#shop">Collection</a>
          <a href="/products/discovery-set">Discovery Set</a>
          <a href="/#shop">Gift Card</a>
        </div>
        <div>
          <strong>Company</strong>
          <a href="/#story">About</a>
          <a href="/#craft">Careers</a>
          <a href="/#craft">Contact</a>
        </div>
        <div>
          <strong>Help</strong>
          <a href="/#craft">Shipping</a>
          <a href="/#craft">Returns</a>
          <a href="/#craft">Privacy</a>
        </div>
        <div>
          <strong>Visit</strong>
          <span>RMP Ventures</span>
          <span>131, Heera Nagar, DCM</span>
          <span>Ajmer Road, Jaipur 302021</span>
        </div>
      </div>
    </footer>
  );
}
