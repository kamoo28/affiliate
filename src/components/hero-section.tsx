import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollingServices = [
    "influencer marketing",
    "seo optimization",
    "amazon listing",
    "flipkart management",
    "e-commerce growth",
    "digital marketing",
    "content creation",
    "social media",
    "marketplace optimization",
    "brand strategy",
  ];

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative hero-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-foreground">Your E-commerce &</span>
            <span className="block text-gradient">Digital Marketing</span>
            <span className="block text-foreground">Growth Partner</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We specialize in influencer marketing, SEO, Amazon & Flipkart optimization, and complete e-commerce solutions to scale your business online!
          </p>
          <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            BOOST YOUR E-COMMERCE GROWTH
          </Button>
        </div>
      </div>
      
      {/* Animated Text Scroll */}
      <div className="absolute bottom-20 left-0 w-full">
        <div className="scroll-container overflow-hidden">
          <div className="flex space-x-8 animate-scroll-left">
            {scrollingServices.map((service, index) => (
              <span key={index} className="text-2xl font-bold text-muted-foreground whitespace-nowrap">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
