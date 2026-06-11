import { Link } from 'react-router-dom';
import magicMondLogo from '../../assets/MagicMondLogo.svg';
import magicMondText from '../../assets/MagicMond.svg';
import { ROUTES } from '../../utils/constants';

export default function SiteFooter() {
  const links = [
    { label: 'Privacy Policy', to: ROUTES.privacy },
    { label: 'career@magicmond.com', href: 'mailto:career@magicmond.com' },
  ];

  return (
    <footer id="footer" className="w-full bg-neutral-950 border-t border-neutral-800">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Left: Brand Logo/Name */}
        <div className="flex items-center gap-2.5 opacity-60">
          <img src={magicMondLogo} alt="MagicMond Logo" className="h-8 w-auto" />
          <img src={magicMondText} alt="MagicMond" className="h-5 w-auto" />
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-[484px]">
          {links.map((link, idx) => {
            if (link.to) {
              return (
                <Link
                  key={idx}
                  to={link.to}
                  className="text-zinc-300 hover:text-purple-300 text-xs font-medium font-geist tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={idx}
                href={link.href}
                className="text-zinc-300 hover:text-purple-300 text-xs font-medium font-geist tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-zinc-400 text-xs font-medium font-geist tracking-wide leading-relaxed">
            © 2026 MagicMond Learning Programme. <br />
            Engineered for Growth.
          </p>
        </div>

      </div>
    </footer>
  );
}
