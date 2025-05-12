import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageSrc: string;
  slug: string;
};

type Category = {
  id: string;
  name: string;
};

interface BlogSectionProps {
  heading: string;
  subheading: string;
  posts: BlogPost[];
  categories: Category[];
  viewAllLink: string;
}

export function BlogSection({ heading, subheading, posts, categories, viewAllLink }: BlogSectionProps) {
  return (
    <section className="py-24 bg-ernest-beige">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-ernest-teal uppercase font-medium tracking-wider mb-2">Blog</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ernest-navy mb-4">{heading}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => {
            // Find the category object that matches the post's category ID
            const category = categories.find((cat) => cat.id === post.category);

            return (
              <div key={post.id} className="group">
                {/* Blog Post Image */}
                <div className="aspect-[3/2] rounded-lg overflow-hidden bg-gray-200 mb-4 relative">
                  {post.imageSrc ? (
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Category Label */}
                <div className="mb-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-ernest-coral">
                    {category?.name || "Uncategorized"}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-ernest-teal transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Post Excerpt */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Author and Reading Time */}
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-gray-500">
                    <span className="text-xs font-semibold">{post.author.charAt(0)}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-ernest-navy text-ernest-navy hover:bg-ernest-navy hover:text-white"
          >
            <Link href={viewAllLink}>View all</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
