import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const portfolioItems = [
    {
      title: "Fashion Brand Amazon Growth",
      description: "Achieved 300% sales increase through optimized listings and influencer partnerships",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      metrics: { growth: "300%", platform: "Amazon" },
      category: "E-commerce"
    },
    {
      title: "Tech Startup SEO Campaign",
      description: "Ranked #1 for 50+ keywords, driving 500% organic traffic growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      metrics: { growth: "500%", platform: "Google" },
      category: "SEO"
    },
    {
      title: "Beauty Brand Influencer Strategy",
      description: "Generated 50M+ impressions with micro and macro influencer campaigns",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      metrics: { growth: "50M+", platform: "Social Media" },
      category: "Influencer Marketing"
    },
    {
      title: "Home Decor Flipkart Success",
      description: "Became top-selling brand in category with strategic marketplace optimization",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      metrics: { growth: "#1", platform: "Flipkart" },
      category: "Marketplace"
    },
    {
      title: "Food Brand Multi-Platform Growth",
      description: "Scaled from startup to ₹10Cr revenue across Amazon, Flipkart, and direct sales",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      metrics: { growth: "₹10Cr", platform: "Multi-Platform" },
      category: "Growth Strategy"
    },
    {
      title: "Electronics Brand Social Commerce",
      description: "Integrated influencer marketing with e-commerce for 400% ROI improvement",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      metrics: { growth: "400%", platform: "Social Commerce" },
      category: "Digital Marketing"
    },
  ];

  return (
    <section id="work" ref={ref} className="py-12 md:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 md:mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">
            Our Success <span className="text-gradient">Stories</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. See how we've helped brands grow their online presence and boost sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                
                {/* Metrics */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-lg font-bold text-primary">{item.metrics.growth}</div>
                  <div className="text-xs text-muted-foreground">{item.metrics.platform}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <button className="inline-flex items-center text-primary hover:text-accent font-semibold text-sm transition-colors group/btn">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}