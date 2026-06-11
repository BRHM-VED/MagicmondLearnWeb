export default function ConstructionServicesSection() {
  const tracks = [
    {
      id: 'website-development',
      title: 'Website Development',
      bullets: [
        'React, Vite, Tailwind CSS',
        'State Management',
        'UI Libraries (Shadcn, Magic UI)',
      ],
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'mobile-development',
      title: 'Android & iOS Development',
      bullets: [
        'Native & Cross Platform',
        'MVC & MVVM Folder Structure',
        'State Management & UI Libraries',
      ],
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'backend-database',
      title: 'Backend & Database',
      bullets: [
        'Node.js + Hono',
        'Firebase, MongoDB & Supabase',
        'RESTful & GraphQL API Design',
      ],
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: 'deployment',
      title: 'Deployment',
      bullets: [
        'AWS Deployment',
        'Hostinger & VPS Hosting',
        'DNS + SSL Certificate',
      ],
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      bullets: [
        'Vibe Coding Concepts',
        'AI API Integrations',
        'AI Chatbot Development',
      
      ],
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'tools-services',
      title: 'Tools & Services',
      bullets: [
        'Google Analytics, Google Ads, Tag Manager',
        'Interakt',
        'SMTP & Email Integrations',
      ],
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="specializations" className="w-full bg-neutral-950">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-32 flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <span className="text-purple-300 text-xs font-medium font-geist uppercase tracking-wider">
            SPECIALIZATIONS
          </span>
          <h2 className="text-zinc-200 text-4xl sm:text-5xl font-semibold font-sans leading-tight">
            Fundamental Tracks
          </h2>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="p-6 bg-zinc-900/60 rounded-xl border border-purple-300/10 backdrop-blur-[6px] flex flex-col gap-4 text-left hover:border-purple-300/30 transition-all duration-300"
            >
              {/* Track Icon */}
              <div className="shrink-0">
                {track.icon}
              </div>

              {/* Track Title */}
              <div className="pb-1">
                <h3 className="text-zinc-200 text-2xl font-semibold font-sans leading-tight">
                  {track.title}
                </h3>
              </div>

              {/* Track Bullets */}
              <ul className="flex flex-col gap-2">
                {track.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-zinc-300 text-xs sm:text-sm font-medium font-geist leading-relaxed flex items-start gap-2">
                    <span className="text-purple-300 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
