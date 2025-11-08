import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Empowering the Next Generation of Leaders',
      subtitle: 'Building Tomorrow\'s Leaders Today'
    },
    {
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Building Strong Communities Together',
      subtitle: 'Community Impact'
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Unlocking Your Full Potential',
      subtitle: 'Personal Growth & Development'
    },
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Innovating for a Better Tomorrow',
      subtitle: 'Creative Solutions'
    }
  ];

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoplay, slides.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-3xl">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {slides[currentSlide].subtitle}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl">
              Join a vibrant community of young changemakers dedicated to personal growth,
              community impact, and creating lasting positive change in the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join the Movement</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="absolute -bottom-12 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl inline-block sm:w-auto">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Active Members</p>
                  <p className="text-sm text-gray-600">Growing Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-3 transition-all duration-200 group"
      >
        <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-3 transition-all duration-200 group"
      >
        <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70 w-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
