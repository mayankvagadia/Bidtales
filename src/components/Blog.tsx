import React from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readingTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Explore the latest trends and predictions for web development in 2025. From AI integration to new frameworks...",
    author: "John Doe",
    date: "June 7, 2025",
    image: "https://images.unsplash.com/photo-1551006917-3b4c078c47c9",
    category: "Web Development",
    readingTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how to design and implement microservices architecture for your next big project...",
    author: "Jane Smith",
    date: "June 5, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    category: "Architecture",
    readingTime: "8 min read",
  },
  {
    id: 3,
    title: "Best Practices for Mobile App Optimization",
    excerpt: "Discover proven techniques to optimize your mobile application's performance and user experience...",
    author: "Mike Johnson",
    date: "June 3, 2025",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    category: "Mobile Development",
    readingTime: "6 min read",
  },
  {
    id: 4,
    title: "Securing Your Enterprise Application",
    excerpt: "A comprehensive guide to implementing robust security measures in enterprise applications...",
    author: "Sarah Williams",
    date: "June 1, 2025",
    image: "https://images.unsplash.com/photo-1551006917-3b4c078c47c9",
    category: "Security",
    readingTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, tutorials, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-24">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View All Posts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
