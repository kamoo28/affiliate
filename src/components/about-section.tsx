import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-primary text-lg font-medium mb-4">What defines us</h3>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            We're <span className="text-gradient">e-commerce experts</span> at heart and <span className="text-gradient">growth hackers</span> by nature.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              We're e-commerce specialists at heart, SEO experts by design, marketplace optimizers in practice, and growth-focused at our core.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're on a mission to help businesses dominate the digital marketplace. From Amazon listing optimization to influencer marketing campaigns, we combine data-driven strategies with creative excellence to boost your online presence and drive measurable growth across all major e-commerce platforms.
            </p>
            <a href="#" className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg transition-colors group">
              Explore our approach
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className={`relative transition-all duration-1000 delay-500 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern creative agency workspace" 
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
