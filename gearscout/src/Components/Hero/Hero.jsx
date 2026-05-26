function Hero() {
  return (
    <section className="w-full h-[calc(60vh-64px)] relative  bg-zinc-800">
      <span className="absolute z-9 inset-0 bg-pink-800/20" />
      <img className="w-full h-full z-0 absolute inset-0 object-cover" src="hero.png" />
      <div className="relative z-10 flex flex-col gap-4 h-full items-center justify-center text-zinc-50">
        <h1 className="text-5xl font-bold">GearScout.gg</h1>
        <h2 className="text-2xl font-semibold text-zinc-100">Get real feedback from real gamers!</h2>
        <p className="text-lg text-zinc-200 max-w-prose text-center">Professionals, enthusiasts and casuals. Source real gamers to test and review your product today.</p>
        <button className="mt-4 cursor-pointer bg-pink-500 rounded p-4 font-bold uppercase">Get Testers Now!</button>
      </div>
    </section>
  );
}

export default Hero;
