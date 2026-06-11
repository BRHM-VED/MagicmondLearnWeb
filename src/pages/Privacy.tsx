import { Link } from 'react-router-dom';
import magicMondLogo from '../assets/MagicMondLogo.svg';
import magicMondText from '../assets/MagicMond.svg';
import SiteFooter from '../components/layout/SiteFooter';
import { ROUTES } from '../utils/constants';

export default function Privacy() {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-zinc-200 flex flex-col justify-between">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-[at_50%_0%] from-purple-500/5 to-transparent to-50% pointer-events-none" />

      {/* Header */}
      <header className="w-full h-16 border-b border-neutral-600/30 flex items-center justify-center px-4 sm:px-8 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
        <Link to={ROUTES.home} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <span className="text-purple-300/90 text-sm sm:text-base font-medium font-geist">Learn with</span>
          <img src={magicMondLogo} alt="MagicMond Logo" className="h-7 w-auto" />
          <img src={magicMondText} alt="MagicMond" className="h-4.5 w-auto" />
        </Link>
      </header>

      {/* Content */}
      <main className="w-full max-w-[800px] mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-4 text-left">
          <span className="text-purple-300 text-xs font-medium font-geist uppercase tracking-wider">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-zinc-200 text-4xl sm:text-5xl font-semibold font-sans leading-tight">
            Privacy Policy & NDA Terms
          </h1>
          <p className="text-zinc-400 text-sm font-geist">Last updated: June 11, 2026</p>
        </div>

        <div className="flex flex-col gap-8 text-left font-hanken text-base leading-relaxed text-zinc-300">
          <section className="flex flex-col gap-4">
            <h2 className="text-zinc-200 text-2xl font-semibold font-sans">1. Introduction</h2>
            <p>
              Welcome to the MagicMond Learning Programme. We are committed to protecting your personal data and respecting your privacy. This document outlines our policies regarding the collection, use, and disclosure of personal information when you apply for our elite apprenticeship, as well as the Non-Disclosure Agreement (NDA) and Intellectual Property (IP) terms you agree to upon application.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-zinc-200 text-2xl font-semibold font-sans">2. Information We Collect</h2>
            <p>
              When you apply to the MagicMond Learning Programme, we collect personal details necessary to evaluate your candidacy:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>Personal Identifiers:</strong> Full name, email address, and contact information.</li>
              <li><strong>Professional Credentials:</strong> Your CV/Resume (PDF format) and portfolio links.</li>
              <li><strong>Track Selection:</strong> Your preferred area of specialization (e.g., Website Development, Android & iOS Development, Backend & Database).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-zinc-200 text-2xl font-semibold font-sans">3. Non-Disclosure Agreement (NDA)</h2>
            <p>
              By checking the NDA agreement box on our application form, you agree to the following confidentiality terms:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>Confidential Information:</strong> Any proprietary curriculum, project briefs, industry partner details, or technical methodologies shared with you during the application and learning process are strictly confidential.</li>
              <li><strong>Non-Disclosure:</strong> You shall not disclose, share, publish, or distribute any Confidential Information to any third party without explicit written consent from MagicMond.</li>
              <li><strong>Term:</strong> This confidentiality obligation remains in effect indefinitely from the date of your application submission.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-zinc-200 text-2xl font-semibold font-sans">4. Intellectual Property (IP) Rights</h2>
            <p>
              All educational materials, software templates, design assets, and proprietary tools provided by MagicMond remain the sole intellectual property of MagicMond. Any projects built by students during the programme using MagicMond's proprietary resources are subject to shared IP guidelines as detailed in the student handbook upon selection.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-zinc-200 text-2xl font-semibold font-sans">5. Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, NDA terms, or data processing practices, please contact us at <a href="mailto:legal@magicmond.com" className="text-purple-300 hover:underline">legal@magicmond.com</a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
