// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
// import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// export default function ContactSection() {
//   const { ref, isIntersecting } = useIntersectionObserver();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Form validation
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Simulate form submission
//     console.log("Form submitted:", formData);
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         company: "",
//         message: "",
//       });
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" ref={ref} className="py-20 bg-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
//           <h2 className="text-4xl md:text-5xl font-black mb-8">
//             Ready to <span className="text-gradient">Scale Your Business?</span>
//           </h2>
//           <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
//             Let's discuss how we can boost your e-commerce sales, improve your SEO rankings, and connect you with the right influencers.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className={`bg-background p-8 rounded-xl transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
//             <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="firstName" className="text-muted-foreground">First Name *</Label>
//                   <Input
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="John"
//                     className="mt-2 bg-secondary border-border focus:border-primary"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="lastName" className="text-muted-foreground">Last Name *</Label>
//                   <Input
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Doe"
//                     className="mt-2 bg-secondary border-border focus:border-primary"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label htmlFor="email" className="text-muted-foreground">Email *</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@example.com"
//                   className="mt-2 bg-secondary border-border focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="company" className="text-muted-foreground">Company</Label>
//                 <Input
//                   id="company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   placeholder="Your Company"
//                   className="mt-2 bg-secondary border-border focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="message" className="text-muted-foreground">Message *</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us about your project..."
//                   rows={4}
//                   className="mt-2 bg-secondary border-border focus:border-primary"
//                 />
//               </div>
//               <Button 
//                 type="submit" 
//                 className="w-full bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
//                 disabled={isSubmitted}
//               >
//                 {isSubmitted ? "Message Sent!" : "Send Message"}
//               </Button>
//               {isSubmitted && (
//                 <p className="text-green-600 text-center mt-2">Thank you for your message! We'll get back to you soon.</p>
//               )}
//             </form>
//           </div>
          
//           {/* Contact Info */}
//           <div className={`space-y-8 transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <MapPin className="text-primary h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Mumbai Office</h4>
//                     <p className="text-muted-foreground">Andheri East, Mumbai, Maharashtra, India</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <Phone className="text-primary h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Phone</h4>
//                     <p className="text-muted-foreground">+91 98765 43210</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <Mail className="text-primary h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Email</h4>
//                     <p className="text-muted-foreground">growth@ecommerceexperts.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Follow us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// testing  by chetan with web3 form

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
      console.log("Web3Forms Response:", result);

      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully. We'll get back to you soon!" });
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
    <section id="contact" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to <span className="text-gradient">Scale Your Business?</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Let's discuss how we can boost your e-commerce sales, improve your SEO rankings, and connect you with the right influencers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-background p-8 rounded-xl transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden Input for Web3Forms Access Key (optional but safe) */}
              <input type="hidden" name="access_key" value="c34f6bba-d42e-4b73-9208-f85cfb3bbdad" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-muted-foreground">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="mt-2 bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-muted-foreground">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="mt-2 bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-muted-foreground">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2 bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-muted-foreground">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="mt-2 bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-muted-foreground">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="mt-2 bg-secondary border-border focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {status.message && (
                <p className={`text-center mt-3 font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary h-6 w-6" />
                  <div>
                    <h4 className="font-semibold mb-1">Mumbai Office</h4>
                    <p className="text-muted-foreground">Andheri East, Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary h-6 w-6" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary h-6 w-6" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">growth@ecommerceexperts.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon className="h-5 w-5" />
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
