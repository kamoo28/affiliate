import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function TermsOfService() {
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
            Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using EcommerceExperts services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                EcommerceExperts provides digital marketing and e-commerce services including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Influencer Marketing campaigns</li>
                <li>SEO Optimization services</li>
                <li>Amazon & Flipkart listing management</li>
                <li>E-commerce growth strategies</li>
                <li>Digital marketing consultancy</li>
                <li>Content creation and social media management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As our client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond to our requests in a timely manner</li>
                <li>Make payments according to agreed terms</li>
                <li>Comply with platform policies (Amazon, Flipkart, etc.)</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Payments are due as per the agreed schedule</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All prices are in Indian Rupees (INR) unless specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, strategies, and materials created by EcommerceExperts remain our intellectual property unless explicitly transferred. Clients retain ownership of their brand assets and content provided to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                EcommerceExperts shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with 30 days written notice. Upon termination, all outstanding payments become due immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="bg-secondary/50 p-4 rounded-lg mt-4">
                <p className="text-foreground font-medium">Email: legal@ecommerceexperts.com</p>
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