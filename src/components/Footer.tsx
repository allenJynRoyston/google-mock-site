import {type ILink} from '../types/';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const leftLinks: ILink[]  = [
    { href: "https://2025.allenjynroyston.deno.net", label: "About" },
    { href: "https://jynovation-live.deno.dev", label: "Try Jyndows95 Today!" }
  ];

  const rightLinks: ILink[] = [
    { href: "mailto:allen.royston.uk@gmail.com", label: "Contact" },
    { href: "https://www.linkedin.com/in/allen-royston/", label: "LinkedIn" },
    { href: "https://github.com/allenJynRoyston", label: "GitHub" }
  ];

  return (
    <footer className={`border-t ${
      isDarkMode 
        ? 'border-[#5f6368] bg-[#171717]' 
        : 'border-[#dadce0] bg-[#f2f2f2]'
    }`}>
      <div className={`px-6 py-3 text-sm ${
        isDarkMode ? 'text-[#9aa0a6]' : 'text-[#70757a]'
      }`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            {leftLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`hover:underline ${
                  isDarkMode ? 'hover:text-[#e8eaed]' : 'hover:text-[#3c4043]'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            {rightLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`hover:underline ${
                  isDarkMode ? 'hover:text-[#e8eaed]' : 'hover:text-[#3c4043]'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}