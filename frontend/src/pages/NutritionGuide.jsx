import React, { useState } from 'react';
import { ArrowLeft, Search, Clock, Users, Star, Heart, TrendingUp, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NutritionGuide() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMeal, setSelectedMeal] = useState('All');

  const categories = ['All', 'Proteins', 'Carbohydrates', 'Fats', 'Vitamins', 'Minerals', 'Hydration', 'Supplements'];
  const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Pre-Workout', 'Post-Workout'];

  const nutritionTips = [
    {
      id: 1,
      title: 'High Protein Breakfast Ideas',
      category: 'Proteins',
      mealType: 'Breakfast',
      difficulty: 'Easy',
      prepTime: '10 mins',
      rating: 4.8,
      likes: 234,
      image: '🥚',
      description: 'Start your day with protein-rich breakfast options that keep you full and energized.',
      ingredients: ['Eggs', 'Greek Yogurt', 'Oatmeal', 'Nuts', 'Berries'],
      benefits: ['Sustained Energy', 'Muscle Building', 'Weight Management'],
      instructions: [
        'Prepare 2-3 scrambled eggs with spinach',
        'Add 1 cup Greek yogurt with berries',
        'Include a handful of nuts for healthy fats'
      ]
    },
    {
      id: 2,
      title: 'Pre-Workout Nutrition',
      category: 'Carbohydrates',
      mealType: 'Pre-Workout',
      difficulty: 'Easy',
      prepTime: '5 mins',
      rating: 4.6,
      likes: 189,
      image: '🍌',
      description: 'Fuel your workouts with the right nutrients for maximum performance.',
      ingredients: ['Banana', 'Oatmeal', 'Honey', 'Almonds'],
      benefits: ['Energy Boost', 'Better Performance', 'Faster Recovery'],
      instructions: [
        'Eat a banana 30 minutes before workout',
        'Add 1/2 cup oatmeal with honey',
        'Include 10-15 almonds for sustained energy'
      ]
    },
    {
      id: 3,
      title: 'Post-Workout Recovery Meal',
      category: 'Proteins',
      mealType: 'Post-Workout',
      difficulty: 'Medium',
      prepTime: '15 mins',
      rating: 4.9,
      likes: 312,
      image: '🍗',
      description: 'Essential nutrients to help your muscles recover and grow after intense training.',
      ingredients: ['Chicken Breast', 'Sweet Potato', 'Broccoli', 'Quinoa'],
      benefits: ['Muscle Recovery', 'Protein Synthesis', 'Glycogen Replenishment'],
      instructions: [
        'Grill 6oz chicken breast seasoned with herbs',
        'Roast sweet potato and broccoli',
        'Serve with 1 cup cooked quinoa'
      ]
    },
    {
      id: 4,
      title: 'Healthy Snack Options',
      category: 'All',
      mealType: 'Snacks',
      difficulty: 'Easy',
      prepTime: '5 mins',
      rating: 4.7,
      likes: 156,
      image: '🥜',
      description: 'Nutritious snacks to keep you satisfied between meals.',
      ingredients: ['Mixed Nuts', 'Greek Yogurt', 'Apple Slices', 'Hummus'],
      benefits: ['Satiety', 'Nutrient Density', 'Convenience'],
      instructions: [
        'Mix 1/4 cup nuts with dried fruit',
        'Pair apple slices with almond butter',
        'Enjoy Greek yogurt with berries'
      ]
    },
    {
      id: 5,
      title: 'Hydration Strategies',
      category: 'Hydration',
      mealType: 'All',
      difficulty: 'Easy',
      prepTime: '2 mins',
      rating: 4.5,
      likes: 98,
      image: '💧',
      description: 'Stay properly hydrated throughout the day for optimal health and performance.',
      ingredients: ['Water', 'Electrolytes', 'Coconut Water', 'Herbal Tea'],
      benefits: ['Better Performance', 'Improved Focus', 'Healthy Skin'],
      instructions: [
        'Drink 8-10 glasses of water daily',
        'Add electrolytes during intense workouts',
        'Include hydrating foods like watermelon'
      ]
    },
    {
      id: 6,
      title: 'Essential Vitamins & Minerals',
      category: 'Vitamins',
      mealType: 'All',
      difficulty: 'Easy',
      prepTime: '0 mins',
      rating: 4.4,
      likes: 145,
      image: '🥬',
      description: 'Key vitamins and minerals your body needs for optimal function.',
      ingredients: ['Leafy Greens', 'Citrus Fruits', 'Nuts', 'Seeds', 'Fish'],
      benefits: ['Immune Support', 'Bone Health', 'Energy Production'],
      instructions: [
        'Include dark leafy greens daily',
        'Eat citrus fruits for vitamin C',
        'Add nuts and seeds for minerals'
      ]
    }
  ];

  const filteredTips = nutritionTips.filter(tip => {
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesMeal = selectedMeal === 'All' || tip.mealType === selectedMeal;
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMeal && matchesSearch;
  });

  const nutritionStats = [
    { icon: <Apple className="w-8 h-8" />, number: '500+', label: 'Recipes' },
    { icon: <Users className="w-8 h-8" />, number: '10K+', label: 'Success Stories' },
    { icon: <Star className="w-8 h-8" />, number: '4.8★', label: 'Average Rating' },
    { icon: <TrendingUp className="w-8 h-8" />, number: '95%', label: 'Success Rate' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 text-white shadow-2xl bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-pink-400">🦈</span>
            <h1 className="text-2xl font-bold">Nutrition Guide</h1>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-2 font-semibold transition bg-pink-500 rounded-full hover:bg-pink-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-white bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="mx-auto text-center max-w-7xl">
          <Apple className="w-16 h-16 mx-auto mb-4 text-pink-300" />
          <h2 className="mb-4 text-5xl font-extrabold">Complete Nutrition Guide</h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl opacity-90">
            Fuel your fitness journey with expert nutrition advice, meal plans, and healthy recipes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 bg-white">
        <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          {nutritionStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 transition rounded-lg shadow-md bg-slate-50 hover:shadow-xl">
              <div className="mb-3 text-blue-600">{stat.icon}</div>
              <div className="mb-1 text-3xl font-bold text-blue-900">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 mb-8 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="Search nutrition tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search nutrition tips"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-semibold text-gray-700 self-center mr-2">Categories:</span>
            {categories.map((category, idx) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={selectedCategory === category}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Meal Type Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-semibold text-gray-700 self-center mr-2">Meal Types:</span>
            {mealTypes.map((meal, idx) => (
              <button
                key={meal}
                onClick={() => setSelectedMeal(meal)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedMeal === meal
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={selectedMeal === meal}
                aria-label={`Filter by ${meal}`}
              >
                {meal}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="mb-8 text-3xl font-bold text-gray-900">Nutrition Tips & Recipes</h3>
          
          {filteredTips.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-xl text-gray-500">No nutrition tips found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredTips.map((tip) => (
                <div key={tip.id} className="overflow-hidden transition bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{tip.image}</div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{tip.rating}</span>
                      </div>
                    </div>

                    <h4 className="mb-2 text-xl font-bold text-gray-900">{tip.title}</h4>
                    <p className="mb-4 text-gray-600">{tip.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(tip.difficulty)}`}>
                        {tip.difficulty}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                        {tip.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full">
                        {tip.mealType}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tip.prepTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {tip.likes} likes
                      </span>
                    </div>

                    <div className="mb-4">
                      <h5 className="mb-2 text-sm font-semibold text-gray-700">Key Ingredients:</h5>
                      <div className="flex flex-wrap gap-1">
                        {tip.ingredients.slice(0, 3).map((ingredient, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                            {ingredient}
                          </span>
                        ))}
                        {tip.ingredients.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                            +{tip.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="mb-2 text-sm font-semibold text-gray-700">Benefits:</h5>
                      <div className="flex flex-wrap gap-1">
                        {tip.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
                      aria-label={`View full recipe for ${tip.title}`}
                    >
                      View Full Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600">
        <h3 className="mb-4 text-4xl font-bold">Start Your Nutrition Journey</h3>
        <p className="max-w-2xl mx-auto mb-8 text-xl">
          Get personalized meal plans and nutrition advice tailored to your fitness goals.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-4 font-bold text-white transition bg-pink-500 rounded-full hover:bg-pink-600"
            aria-label="Sign up for personalized nutrition plans"
          >
            Get Started Free
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-4 font-bold text-blue-900 transition bg-white rounded-full hover:bg-slate-100"
            aria-label="Login to existing account"
          >
            I already have an account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-white bg-slate-900">
        <div className="mx-auto text-center max-w-7xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-pink-400">🦈</span>
            <span className="text-2xl font-bold">Fitness Sharks</span>
          </div>
          <p className="mb-4 text-gray-400">Fuel your body, fuel your dreams.</p>
          <p className="text-sm text-gray-500">© 2025 Fitness Sharks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
