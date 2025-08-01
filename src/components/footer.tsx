import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-black text-gradient mb-4 block">EcommerceExperts</span>
            <p className="text-muted-foreground">
              Your E-commerce & Digital Marketing Growth Partner
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => handleNavigation('/#services')} className="hover:text-primary transition-colors text-left">Influencer Marketing</button></li>
              <li><button onClick={() => handleNavigation('/#services')} className="hover:text-primary transition-colors text-left">SEO Optimization</button></li>
              <li><button onClick={() => handleNavigation('/#services')} className="hover:text-primary transition-colors text-left">Amazon Listing</button></li>
              <li><button onClick={() => handleNavigation('/#services')} className="hover:text-primary transition-colors text-left">Flipkart Management</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => handleNavigation('/#about')} className="hover:text-primary transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleNavigation('/#contact')} className="hover:text-primary transition-colors text-left">Careers</button></li>
              <li><button onClick={() => handleNavigation('/#work')} className="hover:text-primary transition-colors text-left">Portfolio</button></li>
              <li><button onClick={() => handleNavigation('/#contact')} className="hover:text-primary transition-colors text-left">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => handleNavigation('/privacy-policy')} className="hover:text-primary transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleNavigation('/terms-of-service')} className="hover:text-primary transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => handleNavigation('/cookies-policy')} className="hover:text-primary transition-colors text-left">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 EcommerceExperts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
