import React, { useRef, useEffect } from "react";

// 🎯 CONTROL SCROLL SPEED HERE (lower = faster)
const SCROLL_SPEED_SECONDS = 20; // <-- change this to 10, 30, etc. as needed

const dummyLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Adobe_Systems_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Meta_Platforms_Logo.svg",
];

const Carousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="w-full bg-white py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our <span className="text-blue-600">Clients</span>
      </h2>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-10 whitespace-nowrap"
          ref={scrollRef}
          style={{
            animation: `scrollLeft ${SCROLL_SPEED_SECONDS}s linear infinite`,
            willChange: "transform",
          }}
        >
          {[...dummyLogos, ...dummyLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-20">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fixed: Removed jsx prop */}
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Carousel;
