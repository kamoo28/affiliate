import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative hero-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-6 md:mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 md:mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">India's #1 E-commerce Growth Partner</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            <span className="block text-foreground">Your E-commerce &</span>
            <span className="block text-gradient animate-gradient-x">Digital Marketing</span>
            <span className="block text-foreground">Growth Partner</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed">
            We specialize in <span className="font-semibold text-primary">influencer marketing</span>, <span className="font-semibold text-accent">SEO optimization</span>, <span className="font-semibold text-primary">Amazon & Flipkart</span> management, and complete e-commerce solutions to scale your business online!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              BOOST YOUR E-COMMERCE GROWTH
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile-optimized animated text scroll */}
      <div className="absolute bottom-16 md:bottom-20 left-0 w-full">
        <div className="scroll-container overflow-hidden">
          <div className="flex space-x-4 md:space-x-8 animate-scroll-left-mobile md:animate-scroll-left">
            {scrollingServices.map((service, index) => (
              <span key={index} className="text-lg md:text-2xl font-bold text-muted-foreground whitespace-nowrap">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}