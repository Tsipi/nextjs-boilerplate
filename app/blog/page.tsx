import Image from "next/image";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Blog</h1>
            <div className="flex items-center space-x-4">
              <nav className="flex space-x-4">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
                <a href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">Blog</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              </nav>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src="/next.svg"
              alt="Featured post"
              fill
              className="object-contain dark:invert"
            />
          </div>
          <div className="p-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">Featured Post</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              The Future of Web Development
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Exploring the latest trends and technologies shaping the future of web development...
            </p>
            <a href="#" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
              Read more →
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/vercel.svg"
                alt="Blog post"
                fill
                className="object-contain dark:invert"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Getting Started with Next.js
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                A comprehensive guide to building modern web applications with Next.js...
              </p>
              <a href="#" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                Read more →
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/globe.svg"
                alt="Blog post"
                fill
                className="object-contain dark:invert"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                React Best Practices
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Essential tips and tricks for writing clean and maintainable React code...
              </p>
              <a href="#" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                Read more →
              </a>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/window.svg"
                alt="Blog post"
                fill
                className="object-contain dark:invert"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                TypeScript for Beginners
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Learn how to add type safety to your JavaScript applications...
              </p>
              <a href="#" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                Read more →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © 2024 My Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 