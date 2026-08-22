import React from "react";

import {
  ArrowUpRight,
  Dumbbell,
  Waves,
  Trophy,
  HeartPulse,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Elite Training",
    text: "High-performance spaces built for serious training and measurable progress.",
    icon: Dumbbell,

    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90",
  },

  {
    number: "02",
    title: "Aquatic Recovery",
    text: "Premium aquatic environments designed to restore movement and accelerate recovery.",
    icon: Waves,

    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=90",
  },

  {
    number: "03",
    title: "Performance",
    text: "A complete environment where athletes can push beyond their limits.",
    icon: Trophy,

    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=90",
  },

  {
    number: "04",
    title: "Wellness",
    text: "Recovery and wellness experiences designed to keep body and mind balanced.",
    icon: HeartPulse,

    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=90",
  },
];

function HomeSections() {
  return (
    <>
      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="about"
        className="intro-section"
      >
        <div className="container">

          <div className="intro-grid">

            <div>
              <span className="section-label">
                THE AURELIS PHILOSOPHY
              </span>
            </div>

            <div>

              <h2 className="intro-title">
                More than a resort.
                <br />

                <span className="gradient-text">
                  A state of mind.
                </span>
              </h2>

              <p className="intro-text">
                AURELIS is built around one
                simple idea: your environment
                should inspire your performance.
              </p>

              <a
                href="#facilities"
                className="text-link"
              >
                Explore our philosophy

                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section
        id="facilities"
        className="facilities-section"
      >

        <div className="container">

          <div className="section-heading-row">

            <div>

              <span className="section-label">
                THE AURELIS ECOSYSTEM
              </span>

              <h2>
                Designed for{" "}

                <span className="gradient-text">
                  performance.
                </span>
              </h2>

            </div>

            <p>
              Every detail has a purpose.
              Every space has a role.
            </p>

          </div>


          {/* =================================================
              FACILITY CARDS
          ================================================= */}

          <div className="facility-grid">

            {facilities.map(
              ({
                number,
                title,
                text,
                icon: Icon,
                image,
              }) => (

                <article
                  className="facility-card"
                  key={number}
                >

                  {/* IMAGE */}

                  <div className="facility-card__image">

                    <img
                      src={image}
                      alt={`${title} at AURELIS Sports Resort`}
                      loading="lazy"
                    />

                    <div className="facility-card__image-overlay" />

                    <span className="facility-card__number">
                      {number}
                    </span>

                    <div className="facility-card__icon">

                      <Icon size={20} />

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="facility-card__content">

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {text}
                    </p>

                    <div className="facility-card__bottom">

                      <span>
                        EXPLORE FACILITY
                      </span>

                      <ArrowUpRight size={17} />

                    </div>

                  </div>


                  {/* ACCENT LINE */}

                  <span className="facility-card__line" />

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section className="statement-section">

        <div className="container">

          <div className="statement">

            <span className="section-label">
              YOUR NEXT LEVEL
            </span>

            <h2>
              Don't train for
              <br />

              <span className="gradient-text">
                ordinary.
              </span>
            </h2>

            <a
              href="/booking"
              className="button button--lime"
            >
              Start Your Experience

              <ArrowUpRight
                size={18}
              />

            </a>

          </div>

        </div>

      </section>
    </>
  );
}

export default HomeSections;