const bookingFormats = [
  {
    number: "01",
    title: "Nightclubs",
    copy: "Fast, creative open-format mixing with a frontman’s command of the crowd—never hiding behind the booth.",
  },
  {
    number: "02",
    title: "Arenas + Sports",
    copy: "Stadium timing, fearless mic presence, and explosive crowd interaction built for the biggest live moments.",
  },
  {
    number: "03",
    title: "Brands + VIP",
    copy: "A polished DJ, host, and entertainer for launches, sponsor activations, and elevated guest experiences.",
  },
  {
    number: "04",
    title: "Festivals + Touring",
    copy: "A high-energy show that mixes, moves, and unites the crowd—ready for national stages and destination dates.",
  },
];

const gallery = [
  {
    src: "/images/hero-stadium.jpg",
    alt: "DJ Galiffa behind the decks at Acrisure Stadium during a Pittsburgh Steelers game",
    width: 2400,
    height: 1350,
  },
  {
    src: "/images/dancefloor.jpg",
    alt: "DJ Galiffa working the dance floor with a microphone during a black-tie event",
    width: 1800,
    height: 1198,
  },
  {
    src: "/images/crowd-selfie.jpg",
    alt: "DJ Galiffa in front of a packed crowd",
    width: 1800,
    height: 1013,
  },
  {
    src: "/images/booth-black-tie.jpg",
    alt: "DJ Galiffa performing in a tuxedo behind the DJ booth",
    width: 1198,
    height: 1800,
  },
  {
    src: "/images/celebration.jpg",
    alt: "DJ Galiffa performing alongside guests at a celebration",
    width: 1600,
    height: 1065,
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

const bookingEmail =
  "mailto:info@galiffaproductions.com?subject=DJ%20Galiffa%20Booking%20Inquiry";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://djgaliffa.com/#dj-galiffa",
      name: "Derek Galiffa",
      alternateName: "DJ Galiffa",
      url: "https://djgaliffa.com",
      image: "https://djgaliffa.com/images/portrait-red.jpg",
      description:
        "Professional open-format DJ, MC, live entertainer, and Official Pregame DJ for the Pittsburgh Steelers.",
      jobTitle: "Open-Format DJ, MC and Live Entertainer",
      email: "info@galiffaproductions.com",
      telephone: "+1-724-554-0443",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pittsburgh",
        addressRegion: "PA",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.facebook.com/DJGaliffa",
        "https://www.instagram.com/GaliffaProductions",
        "https://www.youtube.com/@GaliffaProductions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://djgaliffa.com/#website",
      url: "https://djgaliffa.com",
      name: "DJ Galiffa",
      description:
        "Official website, live resume, press kit, and nationwide booking information for DJ Galiffa.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://djgaliffa.com/#dj-galiffa",
      },
    },
    {
      "@type": "Service",
      "@id": "https://djgaliffa.com/#booking",
      name: "DJ Galiffa Live DJ Entertainment",
      serviceType: [
        "Nightclub DJ",
        "Sports and arena DJ",
        "Festival DJ",
        "Brand and VIP event entertainment",
      ],
      description:
        "Nationwide open-format DJ performances with live crowd interaction, microphone work, and full-show energy.",
      provider: {
        "@id": "https://djgaliffa.com/#dj-galiffa",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://djgaliffa.com/#contact",
    },
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
          <a href="#story">Why DJ Galiffa</a>
          <a href="#resume">Booking Fit</a>
          <a href="#gallery">Live Proof</a>
          <a href="#press">Press Kit</a>
        </nav>
        <a className="header-cta" href="#contact">
          <span className="header-cta__desktop">Check Availability</span>
          <span className="header-cta__mobile">Book Now</span>
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
            Elite open-format mixing. Fearless crowd interaction. Full-show
            energy. DJ Galiffa leaves the booth, takes the mic, and turns every
            set into a live experience.
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
          <span>ELITE OPEN-FORMAT MIXING</span>
          <i>✦</i>
          <span>CROWD HYPE</span>
          <i>✦</i>
          <span>LIVE SHOWMANSHIP</span>
          <i>✦</i>
          <span>OUT FROM BEHIND THE BOOTH</span>
          <i>✦</i>
          <span>ELITE OPEN-FORMAT MIXING</span>
          <i>✦</i>
          <span>CROWD HYPE</span>
          <i>✦</i>
          <span>LIVE SHOWMANSHIP</span>
          <i>✦</i>
          <span>OUT FROM BEHIND THE BOOTH</span>
          <i>✦</i>
        </div>
      </div>

      <section className="story section-shell" id="story">
        <div className="section-number">01 / STORY</div>
        <div className="story-copy">
          <p className="section-kicker">Mix. Hype. Entertain.</p>
          <h2>
            He doesn&apos;t hide behind the booth.
            <br />
            <span>He takes over the room.</span>
          </h2>
          <div className="story-columns">
            <p className="story-lead">
              DJ Galiffa brings the rare top 1% skill set: elite mixing,
              confident microphone work, and real crowd entertainment—all at
              the same time.
            </p>
            <div>
              <p>
                DJing since age 16, DJ Galiffa has built a full-time career on
                versatility, presence, and unforgettable energy. His
                open-format sets blend genres and decades with precision while
                keeping the room moving and the momentum climbing.
              </p>
              <p>
                Then he takes it beyond the mix. He steps out from behind the
                booth, works the microphone, gets into the crowd, and turns the
                dance floor into part of the show. From 68,000 fans at Acrisure
                Stadium to intimate VIP rooms, he performs with the audience,
                not at them.
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
          “I don&apos;t just mix the music.
          <br />
          <span>I get in the crowd and make the room erupt.”</span>
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
            The rare one-percent combination: elite mixing, commanding
            microphone work, and natural crowd connection in one nonstop show.
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

      <section className="conversion-band" aria-labelledby="booking-cta-title">
        <div>
          <p className="section-kicker">Nationwide booking inquiries</p>
          <h2 id="booking-cta-title">
            Your next crowd
            <br />
            <span>deserves a show.</span>
          </h2>
        </div>
        <div className="conversion-band__details">
          <p>
            Booking nightclubs, sports, festivals, brand activations, VIP
            events, and high-profile appearances across the country.
          </p>
          <div className="conversion-band__actions">
            <a className="button button--primary" href="#contact">
              Check availability
            </a>
            <a
              className="button button--dark"
              href="/press/dj-galiffa-press-kit.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download press kit
            </a>
          </div>
        </div>
      </section>

      <section className="steelers-feature">
        <img
          src="/images/steelers-number-one.jpg"
          alt="DJ Galiffa raising both arms in his number one Steelers jersey at Acrisure Stadium"
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
            does more than soundtrack the stadium. He reads the moment, takes
            the mic, gets out from behind the booth, and energizes more than
            68,000 fans before every home game.
          </p>
          <div className="steelers-stamp">
            <strong>OFFICIAL PREGAME DJ</strong>
            <span>PITTSBURGH STEELERS · ACRISURE STADIUM</span>
          </div>
        </div>
      </section>

      <figure className="stadium-signature">
        <img
          src="/images/stadium-signature.jpg"
          alt="DJ Galiffa raising both arms behind the decks in front of a packed crowd"
          loading="lazy"
        />
        <figcaption>
          <span>Game-day signature</span>
          <strong>
            68,000 voices.
            <br />
            <em>One pulse.</em>
          </strong>
          <small>DJ Galiffa · Acrisure Stadium</small>
        </figcaption>
      </figure>

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
          <p className="section-kicker">Behind the decks. Out in the crowd.</p>
          <h2>
            Always putting on
            <br />
            <span>a show.</span>
          </h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <figure className="gallery-item" key={image.src}>
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`View full-size photo: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
                <span aria-hidden="true">View full image ↗</span>
              </a>
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
          <p className="section-kicker">
            Elite mixing · Crowd hype · Full-show energy
          </p>
          <h2>
            Book the DJ.
            <br />
            <span>Bring the show.</span>
          </h2>
          <p className="contact-intro">
            Tell us the date, city, venue, and audience size. National bookings
            and high-profile opportunities are welcome.
          </p>
          <a
            className="contact-email"
            href={bookingEmail}
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
