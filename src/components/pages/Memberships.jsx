import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Crown,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    id: "essential",
    name: "ESSENTIAL",
    price: "89",
    description:
      "A focused membership for building a consistent training routine.",
    icon: Dumbbell,
    featured: false,
    features: [
      "Full gym access",
      "Performance training zones",
      "Locker & changing facilities",
      "Mobile member access",
      "Community events",
    ],
  },
  {
    id: "performance",
    name: "PERFORMANCE",
    price: "149",
    description:
      "Our complete training experience for members who want more.",
    icon: Sparkles,
    featured: true,
    features: [
      "Everything in Essential",
      "Unlimited group sessions",
      "Recovery zone access",
      "Performance assessments",
      "Priority class booking",
      "Member-only experiences",
    ],
  },
  {
    id: "elite",
    name: "ELITE",
    price: "249",
    description:
      "The ultimate AURELIS experience with elevated personal attention.",
    icon: Crown,
    featured: false,
    features: [
      "Everything in Performance",
      "Personal training sessions",
      "Advanced performance testing",
      "Priority recovery booking",
      "Dedicated member support",
      "Exclusive elite events",
    ],
  },
];

function Memberships() {
  const [billing, setBilling] = useState("monthly");

  return (
    <main className="memberships-page">
      <section className="memberships-hero">
        <div className="memberships-hero__orb" />

        <div className="container">
          <div className="memberships-hero__content">
            <span className="section-label">
              MEMBERSHIPS
            </span>

            <h1>
              Choose your
              <br />
              <span className="gradient-text">
                standard.
              </span>
            </h1>

            <p>
              Membership at AURELIS is more than
              access. It is your entry into an
              environment built around performance,
              recovery, and progression.
            </p>
          </div>

          <div className="memberships-hero__bottom">
            <span>03 MEMBERSHIP LEVELS</span>

            <span>
              FLEXIBLE / PREMIUM / PERSONAL
            </span>
          </div>
        </div>
      </section>

      <section className="memberships-plans">
        <div className="container">
          <div className="memberships-plans__top">
            <div>
              <span className="section-label">
                MEMBERSHIP OPTIONS
              </span>

              <h2>
                Find your
                <br />
                <span className="gradient-text">
                  level.
                </span>
              </h2>
            </div>

            <div className="billing-switch">
              <button
                type="button"
                className={
                  billing === "monthly"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBilling("monthly")
                }
              >
                Monthly
              </button>

              <button
                type="button"
                className={
                  billing === "annual"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBilling("annual")
                }
              >
                Annual
                <span>−20%</span>
              </button>
            </div>
          </div>

          <div className="membership-grid">
            {plans.map((plan) => {
              const Icon = plan.icon;

              const price =
                billing === "annual"
                  ? Math.round(
                      Number(plan.price) * 0.8
                    )
                  : Number(plan.price);

              return (
                <article
                  className={`membership-card ${
                    plan.featured
                      ? "membership-card--featured"
                      : ""
                  }`}
                  key={plan.id}
                >
                  {plan.featured && (
                    <div className="membership-card__badge">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="membership-card__header">
                    <div className="membership-card__icon">
                      <Icon size={22} />
                    </div>

                    <span className="membership-card__name">
                      {plan.name}
                    </span>
                  </div>

                  <div className="membership-card__price">
                    <span>$</span>

                    <strong>{price}</strong>

                    <small>/ month</small>
                  </div>

                  <p className="membership-card__description">
                    {plan.description}
                  </p>

                  <div className="membership-card__divider" />

                  <ul className="membership-card__features">
                    {plan.features.map(
                      (feature) => (
                        <li key={feature}>
                          <span>
                            <Check size={14} />
                          </span>

                          {feature}
                        </li>
                      )
                    )}
                  </ul>

                  <a
                    href="/booking"
                    className={`membership-card__button ${
                      plan.featured
                        ? "membership-card__button--primary"
                        : ""
                    }`}
                  >
                    Choose {plan.name}

                    <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="memberships-note">
        <div className="container">
          <div className="memberships-note__inner">
            <div>
              <span className="section-label">
                NO HIDDEN CONDITIONS
              </span>

              <h2>
                Simple membership.
                <br />
                <span className="gradient-text">
                  Serious results.
                </span>
              </h2>
            </div>

            <p>
              Every membership is designed to give
              you a clear path into the AURELIS
              ecosystem. Upgrade whenever your
              goals evolve.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Memberships;