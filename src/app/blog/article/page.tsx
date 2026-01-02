import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar, Footer } from "@/components/shared";
import { blogArticles } from "@/data/blogArticles";

const BlogArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const article = blogArticles.find((a) => a.id === articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate("/blog")}
              className="bg-[#F5A855] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E09642] transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 px-4 sm:px-6 lg:px-8 pb-16">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-gray-600 hover:text-[#f69052] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </button>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <span className="bg-[#F5A855] text-white px-3 py-1 rounded-full text-xs font-semibold">
                {article.category}
              </span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="font-semibold">By {article.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900 mb-1">Written by {article.author}</p>
                <p>{article.date}</p>
              </div>
              <button
                onClick={() => navigate("/blog")}
                className="bg-[#F5A855] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E09642] transition-colors"
              >
                Read More Articles
              </button>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticlePage;
