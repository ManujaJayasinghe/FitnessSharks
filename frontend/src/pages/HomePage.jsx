import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// ADD navigateTo as a prop here ✅
export default function HomePage({ navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    { icon: '📊', title: 'Real-time Tracking', desc: 'Monitor your calories, heart rate, and activity in real-time with our advanced analytics.' },
    { icon: '🎯', title: 'Goal Setting', desc: 'Set personalized fitness goals and track your progress every step of the way.' },
    { icon: '💪', title: 'Beginner Friendly', desc: 'Designed specifically for beginners with intuitive controls and easy navigation.' },
    { icon: '🏆', title: 'Achievements', desc: 'Unlock badges and achievements as you hit your fitness milestones.' },
    { icon: '📱', title: 'Mobile Optimized', desc: 'Available on iOS and Android with seamless sync across all devices.' },
    { icon: '👥', title: 'Community Support', desc: 'Connect with thousands of fitness enthusiasts and share your journey.' },
  ];

  const stats = [
    { number: '500K+', label: 'Active Users' },
    { number: '4.8★', label: 'App Rating' },
    { number: '50M+', label: 'Workouts Tracked' },
    { number: '180+', label: 'Countries' },
  ];

  const pricingTiers = [
    { 
      name: 'Free Trial', 
      price: '$0', 
      period: 'for 7 days', 
      features: ['Full Dashboard Access', 'Basic Workout Plans', 'Community Support', 'No Credit Card Required'],
      cta: 'Start Free Trial',
      primary: false
    },
    { 
      name: 'Pro', 
      price: '$9.99', 
      period: 'per month', 
      features: ['All Free Trial Features', 'Unlimited Workout Plans', 'Advanced Analytics', 'Connect HR Monitor', 'Personalized Goal Setting'],
      cta: 'Go Pro Monthly',
      primary: true
    },
    { 
      name: 'Annual Pass', 
      price: '$99.99', 
      period: 'per year (save 17%)', 
      features: ['All Pro Features', 'Priority Support', 'Exclusive Challenges', 'Offline Mode'],
      cta: 'Go Annual',
      primary: false
    },
  ];

  const footerLinks = [
    { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Blog'] },
    { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'License'] },
  ];

  const handlePlaceholderClick = (e) => {
    e.preventDefault();
    console.log("Placeholder button clicked.");
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .hero-title {
          animation: fadeInDown 1s ease-out;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 text-white shadow-2xl bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="flex items-center gap-2 text-2xl font-extrabold tracking-wide">
          <span className="text-pink-400">▶</span> Vidpros
        </div>
        
        <div className="items-center hidden gap-8 text-lg font-medium md:flex">
          <a href="#features" className="transition duration-300 hover:text-pink-300">Features</a>
          <a href="#dashboard" className="transition duration-300 hover:text-pink-300">Dashboard</a>
          <a href="#pricing" className="transition duration-300 hover:text-pink-300">Pricing</a>
          <a href="#contact" className="transition duration-300 hover:text-pink-300">Contact</a>
        </div>

        <button className="hidden px-6 py-2 font-bold text-white transition transform bg-pink-500 rounded-full shadow-lg md:block hover:bg-pink-600 hover:scale-105">
          Download Now
        </button>

        <button 
          className="p-2 transition rounded-lg md:hidden hover:bg-blue-800" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} className="text-pink-300" /> : <Menu size={28} className="text-pink-300" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="relative z-40 flex flex-col gap-4 p-4 text-white bg-blue-900 shadow-xl md:hidden">
          <a href="#features" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#dashboard" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
          <a href="#pricing" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button className="px-6 py-2 mt-2 font-semibold text-white transition bg-pink-500 rounded-full hover:bg-pink-600">
            Download Now
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-6 py-24 text-center text-white bg-gradient-to-r from-blue-600 to-blue-900 md:py-32" style={{ minHeight: '60vh' }}>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl drop-shadow-lg animate-fade-in-down">
          BEST FITNESS APP<br />FOR BEGINNERS
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl md:text-2xl opacity-95">
          Start your fitness journey with Vidpros. Track calories, monitor heart rate, and achieve your goals with ease.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <button className="px-10 py-4 text-xl font-bold text-white transition transform bg-pink-500 rounded-full shadow-2xl hover:bg-pink-600 hover:scale-105">
            Get Started Free
          </button>
          <button className="px-10 py-4 text-xl font-bold text-white transition transform border-2 border-white rounded-full hover:bg-white hover:text-blue-900 hover:scale-105">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Section - THIS IS THE KEY CHANGE ✅ */}
      <section id="features" className="px-6 py-24 bg-slate-50">
        <h2 className="mb-4 text-4xl font-bold text-center text-blue-900 md:text-5xl">Why Choose Vidpros?</h2>
        <p className="mb-16 text-xl text-center text-gray-500">Simple tools for complex goals.</p>
        <div className="grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 transition duration-300 ease-in-out bg-white border-t-4 border-pink-500 shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              onClick={() => {
                // ADD THIS CLICK HANDLER ✅
                if (feature.title === 'Real-time Tracking') {
                  navigateTo('tracking');
                }
              }}
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-blue-900">{feature.title}</h3>
              <p className="leading-relaxed text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="px-6 py-24">
        <div className="grid items-center gap-16 mx-auto lg:grid-cols-2 max-w-7xl">
          <div>
            <span className="block mb-2 text-lg font-semibold tracking-wider text-pink-500 uppercase">Data-Driven Success</span>
            <h2 className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl">Your Personal Fitness Dashboard</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Get insights into your daily calorie intake, heart rate, and activity levels all in one place. Everything you need to know, without the noise.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Our smart algorithm learns your patterns and provides personalized recommendations to help you achieve your fitness goals faster.
            </p>
            <button className="px-8 py-3 text-lg font-semibold text-white transition transform bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:scale-105">
              Explore Analytics
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-800 rounded-3xl p-12 text-center text-white min-h-[400px] flex flex-col items-center justify-center text-2xl font-semibold shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <span className="block mb-4 text-6xl">📈</span>
              Dashboard Preview: Real Data, Real Results [Image of fitness app dashboard]
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 text-white bg-gradient-to-r from-blue-600 to-blue-900">
        <div className="grid max-w-6xl gap-8 mx-auto text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="mb-2 text-5xl font-extrabold text-pink-400 md:text-6xl drop-shadow-md">{stat.number}</div>
              <div className="text-xl font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 bg-slate-50">
        <h2 className="mb-4 text-4xl font-bold text-center text-blue-900 md:text-5xl">Simple Pricing, Powerful Results</h2>
        <p className="mb-16 text-xl text-center text-gray-600">Choose the plan that fits your fitness journey.</p>
        
        <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-3xl shadow-2xl transition transform hover:-translate-y-1 ${tier.primary ? 'border-4 border-pink-500 scale-[1.02]' : 'border border-gray-100'}`}
            >
              <h3 className={`text-3xl font-bold mb-3 ${tier.primary ? 'text-pink-600' : 'text-blue-900'}`}>{tier.name}</h3>
              <p className="mb-6 font-medium text-gray-500">{tier.period}</p>
              
              <div className="mb-8 text-6xl font-extrabold text-blue-900">
                {tier.price}
                <span className="ml-1 text-xl font-medium text-gray-500">{tier.price !== '$0' && '/mo'}</span>
              </div>

              <ul className="mb-10 space-y-4 text-left">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`mr-3 ${tier.primary ? 'text-pink-500' : 'text-green-500'} text-xl`}>✓</span>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-full font-bold text-lg transition transform hover:scale-[1.01] ${
                  tier.primary 
                    ? 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/50' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-16 text-white bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 mb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 text-2xl font-bold tracking-wider text-blue-400">Vidpros</h4>
              <p className="text-gray-400">Your journey to better health starts here. We make fitness simple, accessible, and fun.</p>
              <div className="flex gap-4 mt-4">
                <button 
                  type="button" 
                  onClick={handlePlaceholderClick} 
                  className="p-1 text-xl text-gray-400 transition rounded hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  F
                </button>
                <button 
                  type="button" 
                  onClick={handlePlaceholderClick} 
                  className="p-1 text-xl text-gray-400 transition rounded hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  T
                </button>
                <button 
                  type="button" 
                  onClick={handlePlaceholderClick} 
                  className="p-1 text-xl text-gray-400 transition rounded hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  I
                </button>
              </div>
            </div>
            
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="mb-5 text-xl font-bold text-blue-400">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <button 
                        type="button"
                        onClick={handlePlaceholderClick} 
                        className="w-full text-base text-left text-gray-300 transition rounded-md hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 text-sm text-center text-gray-500 border-t border-gray-700">
            <p>&copy; 2025 Vidpros. All rights reserved. Built with passion and code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}