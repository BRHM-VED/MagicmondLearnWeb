import LearnImage from '../../assets/LearnImage.jpg';

export default function ClearConnectedSection() {
  const points = [
    {
      id: 'tutorial-hell',
      title: 'Not a Tutorial Hell',
      description: "We don't watch videos; we ship products. Your learning is driven by real agency challenges.",
    },
    {
      id: 'peer-group',
      title: 'Elite Peer Group',
      description: 'With only 10 seats, you are surrounded by the top 1% of applicants, ensuring rapid peer-to-peer growth.',
    },
    {
      id: 'industry-dna',
      title: 'Industry DNA',
      description: 'Designed by MagicMond engineers who build for high-growth global startups every day.',
    },
  ];

  return (
    <section id="differentiation" className="w-full bg-neutral-950">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Title & Points */}
        <div className="flex flex-col gap-10 text-left">
          {/* Title */}
          <div>
            <h2 className="text-zinc-200 text-4xl sm:text-5xl font-semibold font-sans leading-[1.1] tracking-tight">
              What Makes This <br />
              <span className="text-purple-300">Programme Different?</span>
            </h2>
          </div>

          {/* Points List */}
          <div className="flex flex-col gap-8">
            {points.map((point) => (
              <div key={point.id} className="flex items-start gap-4">
                {/* Icon Container */}
                <div className="p-2 bg-purple-300/20 rounded-lg shrink-0 mt-1">
                  <div className="w-5 h-3 bg-purple-300 rounded-sm" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-zinc-200 text-2xl font-semibold font-sans leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-zinc-300 text-base font-normal font-hanken leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image / Visual */}
        <div className="w-full relative flex justify-center">
          {/* Gradient glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-2xl blur-lg opacity-50 pointer-events-none" />
          
          {/* Image container */}
          <div className="w-full bg-zinc-900/60 rounded-2xl border border-purple-300/10 backdrop-blur-[6px] overflow-hidden relative z-10 aspect-[16/9] flex items-center justify-center">
            <img 
              src={LearnImage} 
              alt="MagicMond Learning Ecosystem" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Subtle vignette/gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent pointer-events-none" />

            {/* Interactive Cursor Overlay */}
            <div className="absolute top-[58%] left-[62%] flex flex-col items-start gap-1 pointer-events-none">
              {/* Orange Cursor SVG */}
              <svg className="w-6 h-6 text-[#ff4500] drop-shadow-[0_2px_8px_rgba(255,69,0,0.6)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 2l16 11-7.5 1.5L16 21l-3 1.5-4.5-6.5L4 20V2z" />
              </svg>
              {/* Chirag Badge */}
              <div className="px-3 py-1 bg-[#ff4500] text-white text-xs font-semibold font-sans rounded shadow-lg border border-orange-500/30 -mt-1 ml-3">
                Chirag
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
