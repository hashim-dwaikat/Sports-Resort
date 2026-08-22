import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CalendarDays,
  Clock3,
  UserRound,
  Dumbbell,
  Sparkles,
  Waves,
} from "lucide-react";

const services = [
  {
    id: "gym",
    title: "OPEN GYM",
    description: "Full access to the AURELIS performance floor.",
    duration: "60 MIN",
    icon: Dumbbell,
  },
  {
    id: "training",
    title: "PERSONAL TRAINING",
    description: "One-on-one coaching built around your goals.",
    duration: "60 MIN",
    icon: UserRound,
  },
  {
    id: "recovery",
    title: "RECOVERY SESSION",
    description: "A dedicated session inside the recovery zone.",
    duration: "45 MIN",
    icon: Sparkles,
  },
  {
    id: "aqua",
    title: "AQUA SESSION",
    description: "Low-impact movement and aquatic recovery.",
    duration: "45 MIN",
    icon: Waves,
  },
];

const timeSlots = [
  "07:00",
  "08:00",
  "09:30",
  "11:00",
  "12:30",
  "14:00",
  "16:00",
  "17:30",
  "19:00",
  "20:30",
];

function Booking() {
  const [step, setStep] = useState(1);

  const [selectedService, setSelectedService] =
    useState("");

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] =
    useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const canContinue = () => {
    if (step === 1) {
      return selectedService !== "";
    }

    if (step === 2) {
      return (
        selectedDate !== "" &&
        selectedTime !== ""
      );
    }

    return (
      form.name.trim() !== "" &&
      form.email.trim() !== ""
    );
  };

  const nextStep = () => {
    if (!canContinue()) return;

    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    setSubmitted(true);
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  if (submitted) {
    return (
      <main className="booking-page">
        <section className="booking-success">
          <div className="container">
            <div className="booking-success__card">
              <div className="booking-success__icon">
                <Check size={30} />
              </div>

              <span className="section-label">
                REQUEST RECEIVED
              </span>

              <h1>
                You're
                <br />
                <span className="gradient-text">
                  booked.
                </span>
              </h1>

              <p>
                Your booking request has been
                received. We will contact you with
                the final confirmation and details.
              </p>

              <div className="booking-success__summary">
                <div>
                  <span>SESSION</span>
                  <strong>
                    {
                      services.find(
                        (service) =>
                          service.id ===
                          selectedService
                      )?.title
                    }
                  </strong>
                </div>

                <div>
                  <span>DATE</span>
                  <strong>{selectedDate}</strong>
                </div>

                <div>
                  <span>TIME</span>
                  <strong>{selectedTime}</strong>
                </div>
              </div>

              <button
                type="button"
                className="button button--lime"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setSelectedService("");
                  setSelectedDate("");
                  setSelectedTime("");
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                  });
                }}
              >
                Create Another Booking

                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <section className="booking-hero">
        <div className="booking-hero__orb" />

        <div className="container">
          <div className="booking-hero__content">
            <span className="section-label">
              AURELIS BOOKING
            </span>

            <h1>
              Reserve your
              <br />
              <span className="gradient-text">
                session.
              </span>
            </h1>

            <p>
              Choose your experience, select a
              convenient time, and we'll take care
              of the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-layout">

            <aside className="booking-sidebar">
              <span className="section-label">
                YOUR BOOKING
              </span>

              <div className="booking-progress">
                {[1, 2, 3].map(
                  (number) => (
                    <div
                      className={`booking-progress__item ${
                        step >= number
                          ? "active"
                          : ""
                      }`}
                      key={number}
                    >
                      <span>
                        {number}
                      </span>

                      <div>
                        <small>
                          STEP {number}
                        </small>

                        <strong>
                          {number === 1 &&
                            "Experience"}

                          {number === 2 &&
                            "Date & Time"}

                          {number === 3 &&
                            "Your Details"}
                        </strong>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="booking-sidebar__note">
                <span>PRIVATE & PERSONAL</span>

                <p>
                  Your information is only used
                  to process your booking request.
                </p>
              </div>
            </aside>

            <div className="booking-form">

              {step === 1 && (
                <div className="booking-step">
                  <div className="booking-step__heading">
                    <span className="section-label">
                      STEP 01
                    </span>

                    <h2>
                      Select your
                      <br />
                      experience.
                    </h2>
                  </div>

                  <div className="service-grid">
                    {services.map(
                      (service) => {
                        const Icon =
                          service.icon;

                        const selected =
                          selectedService ===
                          service.id;

                        return (
                          <button
                            type="button"
                            className={`service-card ${
                              selected
                                ? "selected"
                                : ""
                            }`}
                            key={service.id}
                            onClick={() =>
                              setSelectedService(
                                service.id
                              )
                            }
                          >
                            <div className="service-card__top">
                              <div className="service-card__icon">
                                <Icon size={21} />
                              </div>

                              <span>
                                {service.duration}
                              </span>
                            </div>

                            <div>
                              <h3>
                                {service.title}
                              </h3>

                              <p>
                                {
                                  service.description
                                }
                              </p>
                            </div>

                            <div className="service-card__check">
                              {selected && (
                                <Check
                                  size={16}
                                />
                              )}
                            </div>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="booking-step">
                  <div className="booking-step__heading">
                    <span className="section-label">
                      STEP 02
                    </span>

                    <h2>
                      Pick a date
                      <br />
                      and time.
                    </h2>
                  </div>

                  <div className="booking-fields">
                    <label>
                      <span>
                        <CalendarDays
                          size={16}
                        />
                        DATE
                      </span>

                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(event) =>
                          setSelectedDate(
                            event.target.value
                          )
                        }
                      />
                    </label>
                  </div>

                  <div className="time-heading">
                    <span>
                      <Clock3 size={16} />
                      AVAILABLE TIMES
                    </span>
                  </div>

                  <div className="time-grid">
                    {timeSlots.map(
                      (time) => (
                        <button
                          type="button"
                          key={time}
                          className={
                            selectedTime ===
                            time
                              ? "selected"
                              : ""
                          }
                          onClick={() =>
                            setSelectedTime(
                              time
                            )
                          }
                        >
                          {time}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="booking-step">
                  <div className="booking-step__heading">
                    <span className="section-label">
                      STEP 03
                    </span>

                    <h2>
                      Tell us
                      <br />
                      about you.
                    </h2>
                  </div>

                  <div className="booking-fields">
                    <label>
                      <span>
                        FULL NAME
                      </span>

                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={updateForm}
                      />
                    </label>

                    <label>
                      <span>
                        EMAIL ADDRESS
                      </span>

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={updateForm}
                      />
                    </label>

                    <label>
                      <span>
                        PHONE
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+970"
                        value={form.phone}
                        onChange={updateForm}
                      />
                    </label>
                  </div>
                </div>
              )}

              <div className="booking-actions">
                <button
                  type="button"
                  className="booking-back"
                  onClick={previousStep}
                  disabled={step === 1}
                >
                  <ArrowLeft size={17} />
                  Back
                </button>

                <button
                  type="button"
                  className="button button--lime"
                  onClick={nextStep}
                  disabled={!canContinue()}
                >
                  {step === 3
                    ? "Confirm Booking"
                    : "Continue"}

                  <ArrowRight size={18} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Booking;