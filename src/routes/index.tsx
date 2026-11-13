import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import cityImage from "@/assets/india-city-estate.jpg";
import homeImage from "@/assets/residential-property.jpg";
import officeImage from "@/assets/commercial-property.jpg";
import warehouseImage from "@/assets/industrial-property.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Realty Network India | Property, People & Opportunity" },
      { name: "description", content: "A connected real estate network for property owners, buyers, developers and professionals across India." },
      { property: "og:title", content: "Realty Network India | Property, People & Opportunity" },
      { property: "og:description", content: "A connected real estate network for property owners, buyers, developers and professionals across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const segments = [
  { number: "01", title: "Residential", detail: "Homes, apartments, villas and residential land.", image: homeImage, alt: "Sunlit contemporary apartment overlooking the city" },
  { number: "02", title: "Commercial", detail: "Workplaces, retail, offices and mixed-use spaces.", image: officeImage, alt: "Light-filled modern office with glass meeting rooms" },
  { number: "03", title: "Industrial & logistics", detail: "Factories, warehouses and business-ready land.", image: warehouseImage, alt: "Modern high-bay logistics warehouse" },
];

const opportunities = ["Buy a property", "Sell a property", "Lease a property", "Find a tenant", "Submit an opportunity", "Discuss a new project"];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailOpened, setEmailOpened] = useState(false);

  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const enquiry = String(formData.get("enquiry") ?? "");
    const segment = String(formData.get("segment") ?? "");
    const details = String(formData.get("details") ?? "");
    const subject = encodeURIComponent(`Property enquiry: ${enquiry}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nEnquiry: ${enquiry}\nProperty segment: ${segment || "Not specified"}\n\nRequirement:\n${details}`);
    window.location.href = `mailto:contact@realtynetworkindia.com?subject=${subject}&body=${body}`;
    setEmailOpened(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Realty Network India home">
          <span className="brand-name">REALTY NETWORK INDIA</span>
          <span className="brand-tagline">Connecting people. Enabling transactions.</span>
        </a>
        <Button className="mobile-menu-button" variant="outline" size="icon" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#segments" onClick={closeMenu}>Property</a>
          <a href="#opportunities" onClick={closeMenu}>Buy, sell & lease</a>
          <a href="#network" onClick={closeMenu}>Our network</a>
          <Button asChild className="nav-cta" variant="outline"><a href="#contact" onClick={closeMenu}>Start a conversation <ArrowUpRight /></a></Button>
        </nav>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, var(--hero-shade) 0%, color-mix(in oklab, var(--hero-shade) 78%, transparent) 52%, color-mix(in oklab, var(--hero-shade) 12%, transparent) 100%), url(${cityImage})` }}>
        <div className="hero-content">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> A connected real estate ecosystem</p>
          <h1>India’s property market,<br /><em>better connected.</em></h1>
          <p className="hero-copy">The right property. The right people. A more considered way to move an opportunity forward.</p>
          <div className="hero-actions">
            <Button asChild className="action-button action-gold"><a href="#segments">Explore property <ArrowRight /></a></Button>
            <Button asChild className="action-button action-light" variant="outline"><a href="#contact">Share a requirement <ArrowRight /></a></Button>
          </div>
          <div className="hero-footnote"><span className="hero-rule" /> Built on trust. Connected by opportunity.</div>
        </div>
        <div className="hero-caption"><span>REALTY NETWORK INDIA</span><span>01 — 04</span></div>
      </section>

      <section className="proof-strip" aria-label="Real estate network">
        <div><span className="strip-number">01</span><span><strong>Property</strong><small>Across the real estate spectrum</small></span></div>
        <div><span className="strip-number">02</span><span><strong>People</strong><small>Owners, buyers, builders & experts</small></span></div>
        <div><span className="strip-number">03</span><span><strong>Possibility</strong><small>Connections that move things forward</small></span></div>
      </section>

      <section className="section segments-section" id="segments">
        <div className="section-heading">
          <div><p className="eyebrow">A wider view of property</p><h2>One network.<br /><em>Many possibilities.</em></h2></div>
          <p className="section-intro">From a place to call home to the next site for business, we bring distinct property needs into one connected conversation.</p>
        </div>
        <div className="segment-grid">
          {segments.map((item) => (
            <article className="segment" key={item.number}>
              <div className="segment-image-wrap"><img src={item.image} alt={item.alt} loading="lazy" width={1200} height={960} /><span className="segment-number">{item.number}</span></div>
              <div className="segment-body"><p className="segment-kicker">Property segment</p><h3>{item.title}</h3><p>{item.detail}</p><a className="text-link" href="#contact">Explore this segment <ArrowRight /></a></div>
            </article>
          ))}
        </div>
        <div className="segment-tail"><p>Land & development · Hospitality · Specialist property</p><a href="#contact">Discuss a specific opportunity <ArrowUpRight /></a></div>
      </section>

      <section className="ecosystem" id="network">
        <div className="section ecosystem-inner">
          <div className="ecosystem-top"><div><p className="eyebrow eyebrow-light">More than property listings</p><h2>A connected<br /><em>real estate ecosystem.</em></h2></div><p>Good transactions rarely happen in isolation. They take the right mix of local knowledge, real relationships and clear intent.</p></div>
          <div className="ecosystem-grid">
            <article><span>01</span><h3>Property opportunities</h3><p>Bring a requirement or an asset to the table, across residential, commercial and specialist markets.</p></article>
            <article><span>02</span><h3>People & relationships</h3><p>Connect owners, buyers, developers, consultants and professionals around a shared purpose.</p></article>
            <article><span>03</span><h3>Thoughtful introductions</h3><p>Start with a clear conversation and explore the right next step for each opportunity.</p></article>
          </div>
          <div className="ecosystem-foot"><span>Shared capabilities. Clear expectations. Stronger connections.</span><a href="#contact">Meet the network <ArrowRight /></a></div>
        </div>
      </section>

      <section className="section opportunity-section" id="opportunities">
        <div className="opportunity-copy"><p className="eyebrow">Your requirement. The right connection.</p><h2>Property moves<br /><em>with a conversation.</em></h2><p className="opportunity-lead">Whether you’re looking to buy, sell, lease or bring a project to life, tell us what you have in mind. We’ll help you find a sensible next step.</p>
          <div className="opportunity-list">{opportunities.map((item) => <a href="#contact" key={item}><span className="list-dash">—</span>{item}<ArrowUpRight /></a>)}</div>
          <Button asChild className="action-button action-gold"><a href="#contact">Tell us what you need <ArrowRight /></a></Button>
        </div>
        <div className="opportunity-image"><img src={homeImage} alt="Contemporary home with a bright open living space" loading="lazy" width={1200} height={960} /><div className="image-note"><span>REAL ESTATE, CONNECTED</span><p>From first thought<br />to next move.</p></div></div>
      </section>

      <section className="network-section">
        <div className="section network-inner"><div className="section-heading network-heading"><div><p className="eyebrow">Grow with the network</p><h2>Different strengths.<br /><em>A shared direction.</em></h2></div><p className="section-intro">We welcome thoughtful conversations with people and organisations who see value in working together.</p></div>
          <div className="network-grid">
            <article><span className="network-label">For individuals</span><h3>Refer an opportunity</h3><p>Know someone looking to buy, sell or lease? Share an introduction for review.</p><a className="text-link" href="#contact">Share an introduction <ArrowRight /></a></article>
            <article><span className="network-label">For professionals</span><h3>Work as a consultant</h3><p>Bring your property expertise, client relationships or local market knowledge.</p><a className="text-link" href="#contact">Express your interest <ArrowRight /></a></article>
            <article><span className="network-label">For businesses</span><h3>Explore partnership</h3><p>Developers, agencies and service providers can start a conversation about working together.</p><a className="text-link" href="#contact">Discuss a partnership <ArrowRight /></a></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section contact-inner"><div className="contact-copy"><p className="eyebrow">Start a conversation</p><h2>Let’s talk about<br /><em>what’s next.</em></h2><p>Tell us a little about your property, requirement or proposed partnership. We’ll take it from there.</p>
            <div className="contact-detail"><span>EMAIL</span><a href="mailto:contact@realtynetworkindia.com">contact@realtynetworkindia.com</a></div>
            <div className="contact-detail"><span>REALTY NETWORK INDIA</span><p>Connecting people. Enabling transactions.</p></div>
          </div>
          <form className="enquiry-form" onSubmit={sendEnquiry}>
            <div className="form-grid"><label>Full name *<input name="name" autoComplete="name" required /></label><label>Email address *<input name="email" type="email" autoComplete="email" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label><label>Enquiry type *<select name="enquiry" required defaultValue=""><option value="" disabled>Select an enquiry</option><option>Buy a property</option><option>Sell a property</option><option>Lease a property</option><option>Find a tenant</option><option>New project</option><option>Network or partnership</option><option>Other</option></select></label></div>
            <label>Property segment<select name="segment" defaultValue=""><option value="">Choose a segment, if applicable</option><option>Residential</option><option>Commercial</option><option>Industrial & logistics</option><option>Land & development</option><option>Hospitality</option><option>Specialist property</option></select></label>
            <label>Tell us about your requirement *<textarea name="details" required rows={4} placeholder="Property type, location, budget or other relevant details…" /></label>
            <div className="form-bottom"><p>Submitting opens an email addressed to Realty Network India with your enquiry details.</p><Button type="submit" className="action-button action-gold form-submit">Prepare enquiry <ArrowRight /></Button></div>
            {emailOpened && <p className="form-feedback" role="status">Your email app should open with the enquiry details ready to send.</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-name">REALTY NETWORK INDIA</span><span className="brand-tagline">Connecting people. Enabling transactions.</span></a><p>A more considered way to connect people and property across India.</p></div><div className="footer-links"><span>EXPLORE</span><a href="#segments">Property segments</a><a href="#opportunities">Buy, sell & lease</a><a href="#network">Our network</a></div><div className="footer-links"><span>GET IN TOUCH</span><a href="#contact">Share an enquiry</a><a href="mailto:contact@realtynetworkindia.com">Email Realty Network India</a></div></div><div className="footer-bottom"><span>© 2026 Realty Network India</span><span>Property information is subject to verification and applicable terms.</span></div></footer>
    </main>
  );
}