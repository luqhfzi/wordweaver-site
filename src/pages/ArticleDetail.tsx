import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { additionalArticles } from "@/data/moreArticles";
import { finalArticles } from "@/data/finalArticles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const allArticles = [...getAllArticles(), ...additionalArticles, ...finalArticles];
  const article = allArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/articles">Back to Articles</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Format content with proper paragraphs and headings
  const formatContent = (content: string) => {
    const lines = content.trim().split('\n');
    return lines.map((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        return <br key={index} />;
      }
      
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
            {trimmed.substring(3)}
          </h2>
        );
      }
      
      if (trimmed.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
            {trimmed.substring(2)}
          </h1>
        );
      }
      
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/articles">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge>{article.category}</Badge>
            <span className="text-sm text-muted-foreground">{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-foreground">
            {formatContent(article.content)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to implement these strategies?</h3>
          <p className="text-muted-foreground mb-4">
            Get personalized guidance for your digital marketing journey.
          </p>
          <Button asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleDetail;