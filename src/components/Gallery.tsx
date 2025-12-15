import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Career from '../projects/Career.png';
import Jamb from '../projects/Jamb.png';
import Workshop from '../projects/workshop.png';
import Skills from '../projects/skills.png';
import Makabarta from '../projects/makabarta.png';
import Wells from '../projects/wells.png';
import Video from '../VIDEO-2025-12-14-15-22-49.mp4';

interface GalleryImage {
  url?: string;
  caption: string;
  type: 'image' | 'video';
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      url: Career,
      caption: 'Career Guidance for Students',
      type: 'image'
    },
    {
      url: Workshop,
      caption: 'SSCE/JAMB Success Workshop',
      type: 'image'
    },
    {
      url: Jamb,
      caption: 'JAMB Forms Distribution',
      type: 'image'
    },
    {
      url: Skills,
      caption: 'Skills Acquisition Training',
      type: 'image'
    },
    {
      url: Makabarta,
      caption: 'Makabarta Gate Project',
      type: 'image'
    },
    {
      url: Wells,
      caption: 'Community Well Excavation',
      type: 'image'
    },
    {
      url: Video,
      caption: 'Upcoming Video Highlight',
      type: 'video'
    }
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Memories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing moments of growth, connection, and impact from our events and activities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-in fade-in duration-700"
              style={{
                animationDelay: `${index * 50}ms`,
                height: '320px'
              }}
              onClick={() => setSelectedImage(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-500">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      <Play size={40} className="text-white fill-white ml-2" />
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors z-10"
          >
            <X size={28} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight size={28} className="text-white" />
          </button>

          <div className="max-w-5xl w-full animate-in zoom-in duration-200 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {images[selectedImage].type === 'image' ? (
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={images[selectedImage].url}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
              />
            )}
            <p className="text-white text-center text-xl font-semibold mt-6">
              {images[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
