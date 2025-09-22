import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/data/articles";

const Home = () => {
  const featuredArticles = getAllArticles().slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Grow Your Business with 
              <span className="block text-primary">Digital Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Expert strategies, proven results. Discover the latest digital marketing insights 
              that help businesses thrive in today's competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/articles">Explore Articles</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with our latest insights on digital marketing trends, strategies, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link 
                      to={`/articles/${article.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>By {article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/articles">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cover all aspects of digital marketing to help your business succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Search Engine Optimization",
                description: "Improve your website's visibility and drive organic traffic with proven SEO strategies.",
                icon: "🔍"
              },
              {
                title: "Social Media Marketing",
                description: "Build engaged communities and drive conversions through strategic social media campaigns.",
                icon: "📱"
              },
              {
                title: "Content Marketing",
                description: "Create compelling content that attracts, engages, and converts your target audience.",
                icon: "✍️"
              },
              {
                title: "Email Marketing",
                description: "Nurture leads and retain customers with personalized email marketing campaigns.",
                icon: "📧"
              },
              {
                title: "PPC Advertising",
                description: "Maximize ROI with data-driven pay-per-click advertising strategies.",
                icon: "🎯"
              },
              {
                title: "Analytics & Tracking",
                description: "Make informed decisions with comprehensive analytics and performance tracking.",
                icon: "📊"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;