import { ArrowRight, Award, Users, Target } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "98%", label: "Success Rate" },
    { icon: Target, number: "50M+", label: "Revenue Generated" },
  ];

  return (
    <section id="about" ref={ref} className="py-12 md:py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 md:mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What defines us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">
            We're <span className="text-gradient">e-commerce experts</span> at heart and <span className="text-gradient">growth hackers</span> by nature.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              We're e-commerce specialists at heart, SEO experts by design, marketplace optimizers in practice, and growth-focused at our core.
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              We're on a mission to help businesses dominate the digital marketplace. From Amazon listing optimization to influencer marketing campaigns, we combine data-driven strategies with creative excellence to boost your online presence and drive measurable growth across all major e-commerce platforms.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 md:p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="inline-flex items-center text-primary hover:text-accent font-semibold text-base md:text-lg transition-colors group">
              Explore our approach
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern creative agency workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}