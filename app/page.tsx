const bookingFormats = [
  {
    number: "01",
    title: "Nightclubs",
    copy: "Open-format sets built to read the room, move fast, and keep the energy climbing.",
  },
  {
    number: "02",
    title: "Arenas + Sports",
    copy: "Game-day timing, live-moment instincts, and the presence to connect with a stadium crowd.",
  },
  {
    number: "03",
    title: "Brands + VIP",
    copy: "A polished host and music director for launches, sponsor activations, and elevated guest experiences.",
  },
  {
    number: "04",
    title: "Festivals + Touring",
    copy: "A versatile, crowd-first performer ready for national stages, destination dates, and special appearances.",
  },
];

const gallery = [
  {
    src: "/images/hero-stadium.jpg",
    alt: "DJ Galiffa behind the decks at Acrisure Stadium during a Pittsburgh Steelers game",
    className: "gallery-item gallery-item--wide",
  },
  {
    src: "/images/dancefloor.jpg",
    alt: "DJ Galiffa working the dance floor with a microphone during a black-tie event",
    className: "gallery-item gallery-item--tall",
  },
  {
    src: "/images/crowd-selfie.jpg",
    alt: "DJ Galiffa in front of a packed crowd",
    className: "gallery-item",
  },
  {
    src: "/images/booth-black-tie.jpg",
    alt: "DJ Galiffa performing in a tuxedo behind the DJ booth",
    className: "gallery-item",
  },
  {
    src: "/images/celebration.jpg",
    alt: "DJ Galiffa performing alongside guests at a celebration",
    className: "gallery-item gallery-item--wide",
  },
];

