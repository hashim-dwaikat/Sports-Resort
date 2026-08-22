import React from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Play,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=2200&q=90";

function Hero() {
  return (
    <section className="hero">

      <div className="hero__background">

        <img
          src={heroImage}
          alt="Male athlete training in a premium sports environment"
          className="hero__image"
        />

        <div className="hero__dark" />

        <div className="hero__violet-glow" />

        <div className="hero__lime-glow" />

      </div>

      <div className="hero__grid" />

      <div className="container hero__container">

        <div className="hero__content">

          <div className="hero__eyebrow">

            <span className="hero__dot" />

            <span>
              THE FUTURE OF SPORTS & WELLNESS
            </span>

          </div>

          <h1 className="hero__title">

            <span>
              TRAIN
            </span>

            <span className="hero__outline">
              BEYOND
            </span>

            <span>
              LIMITS.
            </span>

          </h1>

          <p className="hero__description">
            A next-generation sports resort
            designed for performance, recovery,
            wellness, and extraordinary
            experiences.
          </p>

          <div className="hero__actions">

            <a
              href="#facilities"
              className="button button--lime"
            >
              Explore AURELIS

              <ArrowUpRight size={18} />
            </a>

            <button
              type="button"
              className="hero__discover"
            >

              <span className="hero__play">

                <Play
                  size={13}
                  fill="currentColor"
                />

              </span>

              <span>
                Discover the experience
              </span>

            </button>

          </div>

        </div>

        <div className="hero__bottom">

          <div className="hero__stats">

            <div className="hero__stat">

              <strong>
                24/7
              </strong>

              <span>
                ACCESS
              </span>

            </div>

            <div className="hero__separator" />

            <div className="hero__stat">

              <strong>
                12+
              </strong>

              <span>
                FACILITIES
              </span>

            </div>

            <div className="hero__separator" />

            <div className="hero__stat">

              <strong>
                01
              </strong>

              <span>
                EXPERIENCE
              </span>

            </div>

          </div>

          <a
            href="#about"
            className="hero__scroll"
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <span className="hero__scroll-circle">

              <ArrowDown size={15} />

            </span>

          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;