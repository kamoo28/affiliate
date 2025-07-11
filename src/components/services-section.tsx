import { Users, Search, ShoppingCart, Store, TrendingUp, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with top influencers and content creators to amplify your brand reach. We manage campaigns from strategy to execution across all social platforms.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with our comprehensive SEO strategies. We optimize your website, content, and technical structure for maximum visibility.",
    },
    {
      icon: ShoppingCart,
      title: "Amazon Listing Optimization",
      description: "Maximize your Amazon sales with optimized listings, A+ content, PPC campaigns, and inventory management to boost your marketplace presence.",
    },
    {
      icon: Store,
      title: "Flipkart & E-commerce Management",
      description: "Complete marketplace management for Flipkart, Myntra, and other platforms. We handle listings, promotions, and customer engagement.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Growth",
      description: "Accelerate your online growth with data-driven marketing strategies, conversion optimization, and performance tracking across all channels.",
    },
    {
      icon: Star,
      title: "Brand & Content Strategy",
      description: "Build a compelling brand presence with strategic content creation, social media management, and reputation enhancement services.",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Our <span className="text-gradient">E-commerce Solutions</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            From influencer partnerships to marketplace optimization, we offer comprehensive digital marketing services to grow your online business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card card-hover p-8 rounded-xl transition-all duration-1000 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <service.icon className="text-primary h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors group">
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
