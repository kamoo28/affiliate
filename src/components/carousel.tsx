import React, { useRef, useEffect } from "react";

// 🎯 MOBILE-OPTIMIZED SCROLL SPEEDS
const SCROLL_SPEED_DESKTOP = 25; // Desktop speed
const SCROLL_SPEED_MOBILE = 15;  // Faster mobile speed

const dummyLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Adobe_Systems_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Meta_Platforms_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
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
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div
            className="flex gap-6 md:gap-10 whitespace-nowrap"
            ref={scrollRef}
            style={{
              animation: `scrollLeft ${scrollSpeed}s linear infinite`,
              willChange: "transform",
            }}
          >
            {[...dummyLogos, ...dummyLogos, ...dummyLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-24 h-12 md:w-40 md:h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-full object-contain p-2 md:p-3 filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
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
      `}</style>
    </section>
  );
};

export default Carousel;