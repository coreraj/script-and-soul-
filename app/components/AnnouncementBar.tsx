const announcements = [
  "Complimentary shipping over $30",
  "Free samples with every order",
  "Skin first. Makeup second.",
  "New: The Unwritten extrait",
  "Complimentary shipping over $30",
  "Free samples with every order",
  "Skin first. Makeup second.",
  "New: The Unwritten extrait",
];

export function AnnouncementBar() {
  return (
    <div className="promo">
      <div className="promo-track" aria-label="Store announcements">
        {announcements.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
