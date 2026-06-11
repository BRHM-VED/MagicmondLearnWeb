import { Link } from 'react-router-dom';
import { useHomePage } from '../../controllers/useHomePage';
import magicMondLogo from '../../assets/MagicMondLogo.svg';
import magicMondText from '../../assets/MagicMond.svg';
import homeBG from '../../assets/homeBG.png';
import { ROUTES } from '../../utils/constants';

export default function FirstSection() {
  const {
    form,
    isSubmitting,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  } = useHomePage();

  const scrollToTracks = () => {
    const tracksElement = document.getElementById('specializations');
    if (tracksElement) {
      tracksElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="first" className="w-full relative bg-neutral-950 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${homeBG})` }}
      />
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-[at_20%_30%] from-purple-500/5 to-transparent to-40% pointer-events-none" />

      {/* Header */}
      <header className="w-full h-16 border-b border-neutral-600/30 flex items-center justify-center px-4 sm:px-8 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <span className="text-purple-300/90 text-sm sm:text-base font-medium font-geist">Learn with</span>
          <img src={magicMondLogo} alt="MagicMond Logo" className="h-7 w-auto" />
          <img src={magicMondText} alt="MagicMond" className="h-4.5 w-auto" />
        </div>
      </header>

      {/* Hero Content Container */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-16 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Badge */}
          <div className="px-4 py-1.5 bg-purple-300/10 rounded-full border border-purple-300/20 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
            </span>
            <span className="text-purple-300 text-xs font-medium font-geist tracking-wide uppercase">
              Zero to Hero: ONLY 10 STUDENTS SELECTED
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-zinc-200 text-5xl sm:text-6xl md:text-7xl font-bold font-sans leading-[1.1] tracking-tight">
            Learn. Build. <br />
            <span className="text-purple-300 bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Grow.</span>
          </h1>

          {/* Description */}
          <p className="text-zinc-300 text-base sm:text-lg font-normal font-hanken leading-relaxed max-w-[576px]">
            Bridge the chasm between academic theory and high-stakes industry excellence. An elite apprenticeship engineered for the next generation of technical leaders.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToTracks}
            className="mt-4 px-8 py-5 bg-zinc-900/60 hover:bg-zinc-900/80 text-zinc-200 text-xl font-semibold font-sans rounded-full border border-purple-300/10 backdrop-blur-[6px] flex items-center gap-4 transition-all duration-200 cursor-pointer group"
          >
            <span>View Tracks</span>
            {/* Arrow icon */}
            <svg
              className="w-5 h-5 text-zinc-200 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Right Content: Form */}
        <div id="application-form" className="lg:col-span-5 w-full relative">
          {/* Gradient glow behind form */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-2xl blur-lg opacity-50 pointer-events-none" />

          {/* Form container */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-zinc-900/60 rounded-2xl border-l border-r border-t-4 border-b border-purple-300/20 border-t-purple-300 px-6 sm:px-8 py-8 backdrop-blur-[6px] flex flex-col gap-5 relative z-10"
          >
            <div className="text-center">
              <h2 className="text-zinc-200 text-3xl font-semibold font-sans leading-tight">Join the Elite</h2>
              <p className="text-zinc-300 text-xs font-medium font-hanken tracking-wide mt-1">
                Limited to 10 Seats. Make your application count.
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-purple-300 text-xs font-medium font-geist tracking-wide uppercase opacity-80">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-zinc-950 text-zinc-200 placeholder-gray-500 font-hanken text-base rounded-lg border border-neutral-600 focus:border-purple-300 focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Email & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-purple-300 text-xs font-medium font-geist tracking-wide uppercase opacity-80">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="youremail@example.com"
                    required
                    className="w-full px-4 py-3 bg-zinc-950 text-zinc-200 placeholder-gray-500 font-hanken text-base rounded-lg border border-neutral-600 focus:border-purple-300 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-purple-300 text-xs font-medium font-geist tracking-wide uppercase opacity-80">
                    MOBILE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={form.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Your mobile number"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    className="w-full px-4 py-3 bg-zinc-950 text-zinc-200 placeholder-gray-500 font-hanken text-base rounded-lg border border-neutral-600 focus:border-purple-300 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Mastery Track Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-purple-300 text-xs font-medium font-geist tracking-wide uppercase opacity-80">
                  MASTERY TRACK SELECTION
                </label>
                <div className="relative">
                  <select
                    name="track"
                    value={form.track}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950 text-zinc-200 font-hanken text-base rounded-lg border border-neutral-600 focus:border-purple-300 focus:outline-none appearance-none transition-colors duration-200 cursor-pointer"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Android & iOS Development">Android & iOS Development</option>
                    <option value="Backend & Database">Backend & Database</option>
                    <option value="Deployment">Deployment</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Tools & Services">Tools & Services</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CV Link */}
              <div className="flex flex-col gap-1.5">
                <label className="text-purple-300 text-xs font-medium font-geist tracking-wide uppercase opacity-80">
                  CV LINK (GOOGLE DRIVE / DROPBOX / ONEDRIVE)
                </label>
                <input
                  type="url"
                  name="cvLink"
                  value={form.cvLink}
                  onChange={handleInputChange}
                  placeholder="https://drive.google.com/..."
                  required
                  className="w-full px-4 py-3 bg-zinc-950 text-zinc-200 placeholder-gray-500 font-hanken text-base rounded-lg border border-neutral-600 focus:border-purple-300 focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* NDA Agreement */}
              <div className="p-3 bg-zinc-800/30 rounded-lg flex items-start gap-3 border border-neutral-800">
                <input
                  type="checkbox"
                  id="agreeNDA"
                  name="agreeNDA"
                  checked={form.agreeNDA}
                  onChange={handleCheckboxChange}
                  required
                  className="w-4 h-4 mt-0.5 accent-purple-300 rounded border-neutral-600 bg-zinc-950 focus:ring-purple-300 cursor-pointer"
                />
                <label htmlFor="agreeNDA" className="text-zinc-300 text-[10px] font-normal font-geist uppercase leading-normal cursor-pointer select-none">
                  I AGREE TO THE <Link to={ROUTES.privacy} className="text-purple-300 hover:underline">NDA AND IP CONFIDENTIALITY TERMS</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-purple-300 hover:bg-purple-200 active:bg-purple-400 disabled:bg-purple-300/50 disabled:cursor-not-allowed text-purple-950 text-lg font-semibold font-sans rounded-full shadow-[0px_25px_50px_-12px_rgba(221,183,255,0.2)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-purple-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.001 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading...</span>
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
