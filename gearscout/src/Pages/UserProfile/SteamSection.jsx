function SteamSection() {
  return (
    <section className="max-w-screen-lg w-full mx-auto flex gap-4 items-center flex-col">
      {/* Card */}
      <div className="w-full flex flex-col gap-2 rounded-lg bg-zinc-900 border-2 border-zinc-800 p-8">
        <h2 className="text-2xl font-semibold text-zinc-100">Top Games</h2>
        <div className="w-full h-0.5 bg-zinc-800"></div>
        <div className="flex justify-between w-full mt-4">
          {/* Game Card */}
          <div className="flex flex-col relative gap-2 h-fit text-zinc-200 items-center">
            <h3 className="z-999 absolute text-lg font-semibold bottom-8">PUBG</h3>
            {/* Data */}
            <p className="z-999 text-pink-500 text-sm bottom-2 absolute font-normal">
              <span className="text-zinc-200 font-bold">10,000</span> HOURS
            </p>
            {/* Image */}
            <div className="w-64 aspect-[3/4] overflow-hidden">
              <div className="absolute rounded-lg bg-linear-to-t from-zinc-800 to-zinc-900/0 inset-0 overflow-hidden"></div>
              <img className="rounded-lg h-full w-full object-cover" src="/pubg.jpg" />
            </div>
          </div>

          {/* Game Card */}
          <div className="z-1000 flex flex-col relative gap-2 h-fit text-zinc-200 items-center">
            <div className="absolute bg-amber-300 h-full w-8 rounded-br-lg rounded-tr-lg -right-6 -z-999 flex flex-col items-center gap-8 pt-4 pb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 text-zinc-950 size-4" viewBox="0 0 20 20">
                <path fill="currentColor" d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5a5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" />
              </svg>
              <p className="ml-2 text-zinc-950 font-bold [writing-mode:vertical-rl] tracking-[28px]">EXPERT</p>
            </div>
            <h3 className="z-999 absolute text-lg font-semibold bottom-8">CS2</h3>
            {/* Data */}
            <p className="z-999 text-pink-500 text-sm bottom-2 absolute font-normal">
              <span className="text-zinc-200 font-bold">4,000</span> HOURS
            </p>
            {/* Image */}
            <div className="w-64 aspect-[3/4] overflow-hidden">
              <div className="absolute rounded-lg bg-linear-to-t from-zinc-800 to-zinc-900/0 inset-0 overflow-hidden"></div>
              <img className="rounded-lg h-full w-full object-cover" src="/cs2.jpg" />
            </div>
          </div>

          {/* Game Card */}
          <div className="flex flex-col relative gap-2 h-fit text-zinc-200 items-center">
            <h3 className="z-999 absolute text-lg font-semibold bottom-8">PUBG</h3>
            {/* Data */}
            <p className="z-999 text-pink-500 text-sm bottom-2 absolute font-normal">
              <span className="text-zinc-200 font-bold">10,000</span> HOURS
            </p>
            {/* Image */}
            <div className="w-64 aspect-[3/4] overflow-hidden">
              <div className="absolute rounded-lg bg-linear-to-t from-zinc-800 to-zinc-900/0 inset-0 overflow-hidden"></div>
              <img className="rounded-lg h-full w-full object-cover" src="/pubg.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SteamSection;
