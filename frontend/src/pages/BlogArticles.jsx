import React, { useState } from 'react';
import { Calendar, Clock, User, Search, TrendingUp, Heart, MessageCircle, Share2, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BlogArticles() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Nutrition', 'Workouts', 'Mental Health', 'Success Stories', 'Tips & Tricks'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Protein-Rich Foods to Fuel Your Workouts',
      excerpt: 'Discover the best protein sources that will help you build muscle and recover faster after intense training sessions.',
      category: 'Nutrition',
      author: 'Dr. Sarah Mitchell',
      date: 'October 15, 2025',
      readTime: '5 min read',
      image: '🥗',
      likes: 1243,
      comments: 87,
      featured: true,
      content: 'Learn about the top protein-rich foods including chicken, fish, eggs, legumes, and more. We break down the protein content and best preparation methods.'
    },
    {
      id: 2,
      title: 'How I Lost 50 Pounds in 6 Months: A Real Success Story',
      excerpt: 'Emma shares her inspiring weight loss journey and the exact strategies that helped her achieve her fitness goals.',
      category: 'Success Stories',
      author: 'Emma Johnson',
      date: 'October 12, 2025',
      readTime: '8 min read',
      image: '🏃‍♀️',
      likes: 2156,
      comments: 234,
      featured: true,
      content: 'From struggling with obesity to running marathons, Emma details her transformation story with practical tips anyone can follow.'
    },
    {
      id: 3,
      title: 'The Ultimate Beginner Guide to HIIT Training',
      excerpt: 'High-Intensity Interval Training explained: benefits, techniques, and a 4-week starter program for maximum results.',
      category: 'Workouts',
      author: 'Coach Mike Chen',
      date: 'October 10, 2025',
      readTime: '6 min read',
      image: '💪',
      likes: 1876,
      comments: 145,
      featured: false,
      content: 'HIIT training can burn fat faster than traditional cardio. Learn the science behind it and get a complete beginner program.'
    },
    {
      id: 4,
      title: 'Mindfulness and Exercise: The Perfect Combination',
      excerpt: 'How combining meditation with physical activity can enhance your mental health and workout performance.',
      category: 'Mental Health',
      author: 'Dr. Lisa Brown',
      date: 'October 8, 2025',
      readTime: '7 min read',
      image: '🧘',
      likes: 1534,
      comments: 98,
      featured: false,
      content: 'Scientific research shows that mindfulness practices can improve workout focus and reduce exercise-related stress.'
    },
    {
      id: 5,
      title: '5 Common Gym Mistakes You Must Avoid',
      excerpt: "Don't sabotage your progress! Learn about the most common workout mistakes and how to fix them immediately.",
      category: 'Tips & Tricks',
      author: 'Coach Alex Rodriguez',
      date: 'October 5, 2025',
      readTime: '4 min read',
      image: '⚠️',
      likes: 2043,
      comments: 176,
      featured: false,
      content: 'From poor form to overtraining, these mistakes can derail your fitness journey. Here\'s how to avoid them.'
    },
    {
      id: 6,
      title: 'Pre-Workout vs Post-Workout Nutrition: What Really Matters?',
      excerpt: 'Timing your meals around workouts can make or break your results. Here\'s what science says about nutrient timing.',
      category: 'Nutrition',
      author: 'Dr. Sarah Mitchell',
      date: 'October 3, 2025',
      readTime: '6 min read',
      image: '🍎',
      likes: 1687,
      comments: 112,
      featured: false,
      content: 'Optimize your nutrition timing to maximize muscle growth, fat loss, and workout performance with evidence-based strategies.'
    },
    {
      id: 7,
      title: 'Building a Home Gym on a Budget: Complete Guide',
      excerpt: 'You don\'t need expensive equipment to get fit. Here\'s how to create an effective home gym for under $200.',
      category: 'Tips & Tricks',
      author: 'Mark Thompson',
      date: 'October 1, 2025',
      readTime: '5 min read',
      image: '🏠',
      likes: 3210,
      comments: 289,
      featured: true,
      content: 'Essential equipment recommendations, space-saving solutions, and workout routines that require minimal gear.'
    },
    {
      id: 8,
      title: 'The Science of Rest Days: Why Recovery Matters',
      excerpt: 'Rest days aren\'t lazy days. Learn why recovery is crucial for muscle growth and overall fitness progress.',
      category: 'Workouts',
      author: 'Dr. James Wilson',
      date: 'September 28, 2025',
      readTime: '7 min read',
      image: '😴',
      likes: 1456,
      comments: 134,
      featured: false,
      content: 'Understanding muscle recovery, preventing overtraining, and optimizing your rest days for better results.'
    },
    {
      id: 9,
      title: 'Yoga for Athletes: Improve Flexibility and Performance',
      excerpt: 'How incorporating yoga into your training routine can prevent injuries and enhance athletic performance.',
      category: 'Workouts',
      author: 'Maya Patel',
      date: 'September 25, 2025',
      readTime: '6 min read',
      image: '🤸',
      likes: 1789,
      comments: 156,
      featured: false,
      content: 'Specific yoga poses for athletes, flexibility routines, and how to integrate yoga with your existing workout schedule.'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryColor = (category) => {
    const colors = {
      'Nutrition': 'bg-green-100 text-green-800',
      'Workouts': 'bg-blue-100 text-blue-800',
      'Mental Health': 'bg-purple-100 text-purple-800',
      'Success Stories': 'bg-pink-100 text-pink-800',
      'Tips & Tricks': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 text-white shadow-2xl bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-pink-400">🦈</span>
            <h1 className="text-2xl font-bold">Fitness Sharks Blog</h1>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 font-semibold transition bg-pink-500 rounded-full hover:bg-pink-600"
          >
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-white bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="mx-auto text-center max-w-7xl">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-pink-400" />
          <h2 className="mb-4 text-5xl font-extrabold">Fitness Blog & Articles</h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl opacity-90">
            Expert advice, success stories, and the latest fitness trends to keep you motivated and informed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 pl-12 pr-4 font-medium text-gray-900 rounded-full focus:outline-none focus:ring-4 focus:ring-pink-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky z-40 px-6 py-8 bg-white shadow-md top-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 pb-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase() === 'all' ? 'all' : category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  (selectedCategory === 'all' && category === 'All') || selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <h3 className="text-3xl font-bold text-gray-900">Featured Articles</h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map(post => (
                <div key={post.id} className="overflow-hidden transition transform bg-white shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center justify-center h-48 text-white bg-gradient-to-r from-pink-500 to-purple-500">
                    <div className="text-8xl">{post.image}</div>
                  </div>
                  <div className="p-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <h4 className="mt-4 mb-2 text-xl font-bold text-gray-900">{post.title}</h4>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <button className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                      Read Article
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-8 text-3xl font-bold text-gray-900">
            {searchTerm ? 'Search Results' : selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h3>

          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-xl text-gray-500">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map(post => (
                <div key={post.id} className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white min-h-[250px]">
                      <div className="text-9xl">{post.image}</div>
                    </div>
                    
                    <div className="p-8 md:w-2/3">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h4 className="mb-3 text-2xl font-bold text-gray-900">{post.title}</h4>
                      <p className="mb-4 leading-relaxed text-gray-600">{post.excerpt}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-gray-600">
                          <button className="flex items-center gap-2 transition hover:text-pink-500">
                            <Heart className="w-5 h-5" />
                            <span className="font-semibold">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 transition hover:text-blue-500">
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-semibold">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 transition hover:text-green-500">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>

                        <button className="px-6 py-2 font-semibold text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 py-16 text-white bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-4xl font-bold">Never Miss an Article</h3>
          <p className="mb-8 text-xl opacity-90">Subscribe to our newsletter for weekly fitness tips and exclusive content.</p>
          <div className="flex flex-col max-w-2xl gap-4 mx-auto sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 font-medium text-gray-900 rounded-full focus:outline-none"
            />
            <button className="px-8 py-4 font-bold text-white transition bg-pink-500 rounded-full hover:bg-pink-600 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-white bg-slate-900">
        <div className="mx-auto text-center max-w-7xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-pink-400">🦈</span>
            <span className="text-2xl font-bold">Fitness Sharks</span>
          </div>
          <p className="mb-4 text-gray-400">Your source for expert fitness knowledge</p>
          <p className="text-sm text-gray-500">&copy; 2025 Fitness Sharks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}