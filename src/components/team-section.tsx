import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TeamSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const teamMembers = [
    {
      name: "Rohit Sharma",
      role: "Head of E-commerce Strategy",
      description: "Leading marketplace optimization and growth strategies for 200+ brands",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Priya Patel",
      role: "SEO & Content Director",
      description: "Driving organic growth through data-driven SEO and content marketing",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Arjun Gupta",
      role: "Influencer Marketing Lead",
      description: "Building partnerships with 1000+ influencers for maximum brand impact",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Meet Our <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            50+ specialists in e-commerce, SEO, influencer marketing, and marketplace optimization working to scale your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
