import React from "react";
import {
  ArrowUpRight,
  Brain,
  HeartPulse,
  Moon,
  Target,
  Zap,
} from "lucide-react";

const experiences = [
  {
    icon: Target,
    number: "01",
    title: "PERFORMANCE",
    text: "Train with purpose through intelligent programs designed around your goals, movement, and progression.",
    image:
      "https://deadlift.com.pl/wp-content/uploads/2021/01/unique1.jpg",
  },

  {
    icon: HeartPulse,
    number: "02",
    title: "RECOVERY",
    text: "Balance intensity with recovery systems that help your body reset, restore, and prepare for what comes next.",
    image:
      "https://cdn.shopify.com/s/files/1/0073/3426/4899/files/WAT0066050_0233a177-aeec-4bef-9a5c-3ddeb636de20_600x600.jpg?v=1618553501",
  },

  {
    icon: Brain,
    number: "03",
    title: "MINDSET",
    text: "Build consistency, focus, and discipline in an environment designed to keep you moving forward.",
    image:
      "https://images.ctfassets.net/8urtyqugdt2l/6mP06NfbmWsM3ETwrjWdHD/bdb44a725d123e7a490fb4b1413c7494/Sweat_desktop.jpg",
  },

  {
    icon: Zap,
    number: "04",
    title: "ENERGY",
    text: "Experience an atmosphere engineered to make every session feel powerful, focused, and different.",
    image:
      "https://www.gymapparel.net/cdn/shop/files/DSC08012.jpg?v=1759860381&width=1080",
  },

  {
    icon: Moon,
    number: "05",
    title: "WELLNESS",
    text: "Create a complete routine where movement, recovery, and personal wellbeing work together.",
    image:
      "https://arsmara.com/cdn/shop/files/t-shirt_manga_curta_desporto_homem_ginasio_treino_03.png?v=1723108734&width=1445",
  },
];
function Experience() {
  return (
    <main className="experience-page">

      <section className="experience-hero">
        <div className="experience-hero__orb" />

        <div className="container">
          <div className="experience-hero__content">
            <span className="section-label">
              THE AURELIS EXPERIENCE
            </span>

            <h1>
              More than
              <br />
              <span className="gradient-text">
                training.
              </span>
            </h1>

            <p>
              AURELIS is built around a different
              philosophy. Performance is not a
              single workout. It is the combination
              of movement, recovery, mindset, and
              consistency.
            </p>
          </div>

          <div className="experience-hero__scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="experience-hero__line" />
          </div>
        </div>
      </section>

      <section className="experience-intro">
        <div className="container">
          <div className="experience-intro__grid">
            <span className="section-label">
              OUR PHILOSOPHY
            </span>

            <div>
              <h2>
                We don't build
                <br />
                <span className="gradient-text">
                  workouts.
                </span>
              </h2>

              <p>
                We build environments that make
                better habits easier to maintain.
                Every part of AURELIS has a role in
                helping you become stronger,
                healthier, and more consistent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-pillars">
        <div className="container">

          <div className="experience-pillars__header">
            <div>
              <span className="section-label">
                THE FIVE PILLARS
              </span>

              <h2>
                Built around
                <br />
                <span className="gradient-text">
                  you.
                </span>
              </h2>
            </div>

            <p>
              A complete approach to performance
              that goes beyond the traditional gym
              experience.
            </p>
          </div>

          <div className="experience-pillars__list">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="experience-pillar"
                  key={item.number}
                >
                  <div className="experience-pillar__image">
                    <img
                      src={item.image}
                      alt={`${item.title} - AURELIS`}
                      loading="lazy"
                    />

                    <div className="experience-pillar__image-overlay" />
                  </div>

                  <div className="experience-pillar__number">
                    {item.number}
                  </div>

                  <div className="experience-pillar__icon">
                    <Icon size={23} />
                  </div>

                  <div className="experience-pillar__body">
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>

                  <div className="experience-pillar__arrow">
                    <ArrowUpRight size={19} />
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      <section className="experience-statement">
        <div className="container">
          <div className="experience-statement__inner">
            <span className="section-label">
              A DIFFERENT STANDARD
            </span>

            <h2>
              Train hard.
              <br />
              Recover smart.
              <br />
              <span className="gradient-text">
                Live better.
              </span>
            </h2>

            <a
              href="/booking"
              className="button button--lime"
            >
              Start Your Experience
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Experience;