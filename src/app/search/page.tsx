'use client';

import { useState, useEffect } from 'react';
import { SearchHeader } from '../../components';
import { UseDarkMode } from '../../hooks';

interface SearchResult {
  url: string;
  title: string;
  description: string;
  relatedLinks?: string[];
}

export default function SearchPage() {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();
  const [query, setQuery] = useState('all');

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      setQuery(hash || 'all');
    };

    // Set initial query from hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const getAllResults = (): SearchResult[] => [
    {
      url: "https://github.com/allenJynRoyston",
      title: "Allen \"Jyn\" Royston (@allenJynRoyston) - GitHub",
      description: "Professional developer with 12+ years experience. Repositories showcase modern web development using Svelte, React, Vue, TypeScript, and game development with Godot Engine.",
    },
    {
      url: "https://2025.allenjynroyston.deno.net",
      title: "Allen Royston - Personal Portfolio 2025",
      description: "Fullstack Developer & Frontend Specialist portfolio featuring projects built with Svelte, React, Vue, and modern web technologies. Showcasing work from Metafy, JP Morgan, and more.",
    },
    {
      url: "https://fountech.ai",
      title: "FoundTech.AI - Senior Developer (March-July 2025) - CONTRACTING",
      description: "Served as sole frontend and backend developer with rapid development cycles. Built responsive website using Svelte and Tailwind, developed custom email service integrating Deno runtime with Mailchimp API.",
    },
    {
      url: "https://snowdropsolutions.com", 
      title: "Snowdrop Solutions - Senior Developer (Aug-Nov 2024) - CONTRACTING",
      description: "Built company website help page using Astro with focus on fast load times and SEO. Optimized Vue/Nuxt business application, provided database schema consultation, resolved frontend/backend bugs.",
    },
    {
      url: "google=Three Summers Studios",
      title: "Three Summers Studios - Project Lead/Developer (Founded Dec 2023)",
      description: "Solo game developer using Godot Engine (GDScript). Created custom shaders for 2D/3D effects, implemented efficient scene management, handled all programming, art, and sound assets. Ongoing passion project.",
    },
    {
      url: "https://metafy.gg",
      title: "Metafy - Senior Developer (May 2022 - Dec 2023)",
      description: "Added features and optimized frontend code using Svelte, Tailwind and MongoDB. Collaborated with designers and backend engineers, optimized performance, integrated APIs and third-party services.",
    },
    {
      url: "https://bedegaming.com",
      title: "Bede Gaming - Senior Developer (Oct 2020 - Apr 2022)", 
      description: "Collaborated on shared React component library. Developed sites for German, British, and Canadian clients including their largest client, OLG.",
    },
    {
      url: "https://www.jpmorgan.com",
      title: "JP Morgan - Frontend Developer Contract (Oct 2019 - July 2020) - CONTRACTING",
      description: "Developed highly modular JSON schema-driven React SPA enabling dynamic rendering of complex UI components. Contributed 100,000+ lines of production-quality code with best practices.",
    },
    {
      url: "https://www.eqtr.com",
      title: "EQTR - Frontend Developer (Apr 2018 - Oct 2019)",
      description: "Delivered high-profile brand-aligned websites for clients including Belfry and Virgin Active using Vue and React. Maintained legacy projects, improved functionality and modernized codebases.",
    },
    {
      url: "https://www.sky.com",
      title: "Sky - Frontend Developer Contract (Aug 2017 - Feb 2018) - CONTRACTING",
      description: "Developed payment processing portal for intrastore app using Aurelia framework. Wrote unit tests and fixed frontend bugs, improving application stability and user experience.",
    },
    {
      url: "https://www.google.com/search?q=social+rug+rats",
      title: "Social Rugrats - Junior Developer (Dec 2015 - May 2017)",
      description: "Developed dynamic PHP/JavaScript websites with IE9+ compatibility. Implemented responsive layouts using Angular 1.x and Bootstrap, collaborated with designers for pixel-perfect web pages.",
    },
    {
      url: "https://www.google.com/search?q=Good+Done+Great",
      title: "Good Done Great - Junior Developer (May 2013 - Dec 2015)",
      description: "Developed single-page applications using AngularJS 1.x, optimizing two-way data binding for performance. Created custom directives and reusable components to streamline UI development.",
    },
    {
      url: "https://www.gravityjack.com",
      title: "Gravity Jack - Junior Developer (Nov 2011 - Nov 2012)",
      description: "Built responsive web interfaces using HTML, CSS, JavaScript ensuring cross-browser compatibility for Internet Explorer. Built websites using Knockout, jQuery and Bootstrap.",
    },
    {
      url: "https://chamberacr.newgrounds.com",
      title: "Flash Developer - Amateur Developer (2008-2012)",
      description: "Built series of Flash games during the golden age of browser gaming. Early development work showcasing foundational programming skills. Still playable on Newgrounds!",
    },
    {
      url: "/CV AUG 2025 v3.pdf",
      title: "Allen Royston CV - Download Full Resume (PDF)",
      description: "Complete curriculum vitae detailing 12+ years professional experience, education (BA Psychology & Sociology), military service (OCS 1LT), and comprehensive skillset.",
    }
  ];

  const getImageResults = (): SearchResult[] => [
    {
      url: "/portfolio/project-1",
      title: "Allen Royston - React Dashboard Screenshot",
      description: "Modern React dashboard with TypeScript, featuring clean UI design and responsive layout. Built with Tailwind CSS and Chart.js for data visualization.",
    },
    {
      url: "/portfolio/project-2", 
      title: "Allen Royston - E-commerce App Interface",
      description: "Full-stack e-commerce application screenshot showing product listings, shopping cart functionality, and checkout process built with Next.js.",
    },
    {
      url: "/portfolio/project-3",
      title: "Allen Royston - Mobile App Design Mockups",
      description: "Mobile-first responsive web application designs and prototypes. Showcasing modern UI/UX principles and accessibility best practices.",
    }
  ];

  const getVideoResults = (): SearchResult[] => [
    {
      url: "https://www.youtube.com/@callmejynn",
      title: "Call Me Jynn - YouTube Channel",
      description: "Allen 'Jyn' Royston's YouTube channel featuring game development logs for Three Summers Studios indie game project using Godot Engine.",
    },
    {
      url: "https://www.youtube.com/watch?v=lEAMEsa-B48",
      title: "Game Dev Log #2 - Three Summers Studios",
      description: "Progress update on indie game development featuring custom shader implementation, 2D/3D effects, and particle system creation using Godot Engine and GDScript.",
    },
    {
      url: "https://www.youtube.com/watch?v=6uY3lrmXwL0&t=66s",
      title: "Game Dev Log #3 - Scene Management & Optimization",
      description: "Deep dive into Godot scene management and node hierarchies. Covers memory usage optimization, rendering performance improvements, and efficient asset loading.",
    },
    {
      url: "https://www.youtube.com/watch?v=BQDOsf6WvBU", 
      title: "Game Dev Log #4 - Art Pipeline & Sound Design",
      description: "Behind-the-scenes look at solo game development workflow. Creating and managing art assets, sound effects, and audio implementation in the Three Summers Studios project.",
    }
  ];

  const getNewsResults = (): SearchResult[] => [
    {
      url: "/news/tech-times-article",
      title: "Local Developer Writes 100,000+ Lines of Code Without Single Bug",
      description: "Tech Times - Allen 'Jyn' Royston sets new industry record at JP Morgan, colleagues report 'unrealistic' perfection. 'He probably has a time machine,' says anonymous coworker.",
      relatedLinks: [
        "/news/jp-morgan-productivity-secrets",
        "/news/debugging-techniques-that-dont-exist", 
        "/news/time-travel-programming-guide"
      ]
    },
    {
      url: "/news/game-dev-weekly",
      title: "Three Summers Studios: The Solo Developer Taking on AAA Games",
      description: "Game Dev Weekly - Industry experts baffled as one-person studio announces plans to revolutionize gaming with 'innovative shader technology' and 'particle effects that defy physics.'",
      relatedLinks: [
        "/news/godot-engine-becomes-sentient",
        "/news/aaa-studios-panic-over-solo-dev",
        "/news/physics-laws-rewritten-for-game"
      ]
    },
    {
      url: "/news/svelte-society",
      title: "Developer Successfully Explains Why Svelte is Better Than React",
      description: "Svelte Society News - In a groundbreaking achievement, Allen Royston becomes first person to convince React developers to try Svelte without starting a flame war in the comments.",
      relatedLinks: [
        "/news/react-developers-admit-defeat",
        "/news/twitter-peaceful-for-first-time",
        "/news/svelte-kit-world-domination-plan"
      ]
    },
    {
      url: "/news/military-tech",
      title: "Former Army Officer Deploys Code Instead of Troops",
      description: "Military Tech Weekly - 1LT Royston transitions from leading soldiers to leading sprint planning meetings. 'The debugging process is surprisingly similar to combat strategy,' reports insider.",
      relatedLinks: [
        "/news/git-merge-conflicts-as-warfare",
        "/news/code-review-military-tactics",
        "/news/agile-methodology-army-training"
      ]
    },
    {
      url: "/news/flash-preservation",
      title: "Newgrounds Declares Local Developer's Flash Games 'Cultural Heritage'",
      description: "Digital Preservation Daily - Chamber ACR's flash games from 2008-2012 officially protected by Internet Archive. 'These games represent the golden age of browser gaming,' says curator.",
      relatedLinks: [
        "/news/adobe-flash-resurrection-petition",
        "/news/browser-games-museum-opening",
        "/news/actionscript-declared-ancient-language"
      ]
    },
    {
      url: "/news/deno-breakthrough",
      title: "Developer Builds Email Service So Fast, Mailchimp Offers Job",
      description: "JavaScript Weekly - FoundTech.AI email integration completed in record time using Deno runtime. Mailchimp executives reportedly 'confused but impressed' by implementation speed.",
      relatedLinks: [
        "/news/node-js-developers-in-therapy",
        "/news/typescript-runtime-supremacy",
        "/news/mailchimp-acquisition-rumors"
      ]
    },
    {
      url: "/news/psychology-today",
      title: "Psychology Graduate Uses Mind Reading Skills to Debug Code",
      description: "Psychology Today - BA in Psychology & Sociology proves invaluable in tech. 'I can sense what the variables are thinking,' claims Royston. Therapists worldwide baffled by career pivot.",
      relatedLinks: [
        "/news/variables-need-therapy-too",
        "/news/sociology-degree-tech-advantage",
        "/news/empathetic-programming-movement"
      ]
    },
    {
      url: "/news/metafy-madness",
      title: "Developer Optimizes Code So Well, Website Loads Before Users Click",
      description: "Gaming Industry Report - Metafy experiences 'time paradox' after Royston's Svelte optimizations. Users report seeing results before searching. Science cannot explain.",
      relatedLinks: [
        "/news/time-paradox-customer-service",
        "/news/svelte-compiler-time-machine",
        "/news/future-users-complaining-now"
      ]
    },
    {
      url: "/news/bede-gaming-bonanza",
      title: "React Component Library So Modular, Components Achieve Sentience",
      description: "Component Weekly - Bede Gaming's shared library reportedly starts coding itself. 'The buttons are writing their own click handlers,' reports terrified developer. Royston unavailable for comment.",
      relatedLinks: [
        "/news/ai-components-demand-salary",
        "/news/jsx-develops-consciousness",
        "/news/react-hooks-plot-overthrow"
      ]
    },
    {
      url: "/news/astro-astronomy",
      title: "Developer Builds Website So Fast with Astro, Breaks Speed of Light",
      description: "Web Performance Gazette - Snowdrop Solutions site loads in negative milliseconds. Einstein's theories questioned. 'We're getting complaints from the future,' says confused physicist.",
      relatedLinks: [
        "/news/nasa-recruits-web-developer",
        "/news/lighthouse-scores-exceed-maximum",
        "/news/physics-textbooks-need-updates"
      ]
    },
    {
      url: "/news/vue-nuxt-news",
      title: "Vue Application Optimized to Point of Becoming Self-Aware",
      description: "Frontend Focus - Nuxt app begins optimizing itself recursively. 'It's rewriting my code while I sleep,' reports client. Royston claims this is 'normal Vue behavior.'",
      relatedLinks: [
        "/news/vue-3-composition-api-sentience",
        "/news/nuxt-generates-own-features",
        "/news/client-files-harassment-charges"
      ]
    },
    {
      url: "/news/godot-gazette",
      title: "Indie Game Developer Creates Shader So Realistic, Players Can't Tell Difference from Reality",
      description: "Indie Game Insider - Local game dev's particle effects cause existential crisis. 'I thought I was still in the game for three days,' reports beta tester. Godot Engine stock skyrockets.",
      relatedLinks: [
        "/news/matrix-developers-hire-royston",
        "/news/reality-vs-shader-lawsuit",
        "/news/particle-effects-therapy-group"
      ]
    },
    {
      url: "/news/tailwind-times",
      title: "CSS Framework Mastery Reaches Level Where Styles Apply to Real World",
      description: "CSS-Tricks Daily - Witnesses report Royston's shirt changing color with dark mode toggle. 'His hair literally has responsive breakpoints,' claims shocked observer.",
      relatedLinks: [
        "/news/fashion-industry-adopts-css",
        "/news/responsive-haircuts-trending",
        "/news/dark-mode-sunglasses-patent"
      ]
    },
    {
      url: "/news/mongodb-monthly",
      title: "Database Queries So Efficient, MongoDB Offers to Pay HIM",
      description: "Database Weekly - Unprecedented query optimization causes MongoDB to question their business model. 'Our servers are running too efficiently, it's scary,' admits CTO.",
      relatedLinks: [
        "/news/database-energy-surplus-problem",
        "/news/mongodb-reverse-billing-system",
        "/news/sql-vs-nosql-peace-treaty"
      ]
    },
    {
      url: "/news/typescript-tribune",
      title: "TypeScript Code So Type-Safe, Compiler Starts Giving Life Advice",
      description: "TypeScript Today - Royston's interfaces become so precise that tsc begins offering relationship counseling. 'Your code is more stable than my marriage,' reports anonymous developer.",
      relatedLinks: [
        "/news/typescript-therapy-certification",
        "/news/compiler-errors-self-help-book",
        "/news/any-type-banned-worldwide"
      ]
    }
  ];

  const getSearchResults = () => {
    switch (query) {
      case 'images':
        return getImageResults();
      case 'videos':
        return getVideoResults();
      case 'news':
        return getNewsResults();
      case 'all':
      default:
        return getAllResults();
    }
  };

  const searchResults = getSearchResults();
  const resultCount = searchResults.length;
  const searchTerm = `Allen Royston ${query === 'all' ? 'Full Stack Developer' : query}`;

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-[#202124] text-[#e8eaed]' 
        : 'bg-white text-[#3c4043]'
    }`}>
      {/* Google-style header */}
      <SearchHeader 
        isDarkMode={isDarkMode} 
        searchTerm={searchTerm} 
        toggleDarkMode={toggleDarkMode} 
        query={query} 
      />

      {/* Search results */}
      <main className="px-6 py-6 max-w-4xl">
        <div className={`text-sm mb-4 ${
          isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'
        }`}>
          About {resultCount} results (0.{Math.floor(Math.random() * 9) + 1}{Math.floor(Math.random() * 9)} seconds)
        </div>

        <div className="space-y-6">
          {searchResults.map((result, index) => (
            <div key={index} className="group">
              <div className="flex items-center mb-1">
                <div className="w-4 h-4 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
                <div className={`text-sm truncate ${
                  isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'
                }`}>
                  {result.url}
                </div>
              </div>
              
              <h3 className="mb-1">
                <a 
                  href={result.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-xl hover:underline ${
                    isDarkMode ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
                  }`}
                >
                  {result.title}
                </a>
              </h3>
              
              <p className={`text-sm leading-relaxed mb-2 ${
                isDarkMode ? 'text-[#bdc1c6]' : 'text-[#4d5156]'
              }`}>
                {result.description}
              </p>

              {/* Related Links for News Articles */}
              {query === 'news' && result.relatedLinks && (
                <div className={`text-xs mt-2 ${
                  isDarkMode ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
                }`}>
                  <span className={`${isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'}`}>
                    Related: 
                  </span>
                  {result.relatedLinks?.map((link: string, linkIndex: number) => (
                    <span key={linkIndex}>
                      <a href={link} className="hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        {link.replace('/news/', '').replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                      </a>
                      {linkIndex < (result.relatedLinks?.length || 0) - 1 && ' · '}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}