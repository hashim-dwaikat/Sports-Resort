import React from "react";

import {
  ArrowUpRight,
  Dumbbell,
  Waves,
  Activity,
  Sparkles,
  Bike,
  Trophy,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Performance Lab",
    category: "TRAINING",
    description:
      "A high-performance training environment engineered for strength, conditioning, mobility, and measurable progress.",
    icon: Activity,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "02",
    title: "Elite Gym",
    category: "STRENGTH",
    description:
      "Premium equipment and intelligently designed training zones for athletes and ambitious individuals.",
    icon: Dumbbell,
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "03",
    title: "Aqua Recovery",
    category: "RECOVERY",
    description:
      "A refined aquatic environment created to support recovery, movement, and low-impact training.",
    icon: Waves,
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "04",
    title: "Cycling Studio",
    category: "ENDURANCE",
    description:
      "Immersive cycling sessions built around endurance, rhythm, and performance.",
    icon: Bike,
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "05",
    title: "Recovery Zone",
    category: "WELLNESS",
    description:
      "A dedicated space for recovery rituals designed to help you perform better and recover smarter.",
    icon: Sparkles,
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "06",
    title: "Athlete Arena",
    category: "SPORT",
    description:
      "A versatile performance arena for sports, competition, movement, and group experiences.",
    icon: Trophy,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
  },
];

function Facilities() {
  return (
    <main className="facilities-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="facilities-hero">

        <div className="facilities-hero__glow" />

        <div className="container">

          <div className="facilities-hero__content">

            <span className="section-label">
              THE AURELIS ECOSYSTEM
            </span>

            <h1>
              Spaces built
              <br />

              <span className="gradient-text">
                for more.
              </span>
            </h1>

            <p>
              Every facility at AURELIS has been
              designed around one purpose:
              creating an environment where
              performance becomes part of your
              lifestyle.
            </p>

          </div>

          <div className="facilities-hero__meta">

            <span>
              06 SIGNATURE SPACES
            </span>

            <span>
              PERFORMANCE / RECOVERY / WELLNESS
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="facilities-list">

        <div className="container">

          <div className="facilities-grid">

            {facilities.map(
              ({
                number,
                title,
                category,
                description,
                icon: Icon,
                size,
                image,
              }) => (

                <article
                  className={`facility-large-card facility-large-card--${size}`}
                  key={number}
                >

                  {/* IMAGE */}

                  <div className="facility-large-card__image">

                    <img
                      src={image}
                      alt={`${title} - AURELIS Sports Resort`}
                      loading="lazy"
                    />

                    <div className="facility-large-card__overlay" />

                  </div>


                  {/* TOP */}

                  <div className="facility-large-card__top">

                    <span className="facility-large-card__number">
                      {number}
                    </span>

                    <span className="facility-large-card__category">
                      {category}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="facility-large-card__content">

                    <div className="facility-large-card__icon">

                      <Icon size={24} />

                    </div>

                    <h2>
                      {title}
                    </h2>

                    <p>
                      {description}
                    </p>

                    <button
                      type="button"
                      className="facility-large-card__link"
                    >

                      <span>
                        Explore facility
                      </span>

                      <span className="facility-large-card__arrow">
                        <ArrowUpRight size={17} />
                      </span>

                    </button>

                  </div>


                  {/* LARGE BACKGROUND NUMBER */}

                  <div className="facility-large-card__number-bg">
                    {number}
                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="facilities-cta">

        <div className="container">

          <div className="facilities-cta__inner">

            <div>

              <span className="section-label">
                EXPERIENCE AURELIS
              </span>

              <h2>
                Your environment
                <br />

                shapes your

                <span className="gradient-text">
                  {" "}performance.
                </span>
              </h2>

            </div>

            <a
              href="/booking"
              className="button button--lime"
            >
              Book Your Experience

              <ArrowUpRight size={18} />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Facilities;