export default function PricingComparisonSection() {
  const weekendBullets = [
    'Deep-dive masterclasses on core architecture principles.',
    'Collaborative coding and group architectural reviews.',
    'Direct mentorship with industry veterans on live projects.',
    'Soft-skills training: Pitching, documentation, and leadership.',
  ];

  const weekdayBullets = [
    'Asynchronous tasks to reinforce weekend learning objectives.',
    "Real-time collaboration via agency's Channel and DevTools.",
    'Shadowing professional developers during client sprints.',
    'Flexible time commitment for balancing college/current roles.',
  ];

  return (
    <section id="programme-structure" className="w-full bg-zinc-900/30">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-32 flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-zinc-200 text-4xl sm:text-5xl font-semibold font-sans leading-tight">
            Programme Structure
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-transparent" />
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Weekend Sessions Card */}
          <div className="p-[1px] bg-gradient-to-b from-purple-300/20 to-transparent rounded-xl">
            <div className="p-8 md:p-10 bg-neutral-900 rounded-xl flex flex-col gap-6 h-full text-left">
              <div className="flex items-center gap-4">
                <div className="w-4 h-5 bg-purple-300 rounded-sm shrink-0" />
                <h3 className="text-purple-300 text-2xl sm:text-3xl font-semibold font-sans leading-tight">
                  Weekend Sessions
                </h3>
              </div>
              
              <ul className="flex flex-col gap-4">
                {weekendBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-purple-300 rounded-sm mt-1 shrink-0" />
                    <span className="text-zinc-200 text-base sm:text-lg font-normal font-hanken leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Weekday Exposure Card */}
          <div className="p-[1px] bg-gradient-to-b from-pink-300/20 to-transparent rounded-xl">
            <div className="p-8 md:p-10 bg-neutral-900 rounded-xl flex flex-col gap-6 h-full text-left">
              <div className="flex items-center gap-4">
                <div className="w-4 h-5 bg-pink-300 rounded-sm shrink-0" />
                <h3 className="text-pink-300 text-2xl sm:text-3xl font-semibold font-sans leading-tight">
                  Weekday Exposure
                </h3>
              </div>

              <ul className="flex flex-col gap-4">
                {weekdayBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-pink-300 rounded-sm mt-1 shrink-0" />
                    <span className="text-zinc-200 text-base sm:text-lg font-normal font-hanken leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
