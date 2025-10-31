import Link from "next/link";

const productCollections = [
  {
    id: "smart-home",
    category: "Smart Home",
    title: "Echo Hub Starter Bundle",
    description:
      "Bring your smart home together with a central dashboard, adaptive lighting, and room-aware automations.",
    price: "$329",
    rating: "4.8",
    reviews: "2.1k reviews",
    url: "https://www.amazon.com/dp/B0CMTZ1JPH?tag=primepicks-20"
  },
  {
    id: "kitchen-tech",
    category: "Kitchen Tech",
    title: "Ninja Woodfire Outdoor Grill",
    description:
      "Smoke, air-fry, and grill with real wood pellets in a compact countertop design built for balconies and patios.",
    price: "$399",
    rating: "4.7",
    reviews: "5.8k reviews",
    url: "https://www.amazon.com/dp/B0BMZ26Z6H?tag=primepicks-20"
  },
  {
    id: "wellness",
    category: "Wellness",
    title: "TheraGun Sense Percussive Massager",
    description:
      "Pair mindful breathing with guided recovery programs tailored to your body and stress levels.",
    price: "$299",
    rating: "4.6",
    reviews: "1.4k reviews",
    url: "https://www.amazon.com/dp/B0CN6P5T7K?tag=primepicks-20"
  },
  {
    id: "desk-upgrades",
    category: "Desk Upgrades",
    title: "Logitech MX Keys S Combo",
    description:
      "Quiet productivity with smart backlighting, ergonomic palm support, and flow control across devices.",
    price: "$199",
    rating: "4.8",
    reviews: "12.9k reviews",
    url: "https://www.amazon.com/dp/B0C6GH6YDP?tag=primepicks-20"
  },
  {
    id: "content-creation",
    category: "Content Creation",
    title: "Elgato Key Light Air",
    description:
      "Dial-in pro studio lighting from your phone with adjustable color temperature and edge-lit diffusion.",
    price: "$129",
    rating: "4.7",
    reviews: "6.2k reviews",
    url: "https://www.amazon.com/dp/B09N6M1F66?tag=primepicks-20"
  },
  {
    id: "fitness",
    category: "Fitness",
    title: "Hydrow Wave Rower",
    description:
      "Compact, connected rowing sessions featuring scenic routes, progressive programs, and live metrics.",
    price: "$1,495",
    rating: "4.9",
    reviews: "980 reviews",
    url: "https://www.amazon.com/dp/B0BDJGQF6V?tag=primepicks-20"
  }
];

const categories = [
  {
    title: "Daily Essentials",
    description:
      "Keep your routines streamlined with productivity gadgets and kitchen upgrades that save time every day."
  },
  {
    title: "Creator Studio",
    description:
      "Capture crisp content with lighting, audio, and rigging tools dialed-in for solo creators and streamers."
  },
  {
    title: "Home Sanctuary",
    description:
      "Design a calm, intentional space with smart aromatherapy, adaptive lighting, and restorative decor."
  },
  {
    title: "Outdoor Adventures",
    description:
      "Fuel every camping, hiking, or overlanding trip with compact cooking gear and rugged power solutions."
  }
];

const perks = [
  {
    heading: "Curated & Tested",
    body: "Every feature showcases products we have researched for build quality, verified reviews, and long-term value."
  },
  {
    heading: "Real-Time Deals",
    body: "Seasonal lightning deals and limited drops updated twice weekly so you never miss a savings window."
  },
  {
    heading: "Affiliate Transparency",
    body: "We may earn a commission at no extra cost to you. It helps us discover and test even more standout finds."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="section-title">Prime Picks Spotlight</div>
        <h1 className="hero-heading">
          Curated Amazon finds built to elevate your <span>daily rituals</span>
        </h1>
        <p className="hero-subheading">
          Explore hand-picked tech, home, and wellness upgrades with standout reviews, compelling stories, and instant access to Prime shipping. All links take you straight to Amazon with the best available pricing.
        </p>
        <div className="hero-cta">
          <Link className="btn-primary" href="https://www.amazon.com/?tag=primepicks-20" target="_blank" rel="noopener noreferrer">
            Shop Featured Deals
          </Link>
          <Link className="btn-secondary" href="#collections">
            Browse Collections
          </Link>
        </div>
        <div className="hero-badges">
          <div className="badge">
            <span className="badge-dot" />
            Updated this week
          </div>
          <div className="badge">
            <span className="badge-dot" />
            Prime eligible picks
          </div>
          <div className="badge">
            <span className="badge-dot" />
            Free returns on most items
          </div>
        </div>
      </section>

      <section id="collections">
        <div className="section-title">Featured Collections</div>
        <div className="product-grid">
          {productCollections.map((product) => (
            <article className="product-card" key={product.id}>
              <Link
                className="product-link"
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${product.title} on Amazon`}
              />
              <div className="product-category">
                <span>●</span>
                {product.category}
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-meta">
                <div>
                  <span className="rating-stars">★★★★★</span>
                  <div>{product.reviews}</div>
                </div>
                <strong>{product.price}</strong>
              </div>
              <div className="product-footer">
                <span>Ships with Prime</span>
                <span>Amazon Affiliate Link</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-title">Shop By Mood</div>
        <div className="categories">
          {categories.map((category) => (
            <div className="category-card" key={category.title}>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <Link
                className="btn-secondary"
                href="https://www.amazon.com/?tag=primepicks-20"
                target="_blank"
                rel="noopener noreferrer"
              >
                View matching picks
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-title">Why Prime Picks</div>
        <div className="perks">
          {perks.map((perk) => (
            <div className="perk-card" key={perk.heading}>
              <h3 className="perk-title">{perk.heading}</h3>
              <p className="perk-description">{perk.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="cta-banner">
          <h2>Get first dibs on limited Amazon drops</h2>
          <p>
            Subscribe to our insiders list and we will alert you when lightning deals hit the products you care about most. No spam—just curated value.
          </p>
          <form
            action="https://www.amazon.com/?tag=primepicks-20"
            method="get"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary" type="submit">
              Unlock insider deals
            </button>
          </form>
        </div>
      </section>

      <footer>
        Prime Picks participates in the Amazon Services LLC Associates Program. Purchases made through our links may earn a commission at no extra cost to you.
        <div className="footer-links">
          <Link href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088" target="_blank" rel="noopener noreferrer">
            Amazon Terms
          </Link>
          <Link href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          <Link href="mailto:hello@primepicks.co">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
