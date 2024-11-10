import React from "react";

function Contact() {
  return (
    <section className="text-white">
      <div className="container relative z-[5]">
        <div className="w-[800px] max-w-[84%]  bg-secandry p-5 md:p-10 text-center absolute left-1/2 -translate-x-1/2 -top-[50px]">
          <h2>Get early access today</h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
            tempore? Vero adipisci eveniet voluptatibus cupiditate!
          </p>
          <form className="flex items-center gap-5 flex-col md:flex-row">
            <input
              className="w-full md:flex-1 p-3 rounded-full text-black"
              type="email"
              placeholder="email@example.com"
            />
            <button
              className="btn w-full md:w-[200px] p-3 rounded-full"
              type="submit"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
