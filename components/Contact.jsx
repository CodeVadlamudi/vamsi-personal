import React from "react";
import {useForm, ValidationError} from "@formspree/react";
import Thank from "./Thank";

function Contact() {
  const [state, handleSubmit] = useForm("xleybdyl");
  if (state.succeeded) {
    return <Thank />;
  }
  return (
    <section
      id="contact"
      className="px-10 py-12 sm:py-16 md:py-24 lg:py-32 bg-zinc-100"
    >
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-3"
            autoComplete="off"
          >
            <h2 className="text-[#FF5C00] text-3xl font-semibold">
              Contact Me
            </h2>
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="name"
                name="Name"
                className="border-2 border-[#FF5C00] border-opacity-40 rounded-sm w-full h-14 px-4 outline-none text-lg bg-white"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="font-medium">
                Phone Number (WhatsApp)
              </label>
              <input
                id="phone"
                type="tel"
                name="Phone"
                maxLength={10}
                className="border-2 border-[#FF5C00] border-opacity-40 rounded-sm w-full h-14 px-4 outline-none text-lg bg-white"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                className="border-2 border-[#FF5C00] border-opacity-40 rounded-sm w-full h-14 px-4 outline-none bg-white"
                placeholder="example@gmail.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                placeholder="Message"
                className="border-2 border-[#FF5C00] border-opacity-40 rounded-sm w-full h-28 p-4 outline-none bg-white"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <a
              href="/"
              className="w-full bg-[#FF5C00] h-16 text-center rounded-md text-white font-medium text-lg hover:bg-black duration-300 block"
            >
              <button
                type="submit"
                className="w-full h-full"
                disabled={state.submitting}
              >
                Submit
              </button>
            </a>
          </form>

          <div className="flex flex-col space-y-4 mt-10 md:ml-20">
            <h3 className="text-xl font-medium underline">Address</h3>
            <address className="text-lg">
              Vijayawada, NTR District
              <br />
              Andhra Pradesh, India
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
