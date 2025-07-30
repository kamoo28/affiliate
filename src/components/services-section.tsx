import { Users, Search, ShoppingCart, Store, TrendingUp, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with top influencers and content creators to amplify your brand reach. We manage campaigns from strategy to execution across all social platforms.",
      features: ["Micro & Macro Influencers", "Campaign Management", "ROI Tracking"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with our comprehensive SEO strategies. We optimize your website, content, and technical structure for maximum visibility.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"]
    },
    {
      icon: ShoppingCart,
      title: "Amazon Listing Optimization",
      description: "Maximize your Amazon sales with optimized listings, A+ content, PPC campaigns, and inventory management to boost your marketplace presence.",
      features: ["Product Listings", "PPC Management", "A+ Content"]
    },
    {
      icon: Store,
      title: "Flipkart & E-commerce Management",
      description: "Complete marketplace management for Flipkart, Myntra, and other platforms. We handle listings, promotions, and customer engagement.",
      features: ["Multi-platform Management", "Inventory Control", "Sales Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Growth",
      description: "Accelerate your online growth with data-driven marketing strategies, conversion optimization, and performance tracking across all channels.",
      features: ["Growth Hacking", "Conversion Optimization", "Analytics"]
    },
    {
      icon: Star,
      title: "Brand & Content Strategy",
      description: "Build a compelling brand presence with strategic content creation, social media management, and reputation enhancement services.",
      features: ["Brand Development", "Content Creation", "Social Media"]
    },
  ];

  return (
    <section id="services" ref={ref} className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 md:mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">
            Our <span className="text-gradient">E-commerce Solutions</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From influencer partnerships to marketplace optimization, we offer comprehensive digital marketing services to grow your online business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group p-6 md:p-8 rounded-2xl transition-all duration-700 hover:shadow-2xl ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white h-7 w-7 md:h-8 md:w-8" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <button className="inline-flex items-center text-primary hover:text-accent font-semibold text-sm md:text-base transition-colors group/btn">
                  Learn More
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}