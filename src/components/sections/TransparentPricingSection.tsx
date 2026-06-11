export default function TransparentPricingSection() {
  return (
    <section id="ethics-ip" className="w-full bg-neutral-950 border-t border-b border-neutral-600/30">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-32 flex justify-center">
        <div className="max-w-[768px] flex flex-col items-center gap-4 text-center">
          
          {/* Ethics Icon */}
          <div className="w-12 h-12 rounded-full bg-zinc-300/10 flex items-center justify-center border border-zinc-300/20">
            <svg className="w-6 h-6 text-zinc-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-zinc-200 text-3xl sm:text-4xl font-semibold font-sans leading-tight mt-2">
            Professional Ethics &amp; IP Rights
          </h2>

          {/* Description */}
          <p className="text-zinc-300 text-base sm:text-lg font-normal font-hanken leading-relaxed mt-2">
            As you will be working on live agency projects, all participants must adhere to a strict{' '}
            <span className="text-zinc-200 font-semibold">Non-Disclosure Agreement (NDA)</span>. All Intellectual
            Property (IP) developed during the programme, involving proprietary MagicMond tools or client data, remains
            the exclusive property of MagicMond. We foster an environment of professional trust and integrity.
          </p>

        </div>
      </div>
    </section>
  );
}
