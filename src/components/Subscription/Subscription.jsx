import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

// Assignment 5 — Subscription form.
// The email is not sent to a real service yet.
// A valid email shows a success toast and clears the input.
function Subscription() {
  // TODO: Create state for the newsletter email input.
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(`Thanks! We'll send updates to ${email}.`);

    // TODO: Reset the email state so the input becomes empty again.
    setEmail("");
  };
  return (
    <div className="mx-auto items-center text-center">
      <div className="relative isolate overflow-hidden px-6 py-10 shadow bg-[#1e2126] flex-col items-center text-center">
        <h2 className="mx-auto max-w-2xl text-center font-bold tracking-tight sm:text-4xl text-white font-['Poppins'] text-[1.7rem] items-center text-center">
          Get the Latest Eats
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300 font-['Work_Sans'] text-[0.95rem]">
          Subscribe to our newsletter for fresh restaurant recommendations
          delivered to your inbox.
        </p>

        <form
          className="mx-auto mt-10 flex max-w-md gap-x-4 justify-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email-address" className="sr-only">
            Subscribe
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            // TODO: Keep the input value in sync with newsletter email state.
            onChange={(event) => setEmail(event.target.value)}
            className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-black shadow-sm sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-[4px] border-0 bg-[#cca353] px-3.5 py-2.5 text-sm font-semibold font-['Work_Sans'] text-[0.85rem] border-0 text-white shadow-sm hover:bg-[#a7874b]"
          >
            Notify me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
