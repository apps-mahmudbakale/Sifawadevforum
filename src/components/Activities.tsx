import { GraduationCap, Users, HandHeart, Award, Briefcase, BookOpen } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      icon: GraduationCap,
      title: 'Leadership Bootcamp',
      description: 'Intensive training programs designed to develop essential leadership skills, strategic thinking, and decision-making abilities for tomorrow\'s leaders.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Skill Development Workshops',
      description: 'Hands-on workshops covering digital literacy, public speaking, project management, and career readiness to prepare youth for success.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'yellow'
    },
    {
      icon: HandHeart,
      title: 'Community Outreach',
      description: 'Volunteer initiatives and service projects that enable youth to make tangible differences in their local communities and beyond.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'One-on-one mentorship connecting youth with experienced professionals who provide guidance, support, and valuable insights.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'yellow'
    },
    {
      icon: Award,
      title: 'Youth Innovation Challenge',
      description: 'Annual competition where teams develop creative solutions to real-world problems, fostering innovation and entrepreneurial thinking.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Personal Development Series',
      description: 'Monthly seminars on goal setting, emotional intelligence, time management, and other essential life skills for personal growth.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'yellow'
    }
  ];

  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Activities & Programs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of programs designed to empower youth, build skills, and create lasting impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const gradientColor = activity.color === 'blue'
              ? 'from-blue-600 to-blue-700'
              : 'from-yellow-400 to-yellow-500';

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
}
