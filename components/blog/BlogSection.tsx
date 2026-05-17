export default function BlogSection() {
  const blogPosts = [
    {
      title: "Getting Started with Modern Web Development",
      excerpt: "Explore the latest trends and best practices in modern web development, from frameworks to deployment strategies.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Learn how to design and build applications that can grow with your user base and business requirements.",
      date: "February 28, 2024", 
      readTime: "8 min read"
    },
    {
      title: "The Future of Remote Work",
      excerpt: "Insights on how remote work is evolving and what it means for developers and teams in the coming years.",
      date: "February 10, 2024",
      readTime: "6 min read"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Thoughts, insights, and experiences from my journey in technology and development. 
            <span className="block text-sm mt-2 text-blue-600">Powered by Sanity CMS (coming soon)</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}
