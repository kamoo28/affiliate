import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CookiesPolicy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-black text-gradient mb-4">
            Cookies Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: January 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                EcommerceExperts uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To ensure our website functions properly</li>
                <li>To analyze how visitors use our website</li>
                <li>To remember your preferences and settings</li>
                <li>To provide personalized content and advertisements</li>
                <li>To improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you such as setting privacy preferences or filling in forms.
                  </p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance.
                  </p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                  </p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may also use third-party services that set cookies on our website, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing content</li>
                <li>Marketing and advertising partners</li>
                <li>Customer support tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
                <li>Opt-out tools: Many advertising networks provide opt-out tools</li>
                <li>Privacy settings: Adjust your privacy settings on social media platforms</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-secondary/50 p-4 rounded-lg mt-4">
                <p className="text-foreground font-medium">Email: privacy@ecommerceexperts.com</p>
                <p className="text-foreground font-medium">Phone: +91 98765 43210</p>
                <p className="text-foreground font-medium">Address: Andheri East, Mumbai, Maharashtra, India</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}