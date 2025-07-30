import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
  MessageCircle
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c34f6bba-d42e-4b73-9208-f85cfb3bbdad",
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: "New Contact Message from Website",
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: result.message || "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: "error", message: "An unexpected error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-12 md:py-20 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 md:mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">
            Ready to <span className="text-gradient">Scale Your Business?</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can boost your e-commerce sales, improve your SEO rankings, and connect you with the right influencers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className={`bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/50 shadow-xl transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Send us a message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="c34f6bba-d42e-4b73-9208-f85cfb3bbdad" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-muted-foreground font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="mt-2 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-muted-foreground font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="mt-2 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-muted-foreground font-medium">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-muted-foreground font-medium">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="mt-2 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-muted-foreground font-medium">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="mt-2 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
              
              {status.message && (
                <div className={`text-center mt-4 p-4 rounded-lg font-medium ${
                  status.type === "success" 
                    ? "bg-green-100 text-green-700 border border-green-200" 
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/50 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Mumbai Office</h4>
                    <p className="text-muted-foreground">Andheri East, Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                    <p className="text-muted-foreground">growth@ecommerceexperts.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/50 shadow-xl">
              <h4 className="font-semibold mb-6 text-foreground">Follow us</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-600" },
                  { Icon: Twitter, name: "Twitter", color: "hover:bg-blue-400" },
                  { Icon: Instagram, name: "Instagram", color: "hover:bg-pink-600" },
                  { Icon: Facebook, name: "Facebook", color: "hover:bg-blue-700" }
                ].map(({ Icon, name, color }, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`flex items-center gap-3 p-3 bg-secondary/50 hover:bg-primary text-muted-foreground hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 ${color}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium text-sm">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}