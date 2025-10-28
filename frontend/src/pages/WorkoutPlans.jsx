import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function WorkoutPlans() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen font-sans bg-white">
            <Navigation />
            
            {/* Back to Home Button */}
            <div className="px-6 py-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition font-semibold"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="px-6 py-24 text-center text-white bg-gradient-to-r from-blue-600 to-blue-900">
                <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
                    Workout Plans
                </h1>
                <p className="mb-8 text-xl md:text-2xl">
                    Personalized workout routines designed to help you achieve your fitness goals
                </p>
            </section>

            {/* Content Section */}
            <section className="px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                        <div className="text-6xl mb-6">🏋️‍♂️</div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Coming Soon!</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            We're working hard to bring you the best personalized workout plans. 
                            Our expert trainers are creating comprehensive routines for all fitness levels.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="p-6 bg-white rounded-xl shadow-md">
                                <h3 className="font-bold text-blue-900 mb-2">Beginner Plans</h3>
                                <p className="text-gray-600">Perfect for those starting their fitness journey</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-md">
                                <h3 className="font-bold text-blue-900 mb-2">Intermediate Plans</h3>
                                <p className="text-gray-600">Take your fitness to the next level</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-md">
                                <h3 className="font-bold text-blue-900 mb-2">Advanced Plans</h3>
                                <p className="text-gray-600">Challenge yourself with expert routines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-12 text-white bg-slate-900">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-6 text-2xl font-bold text-blue-400">Fitness Sharks</div>
                    <p className="mb-4 text-gray-400">Transform your life, one workout at a time</p>
                    <div className="pt-6 mt-6 text-sm text-gray-500 border-t border-gray-800">
                        © 2025 Fitness Sharks. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}