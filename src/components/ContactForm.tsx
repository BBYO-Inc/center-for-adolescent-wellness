"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Wellness Assessments",
  "Policy Development",
  "Training",
  "Additional Information",
];

const inputStyles =
  "w-full rounded-xl border border-caw-gray/40 px-4 py-3 text-black placeholder:text-caw-gray focus:outline-none focus:ring-2 focus:ring-[#e42158]";

const labelStyles = "text-sm font-semibold text-black";
const requiredStyles = "ml-1 font-normal text-[#e42158]";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [servicesError, setServicesError] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-caw-gray-light bg-caw-blue-light px-8 py-10 text-center">
        <p className="text-xl font-bold text-black">Thank you!</p>
        <p className="mt-2 text-black">
          Your request has been received. Our team will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const hasService = new FormData(form).getAll("services").length > 0;
        if (!hasService) {
          setServicesError(true);
          return;
        }
        setServicesError(false);
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelStyles}>
            First Name
            <span className={requiredStyles}>*</span>
          </label>
          <input id="firstName" name="firstName" type="text" required className={`mt-2 ${inputStyles}`} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelStyles}>
            Last Name
            <span className={requiredStyles}>*</span>
          </label>
          <input id="lastName" name="lastName" type="text" required className={`mt-2 ${inputStyles}`} />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className={labelStyles}>
          Organization/Agency
          <span className={requiredStyles}>*</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          required
          className={`mt-2 ${inputStyles}`}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
            <span className={requiredStyles}>*</span>
          </label>
          <input id="email" name="email" type="email" required className={`mt-2 ${inputStyles}`} />
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone
            <span className={requiredStyles}>*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={`mt-2 ${inputStyles}`} />
        </div>
      </div>

      <fieldset>
        <legend className={labelStyles}>
          Services you are interested in:
          <span className={requiredStyles}>*</span>
        </legend>
        <div className="mt-3 space-y-3">
          {SERVICE_OPTIONS.map((option) => (
            <label key={option} className="flex items-center gap-3 text-black">
              <input
                type="checkbox"
                name="services"
                value={option}
                className="h-5 w-5 accent-[#e42158]"
                onChange={() => setServicesError(false)}
              />
              {option}
            </label>
          ))}
        </div>
        {servicesError && (
          <p className="mt-2 text-sm font-semibold text-[#e42158]">
            Please select at least one service.
          </p>
        )}
      </fieldset>

      <button
        type="submit"
        className="inline-block rounded-full bg-[#e42158] px-8 py-3 text-base font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]"
      >
        Submit
      </button>
    </form>
  );
}
