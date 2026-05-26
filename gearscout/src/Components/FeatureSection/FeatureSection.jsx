function FeatureSection() {
  return (
    <section className="max-w-screen-lg mx-auto flex gap-between gap-16">
      <div className="flex flex-col gap-4 rounded-lg bg-zinc-900 border-2 border-zinc-800 p-4 items-center">
        <img className="size-32" src="target.png" />
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-zinc-50">Scout</span>
          <p className="w-max-prose text-zinc-400">Scout players based on hours played, game type, mouse grip and previously reviewed items.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-zinc-900 border-2 border-zinc-800 p-4 items-center">
        <img className="size-32" src="business-idea.png" />
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-zinc-50">Feedback</span>
          <p className="w-max-prose text-zinc-400">Scout players based on hours played, game type, mouse grip and previously reviewed items.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-zinc-900 border-2 border-zinc-800 p-4 items-center">
        <img className="size-32" src="email-notification.png" />
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-zinc-50">Iterate</span>
          <p className="w-max-prose text-zinc-400">Scout players based on hours played, game type, mouse grip and previously reviewed items.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