const career = [
  {
    year: "16",
    label: "The first set",
    copy: "Derek started DJing as a teenager and never stopped building the craft.",
  },
  {
    year: "25+",
    label: "Years in motion",
    copy: "A full-time career shaped by thousands of events and every kind of crowd.",
  },
  {
    year: "68K",
    label: "Stadium energy",
    copy: "The Official Pregame DJ for the Pittsburgh Steelers, live inside Acrisure Stadium.",
  },
  {
    year: "NOW",
    label: "The national chapter",
    copy: "Available for nightclubs, arenas, festivals, brand events, and high-profile appearances.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Derek Galiffa",
  alternateName: "DJ Galiffa",
  url: "https://djgaliffa.com",
  image: "https://djgaliffa.com/images/portrait-red.jpg",
  jobTitle: "Professional DJ and Live Entertainer",
  sameAs: [
    "https://www.facebook.com/DJGaliffa",
    "https://www.instagram.com/GaliffaProductions",
    "https://www.youtube.com/@GaliffaProductions",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="DJ Galiffa home">
          <span className="brand-kicker">DJ</span>
          <span>GALIFFA</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#resume">Resume</a>
          <a href="#gallery">Gallery</a>
          <a href="#press">Press</a>
        </nav>
        <a className="header-cta" href="#contact">
          Book DJ Galiffa
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero-stadium.jpg"
          alt=""
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">
            Official Pregame DJ <span>Pittsburgh Steelers</span>
          </p>
          <h1 id="hero-title">
            Built for
            <br />
            the <em>big stage.</em>
          </h1>
          <p className="hero-deck">
            High-impact open-format DJ. Live entertainer. Crowd catalyst.
            Stadium-proven and ready for rooms across the country.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              Bring the energy
            </a>
            <a
              className="button button--ghost"
              href="/press/dj-galiffa-press-kit.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View press kit
            </a>
          </div>
        </div>
        <div className="hero-rail" aria-label="Career highlights">
          <div>
            <strong>25+</strong>
            <span>Years behind the decks</span>
          </div>
          <div>
            <strong>68K</strong>
            <span>Fans on game day</span>
          </div>
          <div>
            <strong>1,000s</strong>
            <span>Events performed</span>
          </div>
          <div>
            <strong>USA</strong>
            <span>Available nationwide</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>OPEN FORMAT</span>
          <i>✦</i>
          <span>STADIUM ENERGY</span>
          <i>✦</i>
          <span>NATIONAL BOOKINGS</span>
          <i>✦</i>
          <span>NIGHTCLUBS</span>
          <i>✦</i>
          <span>LIVE ENTERTAINMENT</span>
          <i>✦</i>
          <span>OPEN FORMAT</span>
          <i>✦</i>
          <span>STADIUM ENERGY</span>
          <i>✦</i>
        </div>
      </div>

      <section className="story section-shell" id="story">
        <div className="section-number">01 / STORY</div>
        <div className="story-copy">
          <p className="section-kicker">More than a DJ</p>
          <h2>
            He doesn&apos;t just play the room.
            <br />
            <span>He becomes the moment.</span>
          </h2>
          <div className="story-columns">
            <p className="story-lead">
              Derek Galiffa has spent a lifetime learning what makes a crowd
              move—and how to turn that instinct into a show.
            </p>
            <div>
              <p>
                DJing since age 16, DJ Galiffa has built a full-time career on
                versatility, presence, and unforgettable energy. He is an
                open-format performer who can blend genres and decades without
                losing the pulse of the room.
              </p>
              <p>
                His signature is connection: stepping beyond the booth,
                working the microphone, and meeting the crowd where they are.
                From 68,000 fans at Acrisure Stadium to intimate VIP floors,
                every set is shaped in real time.
              </p>
            </div>
          </div>
        </div>
        <figure className="story-portrait">
          <img
            src="/images/portrait-red.jpg"
            alt="Studio portrait of DJ Galiffa"
            loading="lazy"
          />
          <figcaption>
            <span>Derek Galiffa</span>
            <span>Pittsburgh, PA · Nationwide</span>
          </figcaption>
        </figure>
      </section>

      <section className="quote-break" aria-label="Artist statement">
        <img
          src="/images/stadium-panorama.jpg"
          alt=""
          loading="lazy"
          className="quote-break-image"
        />
        <blockquote>
          “The playlist is only the beginning.
          <br />
          <span>The job is to make people feel part of something.”</span>
        </blockquote>
      </section>

      <section className="formats section-shell" id="resume">
        <div className="section-number">02 / BOOKING FIT</div>
        <div className="section-heading">
          <p className="section-kicker">Next room. Same command.</p>
          <h2>
            One artist.
            <br />
            <span>Every scale.</span>
          </h2>
          <p>
            DJ Galiffa brings the polish of a career professional and the live
            instincts of a true entertainer.
          </p>
        </div>
        <div className="format-list">
          {bookingFormats.map((format) => (
            <article className="format-card" key={format.number}>
              <span>{format.number}</span>
              <h3>{format.title}</h3>
              <p>{format.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steelers-feature">
        <img
          src="/images/steelers-crew.jpg"
          alt="DJ Galiffa with the Pittsburgh Steelers game-day entertainment crew"
          loading="lazy"
        />
        <div className="steelers-copy">
          <p className="section-kicker">Stadium proven</p>
          <h2>
            Game day is
            <br />
            <span>showtime.</span>
          </h2>
          <p>
            As the Official Pregame DJ for the Pittsburgh Steelers, DJ Galiffa
            sets the tone inside the bowl before every home game—reading the
            moment, building anticipation, and energizing more than 68,000 fans.
          </p>
          <div className="steelers-stamp">
            <strong>OFFICIAL PREGAME DJ</strong>
            <span>PITTSBURGH STEELERS · ACRISURE STADIUM</span>
          </div>
        </div>
      </section>

      <section className="career section-shell">
        <div className="section-number">03 / LIVE RESUME</div>
        <div className="section-heading section-heading--compact">
          <p className="section-kicker">Built over decades</p>
          <h2>
            The career is
            <br />
            <span>still climbing.</span>
          </h2>
        </div>
        <ol className="career-list">
          {career.map((item) => (
            <li key={item.year}>
              <strong>{item.year}</strong>
              <div>
                <h3>{item.label}</h3>
                <p>{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="gallery section-shell" id="gallery">
        <div className="section-number">04 / GALLERY</div>
        <div className="section-heading section-heading--gallery">
          <p className="section-kicker">In the booth. In the bowl.</p>
          <h2>
            Always in
            <br />
            <span>the moment.</span>
          </h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <figure className={image.className} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="press section-shell" id="press">
        <div className="section-number">05 / PRESS</div>
        <div className="press-copy">
          <p className="section-kicker">For talent buyers + media</p>
          <h2>
            The proof is
            <br />
            <span>in the work.</span>
          </h2>
          <p>
            Download DJ Galiffa&apos;s background, performance story, event
            capabilities, and select photography.
          </p>
        </div>
        <div className="press-downloads">
          <a
            href="/press/dj-galiffa-press-kit.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>PDF · ARTIST OVERVIEW</small>
              DJ Galiffa Press Kit
            </span>
            <b aria-hidden="true">↗</b>
          </a>
          <a
            href="/press/dj-galiffa-nfl-draft-deck.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>PDF · EVENT CAPABILITIES</small>
              NFL Draft Deck
            </span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <img
          src="/images/black-tie.jpg"
          alt="DJ Galiffa in black tie"
          loading="lazy"
        />
        <div className="contact-shade" />
        <div className="contact-copy">
          <p className="section-kicker">Nightclubs · Arenas · Brands · VIP</p>
          <h2>
            Let&apos;s make
            <br />
            <span>the room move.</span>
          </h2>
          <a
            className="contact-email"
            href="mailto:info@galiffaproductions.com?subject=DJ%20Galiffa%20Booking%20Inquiry"
          >
            info@galiffaproductions.com
          </a>
          <a className="contact-phone" href="tel:+17245540443">
            (724) 554-0443
          </a>
          <div className="social-links" aria-label="Social media">
            <a
              href="https://www.instagram.com/GaliffaProductions"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/DJGaliffa"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@GaliffaProductions"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#top">
          <span className="brand-kicker">DJ</span>
          <span>GALIFFA</span>
        </a>
        <p>Professional DJ · Live Entertainer · Pittsburgh, PA</p>
        <p>© {new Date().getFullYear()} DJ Galiffa. All rights reserved.</p>
      </footer>
    </main>
  );
}
