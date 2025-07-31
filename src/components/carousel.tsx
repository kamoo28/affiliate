import React, { useRef, useEffect } from "react";

// 🎯 MUCH FASTER SCROLL SPEEDS FOR BETTER VISUAL IMPACT
const SCROLL_SPEED_DESKTOP = 8;  // Much faster desktop speed (was 15s)
const SCROLL_SPEED_MOBILE = 6;   // Much faster mobile speed (was 10s)

// High-quality colorful brand logos from reliable sources
const brandLogos = [
  {
    name: "Apple",
    url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    name: "Google",
    url: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Microsoft",
    url: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    name: "Amazon",
    url: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Netflix",
    url: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    name: "Tesla",
    url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
  },
  {
    name: "Meta",
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Adobe",
    url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg"
  },
  {
    name: "Spotify",
    url: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    name: "Uber",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop&auto=format",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg"
  }
];

const Carousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.classList.add("cursor-grabbing");
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollSpeed = isMobile ? SCROLL_SPEED_MOBILE : SCROLL_SPEED_DESKTOP;

  return (
    <section className="w-full bg-gradient-to-r from-background via-secondary/30 to-background py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-foreground">
          Trusted by <span className="text-gradient">Leading Brands</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Enhanced gradient masks for smoother edges */}
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
          
          <div
            className="flex gap-6 md:gap-10 whitespace-nowrap cursor-grab active:cursor-grabbing"
            ref={scrollRef}
            style={{
              animation: `scrollLeft ${scrollSpeed}s linear infinite`,
              willChange: "transform",
            }}
          >
            {/* Triple the logos for seamless loop */}
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-28 h-14 md:w-48 md:h-24 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-gray-100"
              >
                <img
                  src={brand.url}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain p-3 md:p-4 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to SVG logo if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = brand.fallback;
                    target.className = "w-full h-full object-contain p-3 md:p-4 filter grayscale-0 transition-all duration-300 group-hover:scale-110";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>98% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>50M+ Revenue Generated</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        /* Pause animation on hover for better UX */
        .cursor-grabbing {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Carousel;