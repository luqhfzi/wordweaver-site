import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Effective Date:</strong> March 1, 2024<br />
            <strong>Last Updated:</strong> March 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              Welcome to DigitalGrow. These Terms and Conditions ("Terms") govern your use of our website, 
              services, and content. By accessing or using our website, you agree to be bound by these Terms. 
              If you do not agree with any part of these Terms, you must not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p className="mb-4">
              DigitalGrow provides digital marketing education, resources, and consulting services including 
              but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Educational articles and blog content</li>
              <li>Digital marketing resources and guides</li>
              <li>Consulting and advisory services</li>
              <li>Webinars and educational events</li>
              <li>Newsletter and email communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            
            <h3 className="text-xl font-medium mb-3">3.1 Acceptable Use</h3>
            <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful, threatening, or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for spam or unsolicited communications</li>
              <li>Reproduce, distribute, or create derivative works without permission</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.2 Account Security</h3>
            <p className="mb-4">
              If you create an account with us, you are responsible for maintaining the confidentiality of your 
              account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-medium mb-3">4.1 Our Content</h3>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property 
              of DigitalGrow or its licensors and is protected by copyright and other intellectual property laws.
            </p>

            <h3 className="text-xl font-medium mb-3">4.2 Limited License</h3>
            <p className="mb-4">
              We grant you a limited, non-exclusive, non-transferable license to access and use our content 
              for personal or internal business purposes. This license does not permit you to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sell, rent, lease, or sublicense our content</li>
              <li>Reproduce content for commercial purposes without permission</li>
              <li>Modify or create derivative works based on our content</li>
              <li>Reverse engineer any software or systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
              of our services, to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-medium mb-3">6.1 Service Availability</h3>
            <p className="mb-4">
              We strive to provide uninterrupted access to our services, but we do not guarantee that our 
              website will be available at all times. We may suspend or discontinue services for maintenance, 
              updates, or other reasons.
            </p>

            <h3 className="text-xl font-medium mb-3">6.2 Content Accuracy</h3>
            <p className="mb-4">
              While we make every effort to provide accurate and up-to-date information, we do not warrant 
              the completeness, accuracy, or reliability of any content on our website. You use our content 
              at your own risk.
            </p>

            <h3 className="text-xl font-medium mb-3">6.3 No Professional Advice</h3>
            <p className="mb-4">
              Our content is for educational and informational purposes only and should not be considered 
              as professional advice. You should consult with qualified professionals for advice specific 
              to your situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, DigitalGrow shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to loss 
              of profits, data, or business opportunities, arising from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless DigitalGrow and its employees, officers, 
              directors, and agents from any claims, losses, damages, liabilities, and expenses arising 
              from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, 
              for any reason, including if you breach these Terms. Upon termination, your right to use 
              our services will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links and Services</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services. We are not responsible 
              for the content, privacy practices, or terms of use of these external sites. Your use of 
              third-party websites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material 
              changes by posting the updated Terms on our website and updating the "Last Updated" date. 
              Your continued use of our services after changes constitute acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, without regard to its conflict of law provisions. Any disputes arising from these 
              Terms or your use of our services shall be resolved through binding arbitration in San Francisco, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p><strong>DigitalGrow</strong></p>
              <p>Email: legal@digitalgrow.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Business Ave, Suite 100, San Francisco, CA 94102</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining 
              provisions will remain in full force and effect. The unenforceable provision will be 
              replaced with an enforceable provision that most closely matches the intent of the original provision.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;