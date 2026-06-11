export default function CustomerStoriesSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apply-now" className="w-full bg-neutral-950">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-12 md:py-20 flex justify-center">
        <button
          onClick={scrollToForm}
          className="px-10 py-5 bg-purple-300 hover:bg-purple-200 active:bg-purple-400 text-purple-950 text-2xl font-semibold font-sans rounded-full flex items-center gap-4 shadow-[0px_25px_50px_-12px_rgba(221,183,255,0.2)] transition-all duration-200 cursor-pointer group"
        >
          <span>Apply Now</span>
          <svg
            className="w-6 h-6 text-purple-950 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
