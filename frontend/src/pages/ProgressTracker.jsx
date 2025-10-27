import { useState } from 'react';
import { TrendingUp, Target, Activity, Flame, Zap, Trophy, Plus, Camera, Download, Menu, X, ChevronDown, Award, Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProgressTrackerPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const categories = ['Workout Plans', 'Nutrition Guide', 'Exercise Library', 'Progress Tracker', 'Community Forum', 'Blog Articles'];

    const userStats = {
        currentWeight: 75,
        startWeight: 82,
        goalWeight: 70,
        totalWorkouts: 48,
        weekStreak: 12,
        caloriesBurned: 24500
    };

    const weeklyProgress = [
        { day: 'Mon', calories: 450, duration: 45 },
        { day: 'Tue', calories: 520, duration: 60 },
        { day: 'Wed', calories: 380, duration: 35 },
        { day: 'Thu', calories: 600, duration: 75 },
        { day: 'Fri', calories: 490, duration: 50 },
        { day: 'Sat', calories: 710, duration: 90 },
        { day: 'Sun', calories: 420, duration: 45 }
    ];

    const bodyMeasurements = [
        { part: 'Chest', current: 98, start: 102, goal: 100, unit: 'cm' },
        { part: 'Waist', current: 84, start: 92, goal: 80, unit: 'cm' },
        { part: 'Hips', current: 95, start: 100, goal: 94, unit: 'cm' },
        { part: 'Arms', current: 34, start: 32, goal: 36, unit: 'cm' },
        { part: 'Thighs', current: 58, start: 62, goal: 56, unit: 'cm' },
        { part: 'Calves', current: 38, start: 38, goal: 38, unit: 'cm' }
    ];

    const achievements = [
        { id: 1, title: 'First Workout', description: 'Completed your first workout', icon: '🎯', earned: true, date: 'Jan 15, 2025' },
        { id: 2, title: '7 Day Streak', description: '7 consecutive days of workouts', icon: '🔥', earned: true, date: 'Jan 22, 2025' },
        { id: 3, title: '10 Workouts', description: 'Completed 10 workouts', icon: '💪', earned: true, date: 'Feb 1, 2025' },
        { id: 4, title: '5kg Lost', description: 'Lost 5 kilograms', icon: '⚖️', earned: true, date: 'Feb 10, 2025' },
        { id: 5, title: '30 Day Streak', description: '30 consecutive days of workouts', icon: '🏆', earned: false, date: 'Locked' },
        { id: 6, title: '10kg Lost', description: 'Lose 10 kilograms', icon: '🎖️', earned: false, date: 'Locked' }
    ];

    const workoutHistory = [
        { date: 'Oct 23, 2025', type: 'Cardio', duration: 45, calories: 420, intensity: 'High' },
        { date: 'Oct 22, 2025', type: 'Strength', duration: 60, calories: 380, intensity: 'Medium' },
        { date: 'Oct 21, 2025', type: 'HIIT', duration: 30, calories: 450, intensity: 'High' },
        { date: 'Oct 20, 2025', type: 'Yoga', duration: 50, calories: 180, intensity: 'Low' },
        { date: 'Oct 19, 2025', type: 'Cardio', duration: 40, calories: 400, intensity: 'Medium' }
    ];

    const nutritionLog = [
        { date: 'Today', calories: 1850, protein: 145, carbs: 180, fats: 65, water: 2.5 },
        { date: 'Yesterday', calories: 1920, protein: 150, carbs: 195, fats: 70, water: 2.8 },
        { date: 'Oct 21', calories: 1780, protein: 138, carbs: 175, fats: 62, water: 2.2 }
    ];

    const milestones = [
        { weight: 80, date: 'Jan 30, 2025', status: 'achieved' },
        { weight: 77.5, date: 'Feb 15, 2025', status: 'achieved' },
        { weight: 75, date: 'Oct 23, 2025', status: 'achieved' },
        { weight: 72.5, date: 'Target: Nov 15', status: 'upcoming' },
        { weight: 70, date: 'Goal: Dec 2025', status: 'goal' }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <TrendingUp size={20} /> },
        { id: 'body', label: 'Body Metrics', icon: <Activity size={20} /> },
        { id: 'workouts', label: 'Workouts', icon: <Flame size={20} /> },
        { id: 'nutrition', label: 'Nutrition', icon: <Heart size={20} /> },
        { id: 'achievements', label: 'Achievements', icon: <Trophy size={20} /> }
    ];

    const calculateProgress = (current, start, goal) => {
        const total = Math.abs(start - goal);
        const achieved = Math.abs(start - current);
        return Math.min((achieved / total) * 100, 100);
    };

    const handlePlaceholderClick = () => console.log("Action triggered");

    return (
        <div className="min-h-screen font-sans bg-white">
            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 text-white shadow-2xl bg-gradient-to-r from-blue-700 to-blue-900">
                <div className="flex items-center gap-2 text-2xl font-extrabold tracking-wide">
                    <span className="text-pink-400">🦈</span> Fitness Sharks
                </div>

                <div className="items-center hidden gap-8 text-lg font-medium md:flex">
                    <a href="#features" className="transition duration-300 hover:text-pink-300">Features</a>
                    <a href="#dashboard" className="transition duration-300 hover:text-pink-300">Dashboard</a>
                    <a href="#pricing" className="transition duration-300 hover:text-pink-300">Pricing</a>

                    <div className="relative">
                        <button onClick={() => setMoreDropdownOpen(!moreDropdownOpen)} className="flex items-center gap-1 transition duration-300 hover:text-pink-300">
                            More <ChevronDown size={20} className={`transition-transform ${moreDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>

                        {moreDropdownOpen && (
                            <div className="absolute right-0 w-56 mt-2 overflow-hidden bg-white rounded-lg shadow-2xl top-full">
                                <div className="py-2">
                                    {categories.map((category, idx) => (
                                        <button key={idx} onClick={() => { handlePlaceholderClick(); setMoreDropdownOpen(false); }} className="block w-full px-4 py-2 text-left text-gray-700 transition hover:bg-pink-50 hover:text-pink-600">
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#contact" className="transition duration-300 hover:text-pink-300">Contact</a>
                </div>

                <button onClick={handlePlaceholderClick} className="hidden px-6 py-2 font-bold text-white transition transform bg-pink-500 rounded-full shadow-lg md:block hover:bg-pink-600 hover:scale-105">
                    LOG IN
                </button>

                <button className="p-2 transition rounded-lg md:hidden hover:bg-blue-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} className="text-pink-300" /> : <Menu size={28} className="text-pink-300" />}
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="relative z-40 flex flex-col gap-4 p-4 text-white bg-blue-900 shadow-xl md:hidden">
                    <a href="#features" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#dashboard" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
                    <a href="#pricing" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Pricing</a>

                    <div className="pt-2 border-t border-blue-700">
                        <p className="px-2 mb-2 text-sm font-semibold text-pink-300">More Categories</p>
                        {categories.map((category, idx) => (
                            <button key={idx} onClick={() => { handlePlaceholderClick(); setMobileMenuOpen(false); }} className="block w-full px-2 py-2 text-left transition rounded hover:text-pink-300">
                                {category}
                            </button>
                        ))}
                    </div>

                    <a href="#contact" className="p-2 transition rounded hover:text-pink-300" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <button onClick={() => { setMobileMenuOpen(false); handlePlaceholderClick(); }} className="px-6 py-2 mt-2 font-semibold text-white transition bg-pink-500 rounded-full hover:bg-pink-600">
                        LOG IN
                    </button>
                </div>
            )}

            <main className="px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Back to Home Button */}
                    <div className="mb-8">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition font-semibold"
                        >
                            <ArrowLeft size={20} />
                            Back to Home
                        </button>
                    </div>

                    <div className="mb-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl">
                                <TrendingUp className="text-white" size={48} />
                            </div>
                        </div>
                        <h1 className="mb-4 text-5xl font-extrabold text-blue-900">Progress Tracker</h1>
                        <p className="text-lg text-gray-600">Track your fitness journey and celebrate your achievements</p>
                    </div>

                    <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-lg text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-pink-100">Weight Lost</span>
                                <Target size={24} />
                            </div>
                            <p className="text-4xl font-extrabold">{userStats.startWeight - userStats.currentWeight}kg</p>
                            <p className="text-sm text-pink-100 mt-1">Goal: {userStats.startWeight - userStats.goalWeight}kg</p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-blue-100">Total Workouts</span>
                                <Activity size={24} />
                            </div>
                            <p className="text-4xl font-extrabold">{userStats.totalWorkouts}</p>
                            <p className="text-sm text-blue-100 mt-1">This month</p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-orange-100">Week Streak</span>
                                <Flame size={24} />
                            </div>
                            <p className="text-4xl font-extrabold">{userStats.weekStreak}</p>
                            <p className="text-sm text-orange-100 mt-1">Keep it up!</p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-purple-100">Calories Burned</span>
                                <Zap size={24} />
                            </div>
                            <p className="text-4xl font-extrabold">{(userStats.caloriesBurned / 1000).toFixed(1)}k</p>
                            <p className="text-sm text-purple-100 mt-1">Total</p>
                        </div>
                    </div>

                    {/* Main Content with Sidebar Layout */}
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Main Content Area */}
                        <div className="lg:col-span-2">
                            <div className="mb-8 overflow-hidden bg-white shadow-lg rounded-2xl">
                                <div className="flex overflow-x-auto border-b border-gray-200">
                                    {tabs.map((tab) => (
                                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap transition ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
                                            {tab.icon}
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="p-8">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-8">
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-2xl font-bold text-blue-900">Weight Journey</h3>
                                                    <button onClick={handlePlaceholderClick} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
                                                        <Plus size={16} /> Log Weight
                                                    </button>
                                                </div>
                                                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                                                    <div className="grid gap-6 md:grid-cols-3 mb-6">
                                                        <div className="text-center">
                                                            <p className="text-sm text-gray-600 mb-1">Start Weight</p>
                                                            <p className="text-3xl font-bold text-gray-800">{userStats.startWeight}kg</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-sm text-gray-600 mb-1">Current Weight</p>
                                                            <p className="text-3xl font-bold text-blue-600">{userStats.currentWeight}kg</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-sm text-gray-600 mb-1">Goal Weight</p>
                                                            <p className="text-3xl font-bold text-green-600">{userStats.goalWeight}kg</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-2">
                                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                            <span>Progress</span>
                                                            <span>{calculateProgress(userStats.currentWeight, userStats.startWeight, userStats.goalWeight).toFixed(0)}%</span>
                                                        </div>
                                                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500" style={{ width: `${calculateProgress(userStats.currentWeight, userStats.startWeight, userStats.goalWeight)}%` }} />
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-600 text-center mt-4">Only {userStats.currentWeight - userStats.goalWeight}kg to go! 🎯</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-blue-900 mb-4">This Week Activity</h3>
                                                <div className="p-6 bg-white border border-gray-200 rounded-xl">
                                                    <div className="grid grid-cols-7 gap-2">
                                                        {weeklyProgress.map((day, index) => (
                                                            <div key={index} className="text-center">
                                                                <p className="text-xs font-semibold text-gray-600 mb-2">{day.day}</p>
                                                                <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                                                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-pink-500 to-purple-500" style={{ height: `${(day.calories / 800) * 100}%` }} />
                                                                </div>
                                                                <p className="text-xs font-bold text-gray-700 mt-2">{day.calories}</p>
                                                                <p className="text-xs text-gray-500">{day.duration}min</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Weight Milestones</h3>
                                                <div className="space-y-4">
                                                    {milestones.map((milestone, index) => (
                                                        <div key={index} className={`p-4 rounded-lg border-l-4 ${milestone.status === 'achieved' ? 'bg-green-50 border-green-500' : milestone.status === 'upcoming' ? 'bg-blue-50 border-blue-500' : 'bg-yellow-50 border-yellow-500'}`}>
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center gap-3">
                                                                    {milestone.status === 'achieved' && <Award className="text-green-600" size={24} />}
                                                                    {milestone.status === 'upcoming' && <Target className="text-blue-600" size={24} />}
                                                                    {milestone.status === 'goal' && <Trophy className="text-yellow-600" size={24} />}
                                                                    <div>
                                                                        <p className="font-bold text-gray-800">{milestone.weight}kg</p>
                                                                        <p className="text-sm text-gray-600">{milestone.date}</p>
                                                                    </div>
                                                                </div>
                                                                {milestone.status === 'achieved' && (
                                                                    <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Achieved ✓</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'body' && (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-2xl font-bold text-blue-900">Body Measurements</h3>
                                                <button onClick={handlePlaceholderClick} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
                                                    <Plus size={16} /> Add
                                                </button>
                                            </div>

                                            <div className="grid gap-6 md:grid-cols-2">
                                                {bodyMeasurements.map((measurement, index) => (
                                                    <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition">
                                                        <div className="flex items-center justify-between mb-4">
                                                            <h4 className="text-lg font-bold text-gray-800">{measurement.part}</h4>
                                                            <span className="text-2xl font-bold text-blue-600">{measurement.current}{measurement.unit}</span>
                                                        </div>
                                                        <div className="space-y-2 text-sm">
                                                            <div className="flex justify-between text-gray-600">
                                                                <span>Start: {measurement.start}{measurement.unit}</span>
                                                                <span>Goal: {measurement.goal}{measurement.unit}</span>
                                                            </div>
                                                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${calculateProgress(measurement.current, measurement.start, measurement.goal)}%` }} />
                                                            </div>
                                                            <p className="text-xs text-gray-500 text-right">{calculateProgress(measurement.current, measurement.start, measurement.goal).toFixed(0)}% progress</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                                                <h4 className="text-xl font-bold text-blue-900 mb-4">Progress Photos</h4>
                                                <div className="grid grid-cols-3 gap-4 mb-4">
                                                    {['Jan 2025', 'Feb 2025', 'Mar 2025'].map((month, index) => (
                                                        <div key={index} className="aspect-square bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                                                            <div className="text-center">
                                                                <Camera className="mx-auto text-gray-400 mb-2" size={32} />
                                                                <p className="text-xs text-gray-500">{month}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button onClick={handlePlaceholderClick} className="w-full py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-lg transition">
                                                    <Camera className="inline mr-2" size={18} /> Upload Photo
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'workouts' && (
                                        <div>
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-2xl font-bold text-blue-900">Workout History</h3>
                                                <button onClick={handlePlaceholderClick} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
                                                    <Download size={16} /> Export
                                                </button>
                                            </div>

                                            <div className="space-y-3">
                                                {workoutHistory.map((workout, index) => (
                                                    <div key={index} className="p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition">
                                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                                            <div className="flex items-center gap-4">
                                                                <div className={`p-3 rounded-full ${workout.type === 'Cardio' ? 'bg-pink-100 text-pink-600' : workout.type === 'Strength' ? 'bg-blue-100 text-blue-600' : workout.type === 'HIIT' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                                                                    <Activity size={24} />
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-gray-800">{workout.type}</h4>
                                                                    <p className="text-sm text-gray-500">{workout.date}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <div className="text-right">
                                                                    <p className="text-sm text-gray-500">Duration</p>
                                                                    <p className="font-bold text-gray-800">{workout.duration}m</p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <p className="text-sm text-gray-500">Calories</p>
                                                                    <p className="font-bold text-gray-800">{workout.calories}</p>
                                                                </div>
                                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${workout.intensity === 'High' ? 'bg-red-100 text-red-700' : workout.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                                                    {workout.intensity}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'nutrition' && (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-2xl font-bold text-blue-900">Nutrition Log</h3>
                                                <button onClick={handlePlaceholderClick} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
                                                    <Plus size={16} /> Log Meal
                                                </button>
                                            </div>

                                            {nutritionLog.map((log, index) => (
                                                <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-lg font-bold text-gray-800">{log.date}</h4>
                                                        <span className="text-2xl font-bold text-blue-600">{log.calories} cal</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                        <div className="text-center p-3 bg-pink-50 rounded-lg">
                                                            <p className="text-sm text-gray-600 mb-1">Protein</p>
                                                            <p className="text-xl font-bold text-pink-600">{log.protein}g</p>
                                                        </div>
                                                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                                                            <p className="text-sm text-gray-600 mb-1">Carbs</p>
                                                            <p className="text-xl font-bold text-blue-600">{log.carbs}g</p>
                                                        </div>
                                                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                                                            <p className="text-sm text-gray-600 mb-1">Fats</p>
                                                            <p className="text-xl font-bold text-yellow-600">{log.fats}g</p>
                                                        </div>
                                                        <div className="text-center p-3 bg-cyan-50 rounded-lg">
                                                            <p className="text-sm text-gray-600 mb-1">Water</p>
                                                            <p className="text-xl font-bold text-cyan-600">{log.water}L</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'achievements' && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Your Achievements</h3>
                                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                                {achievements.map((achievement) => (
                                                    <div key={achievement.id} className={`p-6 rounded-xl border-2 transition ${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg' : 'bg-gray-50 border-gray-200 opacity-60'}`}>
                                                        <div className="text-center">
                                                            <div className={`text-6xl mb-3 ${achievement.earned ? '' : 'grayscale'}`}>{achievement.icon}</div>
                                                            <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                                                            <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                                                            {achievement.earned ? (
                                                                <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Earned: {achievement.date}</span>
                                                            ) : (
                                                                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">{achievement.date}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="px-6 py-8 mt-16 text-white bg-slate-900">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">© 2025 Fitness Sharks. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}