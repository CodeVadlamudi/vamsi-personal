import React from "react";

function Thank() {
  return (
    <section className="fixed top-0 w-full h-full bg-gray-500/80 flex items-center justify-center p-5">
      <div className="bg-white w-96 h-72 flex items-center justify-center flex-col space-y-5 rounded-md shadow-lg">
        <img src="./images/tick.png" alt="tick img" className="w-28 h-28" />
        <p className="text-lg font-medium">Thanks for your email!</p>

        <a
          href="/"
          className="px-10 py-2 bg-zinc-800 hover:bg-orange-500 duration-300 rounded-sm text-white"
        >
          OK!
        </a>
      </div>
    </section>
  );
}

export default Thank;
