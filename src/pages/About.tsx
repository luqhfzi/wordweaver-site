import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigitalGrow</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate digital marketing experts dedicated to helping businesses thrive 
            in the ever-evolving online landscape through strategic guidance and proven methodologies.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At DigitalGrow, we believe that every business deserves to succeed online. Our mission 
              is to democratize digital marketing knowledge by providing comprehensive, actionable 
              insights that businesses of all sizes can implement to drive growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're committed to staying ahead of industry trends, testing new strategies, and 
              sharing our findings with the community through detailed, practical content that 
              delivers real results.
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">What We Stand For</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Transparent, honest marketing practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Data-driven decision making</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Continuous learning and adaptation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Accessible education for all businesses</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Contributors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "SEO Strategist & Content Lead",
                description: "With over 8 years of experience in SEO and content marketing, Sarah has helped hundreds of businesses improve their organic visibility and drive sustainable growth.",
                expertise: ["Technical SEO", "Content Strategy", "Link Building"]
              },
              {
                name: "Mike Chen",
                role: "Social Media Marketing Expert",
                description: "Mike specializes in social media strategy and community building, with a track record of creating viral campaigns and engaged online communities for diverse brands.",
                expertise: ["Social Strategy", "Community Building", "Paid Social"]
              },
              {
                name: "Emma Rodriguez",
                role: "Content Marketing Specialist",
                description: "Emma brings a unique blend of journalism and marketing expertise, creating compelling content that educates audiences while driving business objectives.",
                expertise: ["Content Creation", "Brand Storytelling", "Editorial Strategy"]
              },
              {
                name: "David Kim",
                role: "Email Marketing Consultant",
                description: "David has optimized email campaigns for e-commerce and SaaS companies, consistently achieving above-average open rates and conversion metrics.",
                expertise: ["Email Automation", "List Building", "Performance Optimization"]
              },
              {
                name: "Lisa Martinez",
                role: "PPC Advertising Specialist",
                description: "Lisa manages multi-million dollar advertising budgets and has expertise in Google Ads, Facebook Ads, and emerging advertising platforms.",
                expertise: ["Paid Search", "Campaign Optimization", "ROI Analysis"]
              },
              {
                name: "Alex Thompson",
                role: "Web Design & UX Expert",
                description: "Alex combines technical expertise with design thinking to create websites that not only look great but also convert visitors into customers.",
                expertise: ["UX Design", "Conversion Optimization", "Web Development"]
              }
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Results-Driven",
                description: "Every strategy we share is tested and proven to deliver measurable business results."
              },
              {
                icon: "📚",
                title: "Education First",
                description: "We believe in empowering businesses with knowledge rather than keeping secrets."
              },
              {
                icon: "🔬",
                title: "Data-Informed",
                description: "All our recommendations are backed by data analysis and real-world testing."
              },
              {
                icon: "🤝",
                title: "Community-Focused",
                description: "We're committed to building a supportive community of growth-minded professionals."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're just starting out or looking to scale your existing marketing efforts, 
            we're here to help you succeed with proven strategies and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href="/articles" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Explore Our Articles
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;