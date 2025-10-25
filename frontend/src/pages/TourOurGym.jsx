import { useState } from 'react';
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TourOurGym() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Gym areas and facilities data
    const gymAreas = [
        {
            title: "Cardio Zone",
            description: "State-of-the-art cardio equipment with entertainment systems and heart rate monitoring.",
            image: "/fitness-computer-desktop-backgrounds-wallpaper-preview.jpg",
            features: ["Treadmills with TV screens", "Elliptical machines", "Stationary bikes", "Rowing machines"]
        },
        {
            title: "Strength Training Area",
            description: "Complete free weights section with professional-grade equipment for all fitness levels.",
            image: "/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg",
            features: ["Full dumbbell rack (5-100 lbs)", "Olympic barbells", "Power racks", "Cable machines"]
        },
        {
            title: "Functional Training Space",
            description: "Open area designed for functional movements, CrossFit, and group training sessions.",
            image: "/pexels-victorfreitas-841130.jpg",
            features: ["Battle ropes", "Kettlebells", "Medicine balls", "TRX suspension trainers"]
        },
        {
            title: "Premium Facilities",
            description: "Luxury amenities to enhance your workout experience and recovery.",
            image: "/gettyimages-1410441629-640x640.jpg",
            features: ["Steam room & sauna", "Massage therapy rooms", "Juice bar", "Premium locker rooms"]
        },
        {
            title: "Group Fitness Studio",
            description: "Spacious studio for yoga, Pilates, Zumba, and other group fitness classes.",
            image: "/360_F_827876077_k0EWo3jSiWZPR8fRgsSbZFT9SkrozNuj.jpg",
            features: ["Mirrored walls", "Sound system", "Yoga mats provided", "Climate controlled"]
        },
        {
            title: "Elite Training Zone",
            description: "Premium area for serious athletes and advanced training programs.",
            image: "/unleash-your-strength-at-4k-gym-mqz006pbxscrtjga.jpg",
            features: ["Olympic lifting platform", "Competition equipment", "Personal training area", "Performance tracking"]
        }
    ];

    const allImages = gymAreas.map(area => area.image);

    const openImageModal = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % allImages.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(allImages[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(allImages[prevIndex]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 mb-6 text-pink-300 hover:text-pink-200 transition"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>

                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Tour Our Premium Gym</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Take a virtual tour of our state-of-the-art fitness facility. Explore our equipment,
                            amenities, and spaces designed to help you achieve your fitness goals.
                        </p>
                    </div>
                </div>
            </div>

            {/* Promotional Video Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Fitness Sharks</h2>
                        <p className="text-xl text-gray-600">Watch our cinematic gym tour video</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Having trouble with the video? <a href="/gym-tour-video.mp4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here to open directly</a>
                        </p>
                    </div>

                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <video
                            className="w-full h-auto"
                            controls
                            preload="metadata"
                            poster="/unleash-your-strength-at-4k-gym-mqz006pbxscrtjga.jpg"
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                            onError={(e) => {
                                console.error('Video error:', e);
                                console.error('Video error details:', e.target.error);
                            }}
                            onLoadStart={() => console.log('Video loading started')}
                            onLoadedData={() => console.log('Video data loaded')}
                            onCanPlay={() => console.log('Video can play')}
                        >
                            <source src="/gym-tour-video.mp4" type="video/mp4" />
                            <p>Your browser does not support the video tag. <a href="/gym-tour-video.mp4" download>Download the video</a></p>
                        </video>

                        {!isVideoPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const video = e.target.closest('.relative').querySelector('video');
                                        if (video) {
                                            video.play().catch(err => console.error('Play failed:', err));
                                        }
                                    }}
                                    className="bg-pink-500 rounded-full p-6 hover:bg-pink-600 transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-300"
                                >
                                    <Play size={48} className="text-white ml-2" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Gym Areas Gallery */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Facilities</h2>
                        <p className="text-xl text-gray-600">Click on any image to view our photo gallery</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gymAreas.map((area, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div
                                    className="relative h-64 cursor-pointer group"
                                    onClick={() => openImageModal(area.image, index)}
                                >
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            console.error('Image failed to load:', area.image);
                                            e.target.style.backgroundColor = '#f3f4f6';
                                            e.target.style.color = '#6b7280';
                                            e.target.style.display = 'flex';
                                            e.target.style.alignItems = 'center';
                                            e.target.style.justifyContent = 'center';
                                            e.target.innerHTML = 'Image not found';
                                        }}
                                        onLoad={() => console.log('Image loaded successfully:', area.image)}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full p-3 transition-all duration-300">
                                            <svg className="w-6 h-6 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                    <p className="text-gray-600 mb-4">{area.description}</p>

                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900">Features:</h4>
                                        <ul className="space-y-1">
                                            {area.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-600">
                                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of members who have transformed their lives at Fitness Sharks.
                        Our world-class facilities and expert trainers are here to help you succeed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/day-pass')}
                            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-full font-bold text-lg transition transform hover:scale-105"
                        >
                            Get Day Pass
                        </button>
                        <button
                            onClick={() => navigate('/monthly')}
                            className="px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 rounded-full font-bold text-lg transition transform hover:scale-105"
                        >
                            View Memberships
                        </button>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-6xl max-h-full">
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 text-white hover:text-pink-300 z-10"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 z-10"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 z-10"
                        >
                            <ChevronRight size={48} />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Gym facility"
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                            <p className="text-lg font-semibold">{gymAreas[currentImageIndex]?.title}</p>
                            <p className="text-sm opacity-75">{currentImageIndex + 1} of {allImages.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}