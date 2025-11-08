import { Target, Users, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: 'Leadership',
      description: 'Developing strong, ethical leaders who inspire positive change in their communities.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections and fostering collaboration among youth from diverse backgrounds.',
      color: 'yellow'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encouraging creative thinking and innovative solutions to contemporary challenges.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'Providing tools, resources, and opportunities for personal and collective growth.',
      color: 'yellow'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              The Youth Development Forum was founded in 2020 with a singular vision: to create a dynamic and inclusive space where young people
              from all walks of life can discover their potential, develop essential skills, and become active contributors to society. Our journey
              began with a small group of dedicated individuals who believed in the power of youth to transform communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              Since our inception, we've grown into a thriving community of over 1,000 passionate individuals committed to
              personal excellence and social impact. Through our comprehensive workshops, one-on-one mentorship programs, and grassroots community initiatives,
              we empower youth to dream big and achieve even bigger. Our programs have touched lives across multiple regions, creating ripples of positive change
              that extend far beyond our immediate community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              We pride ourselves on creating an environment where innovation meets purpose, where leadership skills are honed through real-world experiences,
              and where lasting friendships are forged. Our alumni network continues to grow, with many of our past participants now leading successful
              initiatives and organizations of their own.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our mission is to cultivate the next generation of leaders, innovators, and changemakers who will
              shape a brighter future for all. Through continuous learning, mentorship, and hands-on experience,
              we're committed to empowering youth with the tools they need to make meaningful contributions to their
              communities and beyond.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                To cultivate a thriving, forward-thinking Sifawa community united in peace and progress. 
                We achieve this through education, empowerment, innovation and a collective commitment 
                to sustainable development.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                To empower and unite the Sifawa community by providing quality education, fostering 
                social cohesion and cultural pride, expanding economic opportunities, and ensuring 
                peace and security. Through innovation and sustainable practices, we strive to create 
                an environment where every individual can learn, grow and contribute to a peaceful 
                and progressive future for Sifawa.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These guiding principles shape everything we do and inspire our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            const bgColor = value.color === 'blue' ? 'bg-blue-500' : 'bg-yellow-400';
            const borderColor = value.color === 'blue' ? 'border-blue-100' : 'border-yellow-100';
            const hoverBg = value.color === 'blue' ? 'hover:bg-blue-50' : 'hover:bg-yellow-50';

            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border-2 ${borderColor} ${hoverBg} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom duration-700`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-justify">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
