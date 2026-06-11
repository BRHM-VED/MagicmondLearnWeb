export default function JourneyPartnersSection() {
  const highlights = [
    {
      id: 'duration',
      tag: '3 Months',
      description: 'Intensive, high-velocity growth cycle designed to transform your professional baseline.',
      colorClass: 'border-l-purple-300',
      bgClass: 'bg-purple-300/10',
      icon: (
        <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'value',
      tag: '₹2,10,000+',
      description: 'Total measurable learning value provided through expert mentorship and premium resources.',
      colorClass: 'border-l-pink-300',
      bgClass: 'bg-pink-300/10',
      icon: (
        <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6M9 9h6M9 5a3 3 0 110 6h3l-6 6" />
        </svg>
      ),
    },
    {
      id: 'placement',
      tag: 'Internship-to-Hire',
      description: 'Exceptional performers receive direct placement offers within the MagicMond ecosystem.',
      colorClass: 'border-l-violet-300',
      bgClass: 'bg-violet-300/10',
      icon: (
        <svg className="w-6 h-6 text-violet-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="journey-partners" className="w-full bg-neutral-950">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className={`p-8 bg-zinc-900/60 rounded-xl border-l-4 border-r border-t border-b border-purple-300/10 backdrop-blur-[6px] flex flex-col gap-4 text-left ${item.colorClass}`}
            >
              {/* Icon Circle */}
              <div className={`w-12 h-12 ${item.bgClass} rounded-full flex justify-center items-center`}>
                {item.icon}
              </div>

              {/* Tag/Title */}
              <div className="pt-2">
                <h3 className="text-zinc-200 text-3xl font-semibold font-sans leading-tight">
                  {item.tag}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-base font-normal font-hanken leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
