import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function PortfolioSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const portfolioItems = [
    {
      title: "Fashion Brand Amazon Growth",
      description: "Achieved 300% sales increase through optimized listings and influencer partnerships",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Tech Startup SEO Campaign",
      description: "Ranked #1 for 50+ keywords, driving 500% organic traffic growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Beauty Brand Influencer Strategy",
      description: "Generated 50M+ impressions with micro and macro influencer campaigns",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Home Decor Flipkart Success",
      description: "Became top-selling brand in category with strategic marketplace optimization",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Food Brand Multi-Platform Growth",
      description: "Scaled from startup to ₹10Cr revenue across Amazon, Flipkart, and direct sales",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Electronics Brand Social Commerce",
      description: "Integrated influencer marketing with e-commerce for 400% ROI improvement",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
  ];

  return (
    <section id="work" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Our Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped brands grow their online presence and boost sales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item bg-background rounded-xl overflow-hidden transition-all duration-1000 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <a href="#" className="text-primary hover:text-accent font-semibold transition-colors">
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
}
