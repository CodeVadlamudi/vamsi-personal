import React from "react";

function Thank() {
  return (
    <section className="absolute top-0 w-full h-full bg-gray-500/50 flex items-center justify-center">
      <div className="bg-white w-96 h-80 p-10 flex items-center justify-center flex-col space-y-5 rounded-md shadow-lg">
        <img src="./images/tick.png" alt="tick img" className="w-40 h-40" />
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
